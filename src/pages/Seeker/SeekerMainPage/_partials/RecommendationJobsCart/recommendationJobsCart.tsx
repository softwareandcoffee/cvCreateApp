import { IonContent, IonPage, IonImg, IonIcon } from "@ionic/react";
import React from "react";
import { searchOutline } from "ionicons/icons";

import "./recommendationJobsCart.scss";

const RecommendationJobsCart: React.FC = () => {
  const recomendation_jobs_list = [
    {
      company_logo: "assets/jobs/thy.jpeg",
      job_title: "Web Frontend Developer (İstanbul)",
      company_name: "Turkish Technology",
      published: "4 saat önce",
    },
    {
      company_logo: "assets/jobs/icron.jpeg",
      job_title: "Front-End Developer (Angular)",
      company_name: "ICRON",
      published: "3 gün önce",
    },
    {
      company_logo: "assets/jobs/hb.jpeg",
      job_title: "Frontend Developer (Remote)",
      company_name: "Hepsiburada",
      published: "1 hafta önce",
    },
    {
      company_logo: "assets/jobs/TW2.jpeg",
      job_title: "Web Frontend Developer (Hibrit)",
      company_name: "Twelve 12",
      published: "3 ay önce",
    },
    {
      company_logo: "assets/jobs/network.jpeg",
      job_title: "Web Frontend Developer (ReactJS)",
      company_name: "Network Hardwares",
      published: "1 ay önce",
    },
  ];

  return (
    <div className="RecommendationJobsCart">
      <div className="recommendation-title">Öneriler</div>
      <div className="container">
        {recomendation_jobs_list.map((job, index) => (
          <div className="recomendation-list" key={index}>
            <div className="company-logo">
              <IonImg class="img" src={job?.company_logo} />
            </div>
            <div className="inside">
              <div className="company">{job?.company_name}</div>
              <div className="title">{job?.job_title}</div>
              <div className="published">{job?.published}</div>
            </div>
            <div className="btn">
              <IonIcon icon={searchOutline}></IonIcon>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationJobsCart;
