import React from "react";
import { Col, Row } from "react-bootstrap";
import { GiBookCover } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      name: "Admission/Registration",
      ssc: <a>SSC</a>,
      hsc: <a>SSC</a>,
      others: <a>Others</a>,
      icon: <GiBookCover color="purple" style={{ fontSize: "80px" }} />,
    },
    {
      name: "Office Order / NOC",
      ssc: <a>NOC</a>,
      hsc: <a>Office Order</a>,
      others: <a>Others</a>,
      icon: <GiBookCover color="purple" style={{ fontSize: "80px" }} />,
    },
    {
      name: "Natinal Integrity Strategy",
      ssc: <a>Natinal Integrity Strategy</a>,
      hsc: <a>Work Plan</a>,
      others: <a>Implementation Committee</a>,
      icon: <GiBookCover color="purple" style={{ fontSize: "80px" }} />,
    },
    {
      name: "Download",
      ssc: <a>Prospectus and Other</a>,
      icon: <GiBookCover color="purple" style={{ fontSize: "80px" }} />,
    },
    {
      name: "Right to Information",
      ssc: <a>Right to info. and appeals officer</a>,
      hsc: <a>Form</a>,
      others: <a>Others</a>,
      icon: <GiBookCover color="purple" style={{ fontSize: "80px" }} />,
    },
    {
      name: "Annual Performance Agreement",
      icon: <GiBookCover color="purple" style={{ fontSize: "80px" }} />,
    },
  ];
  return (
    <div style={{ marginTop: "15px", marginBottom: "20px" }}>
      <Row>
        {services.map((service, i) => {
          return (
            <Col key={i} style={{ marginBottom: "10px" }} sm={6}>
              <div className="singleService" id="singleServices">
                <h3 className="title">{service.name}</h3>
                <Row style={{ marginBottom: "60px" }}>
                  <Col sm={2}>{service.icon}</Col>
                  <Col sm={10}>
                    <ul className="list">
                      <li>
                        {/* <AiFillCaretRight color="green" /> */}
                        <a href="">{service.ssc}</a>
                      </li>
                      <li>
                        {/* <AiFillCaretRight color="green" />  */}
                        <a href="">{service.hsc}</a>
                      </li>
                      <li>
                        {/* <AiFillCaretRight color="green" /> */}
                        <a href="">{service.others}</a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Services;
