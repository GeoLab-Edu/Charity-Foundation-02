import {
    Switch,
    Route,
} from "react-router-dom";
import Profile from "./Profile";
import Foundation from "./Foundation";
import Main from "./Main";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MainRouter() {
    return (
        <Switch>
            <Route path="/profile/:id">
                <Profile />
            </Route>
            <Route path="/foundation">
                <Foundation />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    )
}

