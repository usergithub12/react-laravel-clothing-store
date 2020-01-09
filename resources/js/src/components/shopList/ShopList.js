import React, { Component } from "react";
import ShopItem from "./shopItem/ShopItem";
// import ProductModal from "./SingleItem/ProductModal";
import FilterFieldGroup from "../common/FilterFieldGroup";
import { Scrollbars } from "react-custom-scrollbars";
import "./ShopList.css";
import { withRouter } from "react-router-dom";
export class ShopList extends Component {
    state = {
        list: [],
        producers: [],
        types: [],
        materials: [],
        sizes: [
            "34",
            "35",
            "35.5",
            "36",
            "36.5",
            "37",
            "37.5",
            "38",
            "38.5",
            "39",
            "40",
            "40.5",
            "41",
            "41.5",
            "42",
            "42.5",
            "43",
            "43.5",
            "44",
            "44.5",
            "45"
        ],
        colors: []
    };

    handleInputChangeColors = event => {
        const { colors } = this.state;
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log("hendleinput change name", event.target.name);
        let id = 0;
        colors.forEach(item => {
            if (item.name == name) {
                id = item.id;
                console.log("id", id);
            }
        });
        if (target.checked) {
            axios
                .get("/api/productbycolor", {
                    params: {
                        id: id
                    }
                })
                .then(response => {
                    //handle success
                    this.setState({
                        list: response.data
                    });
                    console.log("product from get request", response.data);
                    console.log("target name", name);
                })
                .catch(response => {
                    //handle error
                    console.log(response);
                });
        } else {
            this.getProducts();
        }

        this.setState({
            [name]: value
        });
    };

    handleInputChange = event => {
        const { producers } = this.state;
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log("hendleinput change name", event.target.name);
        let id = 0;
        producers.forEach(item => {
            if (item.name == name) {
                id = item.id;
                console.log("id", id);
            }
        });
        if (target.checked) {
            axios
                .get("/api/productbyproducer", {
                    params: {
                        id: id
                    }
                })
                .then(response => {
                    //handle success
                    this.setState({
                        list: response.data
                    });
                    console.log("product from get request", response.data);
                    console.log("target name", name);
                })
                .catch(response => {
                    //handle error
                    console.log(response);
                });
        } else {
            this.getProducts();
        }

        this.setState({
            [name]: value
        });
    };

    handleInputChangeType = event => {
        const { types } = this.state;
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log("hendleinput change name", event.target.name);
        let id = 0;
        types.forEach(item => {
            if (item.name == name) {
                id = item.id;
                console.log("id", id);
            }
        });
        if (target.checked) {
            axios
                .get("/api/productbytype", {
                    params: {
                        id: id
                    }
                })
                .then(response => {
                    //handle success
                    this.setState({
                        list: response.data
                    });
                    console.log("product from get request", response.data);
                    console.log("target name", name);
                })
                .catch(response => {
                    //handle error
                    console.log(response);
                });
        } else {
            this.getProducts();
        }

        this.setState({
            [name]: value
        });
    };

    handleInputChangeMaterial = event => {
        const { materials } = this.state;
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log("hendleinput change name", event.target.name);
        let id = 0;
        materials.forEach(item => {
            if (item.name == name) {
                id = item.id;
                console.log("id", id);
            }
        });
        if (target.checked) {
            axios
                .get("/api/productbymaterial", {
                    params: {
                        id: id
                    }
                })
                .then(response => {
                    //handle success
                    this.setState({
                        list: response.data
                    });
                    console.log("product from get request", response.data);
                    console.log("target name", name);
                })
                .catch(response => {
                    //handle error
                    console.log(response);
                });
        } else {
            this.getProducts();
        }

        this.setState({
            [name]: value
        });
    };

