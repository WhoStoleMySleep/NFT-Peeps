import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__upper-container">
        <div className="footer__follow">
          <h2 className="footer__follow-headed">Follow us on</h2>
          <div className="footer__follow-links">
            <a href="" className="footer__follow-link">Discord</a>
            <a href="" className="footer__follow-link">Twitter</a>
            <a href="" className="footer__follow-link">Instagram</a>
            <a href="" className="footer__follow-link">Facebook</a>
          </div>
        </div>
        {window.screen.width >= 640 &&
          <div className="footer__navigation">
            <p className='footer__navigation-headed'>Navigation</p>
            <a href="" className="footer__navigation-link">Home</a>
            <a href="" className="footer__navigation-link">Style Guide</a>
            <a href="" className="footer__navigation-link">Licenses</a>
            <a href="" className="footer__navigation-link">Changelog</a>
          </div>
        }
      </div>
      <div className="footer__lower-container">
        <div className="footer__lower-text">
          <p className="footer__powered">Powered by Webflow</p>
          <p className="footer__autor">Made by Tim Poličar</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
