import PropTypes from 'prop-types';

const Alert = ({alert}) => {
  return (
    <div>
        {alert.msg}
    </div>
  )
}

Alert.propTypes = {
  alert: PropTypes.objectOf.isRequired,
};

export default Alert