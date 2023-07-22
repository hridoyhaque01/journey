import React, { useState } from "react";
import post1 from "../../assets/images/post-1.png";
import PostModal from "../../components/modals/PostModal";

function Posts() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all category");
  return (
    <section className="p-10 h-full overflow-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-black text-3xl font-bold">Blog Posts</h2>
        </div>
        <div className="flex items-center gap-4 text-blueReg">
          <div className="flex items-center bg-white rounded-md relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 512 512"
                id="search"
                className="fill-fade"
              >
                <g data-name="<Group>">
                  <path
                    d="M359,344.9a170.577,170.577,0,0,0,43.4-113.8c0-94.5-76.9-171.3-171.3-171.3-94.5,0-171.3,76.9-171.3,171.3s76.9,171.3,171.3,171.3A170.577,170.577,0,0,0,344.9,359l90.3,90.3a9.82,9.82,0,0,0,7.1,2.9,10.243,10.243,0,0,0,7.1-2.9,9.959,9.959,0,0,0,0-14.1ZM79.7,231.1c0-83.4,67.9-151.3,151.3-151.3s151.3,67.9,151.3,151.3S314.4,382.4,231,382.4,79.7,314.5,79.7,231.1Z"
                    data-name="<Compound Path>"
                  ></path>
                </g>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search post..."
              className="py-3 w-72 bg-transparent outline-none pl-9 pr-3 text-sm"
            />
          </div>

          <div className="relative capitalize">
            <div
              className="bg-white min-w-[10rem] flex items-center gap-1 px-3 py-2.5 rounded-md cursor-pointer"
              onClick={() => setIsCategoryOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="category"
                className="w-6 h-6"
              >
                <path
                  fill="#3f5391"
                  d="M16.9651972,10.7910943 C18.6355551,10.7962613 19.9898225,12.1745282 20,13.8796779 L20,13.8796779 L20,16.9019422 C19.9898672,18.6086493 18.6370574,19.989656 16.9651972,20 L16.9651972,20 L14.0046404,20 C12.3343058,19.9896104 10.9841799,18.6071157 10.9791183,16.9019422 L10.9791183,16.9019422 L10.9791183,13.8796779 C10.9791183,12.1739003 12.3336907,10.7910943 14.0046404,10.7910943 L14.0046404,10.7910943 Z M4.25058005,10.7911094 C4.56143174,10.7571369 4.86400582,10.9072962 5.02984404,11.1778368 C5.19568227,11.4483775 5.19568227,11.7918234 5.02984404,12.0623641 C4.86400582,12.3329047 4.56143174,12.483064 4.25058005,12.4490914 L4.25058005,12.4490914 L3.03480278,12.4490914 C2.25931969,12.4490743 1.62923179,13.0880635 1.62412993,13.879693 L1.62412993,13.879693 L1.62412993,16.8640606 C1.64384865,17.6493393 2.26544423,18.2797163 3.03480278,18.2946623 L3.03480278,18.2946623 L6.01392111,18.2946623 C6.38719882,18.2971859 6.74603726,18.147577 7.01085993,17.8790132 C7.27568261,17.6104493 7.42460215,17.245127 7.42459397,16.8640606 L7.42459397,16.8640606 L7.42459397,12.3827722 L7.4119274,12.2712944 C7.39792632,11.9748017 7.54013038,11.6892532 7.790386,11.527269 C8.07192357,11.3450368 8.43369689,11.3557726 8.70438922,11.5543927 C8.97508155,11.7530127 9.10035302,12.0996451 9.02088167,12.4301431 L9.02088167,12.4301431 L9.02088167,16.8924832 C9.02088167,18.6034933 7.66215418,19.990541 5.98607889,19.990541 L5.98607889,19.990541 L3.03480278,19.990541 C1.37321638,19.9553489 0.0344735814,18.5887024 -1.15463195e-14,16.8924832 L-1.15463195e-14,16.8924832 L-1.15463195e-14,13.879693 C-1.15463195e-14,13.0589056 0.320029324,12.2718731 0.889433607,11.6923782 C1.45883789,11.1128833 2.23077765,10.7885917 3.03480278,10.7911094 L3.03480278,10.7911094 Z M16.9651972,12.4490763 L14.0046404,12.4490763 C13.2306729,12.4490763 12.6032171,13.0895784 12.6032171,13.8796779 L12.6032171,13.8796779 L12.6032171,16.9019422 C12.600757,17.2821353 12.7476031,17.6474939 13.0109571,17.916337 C13.2743111,18.1851801 13.6322099,18.335087 14.0046404,18.3325757 L14.0046404,18.3325757 L16.9651972,18.3325757 C17.3376276,18.335087 17.6955265,18.1851801 17.9588805,17.916337 C18.2222345,17.6474939 18.3690806,17.2821353 18.3666205,16.9019422 L18.3666205,16.9019422 L18.3666205,13.8796779 C18.3666205,13.5002587 18.2189431,13.1363796 17.9561311,12.8680898 C17.6933191,12.5997999 17.3368695,12.4490763 16.9651972,12.4490763 L16.9651972,12.4490763 Z M16.9651972,1.42108547e-14 C18.6231586,0.0401888697 19.9564291,1.40542407 19.9907193,3.09805779 L19.9907193,3.09805779 L19.9907193,6.11084794 C20.0006255,6.93000939 19.6913283,7.71963098 19.1308818,8.30597331 C18.5704353,8.89231564 17.8047578,9.22733887 17.0023202,9.23732828 L17.0023202,9.23732828 L15.7772622,9.23732828 C15.3622318,9.19197022 15.0474942,8.83443927 15.0474942,8.40833728 C15.0474942,7.98223529 15.3622318,7.62470434 15.7772622,7.57934628 L15.7772622,7.57934628 L16.9651972,7.57934628 C17.3409577,7.57685591 17.7002159,7.42142485 17.963298,7.14752348 C18.2263802,6.87362212 18.3715416,6.50388945 18.3665893,6.12032212 L18.3665893,6.12032212 L18.3665893,3.09805779 C18.3565908,2.31222501 17.7349852,1.67766309 16.9651972,1.66745618 L16.9651972,1.66745618 L14.0046404,1.66745618 C13.2306729,1.66745618 12.6032483,2.30795834 12.6032483,3.09805779 L12.6032483,3.09805779 L12.6032483,7.61724301 L12.5935698,7.72116039 C12.5305946,8.1290042 12.1825523,8.43701778 11.7679814,8.43202274 C11.5521645,8.42708972 11.3472696,8.33413973 11.1990474,8.1739275 C11.0508253,8.01371527 10.9716204,7.79958378 10.9791183,7.57934628 L10.9791183,7.57934628 L10.9791183,3.09805779 C10.976652,2.2772742 11.2943223,1.48924474 11.8619853,0.907972252 C12.4296483,0.32669976 13.2006115,1.42108547e-14 14.0046404,1.42108547e-14 L14.0046404,1.42108547e-14 Z M5.99535968,9.32587341e-14 C7.66931968,0.00520201691 9.02506666,1.3892071 9.03016246,3.09805779 L9.03016246,3.09805779 L9.03016246,6.12032212 C9.03016246,6.94110958 8.71013314,7.7281421 8.14072886,8.307637 C7.57132457,8.8871319 6.79938482,9.21142348 5.99535968,9.20892028 L5.99535968,9.20892028 L3.03480284,9.20892028 C1.36444497,9.20373866 0.0101775379,7.82547177 5.10440676e-08,6.12032212 L5.10440676e-08,6.12032212 L5.10440676e-08,3.09805779 C0.0101328156,1.39135069 1.36294265,0.0103439638 3.03480284,9.32587341e-14 L3.03480284,9.32587341e-14 Z M5.99535968,1.66745618 L3.03480284,1.66745618 C2.6583302,1.65981918 2.29468591,1.80716464 2.02582107,2.07628669 C1.75695622,2.34540874 1.60549417,2.7136624 1.6055685,3.09805779 L1.6055685,3.09805779 L1.6055685,6.12032212 C1.59791363,6.50962241 1.74603381,6.88528857 2.0157445,7.1606209 C2.28545519,7.43595322 2.65345114,7.5871607 3.03480284,7.57934628 L3.03480284,7.57934628 L5.99535968,7.57934628 C6.37112019,7.57685591 6.73037836,7.42142485 6.99346051,7.14752348 C7.25654266,6.87362212 7.40170403,6.50388945 7.39675179,6.12032212 L7.39675179,6.12032212 L7.39675179,3.09805779 C7.39169024,2.31010852 6.76722089,1.67262323 5.99535968,1.66745618 L5.99535968,1.66745618 Z"
                  transform="translate(2 2)"
                ></path>
              </svg>
              <span className="text-sm ">{selectedCategory}</span>
            </div>
            <div
              className={`bg-white absolute right-0 top-12 rounded-md ${
                isCategoryOpen
                  ? "opacity-100 visible scale-100"
                  : "opacity-0 invisible scale-95"
              } duration-300`}
            >
              <ul
                className="py-2"
                onClick={() => setIsCategoryOpen((prev) => !prev)}
              >
                <li
                  className="pl-6 pr-10 py-2 cursor-pointer hover:bg-gradientBg"
                  onClick={() => setSelectedCategory("all category")}
                >
                  All Categories
                </li>
                <li
                  className="pl-6 pr-10 py-2 cursor-pointer hover:bg-gradientBg"
                  onClick={() => setSelectedCategory("travel")}
                >
                  Travel
                </li>
                <li
                  className="pl-6 pr-10 py-2 cursor-pointer hover:bg-gradientBg"
                  onClick={() => setSelectedCategory("education")}
                >
                  Education
                </li>
                <li
                  className="pl-6 pr-10 py-2 cursor-pointer hover:bg-gradientBg"
                  onClick={() => setSelectedCategory("technology")}
                >
                  Technology
                </li>
                <li
                  className="pl-6 pr-10 py-2 cursor-pointer hover:bg-gradientBg"
                  onClick={() => setSelectedCategory("gardening")}
                >
                  Gardening
                </li>
                <li
                  className="pl-6 pr-10 py-2 cursor-pointer hover:bg-gradientBg"
                  onClick={() => setSelectedCategory("entertainment")}
                >
                  Entertainment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-5">
          <div className="bg-white relative rounded-md overflow-hidden group">
            <div>
              <img src={post1} alt="" className="w-fukk" />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-lg text-black">
                Journey to the heven
              </h4>
              <p className="text-sm text-fadeReg mt-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
                voluptate labore! Repellat unde earum nesciunt....
              </p>
            </div>

            <div className="flex items-center gap-2 absolute top-3 right-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500">
              <button className="bg-fadeLight w-10 h-10 rounded-full flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 101"
                  id="edit"
                  className="w-5 h-5 fill-primaryColor"
                >
                  <path d="M82.2 79.2H18.8c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4h63.4c1.3 0 2.4-1.1 2.4-2.4s-1.1-2.4-2.4-2.4zM16.5 58.2l-.1 11.3c0 .6.2 1.3.7 1.7.5.4 1.1.7 1.7.7l11.3-.1c.6 0 1.2-.3 1.7-.7l38.8-38.8c.9-.9.9-2.5 0-3.4L59.4 17.7c-.9-.9-2.5-.9-3.4 0l-7.8 7.8-31 31c-.5.5-.7 1.1-.7 1.7zm49-27.6L61.1 35l-7.8-7.8 4.4-4.4 7.8 7.8zM21.3 59.2l28.6-28.6 7.8 7.8L29.1 67h-7.8v-7.8z"></path>
                </svg>
              </button>
              <button className="bg-fadeLight w-10 h-10 rounded-full flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="delete"
                  className="w-5 h-5"
                >
                  <g fill="none" fillRule="evenodd" stroke="#ff3333">
                    <path d="M5.5 7.5V20A1.5 1.5 0 0 0 7 21.5h11a1.5 1.5 0 0 0 1.5-1.5V7.5h-14z"></path>
                    <path
                      strokeLinecap="round"
                      d="M8.5 10.41v8.18M12.5 10.41v8.18M16.5 10.41v8.18M9 4.333V3.244C9 2.557 9.627 2 10.4 2h4.2c.773 0 1.4.557 1.4 1.244v1.09"
                    ></path>
                    <rect width="18" height="3" x="3.5" y="4.5" rx="1.5"></rect>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 right-10">
        <label
          className="w-14 h-14 rounded-full bg-gradientBg shadow-md flex items-center justify-center cursor-pointer"
          htmlFor="postmodal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="add">
            <path
              fill="#605bff"
              d="M28 15H17V4a1 1 0 0 0-2 0v11H4a1 1 0 0 0 0 2h11v11a1 1 0 0 0 2 0V17h11a1 1 0 0 0 0-2Z"
            ></path>
          </svg>
        </label>
      </div>
      <PostModal></PostModal>
    </section>
  );
}

export default Posts;
