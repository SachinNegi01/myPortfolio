import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Sachin Singh Negi</h1>
        <p>Software Engineer | Full Stack Developer</p>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;