import React, { Component } from "react";
import TextFieldGroup from "../../../common/TextFieldGroup";
import CropperModal from "../../../common/cropper/CropperModal";
import Img from "react-image";
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
        errors: {}
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
            this.setState({ [name]: value });
        }
    };
    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
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
            image
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
                country
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
            color,
            material,
            type,
            producer,
            country,
            errors,
            image
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
                    <TextFieldGroup
                        field="color"
                        label="Колір"
                        value={color}
                        error={errors.color}
                        onChange={this.handleChange}
                    />
                    <TextFieldGroup
                        field="material"
                        label="Матеріал"
                        value={material}
                        error={errors.material}
                        onChange={this.handleChange}
                    />
                    <TextFieldGroup
                        field="type"
                        label="Тип"
                        value={type}
                        error={errors.type}
                        onChange={this.handleChange}
                    />
                    <TextFieldGroup
                        field="producer"
                        label="Виробник"
                        value={producer}
                        error={errors.producer}
                        onChange={this.handleChange}
                    />
                    <TextFieldGroup
                        field="country"
                        label="Країна"
                        value={country}
                        error={errors.country}
                        onChange={this.handleChange}
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
