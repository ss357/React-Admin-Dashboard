import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="author">
        <span>Author: Suman Atta</span>
      </div>

      <div className="social-links">
        <a href='https://github.com/ss357'><img src="/github-mark-white.png" alt="" /></a>
        <a href='https://www.linkedin.com/in/suman-atta/' target="/blank"><img src="/pngwing.com.png" alt="" /></a>
      </div>
    </div>
  );
};

export default Footer;
