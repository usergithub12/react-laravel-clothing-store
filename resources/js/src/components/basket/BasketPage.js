import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import "./basket.css";

class BasketPage extends Component {
    state = {
        products: [],
        total: 0,
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
        }
    };
    componentDidMount() {
        let cart = localStorage.getItem("cart");
        if (!cart) return;
        this.getCartProducts(cart);
    }

    getCartProducts(cart) {
        console.log("cart basket", cart);
        axios
            .post(`api/product`, { id: cart })
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

    // removeFromCart = product => {
    //     let products = this.state.products.filter(
    //         item => item.id !== product.id
    //     );
    //     let cart = JSON.parse(localStorage.getItem("cart"));
    //     delete cart[product.id.toString()];
    //     localStorage.setItem("cart", JSON.stringify(cart));
    //     let total = this.state.total - product.qty * product.price;
    //     this.setState({ products, total });
    // };
    clearCart = () => {
        localStorage.removeItem("cart");
        // this.setState({ products: [] });
        this.setState({ product: [] });
    };

    render() {
        console.log("basket state", this.state);
        const { product } = this.state;
        let imgPath = `/images/${product.main_image}`;
        return (
            <React.Fragment>
                {product.id ? (
                    <div className="basket">
                        <div className="basket-product">
                            <div className="item">
                                <div className="product-image">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img
                                        src={imgPath}
                                        style={{
                                            width: "18vh",
                                            height: "18vh"
                                        }}
                                        alt="Image 2"
                                        className="product-frame"
                                    />
                                </div>
                                <div className="product-details">
                                    <h1>
                                        <strong>{product.name}</strong>
                                    </h1>
                                    <p>
                                        <p>
                                            {" "}
                                            {
                                                product.product_data.color.name
                                            }{" "}
                                        </p>
                                        <p>
                                            {" "}
                                            {product.product_data.material.name}
                                        </p>
                                        <p> {product.product_data.type.name}</p>
                                        <p>
                                            {" "}
                                            {product.product_data.gender.name}
                                        </p>
                                        <p>
                                            {" "}
                                            {product.product_data.producer.name}
                                        </p>
                                        <p>
                                            {" "}
                                            {
                                                product.product_data.producer
                                                    .country.name
                                            }
                                        </p>
                                    </p>
                                    <p>
                                        <strong>
                                            Product Code - 232321939
                                        </strong>
                                    </p>
                                </div>
                            </div>
                            <div className="price">{product.price}</div>
                            <div className="remove">
                                <button onClick={this.clearCart}>
                                    Видалити замовлення
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Корзина пуста</p>
                )}

                <aside>
                    <div className="summary">
                        <div className="summary-total-items">
                            <span className="total-items" /> Продукти у вашому
                            кошику
                        </div>

                        <div className="summary-subtotal">
                            <div className="summary-registration">
                                <label htmlFor="name-surname">
                                    Ім'я та призище
                                </label>
                                <input
                                    style={{
                                        border: "1px solid #666",
                                        borderRadius: "4px 4px 4px 4px",
                                        height: "34px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}
                                    id="name-surname"
                                    type="text"
                                    name="name-surname"
                                    pattern="^[( )a-zA-Z]+$"
                                    required
                                />
                                <br />
                                <label htmlFor="city">Місто</label>
                                <input
                                    style={{
                                        border: "1px solid #666",
                                        borderRadius: "4px 4px 4px 4px",
                                        height: "34px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}
                                    id="city"
                                    type="text"
                                    name="city"
                                    maxLength="15"
                                />
                                <br />
                                <label htmlFor="phone-number">
                                    Номер телефону
                                </label>
                                <input
                                    style={{
                                        border: "1px solid #666",
                                        borderRadius: "4px 4px 4px 4px",
                                        height: "34px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}
                                    id="phone-number"
                                    type="text"
                                    name="phone-number"
                                    maxLength="5"
                                    pattern="^\+?(?:[0-9]??).{5,14}[0-9]$"
                                    required
                                />
                                <br />
                            </div>
                            <div className="summary-promo hide">
                                <div className="promo-title">Promotion</div>
                                <div
                                    className="promo-value final-value"
                                    id="basket-promo"
                                />
                            </div>
                        </div>
                        <div className="summary-delivery">
                            <select
                                name="delivery-collection"
                                className="summary-delivery-selection"
                            >
                                <option value="0" selected="selected">
                                    Виберіть спосіб доставки
                                </option>
                                <option value="collection">Нова пошта</option>
                                <option value="first-class">УКРПОШТА</option>
                                <option value="second-class">Royal Mail</option>
                                <option value="signed-for">
                                    US Mail Delivery
                                </option>
                            </select>
                        </div>
                        <div className="summary-total">
                            <div className="total-title">Півдсумок</div>
                            <div
                                className="total-value final-value"
                                id="basket-total"
                            >
                                0.00
                            </div>
                        </div>
                        <div className="summary-checkout">
                            <button className="checkout-cta">
                                Оформити замовлення
                            </button>
                        </div>
                    </div>
                </aside>
            </React.Fragment>
        );
    }
}

export default BasketPage;
