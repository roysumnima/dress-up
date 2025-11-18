import './FullBody.css'
import PropTypes from "prop-types";

function FullBody({id, className}) {
    return (
        <div id={id} className={`${className} FullBody`}>
            <img src={"/body.png"} alt={"Full body placeholder"} className={'image-fit'}/>
        </div>
    )
}

FullBody.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default FullBody