import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";

const MyBadge = ({ type, colorBadge }) => {
  return (
    <Badge pill bg={colorBadge}>
      {type}
    </Badge>
  );
};
export default MyBadge;
