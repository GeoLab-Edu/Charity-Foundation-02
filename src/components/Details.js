import {withNamespaces} from "react-i18next";
import '../assets/css/styles.css';
import '../assets/css/projects.css';
import dataEn from "../lang/en/data.json"
import dataKa from "../lang/ka/data.json"
import {Link, useParams} from "react-router-dom";

function Details({ t }) {
    const language = localStorage.getItem('lang');
    let { id, info } = useParams();
    const dataByLang = {
        ka: dataKa,
        en: dataEn
    }
    const data = dataByLang[language];

    function Projects() {
        if (id == "projects") {
            return(
                <>
                {data[id].content.map((item , index)=>
                    <section className="light prj-mb" key={index}>
                        <div className="container prj">
                            <h2 className="prj-title">{item.title}</h2>
                            <h5 className="prj-h5">{item.h5}</h5>
                            <h3 className="prj-h3">{item.h3}</h3>
                            <p className="section-text">
                                {item.content}
                            </p>
                            <Link to={'/'+language+'/contact'} className="dark-btn prj-btn">{t ('register')}</Link>
                        </div>
                    </section>
                )}
                </>
            )
        }
        else {return <></>}
    }

    function TextContent() {
        if (info == "mission" || info == "about" || info == "press" || info == "media") {
            return(
                <>
                    <section className="light prj-mb">
                        <div className="container prj">
                            <h2 className="prj-title mb-20">{data[id][info].title}</h2>
                            {data[id][info].content.map((item, index)=>
                                <p className="section-text mb-20" key={index}>
                                    {item}
                                </p>
                            )}
                        </div>
                    </section>
                </>
            )
        }
        else {return <></>}
    }

    function Photos() {
        if (info == "photos") {
            return(
                <>
                    { data[id].photos.map((item, index)=>
                    <section className="light" key={index}>
                        <div className="container">
                            <h2 className="prj-title mb-20">{item.title}</h2>
                            <div className="flex flex-wrap">
                                { item.images.map((image, index)=>
                                    <div className="photos-box" key={index}>
                                        <img className="img-full" src={image} alt={data[id].title} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    )}
                </>
            )
        }
        else {return <></>}
    }

    function Manuscripts() {
        if (info == "manuscripts") {
            return(
                <>
                    <section className="light">
                        <div className="container">
                            <h2 className="prj-title mb-20">{t ('menu.manuscripts')}</h2>
                            <div className="manu flex flex-wrap">
                                {data[id].manuscripts.map((item)=>
                                    <div className="manu-item" key={item.id}>
                                        <img className="img-full" src={item.photo} alt={item.title} />
                                        <h3 className="manu-title">{item.title}</h3>
                                        <p className="manu-info">{item.info}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </>
            )
        }
        else {return <></>}
    }

    function Team () {
        if (info == "team") {
            return (
                <>
                    <section className="light">
                        <div className="container">
                            <h2 className="prj-title mb-20">{t ("menu.team")}</h2>
                            {data[id].team.map((item)=>
                                <div className="team flex" key={item.id}>
                                    <div className="team-photo">
                                        <img className="img-full" src={item.photo} alt={item.person} />
                                    </div>
                                    <div className="team-info">
                                        <h3 className="team-name">{item.person}</h3>
                                        <p className="team-about">{item.about}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </>
            )
        } else {
            return <></>
        }
    }

    return (
        <>
            <div className="container">
                <h1 className="projects-title">{data[id].title}</h1>
            </div>
            <Projects />
            <TextContent />
            <Photos />
            <Manuscripts />
            <Team />
        </>
    )
}

export default withNamespaces()(Details);
