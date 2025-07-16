import PropTypes from "prop-types";
import clsx from "clsx";

const VARIANT_STYLES = {
  primary: "text-white bg-Green-400 hover:bg-Green-700",
  secondary: "text-Gray-500 bg-Gray-500/20",
  ghost: "text-white bg-Gray-500/40",
};

const Button = ({
  variant = "primary",
  className,
  children,
  type = "button",
  ariaLabel,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-full font-medium transition-colors duration-500 w-fit h-fit cursor-pointer";
  const variantStyles = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

  return (
    <button
      type={type}
      className={clsx(baseStyles, variantStyles, className)}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "ghost"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string,
};

export default Button;
