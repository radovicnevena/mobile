import {Link, NavLink} from "react-router-dom";

function Navbar() {
	return (<nav>
		<div className="nav-wrapper container">
			<Link to="/adverts" className="brand-logo">Smartphone adverts</Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><NavLink exact to="/adverts/new" activeClassName={"active"}>New advert</NavLink></li>
				<li><NavLink exact to="/adverts" activeClassName={"active"}>Adverts</NavLink></li>
				<li><NavLink exact to="/buy" activeClassName={"active"}>Buy</NavLink></li>
			</ul>
		</div>
	</nav>);
}

export default Navbar;
