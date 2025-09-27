import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout({ children }: any) {
  return (
    <div className = "flex-col">
        <header className="w-screen"><Header /></header>
        <nav><Nav /></nav>
        <main>{ children }</main>
        <footer><Footer /></footer>


    </div>
  );
}
