import React, { Component  } from 'react'
import {Link} from 'react-router-dom'
//import { Button } from 'semantic-ui-react'
import "./ShopItem.css"


export class ShopItem extends Component {
    render() {
        return (
            
                <Link to="/Item">
                    <div className="card col text-white bg-dark mb-3" >
                        
                        <img className="card-img-top" src="https://rukminim1.flixcart.com/image/880/1056/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8fpbn55gjz.jpeg?q=50" alt="Card image cap"/>
                        
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="">5$</p>                    
                        </div> 
                    </div>
                </Link>
            

        )
    }
}

export default ShopItem
