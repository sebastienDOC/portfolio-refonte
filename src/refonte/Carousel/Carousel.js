import React, { useState } from "react"
import './Carousel.css'
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';

function Carousel({data}) {
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };
    const showNavigate = data.length > 1;

    function getImgCover(img) {
        let images = require("../../assets/pictures/" + img);
        return images;
    }
    return (
        <div className="carousel_banner">{data.map((image, id) => {
            return <img 
                src={getImgCover(image)} 
                alt={image} 
                key={id} 
                className={slide === id ? "carousel_picture" : "carousel_picture hidden" } 
            />
        })}
            <img 
                src={ArrowLeft} 
                alt='Flêche gauche' 
                className={data.length !== 1 ? 'arrow_left' : 'arrow_hidden'}
                onClick={prevSlide}
            />
            <img 
                src={ArrowRight} 
                alt='Flêche droite' 
                className={data.length !== 1 ? 'arrow_right' : 'arrow_hidden'}
                onClick={nextSlide}
            />
            {showNavigate && (<span className="points">
                {data.map((_ , id) => {
                    return <button 
                        key={id} 
                        onClick={() => setSlide(id)} 
                        className={slide === id ? "point" : "point inactif"}>
                        </button>
                    })}
            </span>)}
        </div>
    )
}

export default Carousel