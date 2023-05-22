import React from "react";
import { Suspense } from "react";
import { HashLoader } from "react-spinners";
import MediumVideo from "./MediumVideo";
import ModesensVideo from "./ModesensVideo";
import "./Projects.css";

const SwiggyVideo = React.lazy(() => import("./SwiggyVideo"));
const CoScheduleVideo = React.lazy(() => import("./CoScheduleVideo"));
const SudokuVideo = React.lazy(() => import("./SudokuVideo"));

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="p-title">PROJECTS</h1>
      <div className="project">
        <h1 className="project-heading">Medium Clone</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="expressjs" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongoDB" />
  <img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" alt="chakra-ui" />
            </div>
            <div className="project-video-div-for-media">
              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "20px",
                      paddingBottom: "50px",
                      paddingTop: "50px",
                    }}
                  >
                    <HashLoader />
                  </div>
                }
              >
                <MediumVideo />
              </Suspense>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://medium-web-app.netlify.app/"
                  target="blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/akashkmt/Medium-Clone"
                  target="blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            Here you can Read Blogs, Create Blogs, Follow other Creators, Like Blogs, and vice versa as well.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details">
              <li>Sign Up | Login | Auto Login Feature</li>
              {/* <br /> */}
              <li>Google and Facebook Sign Up | Login Integration</li>
              {/* <br /> */}
              <li>Recommended Feed for reading</li>
              {/* <br /> */}
              <li>Read Blogs | Create Blogs | Delete Blogs</li>
              <li>Like Blogs | Dislike Blogs</li>
              <li>Follow Other Creators | Unfollow Users</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details">
              <li>Lead the Team and Manage the Project</li>
              {/* <br /> */}
              <li>
              Developed UI and Full Flow of Web App
              </li>
              {/* <br /> */}
              <li>
              Developed Like Blog | Dislike Blog | Follow User | Unfollow User | Auto Login | Create Blog | Delete Blog --- Features
              </li>
              {/* <br /> */}
              <li>Developed Backend using NodeJs | ExpressJs | MongoDB</li>
              {/* <br /> */}
              <li>Deployed the Project -- Frontend and Backend Deployment</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 5 Developers within 7 days.
            </h1>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">ModeSens Clone</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
            <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="redux"/>
            <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="material-ui" />
            <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styles-components" /> 
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "20px",
                      paddingBottom: "50px",
                      paddingTop: "50px",
                    }}
                  >
                    <HashLoader />
                  </div>
                }
              >
                <ModesensVideo />
              </Suspense>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://modesens-web-app-clone.netlify.app/"
                  target="blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/akashkmt/ModeSens-Clone"
                  target="blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            Here you can buy Fashion, Beauty, and Personal Essentials Products.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details">
              <li>Sign Up | Login | All Products Page - with Filter & Sort Functionality</li>
              {/* <br /> */}
              <li>Single Product Page (dynamic) along with Add To Cart Feature</li>
              {/* <br /> */}
              <li>Checkout | Payment Page along with all Functionality</li>
              {/* <br /> */}
              <li>Third-Party Integration for checking Card Details for Pay Via Card</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details">
              <li>Lead the Team and Manage the Project</li>
              {/* <br /> */}
              <li>
              Developed Checkout | Payment Page along with all Functionality
              </li>
              {/* <br /> */}
              <li>
              Third-Party Integration for checking Card Details for Pay Via Card
              </li>
              {/* <br /> */}
              <li>Developed Checkout Page along with all Functionality</li>
              {/* <br /> */}
              <li>Developed Backend for Web App</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 5 Developers within 7 days.
            </h1>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Swiggy Clone</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
              {/* <ReactPlayer
              className = "project-video"
              // style={{ padding: "10px", margin:'auto' }}
              width="100%"
              controls={true}
              url="/Swiggy.mp4"
              playing={true}
              loop={true}
            /> */}

              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "20px",
                      paddingBottom: "50px",
                      paddingTop: "50px",
                    }}
                  >
                    <HashLoader />
                  </div>
                }
              >
                <SwiggyVideo />
              </Suspense>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://akashkmt.github.io/swiggy-web-app-clone/"
                  target="blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/akashkmt/swiggy-web-app-clone"
                  target="blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
              Here you can order food from restaurants as you like.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details">
              <li>Sign Up | Login | Landing Page | Home Page | Apply Coupons | Add Address</li>
              {/* <br /> */}
              <li>Restaurant Page ( Dynamic ) | Add Food Items in Cart | Search for Restaurants</li>
              {/* <br /> */}
              <li>Filter & Sort Restaurants according to your need</li>
              {/* <br /> */}
              <li>Checkout and Payment Page along with all Functionality</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details">
              <li>Developed Landing Page and Footer</li>
              {/* <br /> */}
              <li>
              Sign Up and Login Functionality along with user profile integration
              </li>
              {/* <br /> */}
              <li>
              Developed a Particular Restaurant Page with all Functionality ( Dynamic )
              </li>
              {/* <br /> */}
              <li>Developed Checkout & Payment Page along with all Functionality | Add Address and Apply Coupon Feature</li>
              {/* <br /> */}
              <li>Developed Backend for Web App using JSON-Server</li>
              <li>Deployed the Project along with Frontend and Backend Deployment</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 4 Developers within 7 days.
            </h1>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Sudoku Solver</h1>
        <div className="project2">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="React"
              />
            </div>
            <div className="project-video-div-for-media">
              {/* <ReactPlayer
              className = "project-video"
              width="100%"
              // style={{ padding: "10px", margin:'auto'}}
              controls={true}
              url="/CoSchedule.mp4"
              playing={true}
              loop={true}
            /> */}

              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "20px",
                      paddingBottom: "50px",
                      paddingTop: "50px",
                    }}
                  >
                    <HashLoader />
                  </div>
                }
              >
                <SudokuVideo />
              </Suspense>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://sudoku-solver-by-akash.netlify.app/"
                  target="blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/akashkmt/sudoku-solver"
                  target="blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">Online web app that can Solve a Sudoku.</h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details">
              <li>Create Sudoku</li>
              {/* <br /> */}
              <li>Solve Sudoku</li>
              {/* <br /> */}
              <li>Reset Sudoku</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details">
              <li>
                Developed the entire Application along with all Functionality
              </li>
            </ul>
            <h1 className="p-div">
              An individual project - developed within 1 day.
            </h1>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">CoSchedule Clone</h1>
        <div className="project2">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
            </div>
            <div className="project-video-div-for-media">
              {/* <ReactPlayer
              className = "project-video"
              width="100%"
              // style={{ padding: "10px", margin:'auto'}}
              controls={true}
              url="/CoSchedule.mp4"
              playing={true}
              loop={true}
            /> */}

              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "20px",
                      paddingBottom: "50px",
                      paddingTop: "50px",
                    }}
                  >
                    <HashLoader />
                  </div>
                }
              >
                <CoScheduleVideo />
              </Suspense>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://akashkmt.github.io/coSchedule-Clone/"
                  target="blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/akashkmt/coSchedule-Clone"
                  target="blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
              Online website that can organize, manage and schedule all your
              tasks in one place.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details">
              <li>Sign Up | Login</li>
              {/* <br /> */}
              <li>Create My Calendar</li>
              {/* <br /> */}
              <li>Add, Filter, Search and Delete Task</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details">
              <li>Lead the Team | Manage the Project | Deployment of Project</li>
              {/* <br /> */}
              <li>Developed Home Page</li>
              {/* <br /> */}
              <li>Add Task Page along with all Functionality</li>
              {/* <br /> */}
              <li>Developed Responsiveness of all Pages</li>
              {/* <br /> */}
              <li>Developed other supporting pages for website</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 5 Developers within 7 days.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
