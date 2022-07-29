import React from 'react';
import './discover.css';
import {discoverData} from '../../config/discoverConfig'

export default function Discover() {
    return (
        <div className='discover-main-container'>
            <div className="discover-container">
                <div className='discover-image-container'>
                    <img src={require(`../../assets/images/discover/${discoverData.imageName}.jpeg`)} className="discover-image" alt="logo" />
                    <div className='discover-name'>{discoverData.name}</div>
                </div>
                <div className='discover-header'>
                   About me
                </div>
                <div className='discover-content-container'>
                    <div className='discover-content'>
                        {discoverData.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
