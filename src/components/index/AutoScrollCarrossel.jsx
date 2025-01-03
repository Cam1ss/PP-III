import React, { useEffect, useRef } from "react";
import '../../style/Home/AutoScrollCarousel.css'

const images = [
    "/img/HomeImg/carnaval-1.jpg",
    "/img/HomeImg/carnaval-2.jpg",
    "/img/HomeImg/festaJunina-2.jpg",
    "/img/HomeImg/festaJunina-3.jpg",
    "/img/HomeImg/paratins-1.jpg",
    "/img/HomeImg/paratins-2.jpg",
    "/img/HomeImg/cavalhada-1.jpg",
    "/img/HomeImg/cavalhada-2.jpg",
  ];
  
  const AutoScrollCarousel = () => {
    const carouselRef = useRef(null);
  
    useEffect(() => {
      let scrollInterval;
      const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
          if (carouselRef.current) {
            const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;
  
            if (scrollLeft >= scrollWidth / 2) {
              carouselRef.current.scrollLeft = 0; // Reseta ao meio para continuar a repetição
            } else {
              carouselRef.current.scrollLeft += 1.6; // Ajusta a velocidade
            }
          }
        }, 16); // Aproximadamente 60 FPS
      };
  
      startAutoScroll();
  
      return () => clearInterval(scrollInterval); // Limpa o intervalo ao desmontar
    }, []);
  
    return (
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-content">
          {[...images, ...images].map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
    );
  };
  
  export default AutoScrollCarousel;