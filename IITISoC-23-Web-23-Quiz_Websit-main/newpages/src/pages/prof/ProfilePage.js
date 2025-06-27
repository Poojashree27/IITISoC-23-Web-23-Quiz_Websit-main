import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProfilePage.css"; // contains background + custom tweaks

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Container className="py-5 text-white">
        {/* Header Row */}
        <Row className="align-items-center justify-content-between mb-4">
          <Col>
            <h1 className="display-3 fw-bold">Quizzylicious</h1>
          </Col>
          <Col xs="auto">
            <Link to="/home">
              <Button className="home-btn">Home Page</Button>
            </Link>
          </Col>
        </Row>

        {/* Profile Icon */}
        <Row className="justify-content-center mb-4">
          <Col xs="auto">
            <img
              src="/ellipse-2@2x.png"
              alt="Profile"
              className="profile-icon"
            />
          </Col>
        </Row>

        {/* Greeting Box */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8}>
            <div className="greeting-box text-center">
              <h4>Hey there! Let’s check your progress.</h4>
            </div>
          </Col>
        </Row>

        {/* Cards Row */}
        <Row className="g-4 justify-content-center">
          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm bg-light text-dark">
              <Card.Body>
                <Card.Title>📊 View Progress</Card.Title>
                <Card.Text>
                  See your stats, performance charts, and more.
                </Card.Text>
                <Button variant="primary" size="sm">Check Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm bg-light text-dark">
              <Card.Body>
                <Card.Title>🏆 Leaderboard</Card.Title>
                <Card.Text>
                  See how you rank against other students.
                </Card.Text>
                <Button variant="primary" size="sm">View Leaderboard</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 shadow-sm bg-light text-dark">
              <Card.Body>
                <Card.Title>🧠 Start New Quiz</Card.Title>
                <Card.Text>
                  Ready for a challenge? Try a new quiz now!
                </Card.Text>
                <Button variant="success" size="sm">Start Quiz</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
