import React, { useContext } from 'react'
import './PcItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const PcItem = ({id, name, description, price, image}) => {

  const {cartItems, addToCart, removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='pc-item'>
      <div className="pc-item-img-container">
        <img className='pc-item-image' src={url+"/images/"+image} alt="" />
        {!cartItems[id]
          ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
          :<div className="pc-item-counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="pc-item-info">
        <div className="pc-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="pc-item-description">{description}</p>
        <p className="pc-item-price">${price}</p>
      </div>
    </div>
  )
}

export default PcItem