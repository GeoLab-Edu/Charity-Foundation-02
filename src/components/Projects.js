import {withNamespaces} from "react-i18next";
import '../assets/css/styles.css';
import '../assets/css/projects.css';
import {Link} from "react-router-dom";

function Projects({ t }) {
    const language = localStorage.getItem('lang');

    return (
        <>
            <div className="container">
                <h1 className="projects-title">{t ('projects.title')}</h1>
            </div>
            <section className="light prj-mb">
                <div className="container prj">
                    <h2 className="prj-title">{t ('projects.sample.title')}</h2>
                    <h5 className="prj-h5">{t ('projects.sample.h5')}</h5>
                    <h3 className="prj-h3">{t ('projects.sample.h3')}</h3>
                    <p className="section-text">
                        {t ('projects.sample.content')}
                    </p>
                    <Link to={'/'+language+'/contact'} className="dark-btn prj-btn">{t ('register')}</Link>
                </div>
            </section>
            <section className="light prj-mb">
                <div className="container prj">
                    <h2 className="prj-title">{t ('projects.sample.title')}</h2>
                    <h5 className="prj-h5">{t ('projects.sample.h5')}</h5>
                    <h3 className="prj-h3">{t ('projects.sample.h3')}</h3>
                    <p className="section-text">
                        {t ('projects.sample.content')}
                    </p>
                    <Link to={'/'+language+'/contact'} className="dark-btn prj-btn">{t ('register')}</Link>
                </div>
            </section>
        </>
    )
}

export default withNamespaces()(Projects);
