import img1 from "../../assets/product-thumb-1.png"
import img2 from "../../assets/ad-image-1.png"
import "./Hero.css"

const Hero=()=>{
    return <div>
        <div className="Hero1">
            <div>
                <h2>100% Natural</h2>
                <h2>Fresh Smoothie & Summer Juicy</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <button>Shop Now</button>
            </div>
            <div><img src={img1} alt="" className="HH1" /></div>
        </div>
        <div className="Hero1">
            <div>
                <h2>20% Off</h2>
                <p>___________SALE</p>
                <h2>Fruits & Vegetables</h2>
                <p>Shop Collection </p>
            </div>
            <div><img src={img2} alt="" /></div>
        </div>
        <div></div>
    </div>
}

export default Hero