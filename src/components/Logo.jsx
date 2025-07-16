import clsx from "clsx";
import { Link } from "react-router-dom";

const baseImagePath = import.meta.env.BASE_URL;

function Logo({
  image = `${baseImagePath}/logo.svg`,
  className,
  alt = "Crowdfund Logo",
  ...props
}) {
  return (
    <Link to="/">
      <img src={image} alt={alt} {...props} className={clsx(className)} />
    </Link>
  );
}

export default Logo;
