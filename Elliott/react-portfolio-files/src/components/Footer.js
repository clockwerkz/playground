import React from "react";
const Footer = (props) => {
    return (
        <div className="footer bg-dark py-4">
            <div className="footer-wrapper">
                <ul className="footer-info">
                    <li>Elliott Lockwood</li>
                    <li>website link</li>
                </ul>
                <ul className="footer-media">
                    <li><a href="#">Facebook</a></li>
                    <li>Myspace</li>
                    <li>TikTok</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;