import PropTypes from 'prop-types';

//Pass everything to the button as props in order to style it to your own prefence
export const PrimaryButton = ({ btnName, className, id, onClick }) => {
    return (
        <button className={className} id={id} onClick={onClick}>
            {btnName}
        </button>
    )
}

//Button has variuos porptypes defined as follows.....setting a different proptype than the pre defined will result in an error
PrimaryButton.propTypes = {
    btnName: PropTypes.string,
    className: PropTypes.any,
    id: PropTypes.any,
    onClick: PropTypes.func
}