import {Image} from 'react-bootstrap';
import banner from "../data/banner.png";
import { useRef, useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';

function Banner() {
    const bannerRef = useRef(null);
    const [bannerHeight, setBannerHeight] = useState(0);

    const handleImageLoad = () => {
        setBannerHeight(bannerRef.current.offsetHeight);
      };
    
      useEffect(() => {
        console.log(bannerHeight);
      }, [bannerHeight]);
    
    return <div id="home" ref={bannerRef}>
        <Image src={banner} style={{backgroundSize: "cover" , minWidth: '100%'}} fluid onLoad={handleImageLoad}/>
        {bannerHeight >0 && <NavigationBar height={bannerHeight}/>}
    </div>;
}

export default Banner;