import Logo from "./Logo";
import "./navbar.css";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Logo />
      </div>
      <div className="navbar-right">
        <NavItem text="Home" to="/" />
        <NavItem text="About" to="/about" />
        <NavItem text="TechStack" to="/techstack" />
        <NavItem text="Project" to="/projects" />
        <NavItem text="Contact" to="/contact" />
      </div>
    </nav>
  );
}
