import React, { Component } from 'react'
import ShopItem from "./shopItem/ShopItem"

export class ShopList extends Component {

    
    render() {
        return (
            <div className="container">
                <div className="row" >
                    <div className="card-columns">
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                        <ShopItem/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ShopList
