import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

// AI ========================================
const ai_projects = [
  {
    id: "MDEwOlJlcG9zaXRvcnkzMTUyOTkzNjg=",
    name: "DSLR",
    createdAt: "2020-12-23T11:52:33Z",
    url: "https://github.com/XD-OB/DSLR",
    description:
      "Harry Potter and a Data Scientist: Write a  multi-class classifier using gradient descent optimization algorithm to replace the bewitched Sorting Hat and save Hogwarts! 🎩🧙‍♂️",
    isFork: false,
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
    ],
  },
  {
    id: "MDEwOlJlcG9zaXRvcnkzMTUCOTkzNjg=",
    name: "ft_linear_regression",
    createdAt: "2020-11-13T16:47:03Z",
    url: "https://github.com/XD-OB/ft_linear_regression",
    description:
      "Univariable Linear regression model ( Cars dataset Milage/Price ) 🛣️ 🚗 💰",
    isFork: false,
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
    ],
  },
  {
    id: "MDEwOlJlcG9zaXRvcnkyMzY4ODA2NjU=",
    name: "lem_in",
    createdAt: "2020-01-29T01:26:29Z",
    url: "https://github.com/XD-OB/lem_in",
    description:
      "Program an AI ant colony manager to help them cross a graph in as few strokes as possible, the result can be displayed with a visualizer 🐜🐜🐜",
    isFork: false,
    languages: [
      {
        name: "C",
        iconifyClass: "logos-c",
      },
    ],
  },
  {
    id: "MDExOlJlcG9zaXRvcnkyMzY4ODA2NjU=",
    name: "Corewar",
    createdAt: "2020-01-26T01:16:50Z",
    url: "https://github.com/XD-OB/Corewar",
    description:
      "Create a VM “arena” in which programs 'Champions' will fight against each others. You will also create an assembler to compile those Champions, and make Champion. ",
    isFork: false,
    languages: [
      {
        name: "C",
        iconifyClass: "logos-c",
      },
    ],
  },
  {
    id: "MDExOlJlcG9zaXRvcnkyMzY99DA2NjU=",
    name: "Filler",
    createdAt: "2019-03-17T01:16:50Z",
    url: "https://github.com/XD-OB/Filler",
    description:
      "🤼 2 players take turns placing the piece that the master of the game, gives them, earning points.",
    isFork: false,
    languages: [
      {
        name: "C",
        iconifyClass: "logos-c",
      },
    ],
  },
];

