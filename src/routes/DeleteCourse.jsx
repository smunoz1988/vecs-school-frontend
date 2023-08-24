import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchCourses, deleteCourse } from "../redux/slices/coursesSlice"

const DeleteCourse = () => {
  const dispatch = useDispatch()
  const coursesData = useSelector((state) => state.courses)

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])


  const handleSubmit = (id) => {
    dispatch(deleteCourse(id))
    window.location.reload()
  }

  return (
    <div>
      <div className="flex flex_col ai_center table-container pad gap_2">
        <h2 className="title">ALL COURSES</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {coursesData.courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>
                <button className="form-submit" type="button" key={course.id} onClick={ () => dispatch(handleSubmit(course.id)) }>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DeleteCourse
