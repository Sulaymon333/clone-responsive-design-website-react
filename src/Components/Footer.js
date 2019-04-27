import React from 'react';
import '../CSS/footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-boxes boxes">
        <div className="box-4-col box-1">
          <h4 className="footer-item-title">About us</h4>
          <ul className="footer-item-description">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi praesentium, doloribus amet odit nemo quia
              debitis?
            </li>
            <li>123 Street Name</li>
            <li>Road Name</li>
            <li>London</li>
            <li>+44 74139 13807</li>
          </ul>
        </div>
        <div className="box-4-col box-2">
          <h4 className="footer-item-title">Latest News</h4>
          <ul className="footer-item-description">
            <li>
              <a href="#">
                <b>@Jaymesh</b> just submitted another
                <br />
                great item on <b>#themeforeset</b>
                <br />
                about 3 hours ago
              </a>
            </li>
            <li>
              <a href="#">
                <b>@Jaymesh</b> just submitted another
                <br />
                great item on <b>#themeforeset</b>
                <br />
                about 3 hours ago
              </a>
            </li>
          </ul>
        </div>
        <div className="box-4-col box-3">
          <h4 className="footer-item-title">Latest Posts</h4>
          <ul className="footer-item-description">
            <li>
              <a href="#">Lorem ipsum dolor sit amet conset</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor sit amet. sit a.</a>
            </li>
            <li>
              <a href="#">Lorem ipsum, dolor sit amet consectetur</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor sit amet.</a>
            </li>
          </ul>
        </div>
        <div className="box-4-col box-4">
          <h4 className="footer-item-title">Flickr</h4>
          <div className="footer-item-description">
            <div className="flickr-images">
              <img src="https://source.unsplash.com/collection/190727/100x100" alt="first random" />
            </div>
            <div className="flickr-images">
              <img src="https://source.unsplash.com/random/100x100" alt="second random" />
            </div>
            <div className="flickr-images">
              <img src="https://source.unsplash.com/100x100/?nature,sky" alt="third random" />
            </div>
            <div className="flickr-images">
              <img src="https://source.unsplash.com/100x100/?nature,animal" alt="fourth random" />
            </div>
            <div className="flickr-images">
              <img src="https://source.unsplash.com/user/erondu/100x100" alt="fifth random" />
            </div>
            <div className="flickr-images">
              <img src="https://source.unsplash.com/100x100/?nature,forest" alt="sixth random" />
            </div>
            <div className="flickr-images">
              <img src="https://source.unsplash.com/collection/190327/100x100" alt="seventh random" />
            </div>
            <div className="flickr-images">
              <img src="https://source.unsplash.com/100x100/?nature,water" alt="eighth random" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-social-media">
        <div className="empty-div" />
        <div className="copyright-social-media">
          <p className="copyright">Copyright &copy; 2003-2012 Ventus Inc. All rights reserved.</p>
          <ul className="footer-social">
            <li>
              <a href="#">
                <i className="fab fa-twitter-square">
                  <span className="tooltip">Twitter</span>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-square">
                  <span className="tooltip">Facebook</span>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-vimeo-square">
                  <span className="tooltip">Vimeo</span>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-square">
                  <span className="tooltip">Google+</span>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-dribbble-square">
                  <span className="tooltip">Dribble</span>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest-square">
                  <span className="tooltip">Pinterest</span>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="up-arrow">
          <a href="#top">
            <i className="fas fa-arrow-circle-up" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
