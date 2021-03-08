import {withNamespaces} from "react-i18next";
import {Link, useParams} from "react-router-dom";
import dataEn from "../lang/en/data.json"
import dataKa from "../lang/ka/data.json"
import '../assets/css/profile.css';
import '../assets/css/styles.css';



function Profile({ t }) {
    const language = localStorage.getItem('lang');
    let { id, info } = useParams();
    const dataByLang = {
        ka: dataKa,
        en: dataEn
    }
    const data = dataByLang[language];

    function Team () {
        if (data[id].team) {
            return (
                <>
                    <section className="light">
                        <div className="container">
                            <h2 className="section-title">{t ("menu.team")}</h2>
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

    function Manuscripts() {
        if (data[id].manuscripts) {
            return(
                <>
                    <section className="light">
                        <div className="container">
                            <h2 className="section-title">{t ('menu.manuscripts')}</h2>
                            <div className="manu flex">
                                {data[id].manuscripts.slice(0, 2).map((item)=>
                                    <div className="manu-item" key={item.id}>
                                        <img className="img-full" src={item.photo} alt={item.title} />
                                        <h3 className="manu-title">{item.title}</h3>
                                        <p className="manu-info">{item.info}</p>
                                    </div>
                                )}
                            </div>
                            <Link to={'/' + language + '/' + id + '/manuscripts' } className="readmore">{t ('readMore')}<span></span></Link>
                        </div>
                    </section>
                </>
            )
        }
        else {return <></>}
    }

    function Press() {
        if (data[id].press) {
            return <>
                <section className="light">
                    <div className="container">
                        <h2 className="section-title">{t ('menu.press')}</h2>
                        <p className="section-text">
                            {data[id].press.content[0]}
                        </p>
                        <Link to={'/' + language + '/' + id + '/press' } className="readmore">{t ('readMore')}<span></span></Link>
                    </div>
                </section>
            </>
        }else {return <></>}
    }

    function Media() {
        if (data[id].media) {
            return <>
                <section className="light">
                    <div className="container">
                        <h2 className="section-title">{t ('menu.media')}</h2>
                        <p className="section-text">
                            {data[id].media.content[0]}
                        </p>
                        <Link to={'/' + language + '/' + id + '/media' } className="readmore">{t ('readMore')}<span></span></Link>
                    </div>
                </section>
            </>
        }else {return <></>}
    }

    return (
        <>
            <div className="pr-cover flex flex-wrap">
                <div className="w-50 w-sm-100">
                    <img src={data[id].cover} className="img-full" alt={data[id].title} />
                </div>
                <div className="w-50 w-sm-100">
                    <h1 className={`pr-cover-title ${id}`}>{data[id].title}</h1>
                    <div className="pr-cover-line"></div>
                </div>
            </div>
            <section className="light">
                <div className="container">
                    <h2 className="section-title">{data[id].about.title}</h2>
                    <p className="section-text">{data[id].about.content[0]}</p>
                    <Link to={'/' + language + '/' + id + '/about' } className="readmore">{t ('readMore')}<span></span></Link>
                </div>
            </section>
            <section className="light">
                <div className="container">
                    <h2 className="section-title">{t ("photos")}</h2>
                    <div className="flex flex-wrap">
                        { data[id].photos[0].images.map((item)=>
                            <div className="photos-box" key={item}>
                                <img className="img-full" src={item} alt={data[id].title} />
                            </div>
                        )}
                    </div>
                    <Link to={'/' + language + '/' + id + '/photos' } className="readmore">{t ('readMore')}<span></span></Link>
                </div>
            </section>
            <Press />
            <Manuscripts />
            <Media />
            <Team />
            {/*<h1> {id} : {info}</h1>*/}

        </>
    )

}

export default withNamespaces()(Profile);
