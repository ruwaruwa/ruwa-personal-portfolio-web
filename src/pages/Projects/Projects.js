import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import p2 from '../../assets/images/p2.PNG'
import p3 from '../../assets/images/p3.PNG'
import pw from '../../assets/images/web2.PNG'
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">online complainment </span>
                  <img src={p2}
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      oline complainment Website FullStack
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/ruwaruwa/complaint_Fronend"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Prarmacy</span>
                  <img
                    src={p3}
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>

                  <span className="card-detail-badge">IOS / ANDROID</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">pharmachy system</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/ruwaruwa/pharmacyfroend_full"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">real state</span>
                  <img
                    src={pw}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">real state project</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
