import howl from "../../../src/assests/images/giphy-5.gif"
import "./Home.scss"
const Home = () => {
  return (
    <>
   
    <h1 className="home__header"> Welcome to Booktok</h1>

    <h3 className="home__description"> Track your book reviews here; the good, the bad and the mundane. </h3>
    <img src={howl}/> 
   
    </>
  )

}

export default Home;
//@PutMapping("/courses/{id}")    public ResponseEntity<String> updateCourseById(@RequestBody Course course, @PathVariable String id) {        Course oldCourse = repository.findCourseByid(Integer.parseInt(id));        repository.save(course);        return ResponseEntity.status(HttpStatus.OK).body("The course has been updated");