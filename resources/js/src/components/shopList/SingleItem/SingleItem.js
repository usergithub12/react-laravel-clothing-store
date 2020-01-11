import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Single.css";

export class SingleItem extends Component {
    state = {
        product: {
            product_data: {
                color: {},
                type: {},
                material: {},
                gender: {},
                producer: {
                    country: {}
                }
            }
        },
        quantity: 1
    };

    addToCart = () => {
        const { id } = this.props.match.params;
        console.log("add to cart");
        let cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : {};
        // let id = this.props.product.id.toString();

        console.log("add to cart id", id);

        // cart[id] = cart[id] ? cart[id] : 0;
        // let qty = cart[id] + parseInt(this.state.quantity);
        // // if (this.props.product.available_quantity < qty) {
        // //     cart[id] = this.props.product.available_quantity;
        // // } else {
        // cart[id] = qty;
        // // }
        cart = id;
        console.log("cart", cart);
        localStorage.setItem("cart", JSON.parse(cart));
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log("id", id);
        axios
            .get("/api/product", {
                params: {
                    id: id
                }
            })
            .then(response => {
                //handle success
                this.setState({
                    product: response.data
                });
                console.log("product from get request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    }

    render() {
        const { product } = this.state;

        let imgPath = `/images/${product.main_image}`;
        return (
            <Fragment>
                <div className="text-white">
                    <div className="row">
                        <div className="col-8">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="0"
                                        className="active"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="1"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="2"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="3"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="4"
                                    ></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            className="d-block w-100 ImaGe"
                                            src={imgPath}
                                            alt="First slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100 ImaGe"
                                            src="https://rukminim1.flixcart.com/image/800/960/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8fsfjrjzy7.jpeg?q=50"
                                            alt="Second slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100 ImaGe"
                                            src="https://rukminim1.flixcart.com/image/800/960/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8fz829dcme.jpeg?q=50"
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100 ImaGe"
                                            src="https://rukminim1.flixcart.com/image/800/960/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8fszkez3bm.jpeg?q=50"
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100 ImaGe"
                                            src="https://rukminim1.flixcart.com/image/800/960/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8fpbn55gjz.jpeg?q=50"
                                            alt="Third slide"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <h5>{product.name}</h5>
                            <h3 className="font-weight-bold">
                                {product.price}$
                            </h3>
                            <div className="row">
                                <div className="form-group col">
                                    <label
                                        htmlFor="Size"
                                        className="bmd-label-floating"
                                    >
                                        Size
                                    </label>
                                    <select className="form-control" id="Size">
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <label
                                        htmlFor="Color"
                                        className="bmd-label-floating"
                                    >
                                        Color
                                    </label>
                                    <select className="form-control" id="Color">
                                        <option>Red</option>
                                        <option>Blue</option>
                                        <option>Green</option>
                                        <option>Yelow</option>
                                        <option>White</option>
                                    </select>
                                </div>
                            </div>
                            <p> {product.product_data.color.name} </p>
                            <p> {product.product_data.material.name}</p>
                            <p> {product.product_data.type.name}</p>
                            <p> {product.product_data.gender.name}</p>
                            <p> {product.product_data.producer.name}</p>
                            <p> {product.product_data.producer.country.name}</p>

                            <div className="row">
                                <div className="col">
                                    <Link
                                        onClick={this.addToCart}
                                        className="btn btn-raised btn-primary btn-lg"
                                        to="/basket"
                                    >
                                        Додати в кошик
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link
                                        className="btn btn-raised btn-primary btn-lg"
                                        to="/Shop"
                                    >
                                        Повернутися назад
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SingleItem;
