import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { emailId } from '../../config/contactConfig'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-background'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="footer-sub-container">
                                <div className="footer-text">Follow</div>
                                <a href="https://www.facebook.com/manalijagtapmj/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className='footer-logo'/></a>
                                <a href="https://www.instagram.com/manalijagtapofficial/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='footer-logo'/></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div  className="footer-sub-container">
                                <div className="footer-text">Enquire</div>
                                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailId}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className='footer-logo'/></a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='footer-copyright'>
                            <a href='https://www.linkedin.com/in/gopeshrajderkar/' className='copyright-text' target="_blank">© Gopesh Rajderkar 2022 </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
