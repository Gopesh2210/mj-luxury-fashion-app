import React from 'react';
import './home.css';
import { homePageCarouselData, homePageBranding } from '../../config/homeConfig';

// import { Link } from 'react-router-dom';
// import { logoData, homePageCarouselData, featuredCollectionData, featuredCollectionImages } from '../../config/homeConfig';
// import { routePaths } from '../../config/routePaths'

export default function Home() {
    return (
        <div>
            <div className="home-container">
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require(`../../assets/images/home/${homePageCarouselData[0].imageName}.jpeg`)} className="d-block carousel-img-size" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{homePageCarouselData[0].title}</h5>
                                <p>{homePageCarouselData[0].description}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require(`../../assets/images/home/${homePageCarouselData[1].imageName}.jpeg`)} className="d-block carousel-img-size" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{homePageCarouselData[1].title}</h5>
                                <p>{homePageCarouselData[1].description}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require(`../../assets/images/home/${homePageCarouselData[2].imageName}.jpeg`)} className="d-block carousel-img-size" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{homePageCarouselData[2].title}</h5>
                                <p>{homePageCarouselData[2].description}</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='home-branding'>
                    <img src={require(`../../assets/images/home/${homePageBranding.imageName}.jpeg`)} className="home-branding-img" alt="logo" />
                </div>

                {/* <div className="collections-card-container">

                <div className='feature-collection-header'>Featured Collection</div>
                <div className="container">
                    <div className="row">
                        <p className="collections-label-text">{featuredCollectionData[0].title}</p>
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="collection-card-item">
                                    <img src={require(`../../assets/images/home/${featuredCollectionImages[0].imageName}.jpeg`)} className="collection-img-home" alt="logo" />
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="collection-card-item">
                                    <img src={require(`../../assets/images/home/${featuredCollectionImages[1].imageName}.jpeg`)} className="collection-img-home" alt="logo" />
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="collection-card-item">
                                    <img src={require(`../../assets/images/home/${featuredCollectionImages[2].imageName}.jpeg`)} className="collection-img-home" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row collections-desc-container">
                        <p className="collections-desc-text">
                            {featuredCollectionData[0].description}
                        </p>
                        <div className="view-more-container">
                            <Link to={routePaths[2].path}><button type="button" className="btn  btn-outline-dark view-btn-style">view collection</button></Link>
                        </div>
                    </div>

                </div>
                <div className="collection-break-space"></div>
            </div> */}
            </div>
        </div>
    )
}
