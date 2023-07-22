import React from "react";

function PostModal() {
  return (
    <div>
      <input type="checkbox" id="postmodal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white relative ">
          <label
            htmlFor="postmodal"
            className="absolute  top-3 right-3  w-8 h-8 rounded-full flex items-center justify-center bg-whiteLow cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="close"
              className="h-6 w-6"
            >
              <path d="M10.05 23.95a1 1 0 0 0 1.414 0L17 18.414l5.536 5.536a1 1 0 0 0 1.414-1.414L18.414 17l5.536-5.536a1 1 0 0 0-1.414-1.414L17 15.586l-5.536-5.536a1 1 0 0 0-1.414 1.414L15.586 17l-5.536 5.536a1 1 0 0 0 0 1.414z"></path>
            </svg>
          </label>

          <div className="mt-3">
            <h4 className="text-2xl font-bold ">Add New Post!</h4>
            <form action="" className="mt-10">
              <div className="flex flex-col gap-2">
                <span className="capitalize text-sm">title</span>
                <input
                  type="text"
                  placeholder="Enter title here..."
                  className="w-full p-3 rounded-md border border-fadeLight outline-none none text-sm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
