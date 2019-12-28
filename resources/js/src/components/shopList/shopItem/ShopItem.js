import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { Button } from 'semantic-ui-react'
import "./ShopItem.css";

import ProductModal from "../SingleItem/ProductModal";
import "../SingleItem/Modal.css";

export class ShopItem extends Component {
    render() {
        const { id, name, price, size, rating, main_image, type } = this.props;
        let imgPath = `/images/${main_image}`;
        return (
            <>
                <div className="card col text-dark bg-light ">
                    <img className="img-fluid w-100" src={imgPath} alt={name} />

                    <div className="card-body">
                        <h5 className="card-title">
                            {type} {name}
                        </h5>
                        <p>
                            <span className="text-danger">{price}$</span>{" "}
                            <s>{price}$ </s>
                        </p>
                        {/* <p>Size: {size}</p>
                        <p>Rating: {rating}</p> */}
                        <Link to={`/Shop/${id}`} className="btn btn-primary">
                            View Details
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default ShopItem;
