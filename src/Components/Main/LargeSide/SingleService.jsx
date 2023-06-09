import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillCaretRight } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";

const SingleService = () => {
  return (
    <Col style={{marginBottom: '20px'}} sm={6}>
      <div className="singleService">
        <h3 className="title">title</h3>
        <Row>
          <Col sm={2}>
            <GiBookCover color="green" style={{fontSize: "60px"}} />
          </Col>
          <Col sm={10}>
            <ul className="list">
              <li>
                <AiFillCaretRight color="green" /> <a>home</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default SingleService;
