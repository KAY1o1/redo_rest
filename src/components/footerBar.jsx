import React from "react";
import '../styles/compStyles.css';

const FooterBar = () => {
    return(
        <footer className="footer-section">
          <div className="footer-content">
            <div className="footer-text">
                <h3>Hours:</h3>
                <p>Thursday 10:30 AM–1 AM <br/>
                    Friday 10:30 AM–1 AM <br/>
                    Saturday 10:30 AM–1 AM <br/>
                    Sunday 10:30 AM–1 AM <br/>
                    Monday 10:30 AM–1 AM <br/>
                    Tuesday 10:30 AM–1 AM <br/>
                    Wednesday 10:30 AM–1 AM <br/>
                </p>
            </div>
            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" aria-label="facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" aria-label="twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" aria-label="instagram">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>

        </footer>
    );
};

export default FooterBar;