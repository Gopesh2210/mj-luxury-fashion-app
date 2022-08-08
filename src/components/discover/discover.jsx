import React from 'react';
import './discover.css';
import { discoverData, ourHistoryData } from '../../config/discoverConfig'

export default function Discover() {
    return (
        <div className='discover-main-container'>
            <div className="discover-container">
                <div className="container discover-image-container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={require(`../../assets/images/discover/${discoverData.imageName}.jpeg`)} className="discover-image" alt="logo" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='discover-header'>
                                About Manali Jagtap
                            </div>
                            <div className='discover-content-container'>
                                <ul className='discover-content'>
                                    {discoverData.aboutMeDescription.map((descPointer, idx) => (
                                        <li key={idx} className="pointers-desc">
                                            {descPointer}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DESKTOP VIEW */}
                <div className='sectional-container desktop-view-discover'>
                    <div className="sectional-label">Our History</div>
                    {ourHistoryData.map((ourHistoryDataItem, idx) => (
                        <div key={idx}>
                            {idx % 2 === 0 &&
                                <div className='row'>
                                    <div id="sectional-d-col-1" className="col-6">
                                        <img src={require(`../../assets/images/discover/${ourHistoryDataItem.imageName}.jpeg`)} className="event-image" alt="logo" />
                                    </div>
                                    <div id="sectional-d-col-2" className="col-6">
                                        <div className="event-name-padding">
                                            <div className="event-title">{ourHistoryDataItem.title}</div>
                                            <div className="event-desc">{ourHistoryDataItem.description}</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {idx % 2 !== 0 &&
                                <div className='row'>
                                    <div id="sectional-d-col-3" className="col-6">
                                        <div className="event-name-padding">
                                            <div className="event-title">{ourHistoryDataItem.title}</div>
                                            <div className="event-desc">{ourHistoryDataItem.description}</div>
                                        </div>
                                    </div>
                                    <div id="sectional-d-col-4" className="col-6">
                                        <img src={require(`../../assets/images/discover/${ourHistoryDataItem.imageName}.jpeg`)} className="event-image" alt="logo" />
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                    }
                </div>

                {/* MOBILE VIEW */}
                < div className='sectional-container mobile-view-discover' >
                    <div className="sectional-label">Our History</div>
                    {
                        ourHistoryData.map((ourHistoryDataItem, idx) => (
                            <div key={idx}>
                                <div className='row'>
                                    <div className="col-12">
                                        <img src={require(`../../assets/images/discover/${ourHistoryDataItem.imageName}.jpeg`)} className="event-image" alt="logo" />
                                    </div>
                                    <div className="col-12">
                                        <div className="event-name-padding">
                                            <div className="event-title">{ourHistoryDataItem.title}</div>
                                            <div className="event-desc">{ourHistoryDataItem.description}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
