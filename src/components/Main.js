import {withNamespaces} from "react-i18next";
import cover from '../assets/images/cover.png';
import '../assets/css/styles.css';
import '../assets/css/main.css';
import {Link} from "react-router-dom";

function Main({ t }) {
    return (
        <>
            <section className="main-cover">
                <img src={cover} alt="" className="img-full" />
                <h2 className="main-cover-title">{t ('main.coverTitle')}</h2>
            </section>
            <section className="light">
                <div className="container">
                    <h2 className="section-title">{t ('main.missionTitle')}</h2>
                    <div className="flex sm-wrap">
                        <div className="w-50 w-sm-100">
                            <p className="section-text">
                                {t ('main.missionContent1')}
                            </p>
                        </div>
                        <div className="w-50 w-sm-100">
                            <p className="section-text">
                                {t ('main.missionContent2')}
                            </p>
                        </div>
                    </div>
                    <Link to="/" className="readmore">{t ('readMore')}<span></span></Link>
                </div>
            </section>
        </>
    )
}

export default withNamespaces()(Main);
