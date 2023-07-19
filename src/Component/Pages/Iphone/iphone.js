import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./iphone.css"; // Import the CSS file

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error: Unable to fetch data");
        }
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <h2 className="title-wraper font-weight-bold">Iphones</h2>
              <p className="brief-description">The best for the brightest.</p>
            </div>
          </div>
          {products.map((product, index) => (
            <div
              key={product.product_id}
              className={`row ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } align-items-center mb-5`}
            >
              <div className="col-md-6">
                <div className="card-text">
                  <h3 className="product-title">{product.product_name}</h3>
                  <p className="product-brief">
                    {product.product_brief_description}
                  </p>
                  <p className="starting-price">
                    Starting at {product.starting_price}
                  </p>
                  <p>{product.price_range}</p>
                  <div className="learn-more-container">
                    <Link
                      to={`/iphone/${product.product_url}`}
                      className="learn-more-link"
                    >
                      Learn more
                    </Link>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="icon-right"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={product.product_img}
                  alt={product.product_name}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
