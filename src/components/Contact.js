import {withNamespaces} from "react-i18next";
import '../assets/css/styles.css';
import '../assets/css/contact.css';
import emailIcon from '../assets/images/email.svg';
import smartphoneIcon from '../assets/images/smartphone.svg';
import placeholderIcon from '../assets/images/placeholder.svg';
import GoogleMaps from './GoogleMaps'


function Contact({ t }) {

    function onContactSubmit(e){
        e.preventDefault()
    }

    return (
        <>
            <div className="container">
                <h1 className="contact-title">{t ('menu.contact')}</h1>
            </div>
            <div className="contact">
                <div className="contact-info">
                    <div className="contact-info-header">
                        <img src={emailIcon} alt="Email" className="contact-icon" />
                        <div>{t ('footer.email')}</div>
                    </div>
                    <form onSubmit={onContactSubmit} className="contact-form">
                        <input type="text" placeholder={t ('contact.name')} className="contact-input small" />
                        <input type="text" placeholder={t ('contact.lastname')} className="contact-input small" />
                        <input type="text" placeholder={t ('contact.email')} className="contact-input" />
                        <textarea className="contact-input contact-textarea" placeholder={t ('contact.message')}></textarea>
                        <input type="submit" value={t ('contact.button')} className="dark-btn contact-btn"/>
                    </form>
                </div>
            </div>
            <div className="contact-det">
                <div className="contact-det-item">
                    <img src={smartphoneIcon} alt="Phone"/>
                    <p>{t ('footer.phone')}</p>
                </div>
                <div className="contact-det-item">
                    <img src={placeholderIcon} alt="Placeholder"/>
                    <p>{t ('footer.address')}</p>
                </div>
            </div>
            <div className="mb-40">
                <GoogleMaps />
            </div>
        </>
    )
}

export default withNamespaces()(Contact);
