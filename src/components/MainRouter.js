import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Profile from "./Profile";
import Foundation from "./Foundation";
import Main from "./Main";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MainRouter() {
    const language = localStorage.getItem('lang');

    return (
        <Switch>
            <Route exact path="/">
                {language ? <Redirect to={'/'+language} /> : <Main />}
            </Route>
            <Route path="/:lang/foundation/:info">
                <Foundation />
            </Route>
            <Route path="/:lang/foundation">
                <Foundation />
            </Route>
            <Route path="/:lang/projects">
                <Projects />
            </Route>
            <Route path="/:lang/contact">
                <Contact />
            </Route>
            <Route path="/:lang/:id/:info">
                <Profile />
            </Route>
            <Route path="/:lang/:id">
                <Profile />
            </Route>
            <Route path="/:lang">
                <Main />
            </Route>
        </Switch>
    )
}

