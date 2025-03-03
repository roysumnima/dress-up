import PropTypes from "prop-types";

function FullBody({id, className}) {
    return (
        <div id={id} className={className}>

        </div>
    )
}

FullBody.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default FullBody