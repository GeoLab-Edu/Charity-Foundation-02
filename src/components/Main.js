import {withNamespaces} from "react-i18next";

function Main({ t }) {
    return (
        <>
            <h1>Main Works!!!</h1>
        </>
    )
}

export default withNamespaces()(Main);
