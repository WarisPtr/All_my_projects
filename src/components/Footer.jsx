import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        {/* Social Icons */}
        <div className="footer-container">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social">
            <img src="/facebook-app-symbol.png" alt="Facebook Logo" className="facebok"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social">
                  <img src="/instagram.png" alt="instagram Logo" className="instagram"/>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social">
            <img src="/line.png" alt="line Logo" className="line"/>
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
