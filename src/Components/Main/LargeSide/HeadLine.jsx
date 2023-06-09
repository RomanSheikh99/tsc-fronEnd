import React from "react";
import { Image } from "react-bootstrap";
import "animate.css";

const HeadLine = () => {
  return (
    <div className="headLine">
      <Image src="assets/image/National-Portal-Card-PM.jpeg" fluid />
      <div className="scroll" bis_skin_checked="1">
        <h3>
          <marquee
            direction="left"
            scrollamount="4"
            onMouseOver={()=>{this.stop()}}
            onMouseOut={()=>{this.start()}}
          >
            <span style={{background:"none",color:"#FF5C72", fontWeight: "bold"}}>
              <span style={{color: "#ff0000"}}>*&nbsp;</span>
              ৬ষ্ঠ শ্রেনী থেকে ৮ম শ্রেনীতে জেএসসি (ভোকেশনাল) কোর্সে, এবং নবম
              শ্রেনীতেঁ এসএসসি (ভোকেশনাল) কোর্সে আবেদন চলছে। আবেদন শুরু
              ১১/১২/২০২১ খ্রিঃ হতে ০৫/০১/২০২২ খ্রিঃ পর্যন্ত। প্রতিষ্ঠানের
              একাডেমিক শাখা অথবা প্রতিষ্ঠানের অফিসিয়াল ওয়েবসাইট
              satkhiratsc.gov.bd/online_admissions থেকে আবেদন ফর্ম সংগ্রহ করার
              জন্য বলা হল। ধন্যবাদ <span style={{color: "#ff0000"}}>*&nbsp;</span>
            </span>
          </marquee>
        </h3>
      </div>
    </div>
  );
};

export default HeadLine;
