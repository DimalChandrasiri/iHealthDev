import React, { useEffect } from "react";
import "./index.css";
import Research4 from "src/Assets/Images/Research-4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const section4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      mirror: false,
    });
  }, []);

  return (
    <div className="info">
      <div className="more-info">
        <h2 className="span">Here is more information about MEK protein</h2>
        <p>
          The MEK protein, also known as Mitogen-Activated Protein Kinase
          Kinase, is a key component of the mitogen-activated protein kinase
          (MAPK) signaling pathway. This pathway is responsible for transmitting
          signals from the cell surface to the nucleus, regulating various
          cellular processes such as cell growth, differentiation, and survival.
          MEK acts as an intermediate signaling molecule in the MAPK pathway.
          When an extracellular signal, such as a growth factor, binds to a
          receptor on the cell surface, it triggers a cascade of molecular
          events, leading to the activation of MEK. Activated MEK then
          phosphorylates and activates downstream kinases, known as ERK
          (Extracellular signal-Regulated Kinases). ERKs subsequently enter the
          nucleus and initiate gene expression, resulting in the regulation of
          various cellular functions. In the context of neurofibromatosis, the
          MEK protein plays a significant role in the development of
          neurofibromas, which are benign tumors that can arise in individuals
          with neurofibromatosis type 1 (NF1). Inhibiting the activity of MEK
          using drugs like Selumetinib has shown promise in reducing tumor
          growth and improving symptoms associated with NF1-related plexiform
          neurofibromas.
        </p>
      </div>
      <div className="evorolimus">
        <img data-aos="slide-right" src={Research4} alt="" />
        <div>
          <h1 data-aos="slide-left">
            <span className="span2">Everolimus</span>
            <br />
          </h1>

          <p data-aos="slide-left">
            Research studies and clinical trials have investigated the use of
            Everolimus in managing NF1-related tumors, particularly plexiform
            neurofibromas (PNs). Everolimus an mTOR inhibitor, has emerged as a
            notable therapeutic option in the realm of neurofibromatosis (NF)
            research. Extensive clinical trials have investigated its potential
            in treating NF-related tumors, particularly subependymal giant cell
            astrocytomas (SEGAs) associated with neurofibromatosis type 1 (NF1)
            or tuberous sclerosis complex
          </p>
          <p data-aos="slide-left">
            The efficacy of Everolimus in managing SEGAs has been significant,
            leading to its approval by the U.S. Food and Drug Administration
            (FDA) specifically for the treatment of SEGAs in individuals with
            TSC. This achievement signifies the recognition of Everolimus as a
            viable and beneficial treatment option for this particular
            manifestation of NF-related tum
          </p>
          <p data-aos="slide-left">
            The targeted inhibition of mTOR, a protein involved in regulating
            cell growth and proliferation, has shown promise in effectively
            addressing SEGAs associated with NF1 and TSC. The approval of
            Everolimus for SEGAs marks an important milestone in the field of NF
            research and presents new hope for individuals affected by these tum
          </p>
          <p data-aos="slide-left">
            As ongoing research and clinical trials continue to unfold, further
            insights may emerge regarding the broader applicability of
            Everolimus and its potential for treating other NF-related tum
          </p>
          <p data-aos="slide-left">
            Everolimus was well-tolerated by the participants in the study.
            Fifteen of the 22 participants in the study experienced tumor
            shrinkage or no tumor growth, with 10 of those remaining free of
            progression during follow-up. The study indicates that everolimus
            should be considered for therapy in this patient population. In
            addition, amongst those with an optic pathway glioma, the majority
            had stable visual acuity after treatment with everolimus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default section4;
