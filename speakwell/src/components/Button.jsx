

import PropTypes from 'prop-types';


const Button = ({ label, onClick, type, disabled, className }) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  className: '',
};

export default Button;
