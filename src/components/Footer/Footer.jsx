import "./Footer.css";

export const Footer = ()=> {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-content">
                <p className="footer-copyright">
                &copy; {currentYear} <strong>Empanadas Regionales</strong>. All rights reserved.
                </p>
                <span className="footer-tagline">Since 1920</span>
             </div>
        </footer>
    );
};