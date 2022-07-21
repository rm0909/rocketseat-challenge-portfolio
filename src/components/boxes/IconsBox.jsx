import githubIcon from "../assets/github.svg";
import locationIcon from "../assets/map-pin.svg";
import mail from "../assets/mail.svg";
import twitterIcon from "../assets/twitter.svg";
import globeIcon from "../assets/globe.svg";
import { BsLinkedin } from "react-icons/bs";
import { ReactSVG } from "react-svg";
function IconBox({
  email,
  twitter,
  location,
  linkedin,
  github,
  personalWebsite,
}) {
  return (
    <section className="icon-box cards">
      <div className="icon-text ">
        <ReactSVG src={locationIcon} size="24px" className="inline-block" />
        <p className="icon-text inline-block"> {location}</p>
      </div>
      <div className="icon-text ">
        <ReactSVG src={mail} size="24px" className="inline-block" />
        <p className="icon-text inline-block"> {email}</p>
      </div>
      <div className="icon-text ">
        <ReactSVG src={twitterIcon} size="24px" className="inline-block" />
        <a className="icon-text inline-block"> {twitter}</a>
      </div>

      <div className="icon-text ">
        <ReactSVG src={githubIcon} size="24px" className="inline-block" />
        <a className="icon-text inline-block"> {github}</a>
      </div>
      <div className="icon-text ">
        <ReactSVG src={globeIcon} size="24px" className="inline-block" />
        <a className="icon-text inline-block"> {personalWebsite}</a>
      </div>
      <div className="icon-text ">
        <BsLinkedin size="24px" className="inline-block" />
        <a className="icon-text inline-block"> {linkedin}</a>
      </div>
    </section>
  );
}
export { IconBox };
