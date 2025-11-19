import React from "react";
import NavBar from "../components/navBar.jsx";
import FooterBar from "../components/footerBar.jsx";
import '../styles/about.css';

const AboutPage = () => {
    return (
        <div>
            <div className="home_screen">
                <h1>About</h1>
                <p id="note"><em>Shake Shack Values</em></p>

                <p id="para">
                    Stand For Something Good
                    When Shake Shack started as a hot dog cart in New York City's Madison Square Park, our mission was simple:
                    raise funds for a public art project.
                    As we grew into a global business, our mission to Stand For Something Good expanded to include sourcing
                    premium ingredients from partners with the same dedication to quality and supporting our communities through
                    donations, events, and volunteering.
                    Doing good is in our roots, a part of our DNA since day one. 20 years later, we're still continuing to
                    expand and evolve our mission to Stand For Something Good in everything we do
                </p>


            </div>


        </div>
    );
};

export default AboutPage;