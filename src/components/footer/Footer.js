import React from "react";
import './footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <ul className="footer-list">
                    <a href="https://unsplash.com/@brina_blum" className="Art-credit">Background Photography: Brina Blum</a>
                        <a href="https://www.linkedin.com/in/tishtanya-shaw/"><LinkedInIcon className="icon" /><li className="icon-text">Tishanya Shaw</li></a>
                        <a href="https://www.linkedin.com/in/narimen-mokrani-bb5a7a13b/"><LinkedInIcon className="icon" /><li className="icon-text">Narimen Mokrani</li></a>
                        <a href="https://www.linkedin.com/in/katlyn-hutson/"><LinkedInIcon className="icon" /><li className="icon-text">Katlyn Hutson</li></a>
                        <a href="https://www.linkedin.com/in/lindsay-lauren-ellis/"><LinkedInIcon className="icon" /><li className="icon-text">Lindsay Ellis</li></a>
                    <li className="copy-footer">Plant Haven &copy; 2022</li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;