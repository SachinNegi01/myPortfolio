import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>EngLang-CodeWithEnglish</h3>
          <p>
            Designed and implemented a custom programming language with an simple English-like syntax, using
            Flex and Yacc for lexical analysis and parsing. The language supports core programming constructs such as
            data types, conditional statements, loops, and arithmetic operations, demonstrating principles of compiler
            design.
          </p>
          <p> <b>Tech Stack:</b> Python, Flex, Yacc</p>
        </div>
        <div className="project-card">
          <h3>Breast Cancer Prediction Model</h3>
          <p>
            Trained a machine learning model to predict breast cancer using the Wisconsin Breast Cancer Dataset (Di
            agnostic) with the K-means machine learning algorithm, achieving precision 89%.          </p>
            <p> <b>Tech Stack:</b> Python, K-means, Machine Learning</p>
        </div>
        <div className="project-card">
          <h3> Guardian OS-Real-Time Ransomware Detection & Prevention System</h3>
          <p>
            Developed a ransomware detection system that monitors OS-level activities such as file access and process
            behavior to block threats before encryption, protecting user data and privacy. Tracks file operations, detects
            rapid file modification, monitors suspicious processes, terminates malicious activity, and alerts the user in
            real time. Implemented using Python libraries including watchdog, psutil, tkinter.          </p>
            <p> <b>Tech Stack:</b> Python, Tkinter, Watchdog, Psutil</p>
        </div>
        <div className="project-card">
          <h3>Social Media Caption Generator</h3>
          <p>
            Developed a caption generator for social media posts using Python flask, torch and transformers. The system
            analyzes image content and generates relevant captions, enhancing social media engagement. Built the web interface using HTML, CSS and JavaScript.
          </p>
          <p> <b>Tech Stack:</b> Python, flask, torch, transformers, HTML, CSS, JavaScript</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;