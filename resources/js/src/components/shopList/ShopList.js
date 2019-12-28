import React, { Component } from "react";
import ShopItem from "./shopItem/ShopItem";
// import ProductModal from "./SingleItem/ProductModal";

export class ShopList extends Component {
    state = {
        list: []
    };
    componentDidMount() {
        axios
            .get("/api/prod")
            .then(response => {
                //handle success
                this.setState({
                    list: response.data
                });
                console.log("product from get request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    }

    render() {
        const { list } = this.state;
        const newItem = list.map(item => {
            return (
                // <ProductModal
                //     key={item.id}
                //     name={item.name}
                //     price={item.price}
                //     size={item.size}
                //     rating={item.rating}
                //     main_image={item.main_image}
                //     type={item.product_data.type.name}
                // />
                <ShopItem
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    size={item.size}
                    rating={item.rating}
                    main_image={item.main_image}
                    type={item.product_data.type.name}
                />
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="card-columns">{newItem}</div>
                </div>
            </div>
        );
    }
}

export default ShopList;
