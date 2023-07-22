import React from "react";
import avater from "../../assets/images/avater.png";

function Navbar() {
  return (
    <div className="navbar px-10 py-4 bg-white">
      <div className="flex-1">
        <a className="text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-6">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="p-2 cursor-pointer">
            <div className="indicator">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2395 8.97519L17.4943 9.05977L18.2395 8.97519ZM18.6867 12.9153L19.4319 12.8307V12.8307L18.6867 12.9153ZM5.31328 12.9153L4.56806 12.8307L4.56806 12.8307L5.31328 12.9153ZM5.76046 8.97519L6.50568 9.05977L5.76046 8.97519ZM4.44779 14.8721L3.87668 14.386H3.87668L4.44779 14.8721ZM19.5522 14.8721L18.9811 15.3583L19.5522 14.8721ZM14.2699 4.37366H13.5199C13.5199 4.69424 13.7237 4.97938 14.027 5.08322L14.2699 4.37366ZM9.73005 4.37366L9.973 5.08322C10.2763 4.97938 10.4801 4.69424 10.4801 4.37366H9.73005ZM15.7023 20.2632C15.8477 19.8753 15.6511 19.4431 15.2632 19.2977C14.8753 19.1523 14.4431 19.3489 14.2977 19.7368L15.7023 20.2632ZM9.7023 19.7368C9.55694 19.3489 9.12467 19.1523 8.7368 19.2977C8.34893 19.4431 8.15234 19.8753 8.2977 20.2632L9.7023 19.7368ZM17.7772 17.25H6.22281V18.75H17.7772V17.25ZM17.4943 9.05977L17.9415 12.9998L19.4319 12.8307L18.9848 8.89061L17.4943 9.05977ZM6.05849 12.9998L6.50568 9.05977L5.01525 8.89061L4.56806 12.8307L6.05849 12.9998ZM5.01889 15.3583C5.59621 14.6801 5.96028 13.8652 6.05849 12.9998L4.56806 12.8307C4.50519 13.3846 4.27067 13.9231 3.87668 14.386L5.01889 15.3583ZM17.9415 12.9998C18.0397 13.8652 18.4038 14.6801 18.9811 15.3583L20.1233 14.386C19.7293 13.9231 19.4948 13.3846 19.4319 12.8307L17.9415 12.9998ZM6.22281 17.25C5.56777 17.25 5.10443 16.926 4.89056 16.5492C4.68409 16.1854 4.68714 15.748 5.01889 15.3583L3.87668 14.386C3.11141 15.285 3.08777 16.4116 3.58598 17.2895C4.07679 18.1544 5.04947 18.75 6.22281 18.75V17.25ZM17.7772 18.75C18.9505 18.75 19.9232 18.1544 20.414 17.2895C20.9122 16.4116 20.8886 15.285 20.1233 14.386L18.9811 15.3583C19.3129 15.748 19.3159 16.1854 19.1094 16.5492C18.8956 16.926 18.4322 17.25 17.7772 17.25V18.75ZM15.0199 4.37366V4.26995H13.5199V4.37366H15.0199ZM18.9848 8.89061C18.7055 6.43026 16.8806 4.47476 14.5129 3.6641L14.027 5.08322C15.9441 5.73962 17.2913 7.27101 17.4943 9.05977L18.9848 8.89061ZM10.4801 4.37366V4.26995H8.98005V4.37366H10.4801ZM6.50568 9.05977C6.7087 7.27101 8.05587 5.73962 9.973 5.08322L9.48711 3.6641C7.11944 4.47476 5.29449 6.43026 5.01525 8.89061L6.50568 9.05977ZM12 2.75C12.8394 2.75 13.5199 3.4305 13.5199 4.26995H15.0199C15.0199 2.60208 13.6679 1.25 12 1.25V2.75ZM12 1.25C10.3321 1.25 8.98005 2.60208 8.98005 4.26995H10.4801C10.4801 3.4305 11.1606 2.75 12 2.75V1.25ZM14.2977 19.7368C13.975 20.5979 13.0846 21.25 12 21.25V22.75C13.6855 22.75 15.1516 21.7325 15.7023 20.2632L14.2977 19.7368ZM12 21.25C10.9154 21.25 10.025 20.5979 9.7023 19.7368L8.2977 20.2632C8.84835 21.7325 10.3145 22.75 12 22.75V21.25Z"
                  fill="#28303F"
                />
              </svg>

              <span className="badge badge-sm indicator-item bg-primaryColor text-white">
                8
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-44 sm:w-52 shadow bg-white"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar border-none"
          >
            <div className="w-10 rounded-full">
              <img src={avater} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-44 sm:w-52 bg-white"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
