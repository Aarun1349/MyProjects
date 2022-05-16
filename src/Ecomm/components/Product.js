import React from "react";

function Product({ products }) {
  console.log("Props", products);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          const { id, image, description, title, price } = product;
          console.log("Single Product:", product);
          return (
            <div className="col s12 m3">
              <div className="card" style={{ marginTop: "5rem" }} key={id}>
                <div className="card-image">
                  <img src={image} style={{"height":"50%"}} />
                  <span className="card-title" style={{"backgroundColor":"#eee","color":"#000"}}>{title}</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>{description.substr(0,100)}</p>
                  <span className="blue">{price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
