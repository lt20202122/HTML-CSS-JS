from flask import Flask, render_template
import os
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Funktion, um Termine aus der DB zu holen
def get_sessions():
    # Absoluter Pfad zur DB
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(BASE_DIR, "forest_bathing.db")

    conn = sqlite3.connect(db_path)
    c = conn.cursor()

    # Tabelle erstellen, falls sie fehlt
    c.execute('''
        CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY,
            date TEXT,
            start_time TEXT,
            end_time TEXT,
            title TEXT,
            available_slots INTEGER
        )
    ''')

    # Beispiel-Daten einfügen, falls noch keine drin sind
    c.execute("SELECT COUNT(*) FROM sessions")
    if c.fetchone()[0] == 0:
        c.execute('INSERT INTO sessions (date, start_time, end_time, title, available_slots) VALUES (?, ?, ?, ?, ?)',
                  ('2025-09-14', '14:00', '16:00', 'Session 1', 10))
        c.execute('INSERT INTO sessions (date, start_time, end_time, title, available_slots) VALUES (?, ?, ?, ?, ?)',
                  ('2025-09-28', '14:00', '16:00', 'Session 2', 8))
        conn.commit()

    # Termine abfragen
    c.execute("SELECT id, date, start_time, end_time, title, available_slots FROM sessions")
    sessions = c.fetchall()
    conn.close()
    return sessions

# Startseite
@app.route("/")
def index():
    return render_template("index.html")

# Appointments-Seite
@app.route("/appointments")
def appointments():
    sessions = get_sessions()

    # Datum und Titel formatieren, ohne DB zu ändern
    formatted_sessions = []
    for s in sessions:
        session_id = s[0]
        date_str = s[1]
        title = s[4]

        # Datum formatieren (Windows)
        try:
            dt = datetime.strptime(date_str, "%Y-%m-%d")
            formatted_date = dt.strftime("%b %#d, %Y")
        except ValueError:
            formatted_date = date_str

        # Titel anpassen
        if title == "Session 1":
            formatted_title = "Waldbaden -- zwei Stunden"
        elif title == "Session 2":
            formatted_title = "Waldbaden -- zwei Stunden"
        else:
            formatted_title = title  # falls andere Sessions existieren

        # Alle anderen Daten unverändert
        formatted_sessions.append((session_id, formatted_date, s[2], s[3], formatted_title, s[5]))

    return render_template("appointments.html", sessions=formatted_sessions)

@app.route("/admin")
def admin():
    sessions = get_sessions()
    return render_template("admin.html", sessions=sessions)

from flask import request, redirect, url_for

@app.route("/update_slots", methods=["POST"])
def update_slots():
    session_id = request.form["id"]
    slots = request.form["slots"]

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(BASE_DIR, "forest_bathing.db")
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute("UPDATE sessions SET available_slots=? WHERE id=?", (slots, session_id))
    conn.commit()
    conn.close()

    return redirect(url_for("admin"))

from flask import request, Response

def check_auth(username, password):
    return username == "admin" and password == "geheimespasswort"

def authenticate():
    return Response(
        "Login erforderlich", 401,
        {"WWW-Authenticate": 'Basic realm="Login erforderlich"'}
    )

@app.before_request
def require_login():
    if request.path.startswith("/admin") or request.path.startswith("/update_slots"):
        auth = request.authorization
        if not auth or not check_auth(auth.username, auth.password):
            return authenticate()

# Flask-Server starten
if __name__ == "__main__":
    app.run(debug=True)
