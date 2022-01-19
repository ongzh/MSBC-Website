import {Image } from 'react-bootstrap';
import banner from "../data/banner.png";

function Header() {
    return <div id="home">
        <Image src={banner} style={{backgroundSize: "cover" , minWidth: '100%'}} fluid/>
    </div>;
}

export default Header;