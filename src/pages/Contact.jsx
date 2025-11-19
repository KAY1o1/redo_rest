import React from "react";
import '../styles/contact.css';

const ContactPage = () => {
    return (

        <div>
            <div className="home_screen">
                <h1>Contacts </h1>
            </div>

            <div className="map-info">
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.457279510258!2d-74.01395903605898!3d40.74151825840537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258bc949d58cf%3A0x84ac8a2dc2535dc2!2sShake%20Shack%20Madison%20Square%20Park!5e0!3m2!1sen!2sus!4v1759469560224!5m2!1sen!2sus"
                        width="290" height="290" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>

                </div>

                <div className="info_c">
                    <p>
                        Text (212) 889 - 6600 <br />
                        9:30 AM - 8:30 PM EST <br />
                        7 Days a Week <br />
                    </p>
                    <br />
                    <p>
                        Address: <br />
                        Madison Square Park, 23rd Street and,<br />
                        Madison Ave, New York, NY 10010 <br />
                    </p>

                    <div className="container">
                        <form action="action_page.php">

                            <label htmlFor="fname">First Name:</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Enter Email" name="email" required />


                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."
                                style={{ height: '100px' }}></textarea>

                            <input type="submit" value="Submit" />

                        </form>

                    </div>

                </div>

            </div>
        </div>

    );
};

export default ContactPage;