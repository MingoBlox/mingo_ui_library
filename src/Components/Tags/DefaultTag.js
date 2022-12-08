import PropTypes from 'prop-types';

export const DefaultTag = ({ className, tagName, id, sx }) => {

    return (
        <>
            <p className={className} id={id} style={sx}>{tagName}</p>
        </>
    )

}


DefaultTag.propTypes = {
    className: PropTypes.any,
    tagName: PropTypes.string,
    sx: PropTypes.any,
    id: PropTypes.any,
}
