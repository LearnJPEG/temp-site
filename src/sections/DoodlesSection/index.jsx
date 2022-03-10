import { DoodleStyle } from "./style";

export default function DoodlesSection(){
    return(
        <DoodleStyle>
            
            <div className="shape shape-1">
                 <img src="/images/gifs/moon.gif" alt="moon" />
            </div>
            <div className="float-badge">
                <span>EXCLUSIVE PLATFORM PARTNER</span>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-sm-11 px-xxl-0">
                    <div className="image-title-block">
                        <img src="/images/doodles-logo.png" alt="logo" />
                    </div>
                    <div className="text-block">
                        <p>Doodles are a collection of 10,000 NFTs that are made up of hundreds of exciting visual traits designed by Burnt Toast. Hand-drawn Doodles include skellys, cats, aliens, apes and mascots. The Doodles collection also includes dozens of rare heads, costumes, and colorways of the artist's palette.</p>    
                        <p>The Doodles universe is ever-expanding and new experiences like Space Doodles are only available to collectors. While the universe expands, our brand grows, and collectors can expect exclusive access to the latest products, merchandise and events through ownership.</p>
                        <a href="http://doodles.app/" target="_blank" className="btn">BROWSE DOODLES</a>
                    </div>    
                </div>    
            </div>
			<div className="shape shape-2">
                <img src="/images/gifs/doodle_plane.gif" alt="plane" />
            </div>
            <div className="image-slide-wrapper">
                <img src="/images/doodle_grid_characters.png" alt="characters image group" className="desktop-image d-none d-lg-block" />
                <div className="row justify-content-center text-center">
                    <div className="d-lg-none col-md-9 col-sm-11">
                        <div className="mobile-image">
                            <img src="/images/doodle_grid_2.png" alt="characters" />
                        </div>                           
                    </div>    
                </div>
            </div>
        </DoodleStyle>
    )
}