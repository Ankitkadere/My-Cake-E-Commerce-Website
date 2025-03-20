import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Cardbox/Cardbox.css";

function Cardbox() {
  return (
    <>
      <div className="card-container">
        <Card className="bigbox">
         
          <div className="boget">
            <Card.Body>
            <div className="boget bogetimg">
            <Card.Img
              className="cardboximg"
              variant="top"
              src=" https://static.vecteezy.com/system/resources/previews/003/138/583/large_2x/happy-birthday-cake-on-white-background-photo.jpg"
            />
          </div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                The cake upon her birthday was a gift of the heart, for in that
                moment of giving lives a moment of divine vulnerability.
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </div>
        </Card>

        <Card className="bigbox">
          <div className="boget">
            <Card.Body>
              {" "}
              <div className="boget bogetimg">
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINjnprRWmNvYqHA7Ter5p_2oibMm1yJ40RA&s"
                />
              </div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                The cake upon her birthday was a gift of the heart, for in that
                moment of giving lives a moment of divine vulnerability.
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </div>
        </Card>

        <Card className="bigbox">
         
          <div className="boget">
            <Card.Body>
            <div className="boget bogetimg">
            <Card.Img
              className="cardboximg"
              variant="top"
              src=" https://media.istockphoto.com/id/176853352/photo/round-chocolate-cake-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XyHu8C-JI0fWYg0XA1ve_P_kZBls-UlN3dkY_Yeejf0="
            />
          </div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                The cake upon her birthday was a gift of the heart, for in that
                moment of giving lives a moment of divine vulnerability.
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </div>
        </Card>
      </div>
      <hr></hr>
    </>
  );
}

export default Cardbox;
