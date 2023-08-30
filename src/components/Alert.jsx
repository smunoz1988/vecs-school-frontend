import PropTypes from 'prop-types';

const Alert = ({alert}) => {
  return (
    <div className={`${alert.error ? "red-alert" : "blue-alert"}`}>
        {alert.msg}
    </div>
  )
}

Alert.propTypes = {
  alert: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired
  })
};

export default Alert