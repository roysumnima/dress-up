import PropTypes from "prop-types";

function FaceCustomisation({id, className}) {
    return (
        <div id={id} className={className}>
            hello
        </div>
    )
}

FaceCustomisation.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default FaceCustomisation;