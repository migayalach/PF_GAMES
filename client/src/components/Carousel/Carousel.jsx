import React from "react";
import style from "./Carousel.module.css";
import { useState, useEffect } from "react";


const Carousel = () => {
  const images = [
    "https://as.com/esports/imagenes/2016/09/22/counter_strike/1474501165_196493_1474566409_noticia_normal.jpg",
    "https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg",
    "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
    "https://images.ctfassets.net/umhrp0op95v1/VvjFjkl41oG52Nf71hZbr/e39168a3549882dd41f8b23187aa576c/LA_Y2_KA_Share_1200x630.jpg",
    "https://i.ytimg.com/vi/-hpwpAv0g9E/maxresdefault.jpg",
    "https://i.blogs.es/dfbccc/trucosgtavps4/840_560.jpg",
    "https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2022/8/1/ksfga6rlx2ugfhjd9vnk/league-of-legends",
    "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
    "https://imagenes.20minutos.es/files/og_thumbnail_1900/uploads/imagenes/2019/12/23/portada-de-the-witcher-3-wild-hunt.jpeg"
  ];

  const [img, setImg] = useState(0);

  const nextImg = () => {
    if (img < images.length - 1) {
      setImg(img + 1);
    } else {
      setImg(0);
    }
  };

  const prevImg = () => {
    if (img > 0) {
      setImg(img - 1);
    } else {
      setImg(images.length - 1);
    }
  };

  useEffect(() => {
    const time = setTimeout(nextImg, 6000);
    return () => clearTimeout(time);
  }, [img]);

  return (
    <div className={style.slideshowContainer}>
      <img src={images[img]} alt="carousel" className={style.img} />
      <a className={style.prev} onClick={prevImg}></a>
      <a className={style.next} onClick={nextImg}></a>
      <div className={style.dotContainer}>
        {images.length ? (
          images.map((image, index) => (
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
