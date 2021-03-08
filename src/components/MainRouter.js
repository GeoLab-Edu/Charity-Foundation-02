import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Profile from "./Profile";
import Main from "./Main";
import Details from "./Details";
import Contact from "./Contact";
import ScrollToTop from "../ScrollToTop";

export default function MainRouter() {
    const language = localStorage.getItem('lang');

    return (
        <ScrollToTop>
            <Switch>
                <Route exact path="/">
                    {language ? <Redirect to={'/'+language} /> : <Main />}
                </Route>
                <Route path="/:lang/contact">
                    <Contact />
                </Route>
                <Route path="/:lang/:id/:info">
                    <Details />
                </Route>
                <Route path="/:lang/:id">
                    <Profile />
                </Route>
                <Route path="/:lang">
                    <Main />
                </Route>
            </Switch>
        </ScrollToTop>
    )
}

