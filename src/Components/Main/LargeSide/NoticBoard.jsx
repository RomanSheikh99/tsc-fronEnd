import React from "react";
import { Button } from "react-bootstrap";
import { AiFillCaretRight } from "react-icons/ai";


const NoticBoard = () => {
  return (
    <div className="notisBoard">
      <div className="notissec">
        <h3 className="noticeTitle">Notice</h3>
        <ul className="noticeList">
          <li><AiFillCaretRight color="green"/> <a className="text-muted text-decoration-none">e-Tender Notice ( 06-02-2023 )</a></li>
          <li><AiFillCaretRight color="green"/> <a className="text-muted text-decoration-none">Admission Circular (SEIP) ( 08-11-2022 )</a></li>
          <li><AiFillCaretRight color="green"/> <a className="text-muted text-decoration-none">Admission Circular ( 15-08-2022 )</a></li>
          <li><AiFillCaretRight color="green"/> <a className="text-muted text-decoration-none">HSC XI=XII FORMFILLUP ( 07-06-2022 )</a></li>
          <li><AiFillCaretRight color="green"/> <a className="text-muted text-decoration-none">Notice ( 24-04-2022 )</a></li>
          <li><AiFillCaretRight color="green"/> <a className="text-muted text-decoration-none">CLASS SUSPEND NOTICE ( 11-04-2022 )</a></li>
          <li><AiFillCaretRight color="green"/> <a className="text-muted text-decoration-none">HSC (VOCATIONAL) ADMISSION NOTICE-2022 ( 09-04-2022 )</a></li>
          <li><AiFillCaretRight color="green"/> <a className="text-muted text-decoration-none">SSC (VOCATIONAL) X ADMISSION NOTICE -2022 ( 09-04-2022 )</a></li>
        </ul>
      </div>
     <div className="noticeBtn">
     <Button variant="primary">Read More</Button>
     </div>
    </div>
  );
};

export default NoticBoard;
