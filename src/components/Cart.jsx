import profile from "../assist/profile.jpg";
import {ToggleContext} from "../contexts/Toggle"
import { useContext } from 'react';


export const Cart = () => {


  const {Toggle}=useContext(ToggleContext)
  console.log(Toggle)

  return (
    <div className="common-width">
      <div className={Toggle?  `cart dark-mode`:`cart light-mode`}>
        <div className="cart-top-heading">
          <div>Active Users</div>
          <div>for March 2020</div>
        </div>
        <div className="user-data">
          <img src={profile} alt="user-img" />
          <div>
            <div className="name">Sumit Thakur</div>
            <div className="place">Punjab, India</div>
          </div>
        </div>
        <div className="user-data">
          <img src={profile} alt="user-img" />
          <div>
            <div className="name">Sumit Kumar</div>
            <div className="place">Kolkata, India</div>
          </div>
        </div>
        <div className="user-data">
          <img src={profile} alt="user-img" />
          <div>
            <div className="name">Sumit Kumar</div>
            <div className="place">Kolklata, India</div>
          </div>
        </div>
      </div>

      
    </div>
  );
};