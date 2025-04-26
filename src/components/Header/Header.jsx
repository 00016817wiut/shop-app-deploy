
import './Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import useHeaderSwiperStore from '../../store/useHeaderSwiperStore';



const Header = () => {
  const { swipers } = useHeaderSwiperStore(); 
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper content">
        {swipers.map((swiper, index) => (
          <SwiperSlide key={index}>
            <div className="header__container content">
              <div className={`header__scroll bg-${index}`}>
                <h1 className='header__title'>{swiper}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    </>
  )
}
export default Header;
