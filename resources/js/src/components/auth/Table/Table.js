import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                        <button className="btn btn-primary">Редагувати</button>{" "}
                        <button className="btn btn-danger">Видалити</button>{" "}
                        <button className="btn btn-info">Деталі</button>
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
                        <table className="table table-striped   table-dark">
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
