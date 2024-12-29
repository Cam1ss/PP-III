import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import festivais from '../../data/cardDados.js'; // Dados dos festivais

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {festivais.length > 0 &&
        festivais.map((festival) => (
          <SwiperSlide key={festival.id}>
            <div
              className="card"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0)), url(${festival.imagemFundo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="av">
                <img src="/img/star.png" alt="star-icon" />
                <h3>{festival.nota}</h3>
              </div>
              <div className="mine-footer">
                <h1>{festival.nome}</h1>
                <div className="data">
                  <img src="/img/calendario.png" alt="calendario-icon" />
                  <p>{festival.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
