import { useContext } from "react";
import "./ItemDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import PcItem from "../PcItem/PcItem";

const ItemDisplay = ({ category }) => {
  const { item_list } = useContext(StoreContext);

  return (
    // Get items from the store
    <div className="item-display" id="item-display">
      <h2>Best Selling Pc Items At One Place</h2>
      <div className="item-display-list">
        {item_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <PcItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ItemDisplay;
