import Slider from "../components/Slider";


export const courses = [
  {
    name: 'Python for Beginners',
    description: 'Learn the basics of programming in Python.',
    photo: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?w=900&t=st=1692313887~exp=1692314487~hmac=f21b1a71ff6c57825e46130e37098a5fdc163216b68567791dc48bf7c3fcb4ca',
    price: 35.99,
    teacher: 'Martin Suarez'
  },
  {
    name: 'Advanced Digital Photography',
    description: 'Enhance your skills in digital photography and post-processing.',
    photo: 'https://img.freepik.com/free-photo/professional-camera-blurred_169016-10249.jpg?w=900&t=st=1692313947~exp=1692314547~hmac=8ed5b07b946b9dda276e7cca5c98345681520a52deb41679d08d123422e97d2e',
    price: 75.0,
    teacher: 'Ana Smith'
  },
  {
    name: 'Python for Beginners',
    description: 'Learn the basics of programming in Python.',
    photo: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?w=900&t=st=1692313887~exp=1692314487~hmac=f21b1a71ff6c57825e46130e37098a5fdc163216b68567791dc48bf7c3fcb4ca',
    price: 35.99,
    teacher: 'Martin Suarez'
  },
  {
    name: 'Python for Beginners',
    description: 'Learn the basics of programming in Python.',
    photo: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?w=900&t=st=1692313887~exp=1692314487~hmac=f21b1a71ff6c57825e46130e37098a5fdc163216b68567791dc48bf7c3fcb4ca',
    price: 35.99,
    teacher: 'Martin Suarez'
  },
  {
    name: 'Advanced Digital Photography',
    description: 'Enhance your skills in digital photography and post-processing.',
    photo: 'https://img.freepik.com/free-photo/professional-camera-blurred_169016-10249.jpg?w=900&t=st=1692313947~exp=1692314547~hmac=8ed5b07b946b9dda276e7cca5c98345681520a52deb41679d08d123422e97d2e',
    price: 75.0,
    teacher: 'Ana Smith'
  },
  {
    name: 'Python for Beginners',
    description: 'Learn the basics of programming in Python.',
    photo: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?w=900&t=st=1692313887~exp=1692314487~hmac=f21b1a71ff6c57825e46130e37098a5fdc163216b68567791dc48bf7c3fcb4ca',
    price: 35.99,
    teacher: 'Martin Suarez'
  }
];

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
