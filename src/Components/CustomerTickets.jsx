import { use } from "react";
import TicketCard from "./TicketCard";

const CustomerTickets = ({
  ticketsPromise,
  tasks,
  resolvedTasks,
  handleAddTask,
  handleComplete
}) => {

  const tickets = use(ticketsPromise);

  return (
    <div className="sm:flex mx-2">

      {/* LEFT SIDE TICKETS */}
      <div className="sm:w-[75%]">

        <h2 className="text-xl font-semibold mb-2 px-2">
          Customer Tickets :
        </h2>

        <div className="flex flex-wrap">

          {tickets.map((ticket) => (
            <div key={ticket.id} className="w-full xl:w-1/2 px-2 mb-4">

              <TicketCard
                ticket={ticket}
                handleAddTask={handleAddTask}
              />

            </div>
          ))}

        </div>
      </div>


      {/* RIGHT SIDE TASK STATUS */}
      <div className="sm:w-[25%] flex flex-col gap-3 mx-6 my-4 sm:my-0">

        {/* Task Status */}
        <div>
          <h2 className="text-xl font-semibold">Task Status</h2>

          {tasks.length === 0 ? (
            <p className="text-gray-400">
              Select a ticket to add to Ticket Status
            </p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white shadow p-2 rounded flex flex-col gap-3 justify-between items-center mb-2"
              >
                <span className="font-semibold">{task.title}</span>

                <button
                  onClick={() => handleComplete(task)}
                  className="bg-green-500 text-white w-full px-2 py-1 rounded"
                >
                  Complete
                </button>

              </div>
            ))
          )}
        </div>


        {/* Resolved Task */}
        <div>
          <h2 className="text-xl font-semibold">Resolved Task</h2>

          {resolvedTasks.length === 0 ? (
            <p className="text-gray-400">
              No resolved tasks yet
            </p>
          ) : (
            resolvedTasks.map((task) => (
              <div
                key={task.id}
                className="bg-gray-100 p-2 rounded mb-2"
              >
                {task.title}
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
};

export default CustomerTickets;
