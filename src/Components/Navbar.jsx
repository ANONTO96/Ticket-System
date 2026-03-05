

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl" >CS--Ticket System</a>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal flex-nowrap px-1">
            <li><a>Home</a></li>
            <li>
              <a>FAQ</a>
            </li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn px-6 py-2 rounded-lg
  text-white font-medium
  bg-linear-to-r from-purple-800 to-purple-400
  shadow-md
  hover:shadow-lg
  hover:scale-105
  transition-all duration-300" onClick={() => document.getElementById('ticket_modal').showModal()}>+ New Ticket</a>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li>
              <a>FAQ</a>
            </li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
      {/* modal for adding new ticket */}
      <dialog id="ticket_modal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">

          {/* Close Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-xl mb-4">Add New Ticket</h3>

          {/* Ticket Form */}
          <form className="space-y-4">

            {/* ID */}
            <div>
              <label className="label font-medium">Ticket ID</label>
              <input
                type="number"
                placeholder="Enter Ticket ID"
                className="input input-bordered w-full"
              />
            </div>

            {/* Title */}
            <div>
              <label className="label font-medium">Title</label>
              <input
                type="text"
                placeholder="Enter Ticket Title"
                className="input input-bordered w-full"
              />
            </div>

            {/* Description */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Enter Ticket Description"
                rows="3"
              ></textarea>
            </div>

            {/* Responsive Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Priority */}
              <div>
                <label className="label font-medium">Priority</label>
                <select className="select select-bordered w-full">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="label font-medium">Status</label>
                <input
                  type="text"
                  value="open"
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

            </div>

            {/* Date + Creator */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="label font-medium">Date</label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label font-medium">Creator</label>
                <input
                  type="text"
                  placeholder="Creator Name"
                  className="input input-bordered w-full"
                />
              </div>

            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Add Ticket
              </button>
            </div>

          </form>

        </div>
      </dialog>

    </div>

  );
};

export default Navbar;