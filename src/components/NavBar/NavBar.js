import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
	return (
		<div className="navbar">
			<NavLink to="/" className="nav-links">
				Home
			</NavLink>
			<NavLink to="/test" className="nav-links">
				Test
			</NavLink>
		</div>
	);
}
