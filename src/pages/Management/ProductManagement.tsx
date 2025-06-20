import { useState, FormEvent } from "react";
import type { ChangeEvent } from "react";
import AdminSideBar from "../../components/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(20);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoUpdate(reader.result);
        }
      };
    }
  };
  const submitHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  };

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="product-management">
        <section>
          <strong>ID - hjjwbsishwjsbs </strong>
          <img src={photo} alt="Product" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock}Avalivale</span>
          ) : (
            <span className="red">Not Avalivale</span>
          )}
          <h3>${price}</h3>
        </section>

        <article>
          <form onSubmit={submitHandler}>
            <div>
              <h2>Manage</h2>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input required type="file" onChange={changeImageHandler} />
            </div>
            {photo && <img src={photoUpdate} alt="New Image" />}

            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
