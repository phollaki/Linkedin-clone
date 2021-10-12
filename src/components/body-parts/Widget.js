import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import Recommendation from "../layout-parts/Recommendation";
function Widget() {
  return (
    <div className="widget">
      <div className="widget__top">
        <p>Add to your feed</p>
        <InfoIcon className="widget__infoIcon" />
      </div>
      <div className="widget__recommendations">
        <Recommendation
          avatar="data:image/png;base64,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"
          title="Apple"
          description="Company • Consumer Electronics"
        />
        <Recommendation
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQF8paxRmnuJxg/profile-displayphoto-shrink_800_800/0/1517556808961?e=1639612800&v=beta&t=9k4AoL9w9zYi1w71gjN1joOf3mkrhRBunzwohQt96XI"
          title="Andrew NG"
          description="Founder and CEO of Landing AI (We're hiring!); Founder of deeplearning.ai"
        />
        <Recommendation
          avatar="https://media-exp1.licdn.com/dms/image/C560BAQGrV5i4K9YdhQ/company-logo_200_200/0/1621582241755?e=1642032000&v=beta&t=HRySh_llNz83mmYJ8VXGUb7oKpA4UXuwX40M5U-29RM"
          title="Facebook"
          description="Our mission is to give people the power to build community and bring the world closer together."
        />
      </div>
      <div className="widget__bottom">
        <p className="widget__bottomText">View all recommendations--</p>
      </div>
    </div>
  );
}

export default Widget;
