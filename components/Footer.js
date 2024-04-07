import {
	AiOutlineFacebook,
	AiOutlineMail,
	AiOutlineInstagram,
} from "react-icons/ai";
import logo from "../data/logos/main-logo.png";
import "../styles/Footer.css";

function Footer() {
	return (
		<div className="footer" style={{ backgroundColor: "rgba(30,30,30,1)" }}>
			<img src={logo} alt="" className="footer-logo"></img>
			<div className="media-container">
				<a
					className="media-icon"
					href="https://www.facebook.com/groups/146481348826920"
				>
					<AiOutlineFacebook className="media-icon-img" />
				</a>
				<a
					className="media-icon"
					href="https://www.instagram.com/mcgillssmuboxing/"
				>
					<AiOutlineInstagram className="media-icon-img" />
				</a>
				<a
					className="media-icon"
					href="mailto:mcgillboxingclub@ssmu.ca"
				>
					<AiOutlineMail className="media-icon-img" />
				</a>
			</div>
			<div id="copyright">&copy; McGill Student Boxing Club 2022</div>
			<div id="credits">
				Designed & Developed by{" "}
				<a
					id="ozh"
					href="https://github.com/ongzh"
					target="_blank"
					rel="noreferrer"
				>
					OZH
				</a>
			</div>
		</div>
	);
}

export default Footer;
