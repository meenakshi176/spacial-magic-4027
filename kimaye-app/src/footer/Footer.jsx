import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.containerDiv}>
        <div>
          <ul>
            <li>
              <h4>FAQ's</h4>
            </li>
            <li>
              <h4>Contact Us</h4>
            </li>
            <li>
              <h4>Shipping & Return Policy</h4>
            </li>
            <li>
              <h4>Terms & Conditions</h4>
            </li>
            <li>
              <h4>Privacy Policy</h4>
            </li>
          </ul>
        </div>
        <div>
        <a>Follow us on</a>
          <div className={styles.socialLogo}>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756"
              alt="facebook"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756"
              alt="instagram"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756"
              alt="twitter"
            />
          </div>
        </div>
      </div>

      <div className={styles.bottomDiv}>
        <p>Copyright©2020. All Rights Reserved</p>
        <img
          src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/ting.png?v=1599565040"
          alt="ting"
        />
      </div>
    </div>
  );
};
