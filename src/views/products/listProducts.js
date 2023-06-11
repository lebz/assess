import React, {useEffect, useState} from "react";


function ListProducts() {

    const [ allProducts, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }, []);

    const listProducts = allProducts.map(({id,title,image,category}) => {

        return (
                <ul key={id }>

                    <li>
                        <img src={image} alt={title}
                        className ="productImage"
                        />
                        <span className="productTitle">
                            {title}
                        </span>
                        <span className="productCategory">
                            {category}
                        </span>
                    </li>
                </ul>
        );
    });


    return (
        <div className = "listProducts">

            {listProducts}
        </div>
    );
  }

  export default ListProducts;