import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchCourses, deleteCourse } from "../redux/slices/coursesSlice"

const DeleteCourse = () => {
  const dispatch = useDispatch()
  const coursesData = useSelector((state) => state.courses)
  const token = localStorage.getItem('authToken')

  useEffect(() => {
    dispatch(fetchCourses(token))
  }, [dispatch, token])


  const handleSubmit = async (id) => {
    try {
      await dispatch(deleteCourse(id));
      window.location.reload();
    } catch (error) {
      // Handle any error that might occur during dispatch or reloading
      console.error("An error occurred:", error);
    }
  };

  return (
      <div className="tableContainer">
        <h2>ALL COURSES</h2>
        <table className="tableReservations">
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
  )
}

export default DeleteCourse
