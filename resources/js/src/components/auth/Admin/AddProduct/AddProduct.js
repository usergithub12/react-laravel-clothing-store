import React, { Component } from "react";
import TextFieldGroup from "../../../common/TextFieldGroup";
import CropperModal from "../../../common/cropper/CropperModal";
import Img from "react-image";
import SelectFieldGroup from "../../../common/SelectFieldGroup";

export class AddProduct extends Component {
    state = {
        product: {
            name: "",
            size: "",
            image: "",
            price: "",
            rating: "",
            color: "",
            material: "",
            type: "",
            producer: "",
            country: ""
        },
        colors: [],
        materials: [],
        types: [],
        producers: [],
        genders: [],
        countries: [],
        errors: {}
    };

    componentDidMount() {
        this.getColors();
        this.getMaterials();
        this.getTypes();
        this.getProducers();
        this.getGenders();
        this.getCountries();
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
    getGenders = () => {
        axios
            .get("/api/genders")
            .then(response => {
                //handle success
                this.setState({
                    genders: response.data
                });
                console.log("product from get request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    };
    getCountries = () => {
        axios
            .get("/api/countries")
            .then(response => {
                //handle success
                this.setState({
                    countries: response.data
                });
                console.log("product from get request", response.data);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    };
    onChangeFile = e => {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        let file = files[0];
        this.createImage(file);
    };
    createImage = file => {
        let reader = new FileReader();
        reader.onload = e => {
            this.setState({
                image: e.target.result
            });
        };
        reader.readAsDataURL(file);
    };
    fileUpload = image => {
        const url = "api/fileupload";
        const formData = { file: image };
        return axios
            .post(url, formData)
            .then(response => console.log(response));
    };

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({
                [name]: value,
                errors
            });
        } else {
            console.log("set value by NAME:", name);
            this.setState({ [name]: value });
        }
    };
    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };

    handleColorSelectChange = value => {
        this.setState({ color: value });
    };
    handleMaterialSelectChange = value => {
        this.setState({ material: value });
    };
    handleGenderSelectChange = value => {
        this.setState({ gender: value });
    };
    handleProducerSelectChange = value => {
        this.setState({ producer: value });
    };
    handleCountrySelectChange = value => {
        this.setState({ country: value });
    };
    handleTypeSelectChange = value => {
        this.setState({ type: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("--register submit--");
        const {
            name,
            size,
            price,
            rating,
            color,
            material,
            type,
            producer,
            country,
            image,
            gender
        } = this.state;
        let errors = {};
        if (name === "") errors.name = "Поле не може бути пустим!";
        if (size === "") errors.size = "Поле не може бути пустим!";
        if (price === "") errors.price = "Поле не може бути пустим!";
        if (rating === "") errors.rating = "Поле не може бути пустим!";
        if (color === "") errors.color = "Поле не може бути пустим!";
        if (material === "") errors.material = "Поле не може бути пустим!";
        if (type === "") errors.type = "Поле не може бути пустим!";
        if (producer === "") errors.producer = "Поле не може бути пустим!";
        if (country === "") errors.country = "Поле не може бути пустим!";
        if (image === "") errors.image = "Поле не може бути пустим!";
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            console.log("Model is Valid");
            //ajax axios post
            const model = {
                name,
                size,
                price,
                rating,
                color,
                material,
                type,
                producer,
                country,
                image,
                gender
            };
            axios.post("/api/addproduct", model).then(
                resp => {
                    this.fileUpload(image);
                    console.log("----server responce----", resp);
                },
                error => {
                    console.log("----server error----", error);
                }
            );
            //Uplaod Image
        } else {
            this.setState({ errors });
        }
    };
    getCroppedImage = img => {
        this.setState({ image: img });
    };
    render() {
        const {
            name,
            size,
            price,
            rating,

            errors,
            image,
            colors,
            materials,
            types,
            producers,
            genders,
            countries
        } = this.state;
        return (
            <div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="w-40">
                                <Img
                                    className="rounded-circle"
                                    width="100"
                                    src={image}
                                    unloader={
                                        <img
                                            width="100"
                                            // src="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"
                                            src="https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <CropperModal getCroppedImage={this.getCroppedImage} />
                    <TextFieldGroup
                        field="name"
                        label="Назва"
                        value={name}
                        error={errors.name}
                        onChange={this.handleChange}
                    />
                    <TextFieldGroup
                        field="size"
                        label="Розмір"
                        value={size}
                        error={errors.size}
                        onChange={this.handleChange}
                    />
                    <TextFieldGroup
                        field="price"
                        label="Ціна"
                        value={price}
                        error={errors.price}
                        onChange={this.handleChange}
                    />
                    <TextFieldGroup
                        field="rating"
                        label="Рейтинг"
                        value={rating}
                        error={errors.rating}
                        onChange={this.handleChange}
                    />
                    <SelectFieldGroup
                        fieldname="color"
                        arrayOfData={colors}
                        selected="Колір"
                        onSelectChange={this.handleColorSelectChange}
                    />

                    <SelectFieldGroup
                        fieldname="material"
                        arrayOfData={materials}
                        selected="Матеріал"
                        onSelectChange={this.handleMaterialSelectChange}
                    />
                    <SelectFieldGroup
                        fieldname="type"
                        arrayOfData={types}
                        selected="Тип"
                        onSelectChange={this.handleTypeSelectChange}
                    />
                    <SelectFieldGroup
                        arrayOfData={producers}
                        selected="Виробник"
                        fieldname="producer"
                        onSelectChange={this.handleProducerSelectChange}
                    />
                    <SelectFieldGroup
                        fieldname="gender"
                        arrayOfData={genders}
                        selected="Стать"
                        onSelectChange={this.handleGenderSelectChange}
                    />

                    <SelectFieldGroup
                        fieldname="country"
                        arrayOfData={countries}
                        selected="Країна"
                        onSelectChange={this.handleCountrySelectChange}
                    />

                    <div className="form-group  d-flex justify-content-center">
                        <button className="btn btn-primary ">Додати</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProduct;
