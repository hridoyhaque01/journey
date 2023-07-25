import React, { useRef, useState } from "react";
import { imageIcon } from "../../assets/getAssets";

function AddPost() {
  const thumbnailRef = useRef();
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreveiw, setThumbnailPreveiw] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    thumbnailRef.current.files = event.dataTransfer.files;
    const imageURL = URL.createObjectURL(file);
    setThumbnail(file);
    setThumbnailPreveiw(imageURL);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setThumbnail(file);
    setThumbnailPreveiw(imageURL);
  };

  const handleThumbnailDelete = () => {
    thumbnailRef.current.value = "";
    setThumbnail(null);
    setThumbnailPreveiw(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log();
    alert("submit successfull");
  };

  return (
    <section className="p-10 h-full overflow-auto">
      <div className="bg-white p-8 rounded-md h-full flex flex-col items-center">
        <div>
          <h2 className="text-black text-3xl font-semibold">
            Add new blog post
          </h2>
        </div>
        <div className="mt-10 w-8/12">
          <form action="#" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 relative">
                <span className="text-sm font-medium">Thumbnail</span>
                {!thumbnailPreveiw ? (
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
                          htmlFor="thumbnail"
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
                    <label htmlFor="thumbnail" className="w-full h-full">
                      <img
                        src={thumbnailPreveiw}
                        alt=""
                        className="w-full h-full object-cover bg-cover"
                      />
                    </label>
                    <button
                      type="button"
                      className="absolute top-4 right-4 h-7 w-7 bg-errorColor rounded-full flex items-center justify-center"
                      onClick={handleThumbnailDelete}
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
                  id="thumbnail"
                  onChange={handleFileSelect}
                  className="opacity-0 absolute"
                  required
                  ref={thumbnailRef}
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <span className="text-sm font-medium">Title</span>
                <input
                  type="text"
                  className="w-full p-4 rounded-md border border-fadeLight outline-none text-base"
                  placeholder="Enter blog title"
                />
              </div>
            </div>
            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddPost;
