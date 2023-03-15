import {Image} from 'react-bootstrap';
import banner from "../data/banner.png";
import { useRef, useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';

function Banner() {
    const bannerRef = useRef(null);
    const [bannerHeight, setBannerHeight] = useState(0);

    useEffect (()=>{
        setBannerHeight(bannerRef.current.offsetHeight);
        console.log(bannerHeight);
    })

    return <div id="home" ref={bannerRef}>
        <Image src={banner} style={{backgroundSize: "cover" , minWidth: '100%'}} fluid/>
        <NavigationBar height={bannerHeight}/>
    </div>;
}

export default Banner;