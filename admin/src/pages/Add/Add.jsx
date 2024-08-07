import "./Add.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  // Set initial state for form fields
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "CPU",
  });

  const onChangeHandler = (event) => {
    // When an admin add items, value is set to form fields
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    // Prevent default submiting
    event.preventDefault();
    // Fetch the data and append
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      // Send form data to the api
      const response = await axios.post(`${url}/api/pcItem/add`, formData);
      if (response.data.success) {
        // Toastr notification
        toast.success(response.data.message);
        // Clear form data
        setData({
          name: "",
          description: "",
          price: "",
          category: "CPU",
        });
        setImage(false);
      } else {
        // Toastr notification
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          {/* Upload the item image */}
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        {/* When items are adding, data are fetched to update the state */}
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="CPU">CPU</option>
              <option value="Motherboard">Motherboard</option>
              <option value="RAM">RAM</option>
              <option value="GPU">GPU</option>
              <option value="Storage">Storage</option>
              <option value="Power Supply">Power Supply</option>
              <option value="Casing">Casing</option>
              <option value="Monitor">Monitor</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$50"
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
