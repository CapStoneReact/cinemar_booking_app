import React from "react";
import "./style.css";
import Slider from "react-slick";
import { Button } from "@material-ui/core";

export default function Application() {
  const items = ["./images/slide2.jpg"];

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <div key={index} className="item">
          <img src={item} alt="slide" />
        </div>
      );
    });
  };

  return (
    <section
      id="application"
      className="application"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/backapp.jpg"
        })`,
      }}
    >
      <div className="container">
        <div className="row mx-0">
          <div className="col-lg-6 left">
            <h1>
              Ứng dụng tiện lợi dành cho <br />
              người yêu điện ảnh
            </h1>
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <Button className="d-block">App miễn phí - Tải về ngay</Button>
            <span className="d-block">
              TIX có hai phiên bản <a href="#slider">iOS</a> &amp;
              <a href="#slider">Android</a>
            </span>
          </div>
          <div className="col-lg-6 right p-0">
            <div className="phone w-50 mx-auto">
              <img
                className="d-block w-100"
                src="./images/mobile.png"
                alt="mobile"
              />
              <Slider className="slick__slider">{renderItems()}</Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
