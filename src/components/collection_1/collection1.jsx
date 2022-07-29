import React from 'react';
import './collection1.css';
import { collectionImage, collectionData } from '../../config/collection1';
import { useNavigate } from 'react-router-dom';

export default function Collection1() {

    const navigate = useNavigate();
    
    const navigateToSample = (itemData) => {
        navigate('/designer_sample', { state : itemData });
    }

    return (
        <div className="collection-center">
            <div className='collection-container'>
                <div className="collection-header-title">
                    {collectionImage.title}
                </div>
                <div className="collection-label-image-container">
                    <img src={require(`../../assets/images/collection_1/${collectionImage.imageName}.jpeg`)} className="collection-label-image" alt="logo" />
                </div>
                <div className="collection-1-layout">
                    <div className="row">
                        {collectionData.map((itemData, idx) => (
                            <div key={idx} className="col-md-4 col-12">
                                <div className="collection-item-image-container" onClick={()=>navigateToSample(itemData)}>
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
