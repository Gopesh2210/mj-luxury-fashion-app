import React from 'react';
import './collection1.css';
import { collectionLabel, collectionData } from '../../config/collection1';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '../../config/routePaths'

export default function Collection1() {

    const navigate = useNavigate();

    const navigateToSample = (itemData) => {
        navigate(routePaths[1].path, { state: itemData });
    }

    return (
        <div className="collection-center">
            <div className='collection-container'>
                <div className="collection-header-title">
                    {collectionLabel.title}
                </div>
                <div className="collection-label-container">
                    {/* <img src={require(`../../assets/images/collection_1/${collectionLabel.imageName}.jpeg`)} className="collection-label" alt="logo" /> */}
                        <video className='collection-label' autoPlay loop>
                            <source src={require(`../../assets/images/collection_1/${collectionLabel.videoName}.mp4`)} type="video/mp4"/>
                        </video>
                        </div>
                        <div className="collection-1-layout">
                            <div className="row">
                                {collectionData.map((itemData, idx) => (
                                    <div key={idx} className="col-md-3 col-12">
                                        <div className="collection-item-image-container" onClick={() => navigateToSample(itemData)}>
                                            <img src={require(`../../assets/images/collection_1/${itemData.imageName}.jpeg`)} className="collection-item-image" alt="logo" />
                                            {/* <span className='collection-item-title'>{itemData.title}</span> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
            </div>

            )
}
