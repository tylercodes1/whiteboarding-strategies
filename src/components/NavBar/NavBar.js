import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
	return (
		<div className="navbar">
			<div className="dropdown">
				<div>Pages</div>
				<div className="dropdown-content">
					<NavLink to="/" className="nav-links">
						Home
					</NavLink>
					<NavLink to="/test" className="nav-links">
						Test
					</NavLink>
				</div>
			</div>
		</div>
	);
}
