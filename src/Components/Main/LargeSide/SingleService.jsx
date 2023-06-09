import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillCaretRight } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";

const SingleService = ({service}) => {
  const {icon,name,ssc,hsc,others} = service
  return (
    <Col style={{marginBottom: '10px'}} sm={6}>
      <div className="singleService">
        <h3 className="title">{name}</h3>
        <Row style={{marginBottom:'60px'}}>
          <Col sm={2}>
           {icon}
          </Col>
          <Col sm={10}>
            <ul className="list">
              <li>
                <AiFillCaretRight color="green" /><a href="">{ssc}</a>
              </li>
              <li>
                <AiFillCaretRight color="green" /> <a href="">{hsc}</a>
              </li>
              <li>
                <AiFillCaretRight color="green" /><a href="">{others}</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default SingleService;
