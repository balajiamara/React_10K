import './Navbar.css'

const Navbar=()=>{
    return <nav>
        <div>
            <select name="drop" id="dd">
                <option value="">Shop By Department</option>
                <option value="">Groceries</option>
                <option value="">Chocolates</option>
                <option value="">Drinks</option>
            </select>
        </div>
        <div>
            <ul className='Cat'>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li><select name="Pages" id="">
                    <option value="">About Us</option>
                    <option value="">Cart</option>
                    <option value="">Checkout</option>
                    <option value="">Single Product</option>
                    <option value="">Contact</option>
                </select>
            </li>
            <li>Brand</li>
            <li>Sale</li>
            <li>Blog</li>
            </ul>
        </div>
    </nav>
}

export default Navbar