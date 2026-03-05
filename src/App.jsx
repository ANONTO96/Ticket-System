import Footer from "./Components/footer"
import Navbar from "./Components/navbar"
import TaskDisplay from "./Components/TaskDisplay"
import CustomerTickets from "./Components/CustomerTickets"
import { useState, Suspense } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const fetchTickets = async () => {
  const res = await fetch('/tickets.json');
  return res.json();
}

const ticketsPromise = fetchTickets();

function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleAddTask = (ticket) => {
    // check if same ticket already exists
  const exists = tasks.some(t => t.id === ticket.id);

  if (exists) {
    toast.error("This ticket is already in Task Status");
    return;
  }
    setTasks([...tasks, ticket]);
    setInProgress(inProgress + 1);

    toast.success("Ticket added to Task Status");
  };

  const handleComplete = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
    setResolvedTasks([...resolvedTasks, task]);

    setInProgress(inProgress - 1);
    setResolved(resolved + 1);

    toast.success("Task completed");
  };
  return (
    <>
      <ToastContainer position="top-center"></ToastContainer>
      <div>
        <Navbar></Navbar>
        <div className="lg:w-10/12 mx-auto">
          <TaskDisplay inProgress={inProgress} resolved={resolved}></TaskDisplay>
          <Suspense fallback={<div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>}>
            <CustomerTickets ticketsPromise={ticketsPromise}
              tasks={tasks}
              resolvedTasks={resolvedTasks}
              handleAddTask={handleAddTask}
              handleComplete={handleComplete}></CustomerTickets>
          </Suspense>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
