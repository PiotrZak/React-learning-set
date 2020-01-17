import React from 'react';
import IconEnvelope from 'assets/icon-envelope.svg';
import IconGithub from 'assets/icon-github.svg';
import IconCopyright from 'assets/icon-copyright.svg';

const AppFooter: React.FC = () => {
  return (
    <footer className="l-footer-container row">
      <p className="l-footer-paragraph col-12 col-md-4">
        <img className="l-footer-icon" src={IconEnvelope} alt="Envelope icon" />
        E-mail:
        <a
          className="l-footer-link"
          href="mailto:mikulew@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contact me
        </a>
      </p>
      <p className="l-footer-paragraph col-12 col-md-4">
        <img className="l-footer-icon" src={IconGithub} alt="GitHub icon" />
        GitHub:
        <a
          className="l-footer-link"
          href="https://github.com/Mikulew/react-KRD"
          rel="noopener noreferrer"
          target="_blank"
        >
          Repository
        </a>
      </p>
      <p className="l-footer-paragraph col-12 col-md-4">
        <img className="l-footer-icon" src={IconCopyright} alt="Copyright icon" />
        Mikolaj Lewandowski 2019
      </p>
    </footer>
  );
};

export default AppFooter;
