import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-medai-text">Follow us on social media</div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: "#c0392b" }} className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "blue" }} className="bi bi-telegram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">Blog</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Tunisie - Sfax 
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              123-456-789
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              Ranim.koubaa@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            {/*
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis aperiam fugiat ullam distinctio iusto sunt, numquam,
            quis reiciendis pariatur error itaque? Voluptatem libero maiores
            eveniet fugiat provident architecto minima pariatur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquam perferendis
  nemo hic laborum aspernatur.*/}
    At our book store,
         our passion for books drives our commitment to providing a diverse and captivating collection for every reader. 
         Founded with the belief that the written word has the power to inspire, educate, and entertain, 
         we curate a wide range of genres, ensuring there's something for everyone. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;