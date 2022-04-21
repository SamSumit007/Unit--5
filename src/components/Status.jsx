import { useContext } from "react"
import {AuthContext} from  "../contexts/AuthContext"

export const Status = () => {
    const {token, isAuth } = useContext(AuthContext)
    return <>
       
        {isAuth? <h3>status: true <br /> user token: {token}  </h3>:null}
    
    
    </>
}