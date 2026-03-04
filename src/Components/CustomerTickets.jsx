import { use } from "react";
import TicketCard from "./TicketCard";


const CustomerTickets = ({ticketsPromise}) => {
    const tickets = use(ticketsPromise);
    return (
        <div className="sm:flex mx-2">
            <div className="sm:w-[75%]">
                <h2 className="text-xl font-semibold mb-2 px-2">Customer Tickets :</h2>
                <div className="flex flex-wrap">
    {tickets.map((ticket) => (
        <div key={ticket.id} className="w-full xl:w-1/2 px-2 mb-4">
            <TicketCard ticket={ticket} />
        </div>
    ))}
</div>

            </div>
            <div className="sm:w-[25%] flex flex-col gap-3 mx-6 my-4 sm:my-0">
                <div className="">
                    <h2 className="text-xl font-semibold">Task Status</h2>
                <p className="text-gray-400">Select a ticket to add to Ticket Status</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Resolved Task</h2>
                <p className="text-gray-400">No resolved tasks yet</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;