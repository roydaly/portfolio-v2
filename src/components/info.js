import React from "react"
import Resume from "./Daly_Resume_2019.pdf"

import {
  FaStackOverflow as Stack,
  FaGithub as Github,
  FaLinkedinIn as LinkedIn,
  FaFreeCodeCamp as Fcc,
  FaEnvelope as Mail,
  FaPhone as Phone,
  FaFileDownload as File
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Roy.
      </div>
      <div className="h1 code mt-4 mb-3">setAboutMe {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        Pilot, Customer Success Manager and Managing Broker turned full-stack web developer.
        <br /> I have a broad experience with various development technologies, and I am currently specializing in JavaScript, React and TypeScript.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="tel:425-306-7299" target="_blank" rel="noopener noreferrer">
          <Phone />
        </a>
        <a className="mr-5 icon" href="https://stackoverflow.com/users/12032022/roydaly" target="_blank" rel="noopener noreferrer">
          <Stack />
        </a>
        <a className="mr-5 icon" href="https://www.freecodecamp.org/roydaly" target="_blank" rel="noopener noreferrer">
          <Fcc />
        </a>
        <a className="mr-5 icon" href="https://www.github.com/roydaly" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/roy-daly/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
        <a className="mr-5 icon" href="mailto:roy@roydaly.com" target="_blank" rel="noopener noreferrer">
          <Mail />
        </a>
        <a className="mr-5 icon" href={Resume} download="Roy Daly's Resume">
          <File />
        </a>
      </div>
      <br></br>
      <a className="mr-5 icon" href="https://www.upwork.com/fl/roydaly" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}> Click Here To Hire Me On UpWork! </a>
    </div>

  )
}
