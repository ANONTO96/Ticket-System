import Footer from "./Components/footer"
import Navbar from "./Components/navbar"
import TaskDisplay from "./Components/TaskDisplay"


function App() {
 

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="lg:w-10/12 mx-auto">
          <TaskDisplay></TaskDisplay>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
