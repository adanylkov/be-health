import { Logo } from "./Logo";
import { PrimaryButton } from "../ui/PrimaryButton";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BeHealthContext } from "../../Context";
import { api_path } from "../../utils/api";

const Menu = () => {
	return (
		<ul>
			<li>
				<a href="">O nas</a>
			</li>
			<li>
				<a href="">Kategorie</a>
			</li>
			<li>
				<a href="">Recenzje</a>
			</li>
			<li>
				<a href="">Cennik</a>
			</li>
			<li>
				<a href="">Kontakt</a>
			</li>
		</ul>
	);
};

const LoginLinks = () => {
	return (
		<div className="login-links">
			<Link to={"/login"}>Login</Link>
			<PrimaryButton>
				<Link to={"/register"}>Rejestracja</Link>
			</PrimaryButton>
		</div>
	)
}

const Profile = (props: { imageUrl: string, name: string }) => {
	const {profileImageUrl} = useContext(BeHealthContext)
	return (
		<Link to={"/profile"}>
			<div className="profile">
				<img className="profile--image" src={profileImageUrl} />
				<p>{props.name}</p>
			</div>
		</Link>
	)
}

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { user } = useContext(BeHealthContext)
	const profilePicture = user === undefined ? "" : `${api_path}/Images/${user.profilePicture}`;

	return (
		<nav>
			 <Link to={"/"}>
				<Logo fontSize={20} />
			</Link>
			<div className="nav_container">
				<Menu />
				{user === undefined ? <LoginLinks /> : <Profile imageUrl={profilePicture} name={user.name} />}
			</div>
			<div className="navbar-menu ">
				{toggleMenu ? (
					<RiCloseLine size={36} onClick={() => setToggleMenu(false)} />
				) : (
					<RiMenu3Line size={36} onClick={() => setToggleMenu(true)} />
				)}
				{toggleMenu && (
					<div className="navbar-menu_container drop-down">
						<Menu />
						{user === undefined && <LoginLinks />}
					</div>
				)}
			</div>
		</nav>
	);
};
