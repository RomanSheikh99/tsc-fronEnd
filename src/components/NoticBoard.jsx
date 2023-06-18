import React from "react";
import { Button } from "react-bootstrap";
import { AiFillCaretRight } from "react-icons/ai";


const NoticBoard = () => {
  return (
    <div className="notisBoard">
      <div className="notissec">
        <h3 className="noticeTitle">Notice</h3>
        <ul className="noticeList">
          <li><AiFillCaretRight color="green"/> <a className="text-muted text-decoration-none">e-Tender Notice</a></li>
        </ul>
      </div>
     <div className="noticeBtn">
     <Button variant="primary">Read More</Button>
     </div>
    </div>
  );
};

export default NoticBoard;
