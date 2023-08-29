import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { CiFacebook } from 'react-icons/ci';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { VscGithub } from 'react-icons/vsc';
import { BsPlay } from 'react-icons/bs';
import PropTypes from 'prop-types';
import courseImg from '../assets/course.jpg';
import isValidUrl from '../utils/isValidUrl';

const Slider = ({courses}) => {
  const navigate = useNavigate();
  const swiperRef = useRef();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className='flex ai_center jc_center '>
      <button
          type="button"
          className={` ${!isBeginning ? 'prev-button next-prev-button' : 'bg-light prev-button next-prev-button'} `}
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <BsPlay size={24} className="text-white rotated-icon" />
        </button>
       <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        className='w100'
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        allowTouchMove={false}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className='flex flex_col ai_center gap_2' onClick={() => navigate(`/courses/${course.id}`)}>
              <div className='circle-container'>
                <div className='circle'></div>
                <img 
                className='img-slider' 
                src = {isValidUrl(course.photo) ? course.photo : courseImg}
                alt="course-img" 
                />
              </div>
              <div className='flex flex_col ai_center gap_1_5'>
                <h3 className='title ac_text'>{course.name}</h3>  
                <span className="courses-span">..........................</span>
                <p className="courses-span ac_text description">{course.description.slice(0, 30)}</p>            
              </div>
              <div className="social-media-icon">
                <CiFacebook size={30} className="icon" />
                <TiSocialTwitterCircular size={35} className="icon" />
                <VscGithub size={25} className="icon" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
          type="button"
          className={` ${!isEnd ? 'next-button next-prev-button' : 'bg-light next-button next-prev-button'} `}
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <BsPlay size={24} className="text-white" />
        </button>
    </div>
  )
}

Slider.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Slider