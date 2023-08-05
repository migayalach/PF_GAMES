import React from 'react'
import style from './Carousel.module.css'
import { useState, useEffect } from 'react'
const Carousel = () => {

  const images = [
"https://as.com/esports/imagenes/2016/09/22/counter_strike/1474501165_196493_1474566409_noticia_normal.jpg",
"https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg",
"https://i.blogs.es/3c4365/portada-mejores-personajes-apex-legends/840_560.jpeg",
"https://images.ctfassets.net/umhrp0op95v1/VvjFjkl41oG52Nf71hZbr/e39168a3549882dd41f8b23187aa576c/LA_Y2_KA_Share_1200x630.jpg",
"https://media.vandal.net/m/15192/grand-theft-auto-v-2015413122229_1.jpg",
"https://m.media-amazon.com/images/I/51PeooGvL0L._AC_UF1000,1000_QL80_.jpg",
"https://http2.mlstatic.com/D_NQ_NP_894007-MLA46557070254_062021-O.webp",
"https://i.ytimg.com/vi/-hpwpAv0g9E/maxresdefault.jpg",
]

const [img, setImg] = useState(0)

const nextImg = () => {
    if (img < images.length - 1) {
        setImg(img + 1)
    } else {
        setImg(0)
    }
}

const prevImg = () => {
    if (img > 0) {
        setImg(img - 1)
    } else {
        setImg(images.length - 1)
    }
}

useEffect(() => {
    setTimeout(() => {
        nextImg()
    }, 5000)
}, [img])

return (
    <div className={style.container}>
    <img src={images[img]} alt='carousel' className={style.img}/>
    <a className={style.prev} onClick={prevImg}></a>
    <a className={style.next} onClick={nextImg}></a>
    <div className={style.dots}>
        {images.length ?
            images.map((image, index) => (
            <span key={index} className={img === index ? style.active : style.dot}></span>
        )) : <p>Image not found</p>
        }
        </div>
    </div>
  )
}

export default Carousel