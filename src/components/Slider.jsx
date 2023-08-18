// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

import { CiFacebook } from 'react-icons/ci';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { VscGithub } from 'react-icons/vsc';

const Slider = ({courses}) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {courses.map((course) => (
          <SwiperSlide className='flex flex_col ai_center' key={course.photo}>
            <div className='flex flex_col ai_center gap_2'>
              <div className='circle-container'>
                <div className='circle'></div>
                <img src={course.photo} alt="course-img" />
              </div>
              <div className='flex flex_col ai_center gap_1_5'>
                <h3>{course.name}</h3>  
                <span className="courses-span">..........................</span> 
                <p className="courses-span ac_text">{course.description}</p>            
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
    </div>
  )
}

export default Slider