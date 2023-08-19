import Slider from "../components/Slider";
import { courses } from '../components/courseData'

const Courses = () => {
  return (
    <div className="pad">
      <div>
        <div className="container-title">
          <h2 className="text_bold">LATEST COURSES</h2>
          <span className="courses-span">Please select a course</span>
          <span className="courses-span">..........................</span>
        </div>
        <div>
          <Slider courses={courses}/>
        </div>
      </div>
    </div>
  )
}

export default Courses
