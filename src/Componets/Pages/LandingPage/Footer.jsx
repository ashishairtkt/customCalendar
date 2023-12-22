import React from "react";

export default function Footer() {
  return (
    <footer>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <p className="copyright text-uppercase">Copyright © 2018</p>
            </div>
            <div className="col-sm-7">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
