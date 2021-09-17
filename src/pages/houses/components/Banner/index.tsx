import React, { FC, useState } from 'react';
import AwesomeSwipe from 'react-awesome-swiper';

interface BannerProps {
  banner: any[];
}
const Banner: FC<BannerProps> = (props) => {
  const { banner } = props;
  const [config, setConfig] = useState({
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  return (
    <AwesomeSwipe className="banner" config={config}>
      <div className="swiper-wrapper">
        {banner?.map((item, index) => {
          return (
            <div className="swiper-slide" key={index}>
              <img alt="banner" src={item} />
            </div>
          );
        })}
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwipe>
  );
};

export default Banner;
