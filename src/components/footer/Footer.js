import React from "react";
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <ul className="footer-list">
                    <li className="art-footer">Art Credit</li>
                    <li className="linkdin-footer"><a href="https://www.linkedin.com/">Linked In</a></li>
                    <li className="copy-footer">Plant Haven &copy; 2022</li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;