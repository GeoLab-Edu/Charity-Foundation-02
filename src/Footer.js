import {withNamespaces} from "react-i18next";
import emailIcon from './assets/images/email.png';
import smartphoneIcon from './assets/images/smartphone.png';
import placeholderIcon from './assets/images/placeholder.png';
import fbIcon from './assets/images/fb.png';
import ytIcon from './assets/images/yt.png';
import './assets/css/footer.css';

function Footer({ t }) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="flex footer-content">
                    <div className="footer-item">
                        <div className="footer-item-image">
                            <img src={emailIcon} alt="Email"/>
                        </div>
                        <div className="footer-item-title">
                            {t ('footer.email')}
                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="footer-item-image">
                            <img src={smartphoneIcon} alt="Phone"/>
                        </div>
                        <div className="footer-item-title">
                            {t ('footer.phone')}
                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="footer-item-image">
                            <img src={placeholderIcon} alt="Placeholder"/>
                        </div>
                        <div className="footer-item-title">
                            {t ('footer.address')}
                        </div>
                    </div>
                    <div className="footer-item social">
                        <div className="footer-item-image">
                            <img src={fbIcon} alt="Facebook"/>
                            <img src={ytIcon} alt="Youtube"/>
                        </div>
                        <div className="footer-item-title">
                            {t ('footer.social')}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default withNamespaces()(Footer);
