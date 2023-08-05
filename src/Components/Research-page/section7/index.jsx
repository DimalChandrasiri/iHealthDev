import React from "react";
import "./index.css";
import Research6 from "src/Assets/Images/Research-6.png";

const section7 = () => {
  return (
  <div>
    <div className="involvement">
          <img src={Research6} alt="" />
          <div className="involve1">
              <span className="span3">How to Get Involved?</span>
              <p className="p1">Participating in NF research is accessible and straightforward. Here are some steps you can take to get involved: </p><br/>
              <div className="involve2">
              <p><span>1.Stay Informed</span> Keep yourself updated on the latest NF research by following reputable NF organizations, medical journals, and research institutions. They often share information about ongoing studies and clinical trials.</p>
              <p><span>2.Explore Research Opportunities</span> Investigate local hospitals, universities, and research centers with expertise in NF. These institutions often conduct research studies and may be actively seeking participants. Reach out to them and inquire about ongoing studies or upcoming opportunities.</p>
              <p><span>3.Join Registries and Patient Databases</span> Consider joining NF registries or patient databases. These resources collect valuable information from individuals with NF, enabling researchers to identify potential participants for specific studies or trials.</p>
              <p><span>4.Consult with Healthcare Providers</span> Discuss your interest in participating in NF research with your healthcare provider or NF specialist. They can guide you, provide recommendations, and help connect you with relevant research opportunities.</p>
        </div>
        </div>
        </div>
  </div>
)};

export default section7;
