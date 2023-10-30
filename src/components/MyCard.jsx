import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import MyBadge from "./Tags";

const MyCard = ({ image, title, type, colorBadge, text }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <MyBadge type={type} colorBadge={colorBadge} />
        </Card.Body>
      </Card>
    </>
  );
};
export default MyCard;
