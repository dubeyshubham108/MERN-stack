
import amazonLogo from "../image/amazon.png";
import flipkartLogo from "../image/flipkart.png";
import shoeLogo from "../image/shoe_image.png";

const Hero = () => {

    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH THE SHOES</p>
                <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icon">
                    <img src={ amazonLogo } alt="amazon-logo" />
                    <img src={ flipkartLogo } alt="flipkart-logo" />
                </div>
            </div>
            </div>
            <div className="hero-image">
                <img src={ shoeLogo } alt="Shoe Image" />
            </div>
        </main>
    )
}

export default Hero;