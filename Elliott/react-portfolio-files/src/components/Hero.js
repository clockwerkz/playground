import React from "react";
import {Jumbotron, Row, Col, Image,  md} from "react-bootstrap"
const Hero = (props) => {
    return (
        <Jumbotron className="hero">
          <Row>
          <Col md={6}>
            <h1>hey everybody, I'm Elliott Lockwood</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
          </Col>
          <Col md={6}>
            <Image fluid src="https://cdn.vox-cdn.com/thumbor/DK_hPYgY_URto0p9hZPGt_tK9ME=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11471419/Marino_Start.jpg" />
          </Col>
        </Row>
      </Jumbotron>
    )
}
export default Hero;