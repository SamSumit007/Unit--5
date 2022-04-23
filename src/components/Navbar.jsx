import {CartContext} from "../Contexts/CartContext"
import {useContext} from "react"
export const Navbar = () =>{
    const {cart}= useContext(CartContext);
    return <nav 
    style = {{
        display: 'flex',
        justifyContent: 'end',
        padding: "15 px",
        fontSize:"28 px",
        border:"1px solid red",
        margin:"10px"
    }}
    >
        Cart:{cart}
    </nav>
}