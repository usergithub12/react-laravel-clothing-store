import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import 'react-laravel-clothing-store/resources/js/src/components/basket/basket.css';

class BasketPage extends Component {

    render() {
        return (
            <React.Fragment>

                <div className="basket">
                    <div className="basket-product">
                        <div className="item">
                            <div className="product-image">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/c6b69ad3b4ab4668ab03aac300eafed6_9366/OZWEEGO_TR_Schuh_Grau_EE7001_01_standard.jpg" style={{ width: '18vh', height: '18vh'}} alt="Image 2"
                                     className="product-frame"/>
                            </div>
                            <div className="product-details">
                                <h1><strong>Adidas OZWEEGO SHOES</strong></h1>
                                <p>Plain white duvet cover in 200 thread count cotton percale with placement
                                    embroidered beige thread border. Concealed button fastening at the bottom.</p>
                                <p><strong>Product Code - 232321939</strong></p>
                            </div>
                        </div>
                        <div className="price">2300.00</div>
                        <div className="remove">
                            <button>Видалити замовлення</button>
                        </div>
                    </div>
                    <div className="basket-product">
                        <div className="item">
                            <div className="product-image">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/cda9fe651cc24b9697e4aa3b00c0f924_9366/Nite_Jogger_Schuh_Schwarz_EE6254_01_standard.jpg" style={{ width: '18vh', height: '18vh'}} alt="Image 2"
                                     className="product-frame" />
                            </div>
                            <div className="product-details">
                                <h1><strong>Adidas NITE JOGGER SCHUH</strong></h1>
                                <p>Plain white duvet cover in 200 thread count cotton percale with placement
                                    embroidered beige thread border. Concealed button fastening at the bottom.</p>
                                <p><strong>Product Code - 232321939</strong></p>
                            </div>
                        </div>
                        <div className="price">2900.00</div>
                        <div className="remove">
                            <button>Видалити замовлення</button>
                        </div>
                    </div>
                    <div className="basket-product">
                        <div className="item">
                            <div className="product-image">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/26957f977ecf4119879caa7600ff0f1b_9366/OZWEEGO_Schuh_Weiss_EE6464_01_standard.jpg" style={{ width: '18vh', height: '18vh'}} alt="Image 2"
                                     className="product-frame"/>
                            </div>
                            <div className="product-details">
                                <h1><strong>Adidas OZWEEGO SHOES</strong></h1>
                                <p>Plain white duvet cover in 200 thread count cotton percale with placement
                                    embroidered beige thread border. Concealed button fastening at the bottom.</p>
                                <p><strong>Product Code - 232321939</strong></p>
                            </div>
                        </div>
                        <div className="price">2600.00</div>
                        <div className="remove">
                            <button>Видалити замовлення</button>
                        </div>
                    </div>
                    <div className="basket-product">
                        <div className="item">
                            <div className="product-image">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/6bf10521746b4eddb35faa2c012194bc_9366/Supercourt_Schuh_Weiss_EE6037_01_standard.jpg" style={{ width: '18vh', height: '18vh'}} alt="Image 2"
                                     className="product-frame"/>
                            </div>
                            <div className="product-details">
                                <h1><strong>Adidas SUPERCOURT SCHUH</strong></h1>
                                <p>Dieses Produkt ist von allen Rabatten und Aktionen ausgeschlossen.</p>
                                <p><strong>Product Code - 232321939</strong></p>
                            </div>
                        </div>
                        <div className="price">1600.00</div>
                        <div className="remove">
                            <button>Видалити замовлення</button>
                        </div>
                    </div>
                    <div className="basket-product">
                        <div className="item">
                            <div className="product-image">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/7f4c5a586d6341669d8eaaf500fd8fc8_9366/Alphaedge_4D_Star_Wars_Schuh_Schwarz_FV4685_01_standard.jpg" style={{ width: '18vh', height: '18vh'}} alt="Image 2"
                                     className="product-frame"/>
                            </div>
                            <div className="product-details">
                                <h1><strong>Adidas ALPHAEDGE 4D STAR WARS SCHUH</strong></h1>
                                <p>Plain white duvet cover in 200 thread count cotton percale with placement
                                    embroidered beige thread border. Concealed button fastening at the bottom.</p>
                                <p><strong>Product Code - 232321939</strong></p>
                            </div>
                        </div>
                        <div className="price">7600.00</div>
                        <div className="remove">
                            <button>Видалити замовлення</button>
                        </div>
                    </div>
                </div>
                <aside>
                    <div className="summary">
                        <div className="summary-total-items"><span className="total-items"/> Продукти у вашому кошику
                        </div>

                        <div className="summary-subtotal">
                            <div className="summary-registration">
                                <label htmlFor="name-surname">Ім'я та призище</label><input
                                style={{ border: '1px solid #666', borderRadius: '4px 4px 4px 4px', height: '34px', width: '100%', textAlign: 'center'}}
                                id="name-surname" type="text" name="name-surname" pattern="^[( )a-zA-Z]+$" required/><br/>
                                <label htmlFor="city">Місто</label><input
                                style={{ border: '1px solid #666', borderRadius: '4px 4px 4px 4px', height: '34px', width: '100%', textAlign: 'center'}}                                id="city" type="text" name="city" maxLength="15"/><br/>
                                <label htmlFor="phone-number">Номер телефону</label><input
                                style={{ border: '1px solid #666', borderRadius: '4px 4px 4px 4px', height: '34px', width: '100%', textAlign: 'center'}}                                id="phone-number" type="text" name="phone-number" maxLength="5"
                                pattern="^\+?(?:[0-9]??).{5,14}[0-9]$" required/><br/>
                            </div>
                            <div className="summary-promo hide">
                                <div className="promo-title">Promotion</div>
                                <div className="promo-value final-value" id="basket-promo"/>
                            </div>
                        </div>
                        <div className="summary-delivery">
                            <select name="delivery-collection" className="summary-delivery-selection">
                                <option value="0" selected="selected">Виберіть спосіб доставки</option>
                                <option value="collection">Нова пошта</option>
                                <option value="first-class">УКРПОШТА</option>
                                <option value="second-class">Royal Mail</option>
                                <option value="signed-for">US Mail Delivery</option>
                            </select>
                        </div>
                        <div className="summary-total">
                            <div className="total-title">Півдсумок</div>
                            <div className="total-value final-value" id="basket-total">0.00</div>
                        </div>
                        <div className="summary-checkout">
                            <button className="checkout-cta">Оформити замовлення</button>
                        </div>
                    </div>

                </aside>
            </React.Fragment>
        );
    }
}

export default BasketPage;
