import React from 'react';
import './designer-sample.css';
import { useLocation } from 'react-router-dom';
import { contactNo, emailId } from '../../config/contactConfig';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function DesignerSample() {

    const location = useLocation();
    const itemData = location.state;

    return (
        <div>
            <div className="sample-container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="sample-img-container">
                            <img src={require(`../../assets/images/collection_1/${itemData.imageName}.jpeg`)} className="collection-item-sample-image" alt="sample" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="sample-desc-container">
                            <div className="sample-title">
                                {itemData.title}
                            </div>
                            <div className="sample-id">
                                code #{itemData.id}
                            </div>
                            <div className="sample-desc">
                                {itemData.description}
                            </div>
                            <div className="contact-us-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div><FontAwesomeIcon icon={faWhatsapp} className="contact-logo"/><span className="contact-text">Order : {contactNo}</span></div>
                                        <div><FontAwesomeIcon icon={faEnvelope} className="contact-logo"/><span className="contact-text">Queries : {emailId}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
