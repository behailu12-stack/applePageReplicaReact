import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function Productpage() {
  const [product, setProduct] = useState(null);
  const { pid } = useParams();

  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error: Unable to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        const foundProduct = data.products.find(
          (product) => product.product_url === pid
        );
        setProduct(foundProduct);
      })
      .catch((error) => console.log(error));
  }, [pid]);

  if (product) {
    const {
      product_name,
      product_brief_description,
      starting_price,
      price_range,
      product_description,
      product_img,
    } = product;

    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12 mt-5">
                <div className="title-wraper font-weight-bold">
                  {product_name}
                </div>
                <div className="brief-description">
                  {product_brief_description}
                </div>
              </div>
            </div>
            <div className="row justify-content-center text-center product-holder h-100">
              <div className="col-sm-12 col-md-6 my-auto">
                <div className="starting-price">
                  Starting at {starting_price}
                </div>
                <div className="monthly-price">{price_range}</div>
                <div className="product-details">{product_description}</div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="product-image">
                  <img src={product_img} alt={product_name} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default Productpage;
