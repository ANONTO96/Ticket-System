const priorityBadge = {
    High: "badge-error",
    Medium: "badge-warning",
    Low: "badge-info",
};

const statusBadge = {
    open: "badge-success",
    pending: "badge-warning"
};

const TicketCard = ({ ticket, handleAddTask }) => {
    const { id, title, description, priority, date, status, creator } = ticket;

    return (
        <div onClick={() => handleAddTask(ticket)} className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
            <div className="card-body p-5">

                <div className="flex flex-col justify-between gap-3">

                    {/* TOP SECTION */}
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-base-content">
                                {title}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                {description}
                            </p>
                        </div>

                        <div>
                            <span className={`badge badge-soft badge-md capitalize ${statusBadge[status]}`}>
                                {status}
                            </span>
                        </div>
                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="flex justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-base-content/60 font-medium">
                                #{id}
                            </span>

                            <span className={`badge badge-soft badge-sm ${priorityBadge[priority]} `}>
                                {priority}
                            </span>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <p className="text-sm font-medium text-gray-500">
                                {creator}
                            </p>

                            <div className="flex items-center justify-end gap-1 text-xs text-base-content/60">
                                <img className="w-5" src="https://img.icons8.com/?size=100&id=89201&format=png&color=000000" alt="" />
                                <span>{date}</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default TicketCard;
