import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://scontent-bom2-1.cdninstagram.com/v/t51.2885-19/423433543_1179703562998145_5062464961009450476_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bom2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=5puNqJJEGpMAX9v6A23&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAfwYeuJhoLEv-SY3jXwwhYQ4VXmmguPuEpGUJ7XAcDNg&oe=65D4FD78&_nc_sid=8b3546"}
          alt="Founder"
        />

        <h2>IMRAN WANI</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
        <a href="https://www.linkedin.com/in/imran-wani-8644b620a/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/_imranwani_/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/codemasterimran" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;