import React from 'react'; 
import { Segment, Icon } from 'semantic-ui-react';

import "../../styles/templates/AboutPage.css";

const AboutPage = () => (
    <Segment inverted>
        <strong>ABOUT US:</strong>
        <p>
            TRUEXTEND is the leader provider of Nearshore Software Engineering and Professional Services that runs R&D centers in Latin and South America. We would be able to provide you high quality software outsourcing development and quality assurance. Our concern and commitment to listen constantly to your needs exceeds any barrier of distance, culture or language. No matter the challenge, how new the technology may be or how large the system, we will always find a solution for you. Our goal at TRUEXTEND is to improve your competitive position, to help you keep pace with the speed of your business and industry, and to deliver software products and services that succeed in the market. Your success is our success, and we are committed to help you look forward to a more profitable business, year after year. We believe that the right software solutions can do just that and we are the best candidate to meet your needs.
        </p>
        <strong>
            CONTACT US:
        </strong>
        <p> Silicon Valley</p>
        <p>440 N. Wolfe Rd - Sunnyvale, CA 94085</p>
        <p><Icon className="phone"/>Call us: 1-408-306-9203</p>
        <p>Bolivia, Latin America</p>
        <p>587 Plazuela Recoleta (Ubaldo Anze). Cochabamba, Bolivia</p>
        <p>Phone: +(591) 4-4036028</p>
        <p><Icon className="mail"/> Contact us</p>
    </Segment>
)
export default AboutPage;