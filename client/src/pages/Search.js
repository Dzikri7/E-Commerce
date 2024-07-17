import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import styles from "../styles/Search.module.css";

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);

  return (
    <Layout title={"Search results"}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className={`${styles.cardContainer} mt-4`}>
            {values?.results.map((p) => (
              <div className={`card m-2 ${styles.card}`} key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className={`card-img-top ${styles.cardImgTop}`}
                  alt={p.name}
                />
                <div className={`card-body ${styles.cardBody}`}>
                  <h5 className={styles.cardTitle}>{p.name}</h5>
                  <p className={styles.cardText}>
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className={styles.cardText}>$ {p.price}</p>
                  <div className="d-grid gap-2">
                    <button
                      className={`btn ${styles.btn} ${styles.btnPrimary}`}
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
