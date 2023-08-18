import { courses } from './Courses';

const DeleteCourse = () => {
  return (
    <div>
      <div class="flex flex_col ai_center table-container pad gap_2">
        <h2 className="title">ALL COURSES</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {courses.map((course) => (
            <tr>
              <td>{course.name}</td>
              <td>
                <button className="form-submit" type="button">Delete</button>
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
