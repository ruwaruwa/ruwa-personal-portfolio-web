import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            {/* Work Experience */}
            TRAININGS AND SEMINARS
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022-2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
            traning of figma and wordpress
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
           kahiye technology
              </h4>
              <p>
                Design websites work with creative teams to
                design and produce the visual layout.
              </p>
            </VerticalTimelineElement>

<VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Feb2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
              Training of Mearn stack development

              </h3>
              <h4 className="vertical-timeline-element-subtitle">
           negaad
institude of technology

              </h4>
              <p>
                Designed and Developed websites with
                bootstrap framework and react js
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2021-2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
              Training on Computer Hardware
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Somali International University-SIU
              </h4>
          
          
            </VerticalTimelineElement>
   
               
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
               career opportunities in cybercurity 
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              simad ilap,so
              </h4>
              {/* <p>
                Design directores work with creative teams to
                design and produce the visual layout.
              </p> */}
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
