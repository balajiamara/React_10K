import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container,Spinner, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../ContextApi/CartContext";


export function DishesList(){
    const [data, setData]=useState([]);
    // const [cart, setCart]=useState([]);
    // const {setCart,cart}=useContext(CartContext)
    const { addToCart } = useContext(CartContext);

    
    useEffect(()=>{
        axios.get('https://rms-i0wj.onrender.com/show_item')
        .then(res=> setData(res.data['menu']))
        .catch(er=>console.log(er))
    },[])

    // const AddToCart=(dish)=>{
    //     const checkDish=cart?.some((v)=> v.DishId===dish.DishId)
    //     if(checkDish){
    //         alert('already added in cart')
    //     }else{
    //         setCart([dish, ...cart])
    //         alert('Successfully added into cart')
    //     }
        
    // }
    // console.log(cart)
    // console.log(data)
    return(<>
    <div>
        <p className="h3 text-center">Dishes</p>
    </div>
    <Container>
        {data.length>0? (
            <Container>
                <Row>
                    {data.map(dish=><Col>
                    <Card key={dish.DishId} md={3} sm={6} xs={12} className="mb-4"> 
                        {/* style={{width:'200px', height:'380px', marginBottom:'15px'}} */}
                        <Card.Header>
                            <Card.Img src={dish.Image} style={{width:'180px', height:'150px', objectFit:'cover'}} className="pb-3"/>
                        </Card.Header>
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Title>
                                {dish.DishName}
                            </Card.Title>
                            <Card.Text>{dish.Category}</Card.Text>
                            <Card.Text>Price:{dish.Price}</Card.Text>
                            <Button onClick={()=>addToCart(dish)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                    </Col>)}
                </Row>
            </Container>
        ): <>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />Loading...
        </>}
    </Container>
    </>)
}



// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { Container, Spinner, Row, Col, Card, Button } from "react-bootstrap";
// import { CartContext } from "../ContextApi/CartContext";

// export function DishesList() {
//   const [data, setData] = useState([]);
//   const { cart, setCart } = useContext(CartContext);

//   useEffect(() => {
//     axios
//       .get("https://rms-i0wj.onrender.com/show_item")
//       .then((res) => setData(res.data["menu"]))
//       .catch((er) => console.log(er));
//   }, []);

//   const AddToCart = (dish) => {
//     const checkDish = cart?.some((v) => v.DishId === dish.DishId);
//     if (checkDish) {
//       alert("Already added in cart");
//     } else {
//       setCart([dish, ...cart]);
//       alert("Successfully added into cart");
//     }
//     console.log(cart)
//   };

//   return (
//     <>
//       <div>
//         <p className="h3 text-center mt-3">Dishes</p>
//       </div>

//       <Container>
//         {data.length > 0 ? (
//           <Container>
//             <Row>
//               {data.map((dish) => (
//                 <Col key={dish.DishId} md={3} sm={6} xs={12} className="mb-4">
//                   <Card style={{ width: "100%", height: "380px" }} className="pb-3">
//                     <Card.Header>
//                       <Card.Img
//                         src={dish.Image}
//                         style={{ width: "100%", height: "150px", objectFit: "cover" }}
//                       />
//                     </Card.Header>
//                     <Card.Body className="d-flex flex-column justify-content-between">
//                       <div>
//                         <Card.Title>{dish.DishName}</Card.Title>
//                         <Card.Text>{dish.Category}</Card.Text>
//                         <Card.Text>Price: ₹ {dish.Price}</Card.Text>
//                       </div>
//                       <Button onClick={() => AddToCart(dish)}>Add to Cart</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         ) : (
//           <>
//             <Spinner
//               as="span"
//               animation="grow"
//               size="sm"
//               role="status"
//               aria-hidden="true"
//             />{" "}
//             Loading...
//           </>
//         )}
//       </Container>
//     </>
//   );
// }
