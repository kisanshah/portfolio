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
        <NavItem text="Home" />
        <NavItem text="About" />
        <NavItem text="TechStack" />
        <NavItem text="Project" />
        <NavItem text="Contact" />
      </div>
    </nav>
  );
}
