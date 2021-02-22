import {withNamespaces} from "react-i18next";
import {useParams} from "react-router-dom";

function Fouindation({ t }) {
    let { info } = useParams();
    return (
        <>
            <h1>Fouindation Works: {info}</h1>
        </>
    )
}

export default withNamespaces()(Fouindation);
