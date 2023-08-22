import React from "react";
import style from "./Carousel.module.css";
import { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [img, setImg] = useState(0);

  const nextImg = () => {
    if (img < images?.length - 1) {
      setImg(img + 1);
    } else {
      setImg(0);
    }
  };
  const prevImg = () => {
    if (img === 0) {
      setImg(images?.length - 1); // Retrocede a la última imagen cuando estás en la primera
    } else {
      setImg(img - 1);
    }
  };
  useEffect(() => {
    const time = setTimeout(nextImg, 6000);
    return () => clearTimeout(time);
  }, [img]);

  return (
    <div className={style.slideshowContainer}>
      <img src={images?.[img]} alt="carousel" className={style.img} />
      <a className={style.prev} onClick={prevImg}>&#9664;</a>
      <a className={style.next} onClick={nextImg}>&#9654;</a>
      <div className={style.dotContainer}>
        {images?.length ? (
          images?.map((image, index) => (
            <span
              key={index + 1}
              className={img !== index ? style.dot : style.activeDot}
              onClick={() => setImg(index)}
            ></span>
          ))
        ) : (
          <p>Image not found</p>
        )}
      </div>
    </div>
  );
};

export default Carousel;
