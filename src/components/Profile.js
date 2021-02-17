import {withNamespaces} from "react-i18next";
import {useParams} from "react-router-dom";

function Profile({ t }) {
    let { id } = useParams();
    return (
        <>
            <h1> {id} </h1>
        </>
    )
}

export default withNamespaces()(Profile);
