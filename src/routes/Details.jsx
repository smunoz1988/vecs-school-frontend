import { BsPlay } from 'react-icons/bs';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const Details = () => {
  return (
    <div className="flex flex_col">
      <div className="flex pad3">  
        <div className='img-container w60'>
          <img className='img-details' src="programming-course.jpg" alt="course-img" />
        </div>      
        <div className='w40 flex flex_col ai_end gap_1_5'>
          <h3 className='title'>Python for Beginners</h3>
          <p>Learn the basics of programming in Python.</p> 
          <ul class="row-list w70 ">
            <li className='flex jc_btw'>
              <p>Teacher</p>
              <p>David</p>
            </li>
            <li className='flex jc_btw'>
              <p>Date</p>
              <p>18 Jul 2023</p>
            </li>
            <li className='flex jc_btw'>
              <p>Course Fee</p>
              <p>$35.99</p>
            </li>
          </ul> 
          <button className='more-button' type="button">
            DISCOVER MORE COURSES
            <IoIosArrowForward className='yellow' size={18} />
          </button>
          <button className='reserve-button flex gap_1_5' type="button">
            <SlCalender size={20} />
            Reserve
            <IoIosArrowDropright size={22} />
          </button>
        </div>
      </div>
      <button className='back-button' type="button">
        <BsPlay className='rotated-icon' />
      </button>      
    </div>
  )
}

export default Details  