// WEB ========================================
const web_projects = [
  {
    id: "MDEwOlJlcG9zaXRvcnkyNjc3MjIxOTQ=",
    name: "Echo Tele Expertise",
    createdAt: "2020-05-28T23:53:15Z",
    url: "https://github.com/XD-OB/Echo_Tele_Expertise",
    description:
      "Mise en place d'une plateforme de teleconsultation et teleexpertise echographiques.",
    isFork: false,
    languages: [
      {
        name: "Django",
        iconifyClass: "logos-django",
      },
      {
        name: "PostgreSQL",
        iconifyClass: "logos-postgresql",
      },
      {
        name: "Bootstrap",
        iconifyClass: "logos-bootstrap",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
    ],
  },
  {
    id: "MDEwOlJlcG9zaXRvcnkyNjQzMzUwNTQ=",
    name: "BT Real Estate",
    createdAt: "2020-05-16T01:30:09Z",
    url: "https://github.com/XD-OB/BT_real_estate",
    description:
      "🏠 Real Estate Website built using Django, and PostgresSQL for the database",
    isFork: false,
    languages: [
      {
        name: "Django",
        iconifyClass: "logos:django",
      },
      {
        name: "PostgreSQL",
        iconifyClass: "logos-postgresql",
      },
      {
        name: "Bootstrap",
        iconifyClass: "logos-bootstrap",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
    ],
  },
  {
    id: "MDEwOlJlcG9zaXRvcnkyNjc3MjIxOTQ=",
    name: "Persa App",
    createdAt: "2021-02-14T09:28:15Z",
    url: "https://github.com/XD-OB/persa_app",
    description: "A beautiful template to practice my knowledge in NextJS.",
    isFork: false,
    languages: [
      {
        name: "NextJS",
        iconifyClass: "logos-nextjs",
      },
      {
        name: "CSS 3",
        iconifyClass: "logos-css-3",
      },
    ],
  },
  {
    id: "MDEwOlJlcG9zaXRvcdnkyNjc3MjIxOTQ=",
    name: "Persa API",
    createdAt: "2021-02-14T11:18:15Z",
    url: "https://github.com/XD-OB/persa_api",
    description:
      "Backend API for an app using ExpressJS and MongoDB for a NO SQL database, with JWT for the authentification.",
    isFork: false,
    languages: [
      {
        name: "NodeJS",
        iconifyClass: "logos-nodejs",
      },
      {
        name: "MongoDB",
        iconifyClass: "logos-mongodb",
      },
    ],
  },
  {
    id: "MDEwOlJlcG9zaXRvcnkyNjc3MjIaOTQ=",
    name: "Portfolio",
    createdAt: "2021-02-21T04:18:15Z",
    url: "/",
    description:
      "My Portfolio a living and changing collection of records that reflect my accomplishments, skills, experiences, and attributes. It highlights and showcases samples of some of my best work, along with life experiences, values and achievements trophies.",
    isFork: false,
    languages: [
      {
        name: "ReactJS",
        iconifyClass: "logos-react",
      },
      {
        name: "CSS 3",
        iconifyClass: "logos-css-3",
      },
    ],
  },
];

// MOBILE ========================================
const mobile_projects = [
  {
    id: "MDEwOlJlcG0zaXsvcnkyNDMxMjU4Nzc=",
    name: "Islami",
    createdAt: "2020-11-15T11:30:05Z",
    url: "https://github.com/XD-OB/Islami",
    description:
      "Application for Muslims to find Qibla 🧭, Facilitate counting of Tasbeeh 🧮 & Find mosques 🕌☪️️",
    isFork: false,
    languages: [
      {
        name: "Google Maps API",
        iconifyClass: "logos-google-maps",
      },
      {
        name: "Flutter",
        iconifyClass: "logos-flutter",
      },
    ],
  },
  {
    id: "MDEwOlJacG9zaXRvcnkyNDMxMjU4Nzc=",
    name: "Flash_Chat",
    createdAt: "2020-02-25T23:36:25Z",
    url: "https://github.com/XD-OB/Flash_Chat",
    description:
      "⚡💬  Build a modern messaging app where users can sign up and log in to Chat.",
    isFork: false,
    languages: [
      {
        name: "Firebase",
        iconifyClass: "logos-firebase",
      },
      {
        name: "Flutter",
        iconifyClass: "logos-flutter",
      },
    ],
  },
  {
    id: "MDEwOlJlcG9zaXRvcnkyNDI3OTkyNjU=",
    name: "cryptocurrencies_exchanger",
    createdAt: "2020-02-24T17:30:40Z",
    url: "https://github.com/XD-OB/cryptocurrencies_exchanger",
    description:
      "💰 Crypto Currency BTC, ETH, LTC, XRP, XMR price checking App using flutter",
    isFork: false,
    languages: [
      {
        name: "Flutter",
        iconifyClass: "logos-flutter",
      },
    ],
  },
  {
    id: "MDEwOlJlcG3zaXRvcnkyNDMxMjU4Nzc=",
    name: "BMI Calculator",
    createdAt: "2020-02-22T215:14:105Z",
    url: "https://github.com/XD-OB/BMI-Calculator",
    description:
      "💪📏  Body Mass Index Calculator App using flutter to  measure the body fat based on height and weight for men and women.",
    isFork: false,
    languages: [
      {
        name: "Flutter",
        iconifyClass: "logos-flutter",
      },
    ],
  },
  {
    id: "MDXwmlJlcG3zaXRvcnkyNDMxMjU4Nzc=",
    name: "Clima",
    createdAt: "2020-02-10T215:12:135Z",
    url: "https://github.com/XD-OB/Clima",
    description:
      "🌦️ An App that find out the live weather data in the current location of the device as well as the weather for any city.",
    isFork: false,
    languages: [
      {
        name: "Flutter",
        iconifyClass: "logos-flutter",
      },
    ],
  },
  {
    id: "MDXwmlJlcG3zaXRvcnkyNDMxMjU6Nzc=",
    name: "Todoey",
    createdAt: "2020-02-01T215:10:135Z",
    url: "https://github.com/XD-OB/Todoey",
    description: "📝 Todolist app to keep track of all your tasks.",
    isFork: false,
    languages: [
      {
        name: "Flutter",
        iconifyClass: "logos-flutter",
      },
    ],
  },
  {
    id: "MEXwmlJlcG3zaXRvcnkyNDMxMjU6Nzc=",
    name: "Quizzler",
    createdAt: "2020-02-02T211:11:115Z",
    url: "https://github.com/XD-OB/Quizzler",
    description:
      "❓ A quiz app using flutter that tests your general knowledge.",
    isFork: false,
    languages: [
      {
        name: "Flutter",
        iconifyClass: "logos-flutter",
      },
    ],
  },
  {
    id: "MEXwmlJlcG3zaXRvcnkyNDMxMjU6Nzc=",
    name: "Xylophone",
    createdAt: "2020-01-18T211:01:115Z",
    url: "https://github.com/XD-OB/Xylophone",
    description: "🎵 A Xylophone Application using flutter",
    isFork: false,
    languages: [
      {
        name: "Flutter",
        iconifyClass: "logos-flutter",
      },
    ],
  },
];

// UNIX ========================================
const unix_projects = [
  {
    id: "ADEwOlJlcv3zaXRvcnkyNDMxMjU4Nzc=",
    name: "Minishell",
    createdAt: "2019-04-14T203:03:005Z",
    url: "https://github.com/XD-OB/minishell",
    description: "📜 Program a mini UNIX Command-line Interpreter.",
    isFork: false,
    languages: [
      {
        name: "C",
        iconifyClass: "logos-c",
      },
    ],
  },
  {
    id: "BDEwOlJlcG9zaXRvcnkyNDMxMjU4Nzc=",
    name: "ft_select",
    createdAt: "2020-01-11T201:55:195Z",
    url: "https://github.com/XD-OB/ft_select",
    description:
      "✔️ Program (using Termcaps) which allow you to pick from a list of choices and return it to your shell.",
    isFork: false,
    languages: [
      {
        name: "C",
        iconifyClass: "logos-c",
      },
    ],
  },
  {
    id: "BDAwOlJlcG9zaXRvcnkyNDMxMjU4Nzc=",
    name: "ft_ls",
    createdAt: "2019-05-29T202:33:195Z",
    url: "https://github.com/XD-OB/ft_ls",
    description: "Recode the command 'ls'",
    isFork: false,
    languages: [
      {
        name: "C",
        iconifyClass: "logos-c",
      },
    ],
  },
];

// GRAPHIC ========================================
const graphic_projects = [
  {
    id: "MDEwOlJlcG9zaXRvcnkyNDMxMjU96zc=",
    name: "F.D.F",
    createdAt: "2019-01-25T208:27:105Z",
    url: "https://github.com/XD-OB/F.D.F",
    description:
      "👷 Creating a simplified 3D graphic representation of a relief landscape using minilibX.",
    isFork: false,
    languages: [
      {
        name: "C",
        iconifyClass: "logos-c",
      },
    ],
  },
  {
    id: "MDEwOlJlcG9zaXRvcnkyNDMxMlU4Nzc=",
    name: "fractol",
    createdAt: "2019-02-06T207:29:005Z",
    url: "https://github.com/XD-OB/Fractol",
    description: "Create Graphically Beautiful Fractals ✨",
    isFork: false,
    languages: [
      {
        name: "C",
        iconifyClass: "logos-c",
      },
    ],
  },
];

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <br />
        <br />
        <Fade bottom duration={2000} distance="40px">
          <h1>Algorithm & AI</h1>
        </Fade>
        <div className="repo-cards-div-main">
          {ai_projects.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <br />

        <Fade bottom duration={2000} distance="40px">
          <h1>Web</h1>
        </Fade>
        <div className="repo-cards-div-main">
          {web_projects.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <br />

        <Fade bottom duration={2000} distance="40px">
          <h1>Mobile</h1>
        </Fade>
        <div className="repo-cards-div-main">
          {mobile_projects.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <br />

        <Fade bottom duration={2000} distance="40px">
          <h1>Unix</h1>
        </Fade>
        <div className="repo-cards-div-main">
          {unix_projects.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <br />

        <Fade bottom duration={2000} distance="40px">
          <h1>Graphic</h1>
        </Fade>
        <div className="repo-cards-div-main">
          {graphic_projects.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <br />
        <br />

        <br />

        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/XD-OB/"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
