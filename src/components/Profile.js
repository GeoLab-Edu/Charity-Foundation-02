import {withNamespaces} from "react-i18next";
import {useParams} from "react-router-dom";

function Profile({ t }) {
    let { id, info } = useParams();
    return (
        <>
            <h1> {id} : {info}</h1>
        </>
    )
}

export default withNamespaces()(Profile);
