import Footer from "./Components/footer"
import Navbar from "./Components/navbar"
import TaskDisplay from "./Components/TaskDisplay"
import CustomerTickets from "./Components/customerTickets"
import { Suspense } from "react"

const fetchTickets = async () => {
  const res = await fetch('/tickets.json');
  return res.json();
}

const ticketsPromise = fetchTickets();

function App() {
 

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="lg:w-10/12 mx-auto">
          <TaskDisplay></TaskDisplay>
          <Suspense fallback={<div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>}>
            <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
          </Suspense>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
