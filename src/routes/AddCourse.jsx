const AddCourse = () => {
  return (
    <div className="pad flex flex_col ai_center gb_gray">
      <div className="form-container">
        <h2 className="title">ADD NEW COURSE</h2>
        <form className="flex flex_col w70 form">
          <input type="text" name="name" placeholder="Name" />
          <textarea name="description" rows="5" aria-label="description" placeholder="Description"></textarea>
          <input type="text" name="photo" placeholder="Photo" />
          <input type="text" name="price" placeholder="Price" />
          <input type="text" name="teacher" placeholder="Teacher" />
          <button className="form-submit" type="button">Add Course</button>
        </form>
      </div>
   </div>
  )
}

export default AddCourse
