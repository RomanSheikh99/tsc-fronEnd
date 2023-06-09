import React from "react";
import { Button } from "react-bootstrap";
import { AiFillCaretRight } from "react-icons/ai";


const NoticBoard = () => {
  return (
    <div className="notisBoard">
      <div className="notissec">
        <h3 className="noticeTitle">notis board</h3>
        <ul className="noticeList">
          <li><AiFillCaretRight color="green"/> <a>home</a></li>
          <li>hello</li>
          <li>hi</li>
          <li>no </li>
          <li>give</li>
        </ul>
      </div>
     <div className="noticeBtn">
     <Button variant="primary">All</Button>
     </div>
    </div>
  );
};

export default NoticBoard;
