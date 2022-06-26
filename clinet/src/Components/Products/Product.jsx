import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
export const Products = () => {
    const dispatch = useDispatch;
    const {finalData, error, loading} = useSelector((store) => store.data)
  return loading ? (
      <div>
          <h1>Loading....</h1>
      </div>
  ) : error ? ("Error Occured") : (
    <div className="mainPage">
        <div className="SortNavbar"></div>
      <div className="product_container">
        <div className="product_filter">
          <h1>Filter</h1>
        </div>
        <div className="products">
            {finalData.map((el) => (
                <div className="elements" key={el.id}>
                    <img src={el.img1} className="elementsImg" alt="Product_Image" />
                    <p>{el.name}</p>
                    <h5>Rs.{el.price}.00</h5>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
