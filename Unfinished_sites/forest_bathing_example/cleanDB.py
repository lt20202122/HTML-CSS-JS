import sqlite3
from datetime import datetime

db_path = "forest_bathing.db"
conn = sqlite3.connect(db_path)
c = conn.cursor()

c.execute("SELECT id, date FROM sessions")
rows = c.fetchall()

for row in rows:
    session_id = row[0]
    date_str = row[1]

    try:
        # Nur umwandeln, wenn Format YYYY-MM-DD
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        new_date_str = dt.strftime("%b %#d, %Y")  # Windows-spezifisch
        c.execute("UPDATE sessions SET date=? WHERE id=?", (new_date_str, session_id))
    except ValueError:
        # Schon formatiert oder anderes Format → überspringen
        pass

conn.commit()
conn.close()
print("Datumsangaben geprüft und ggf. umformatiert!")
