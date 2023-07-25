import React, { useRef, useState } from "react";
import { imageIcon } from "../../assets/getAssets";
import { usePosts } from "../../contexts/postContext";

function PostModal({ data, type, index }) {
  const { lessons, id } = data || {};
  const { updatePost, post } = usePosts();
  console.log(data, type, index);
  const quoteRef = useRef();
  const [quote, setquote] = useState(null);
  const [quotePreveiw, setQuotePreveiw] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    quoteRef.current.files = event.dataTransfer.files;
    const imageURL = URL.createObjectURL(file);
    setquote(file);
    setQuotePreveiw(imageURL);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setquote(file);
    setQuotePreveiw(imageURL);
  };

  const handlequoteDelete = () => {
    quoteRef.current.value = "";
    setquote(null);
    setQuotePreveiw(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = event.target;
    const title = formData.title.value;
    const date = { file: quote, title };
    if (type === "add") {
      updatePost(date, quotePreveiw, id); // Pass the "post" state as an argument
    }
  };

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
            <form action="#" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 relative">
                  <span className="text-sm font-medium">quote</span>
                  {!quotePreveiw ? (
                    <div
                      className="h-72 flex flex-col items-center justify-center border border-dashed border-fadeReg rounded-lg bg-whiteLight "
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <div className="flex flex-col items-center gap-6">
                        <div className="">
                          <img src={imageIcon} alt="" className="w-20 h-20" />
                        </div>
                        <p className="text-lg font-medium text-center text-black flex flex-col gap-3">
                          <span>Drag and drop image here</span>
                          <span className="text-sm">or</span>
                          <label
                            htmlFor="quote"
                            className="text-sm cursor-pointer text-blueReg inline-block px-6 py-4 border border-blueReg rounded-md"
                          >
                            Browse to upload
                          </label>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="h-72 flex flex-col items-center justify-center rounded-lg bg-whiteLight relative overflow-hidden"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <label htmlFor="quote" className="w-full h-full">
                        <img
                          src={quotePreveiw}
                          alt=""
                          className="w-full h-full object-cover bg-cover"
                        />
                      </label>
                      <button
                        type="button"
                        className="absolute top-4 right-4 h-7 w-7 bg-errorColor rounded-full flex items-center justify-center"
                        onClick={handlequoteDelete}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          id="close"
                        >
                          <path
                            fill="#fff"
                            d="M7.05 7.05a1 1 0 0 0 0 1.414L10.586 12 7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 0 0 1.414-1.414L13.414 12l3.536-3.536a1 1 0 0 0-1.414-1.414L12 10.586 8.464 7.05a1 1 0 0 0-1.414 0Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  )}
                  <input
                    type="file"
                    id="quote"
                    onChange={handleFileSelect}
                    className="opacity-0 absolute"
                    required
                    ref={quoteRef}
                  />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <span className="text-sm font-medium">Title</span>
                  <input
                    type="text"
                    className="w-full p-4 rounded-md border border-fadeLight outline-none text-base"
                    placeholder="Enter blog title"
                    name="title"
                  />
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="px-6 py-4 bg-primaryColor rounded-md text-lg text-white capitalize"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
