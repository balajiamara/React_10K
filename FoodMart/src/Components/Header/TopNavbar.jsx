import logo from "../../assets/logo.png"
import search from "../../assets/magnifying-glass.png"
import "./TopNavbar.css"

const TopNavbar = () =>{
    return <>
     <nav style={{display:'flex',height:'85px',justifyContent:'space-around',backgroundColor:'white'}}>
        <div>
            <img src={logo} alt="" style={{marginTop:'10px'}}/>
        </div>
        <div style={{width:'500px',height:'50px',borderRadius:'10px',marginTop:'15px',padding:'0px 10px',backgroundColor:'#ddddddff',display:'flex',gap:'20px'}}>
            <select name="dropdown" id="dropdown" style={{border:'none',margin:'15px',backgroundColor:'#ddddddff',color:'black'}}>
                <option value="">All Categories</option>
                <option value="">Groceries</option>
                <option value="">Drinks</option>
                <option value="">Chocolates</option>
            </select>
            <input type="text" placeholder="Search for more Than 20,000 products" style={{border:'none',backgroundColor:'#ddddddff',width:'250px',color:'blue'}}/>
            <img src={search} alt="" style={{width:'25px',height:'25px',paddingTop:'12px',justifyContent:'space-evenly'}}/>

        </div>
        <div className="support">
            <p>&nbsp;For Support? <br />
            <span style={{color:'black',fontSize:'larger'}}>+980-34984089</span></p>
        </div>
        <div></div>
        <div className="cart">
            <p>Your Cart <br />
            <span style={{color:'black',fontSize:'larger'}}>$1290.00</span></p>
        </div>
    </nav>
    <hr style={{color:'#ddddddff'}}/>
    </>
}
export default TopNavbar