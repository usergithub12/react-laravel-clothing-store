import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Table.css";
// import ProductModal from "../../shopList/SingleItem/ProductModal"
class Table extends Component {
    state = {
        products: null
    };

    componentDidMount() {
        axios
            .get(`/api/prod`)
            .then(response => {
                //handle success
                this.setState({
                    products: response.data
                });
                console.log("product from get request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    }

    deleteProduct = product => {
        var $this = this;
        axios
            .delete("/api/deleteproduct", {
                params: {
                    id: product.id
                }
            })
            .then(response => {
                const newState = this.state.products.slice();
                newState.splice(newState.indexOf(product), 1);
                $this.setState({
                    products: newState
                });
                console.log("delete request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    };

    updateProduct = () => {};

    renderTableData() {
        const { products } = this.state;
        const imgStyle = {
            height: "100px",
            width: "100px"
        };
        return products.map(product => {
            const {
                id,
                size,
                name,
                price,
                rating,
                product_data,
                main_image
            } = product;
            let imgPath = `/images/${main_image}`;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{size}</td>
                    <td>{rating}</td>
                    <td>
                        <img style={imgStyle} src={imgPath}></img>
                    </td>
                    <td> {product_data.color.name} </td>
                    <td> {product_data.material.name}</td>
                    <td> {product_data.type.name}</td>
                    <td> {product_data.gender.name}</td>
                    <td> {product_data.producer.name}</td>
                    <td> {product_data.producer.country.name}</td>
                    <td>
                        <Link
                            to={`/updateproduct/${id}`}
                            className="btn btn-primary"
                        >
                            Редагувати
                        </Link>{" "}
                        <button
                            className="btn btn-danger"
                            onClick={this.deleteProduct.bind(this, product)}
                        >
                            Видалити
                        </button>{" "}
                        <Link to={`/Shop/${id}`} className="btn btn-info">
                            Деталі
                        </Link>
                    </td>
                </tr>
            );
        });
    }
    renderTableHeader() {
        console.log("0", this.state.products[0]);
        //   let header = Object.keys(this.state.products[0]);
        //   .concat(
        //       Object.keys(this.state.products[0].product_data))

        let header = [
            "ID",
            "NAME",
            "PRICE",
            "SIZE",
            "RATING",
            "MAIN_IMAGE",
            "COLOR",
            "MATERIAL",
            "TYPE",
            "GENDER",
            "PRODUCER",
            "COUNTRY",
            "ACTION"
        ];
        return header.map((key, index) => {
            return (
                <th className="text-center" key={index}>
                    {key}
                </th>
            );
        });
    }
    render() {
        console.log("state=>", this.state);
        const { products } = this.state;
        return (
            <>
                <h1>Товари:</h1>
                <Link className="nav-link" to="/addproduct">
                    <button className="btn btn-success">Додати товар</button>
                </Link>

                <div className="row">
                    {products ? (
                        <table
                            id="prodtable"
                            className="table table-striped table-sm table-dark"
                        >
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    ) : (
                        <p>Товарів немає!</p>
                    )}
                </div>
            </>
        );
    }
}
export default Table;
