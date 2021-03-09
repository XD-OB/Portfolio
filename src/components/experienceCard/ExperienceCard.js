import React, { Component } from "react";
import { experience } from "../../portfolio";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    let video;

    if (experience["video_link"] === "") video = <p></p>;
    else
      video = (
        <center>
          <a
            href={experience["video_link"]}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p
              style={{ color: theme.text, fontSize: "1.2em", color: "#DA0000" }}
            >
              See my presetation video! &nbsp;&nbsp; 📺
            </p>
          </a>
        </center>
      );

    return (
      <div
        className="experience-card"
        style={{ border: `1px solid ${experience["color"]}` }}
      >
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <br />
          <br />

          {experience.descriptions.map((sentence) => {
            return (
              <p
                className="experience-card-description"
                style={{ color: theme.text }}
              >
                {sentence}
              </p>
            );
          })}
          <br />
          {video}
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