    handleInputChangeSize = event => {
        const { sizes } = this.state;
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log("hendleinput change name", event.target.name);
        // let id = 0;
        // sizes.forEach(item => {
        //     if (item.name == name) {
        //         id = item.id;
        //         console.log("id", id);
        //     }
        // });
        if (target.checked) {
            axios
                .get("/api/productbysize", {
                    params: {
                        size: event.target.name
                    }
                })
                .then(response => {
                    //handle success
                    this.setState({
                        list: response.data
                    });
                    console.log("product from get request", response.data);
                    console.log("target name", name);
                })
                .catch(response => {
                    //handle error
                    console.log(response);
                });
        } else {
            this.getProducts();
        }

        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        this.getProducts();
        this.getProducers();
        this.getTypes();
        this.getMaterials();
        this.getColors();
    }
    getColors = () => {
        axios
            .get("/api/colors")
            .then(response => {
                //handle success
                this.setState({
                    colors: response.data
                });
                console.log("product from get request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    };
    getMaterials = () => {
        axios
            .get("/api/materials")
            .then(response => {
                //handle success
                this.setState({
                    materials: response.data
                });
                console.log("product from get request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    };
    getTypes = () => {
        axios
            .get("/api/types")
            .then(response => {
                //handle success
                this.setState({
                    types: response.data
                });
                console.log("product from get request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    };
    getProductsByDesc = () => {
        // axios
        //     .get("/api/productbypricedesc")
        //     .then(response => {
        //         //handle success
        //         this.setState({
        //             list: response.data
        //         });
        //         console.log("product from get request", response.data);
        //     })
        //     .catch(response => {
        //         //handle error
        //         console.log(response);
        //     });
        this.getData("productbypricedesc");
    };
    getProductsByAsc = () => {
        this.getData("productbypriceasc");
    };

    getProducers = () => {
        axios
            .get("/api/producers")
            .then(response => {
                //handle success
                this.setState({
                    producers: response.data
                });
                console.log("product from get request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    };
    getProducts = () => {
        this.getData("prod");
    };
    getProductsByMen = () => {
        this.getData("productbymen");
    };
    getProductsByWomen = () => {
        this.getData("productbywomen");
    };
    getProductsByKids = () => {
        this.getData("productbykids");
    };
    getData = routeUrl => {
        axios
            .get(`/api/${routeUrl}`)
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
    };

    render() {
        const { list, producers, types, materials, sizes, colors } = this.state;
        console.log("state ==>", this.state);
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

        const producerfilter = producers.map(producer => {
            return (
                <li>
                    <FilterFieldGroup
                        onChange={this.handleInputChange}
                        // id={producer.id}
                        key={producer.id}
                        label={producer.name}
                        field={producer.name}
                    />
                </li>
            );
        });
        const typefilter = types.map(type => {
            return (
                <li>
                    <FilterFieldGroup
                        onChange={this.handleInputChangeType}
                        // id={producer.id}
                        key={type.id}
                        label={type.name}
                        field={type.name}
                    />
                </li>
            );
        });
        const materialfilter = materials.map(material => {
            return (
                <li>
                    <FilterFieldGroup
                        onChange={this.handleInputChangeMaterial}
                        // id={producer.id}
                        key={material.id}
                        label={material.name}
                        field={material.name}
                    />
                </li>
            );
        });

        const scrollStyle = {
            height: "150px"
        };

        const sizefilter = sizes.map(size => {
            return (
                <li>
                    <FilterFieldGroup
                        onChange={this.handleInputChangeSize}
                        // id={producer.id}
                        key={size}
                        label={size}
                        field={size}
                    />
                </li>
            );
        });
        const colorfilter = colors.map(color => {
            return (
                <li>
                    <FilterFieldGroup
                        onChange={this.handleInputChangeColors}
                        // id={producer.id}
                        key={color.id}
                        label={color.name}
                        field={color.name}
                    />
                </li>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <ul className="navbar-nav col d-flex flex-row-reverse filter-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                onClick={this.getProductsByAsc}
                            >
                                <i
                                    className="fa fa-sort-amount-asc"
                                    aria-hidden="true"
                                ></i>{" "}
                                Найдешевші
                                {/* <span className="sr-only">(current)</span> */}
                            </a>
                        </li>
                        <li className="nav-item mr-2">
                            <a
                                className="nav-link"
                                onClick={this.getProductsByDesc}
                            >
                                <i
                                    className="fa fa-sort-amount-desc"
                                    aria-hidden="true"
                                ></i>{" "}
                                Найдорожчі
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <ul className="navbar-nav col filter-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={this.getProducts}>
                                <i
                                    className="fa fa-users"
                                    aria-hidden="true"
                                ></i>{" "}
                                Усі
                                {/* <span className="sr-only">(current)</span> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                onClick={this.getProductsByMen}
                            >
                                <i
                                    className="fa fa-male"
                                    aria-hidden="true"
                                ></i>{" "}
                                Чоловічі
                                {/* <span className="sr-only">(current)</span> */}
                            </a>
                        </li>
                        <li className="nav-item mr-2">
                            <a
                                className="nav-link"
                                onClick={this.getProductsByWomen}
                            >
                                <i
                                    className="fa fa-female"
                                    aria-hidden="true"
                                ></i>{" "}
                                Жіночі
                            </a>
                        </li>
                        <li className="nav-item mr-2">
                            <a
                                className="nav-link"
                                onClick={this.getProductsByKids}
                            >
                                <i
                                    className="fa fa-child"
                                    aria-hidden="true"
                                ></i>{" "}
                                Дитячі
                            </a>
                        </li>
                        <h5>Бренд</h5>
                        <Scrollbars style={scrollStyle}>
                            {producerfilter}
                        </Scrollbars>
                        <h5>Тип</h5>
                        <Scrollbars style={scrollStyle}>
                            {typefilter}
                        </Scrollbars>
                        <h5>Матеріал</h5>
                        <Scrollbars style={scrollStyle}>
                            {materialfilter}
                        </Scrollbars>
                        <h5>Розмір</h5>
                        <Scrollbars style={scrollStyle}>
                            {sizefilter}
                        </Scrollbars>
                        <h5>Колір</h5>
                        <Scrollbars style={scrollStyle}>
                            {colorfilter}
                        </Scrollbars>
                    </ul>
                    <div className="col-10">
                        <div className="card-columns">{newItem}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopList;
