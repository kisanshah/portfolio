export default function NavItem(props) {
  return (
    <a href={props.href} className="navbar-item">
      {props.text}
    </a>
  );
}
