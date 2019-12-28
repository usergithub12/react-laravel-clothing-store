import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import ShopItem from "../shopItem/ShopItem";
const ProductModal = props => {
    const {
        name,
        price,
        size,
        rating,
        main_image,
        buttonLabel,
        className,
        type
    } = props;

    let imgPath = `/images/${main_image}`;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            {/* <Button color="danger" onClick={toggle}>
                {buttonLabel}
            </Button> */}
            <form onClick={toggle}>
                <ShopItem
                    type={type}
                    name={name}
                    price={price}
                    size={size}
                    rating={rating}
                    main_image={main_image}
                />
            </form>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody className="text-body">
                    <ShopItem
                        name={name}
                        price={price}
                        size={size}
                        rating={rating}
                        main_image={main_image}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Додати в кошик
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                        Скасувати
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ProductModal;
