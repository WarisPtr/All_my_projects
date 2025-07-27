import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        {/* Social Icons */}
        <div className="footer-container">
          <a href="https://github.com/WarisPtr" target="_blank" rel="noopener noreferrer" className="footer-social">
            <img src="/github.png" alt="github" className="github"/>
          </a>
          <a href="mailto:hamwaris.ptr@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-social">
                  <img src="/envelopment.png" alt="envelopment Logo" className="envelopment"/>
          </a>
          <a href="tel:0946623792" target="_blank" rel="noopener noreferrer" className="footer-social">
            <img src="/call.png" alt="call Logo" className="call"/>
          </a>
        </div>
        {/* Copyright */}
        <p className="copy-right">
          © All Rights Reserved 2025 | Waris Petrod
        </p>
      </div>
    </footer>
  );
}
