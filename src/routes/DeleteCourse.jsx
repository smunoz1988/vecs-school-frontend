import { courses } from '../components/courseData'

const DeleteCourse = () => {
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
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>
                <button className="form-submit" type="button">
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
