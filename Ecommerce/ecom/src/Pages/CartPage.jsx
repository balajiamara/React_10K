// import React, { useContext } from "react";
// import { CartContext } from "../ContextApi/CartContext";
// import { Button, Card } from 'react-bootstrap';

// export function CartPage() {
//     const { cart, setCart } = useContext(CartContext);

//     const deletefromCart = (id) => {
//         const updatedCart = cart.filter(dish => dish.DishId !== id);
//         setCart(updatedCart);
//     };

//     return (
//         <>
//             <h2>Shopping Cart Page</h2>

//             {cart.length > 0 ? (
//                 <div>
//                     {cart.map(item => (
//                         <Card key={item.DishId} className="mb-3" style={{ width: "18rem" }}>
//                             <Card.Header>
//                                 <Card.Img src={item.Image} />
//                             </Card.Header>
//                             <Card.Body>
//                                 <Card.Text>{item.DishName}</Card.Text>
//                                 <Card.Text>{item.Price}</Card.Text>
//                                 <Button onClick={() => deletefromCart(item.DishId)}>
//                                     Delete
//                                 </Button>
//                             </Card.Body>
//                         </Card>
//                     ))}
//                 </div>
//             ) : (
//                 <h2>Your Cart is empty</h2>
//             )}
//         </>
//     );
// }


import React, { useContext } from "react";
import { CartContext } from "../ContextApi/CartContext";
import { Button, Card } from 'react-bootstrap';

export function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

    return (
        <>
            <h2>Shopping Cart Page</h2>

            {cart.length > 0 ? (
                <div>
                    <Button variant="danger" onClick={clearCart}>Clear Cart</Button>

                    {cart.map(item => (
                        <Card key={item.DishId} className="mb-3" style={{ width: "18rem" }}>
                            <Card.Header>
                                <Card.Img src={item.Image} />
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>{item.DishName}</Card.Text>
                                <Card.Text>Price: {item.Price}</Card.Text>

                                <div className="d-flex align-items-center gap-3">
                                    <Button onClick={() => updateQuantity(item.DishId, "dec")}>-</Button>
                                    <span>{item.quantity}</span>
                                    <Button onClick={() => updateQuantity(item.DishId, "inc")}>+</Button>
                                </div>

                                <Button
                                    className="mt-2"
                                    variant="danger"
                                    onClick={() => removeFromCart(item.DishId)}
                                >
                                    Remove
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            ) : (
                <h2>Your Cart is empty</h2>
            )}
        </>
    );
}
