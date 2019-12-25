import React, { Component, Fragment } from 'react'
import "./Single.css"

export class SingleItem extends Component {

    
    render() {
        return (
            <Fragment>
                <div className="text-white bg-dark mb-3">
                    <div className="row">
                        <div className="col">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img className="d-block w-100 ImaGe" src="https://rukminim1.flixcart.com/image/800/960/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8f5tyeqm9x.jpeg?q=50" alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 ImaGe" src="https://rukminim1.flixcart.com/image/800/960/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8fsfjrjzy7.jpeg?q=50" alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 ImaGe" src="https://rukminim1.flixcart.com/image/800/960/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8fz829dcme.jpeg?q=50" alt="Third slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 ImaGe" src="https://rukminim1.flixcart.com/image/800/960/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8fszkez3bm.jpeg?q=50" alt="Third slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 ImaGe" src="https://rukminim1.flixcart.com/image/800/960/k3yrte80/shoe/h/8/p/sd0323g-10-sparx-white-black-original-imafmz8fpbn55gjz.jpeg?q=50" alt="Third slide"/>
                                </div>
                            </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <h5 className="row">Name</h5>
                            <h3 className="font-weight-bold">8000$</h3>
                            <div className="row">
                                <div class="form-group col">
                                    <label for="Size" class="bmd-label-floating">Size</label>
                                    <select class="form-control" id="Size">
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                    </select>
                                </div>
                                <div class="form-group col">
                                    <label for="Color" class="bmd-label-floating">Color</label>
                                    <select class="form-control" id="Color">
                                    <option>Red</option>
                                    <option>Blue</option>
                                    <option>Green</option>
                                    <option>Yelow</option>
                                    <option>White</option>
                                    </select>
                                </div>
                            </div>
                            <button type="button" class="row btn btn-raised btn-primary btn-lg">Add To Cart</button>
                        </div>
                    </div>
                    <div className="row">
                        <p className="des">Description = jifru eijvfusi vuajfgbd jfyjdks jufgjtkis uydfnjg kgtidusy gxbcvnjbmk oltriduj fktiru snajystfgy trfw vgtefrgj tufjkdoijf kgolikkmkiy jtmrkjfgmkiujnb fkdinsy gtzatrqdcf 26twf3vgb4u ryntjkikyky mlp0oik,,olijugnvfiuc ygdbsytfwvgt3 frvgu4njm 5ki6m,lypolk ,loijkigubfn dygtsvwbygv3b njernt mkgoiujb nvjic duysbgnje4 jmktiguynbf idjbsnjieb4 njtikyjn gjmvkijnc bdnsjbe y4gvbuedgb vbsnjuan wjmekjnr ntg</p>
                    </div>
                </div>
                
            </Fragment>
            
        )
    }
}

export default SingleItem
