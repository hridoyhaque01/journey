import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <section className="h-full py-10 capitalize text-blueReg font-medium">
      <div className="h-full w-72 bg-white rounded-r-xl overflow-hidden py-6">
        <nav className="sidebar">
          <ul className="flex flex-col">
            <li>
              <NavLink to="/" className="flex items-center py-4 px-6 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 64 64"
                  id="dashboard"
                  className="w-6 h-6"
                >
                  <path
                    fill="#3f5391"
                    fillRule="evenodd"
                    d="M17.286 8H20.714C21.9164 7.99999 22.8862 7.99998 23.6756 8.05384 24.4872 8.10922 25.205 8.22597 25.8846 8.50747 27.5181 9.1841 28.8159 10.4819 29.4925 12.1154 29.774 12.795 29.8908 13.5128 29.9462 14.3244 30 15.1138 30 16.0836 30 17.286V20.714C30 21.9164 30 22.8863 29.9462 23.6756 29.8908 24.4872 29.774 25.205 29.4925 25.8846 28.8159 27.5181 27.5181 28.8159 25.8846 29.4925 25.205 29.774 24.4872 29.8908 23.6756 29.9462 22.8862 30 21.9164 30 20.714 30H17.286C16.0836 30 15.1138 30 14.3244 29.9462 13.5128 29.8908 12.795 29.774 12.1154 29.4925 10.4819 28.8159 9.1841 27.5181 8.50747 25.8846 8.22597 25.205 8.10922 24.4872 8.05384 23.6756 7.99998 22.8862 7.99999 21.9164 8 20.714V17.286C7.99999 16.0836 7.99998 15.1138 8.05384 14.3244 8.10922 13.5128 8.22597 12.795 8.50747 12.1154 9.1841 10.4819 10.4819 9.1841 12.1154 8.50747 12.795 8.22597 13.5128 8.10922 14.3244 8.05384 15.1138 7.99998 16.0836 7.99999 17.286 8zM14.5059 10.7143C13.83 10.7604 13.4364 10.8467 13.1359 10.9711 12.1558 11.3771 11.3771 12.1558 10.9711 13.1359 10.8467 13.4364 10.7604 13.83 10.7143 14.5059 10.6674 15.1938 10.6667 16.0726 10.6667 17.3333V20.6667C10.6667 21.9274 10.6674 22.8062 10.7143 23.4941 10.7604 24.17 10.8467 24.5636 10.9711 24.8641 11.3771 25.8442 12.1558 26.6229 13.1359 27.0289 13.4364 27.1533 13.83 27.2396 14.5059 27.2857 15.1938 27.3326 16.0726 27.3333 17.3333 27.3333H20.6667C21.9274 27.3333 22.8062 27.3326 23.4941 27.2857 24.17 27.2396 24.5636 27.1533 24.8641 27.0289 25.8442 26.6229 26.6229 25.8442 27.0289 24.8641 27.1533 24.5636 27.2396 24.17 27.2857 23.4941 27.3326 22.8062 27.3333 21.9274 27.3333 20.6667V17.3333C27.3333 16.0726 27.3326 15.1938 27.2857 14.5059 27.2396 13.83 27.1533 13.4364 27.0289 13.1359 26.6229 12.1558 25.8442 11.3771 24.8641 10.9711 24.5636 10.8467 24.17 10.7604 23.4941 10.7143 22.8062 10.6674 21.9274 10.6667 20.6667 10.6667H17.3333C16.0726 10.6667 15.1938 10.6674 14.5059 10.7143zM17.286 34H20.714C21.9164 34 22.8862 34 23.6756 34.0538 24.4872 34.1092 25.205 34.226 25.8846 34.5075 27.5181 35.1841 28.8159 36.4819 29.4925 38.1154 29.774 38.795 29.8908 39.5128 29.9462 40.3244 30 41.1138 30 42.0836 30 43.286V46.714C30 47.9164 30 48.8863 29.9462 49.6756 29.8908 50.4872 29.774 51.205 29.4925 51.8846 28.8159 53.5181 27.5181 54.8159 25.8846 55.4925 25.205 55.774 24.4872 55.8908 23.6756 55.9462 22.8862 56 21.9164 56 20.714 56H17.286C16.0836 56 15.1138 56 14.3244 55.9462 13.5128 55.8908 12.795 55.774 12.1154 55.4925 10.4819 54.8159 9.1841 53.5181 8.50747 51.8846 8.22597 51.205 8.10922 50.4872 8.05384 49.6756 7.99998 48.8862 7.99999 47.9164 8 46.714V43.286C7.99999 42.0836 7.99998 41.1138 8.05384 40.3244 8.10922 39.5128 8.22597 38.795 8.50747 38.1154 9.1841 36.4819 10.4819 35.1841 12.1154 34.5075 12.795 34.226 13.5128 34.1092 14.3244 34.0538 15.1138 34 16.0836 34 17.286 34zM14.5059 36.7143C13.83 36.7604 13.4364 36.8467 13.1359 36.9711 12.1558 37.3771 11.3771 38.1558 10.9711 39.1359 10.8467 39.4364 10.7604 39.83 10.7143 40.5059 10.6674 41.1938 10.6667 42.0726 10.6667 43.3333V46.6667C10.6667 47.9274 10.6674 48.8062 10.7143 49.4941 10.7604 50.17 10.8467 50.5636 10.9711 50.8641 11.3771 51.8442 12.1558 52.6229 13.1359 53.0289 13.4364 53.1533 13.83 53.2396 14.5059 53.2857 15.1938 53.3326 16.0726 53.3333 17.3333 53.3333H20.6667C21.9274 53.3333 22.8062 53.3326 23.4941 53.2857 24.17 53.2396 24.5636 53.1533 24.8641 53.0289 25.8442 52.6229 26.6229 51.8442 27.0289 50.8641 27.1533 50.5636 27.2396 50.17 27.2857 49.4941 27.3326 48.8062 27.3333 47.9274 27.3333 46.6667V43.3333C27.3333 42.0726 27.3326 41.1938 27.2857 40.5059 27.2396 39.83 27.1533 39.4364 27.0289 39.1359 26.6229 38.1558 25.8442 37.3771 24.8641 36.9711 24.5636 36.8467 24.17 36.7604 23.4941 36.7143 22.8062 36.6674 21.9274 36.6667 20.6667 36.6667H17.3333C16.0726 36.6667 15.1938 36.6674 14.5059 36.7143zM43.286 8H46.714C47.9164 7.99999 48.8862 7.99998 49.6756 8.05384 50.4872 8.10922 51.205 8.22597 51.8846 8.50747 53.5181 9.1841 54.8159 10.4819 55.4925 12.1154 55.774 12.795 55.8908 13.5128 55.9462 14.3244 56 15.1138 56 16.0836 56 17.286V20.714C56 21.9164 56 22.8863 55.9462 23.6756 55.8908 24.4872 55.774 25.205 55.4925 25.8846 54.8159 27.5181 53.5181 28.8159 51.8846 29.4925 51.205 29.774 50.4872 29.8908 49.6756 29.9462 48.8862 30 47.9164 30 46.714 30H43.286C42.0836 30 41.1138 30 40.3244 29.9462 39.5128 29.8908 38.795 29.774 38.1154 29.4925 36.4819 28.8159 35.1841 27.5181 34.5075 25.8846 34.226 25.205 34.1092 24.4872 34.0538 23.6756 34 22.8862 34 21.9164 34 20.714V17.286C34 16.0836 34 15.1138 34.0538 14.3244 34.1092 13.5128 34.226 12.795 34.5075 12.1154 35.1841 10.4819 36.4819 9.1841 38.1154 8.50747 38.795 8.22597 39.5128 8.10922 40.3244 8.05384 41.1138 7.99998 42.0836 7.99999 43.286 8zM40.5059 10.7143C39.83 10.7604 39.4364 10.8467 39.1359 10.9711 38.1558 11.3771 37.3771 12.1558 36.9711 13.1359 36.8467 13.4364 36.7604 13.83 36.7143 14.5059 36.6674 15.1938 36.6667 16.0726 36.6667 17.3333V20.6667C36.6667 21.9274 36.6674 22.8062 36.7143 23.4941 36.7604 24.17 36.8467 24.5636 36.9711 24.8641 37.3771 25.8442 38.1558 26.6229 39.1359 27.0289 39.4364 27.1533 39.83 27.2396 40.5059 27.2857 41.1938 27.3326 42.0726 27.3333 43.3333 27.3333H46.6667C47.9274 27.3333 48.8062 27.3326 49.4941 27.2857 50.17 27.2396 50.5636 27.1533 50.8641 27.0289 51.8442 26.6229 52.6229 25.8442 53.0289 24.8641 53.1533 24.5636 53.2396 24.17 53.2857 23.4941 53.3326 22.8062 53.3333 21.9274 53.3333 20.6667V17.3333C53.3333 16.0726 53.3326 15.1938 53.2857 14.5059 53.2396 13.83 53.1533 13.4364 53.0289 13.1359 52.6229 12.1558 51.8442 11.3771 50.8641 10.9711 50.5636 10.8467 50.17 10.7604 49.4941 10.7143 48.8062 10.6674 47.9274 10.6667 46.6667 10.6667H43.3333C42.0726 10.6667 41.1938 10.6674 40.5059 10.7143zM43.286 34H46.714C47.9164 34 48.8862 34 49.6756 34.0538 50.4872 34.1092 51.205 34.226 51.8846 34.5075 53.5181 35.1841 54.8159 36.4819 55.4925 38.1154 55.774 38.795 55.8908 39.5128 55.9462 40.3244 56 41.1138 56 42.0836 56 43.286V46.714C56 47.9164 56 48.8863 55.9462 49.6756 55.8908 50.4872 55.774 51.205 55.4925 51.8846 54.8159 53.5181 53.5181 54.8159 51.8846 55.4925 51.205 55.774 50.4872 55.8908 49.6756 55.9462 48.8862 56 47.9164 56 46.714 56H43.286C42.0836 56 41.1138 56 40.3244 55.9462 39.5128 55.8908 38.795 55.774 38.1154 55.4925 36.4819 54.8159 35.1841 53.5181 34.5075 51.8846 34.226 51.205 34.1092 50.4872 34.0538 49.6756 34 48.8862 34 47.9164 34 46.714V43.286C34 42.0836 34 41.1138 34.0538 40.3244 34.1092 39.5128 34.226 38.795 34.5075 38.1154 35.1841 36.4819 36.4819 35.1841 38.1154 34.5075 38.795 34.226 39.5128 34.1092 40.3244 34.0538 41.1138 34 42.0836 34 43.286 34zM40.5059 36.7143C39.83 36.7604 39.4364 36.8467 39.1359 36.9711 38.1558 37.3771 37.3771 38.1558 36.9711 39.1359 36.8467 39.4364 36.7604 39.83 36.7143 40.5059 36.6674 41.1938 36.6667 42.0726 36.6667 43.3333V46.6667C36.6667 47.9274 36.6674 48.8062 36.7143 49.4941 36.7604 50.17 36.8467 50.5636 36.9711 50.8641 37.3771 51.8442 38.1558 52.6229 39.1359 53.0289 39.4364 53.1533 39.83 53.2396 40.5059 53.2857 41.1938 53.3326 42.0726 53.3333 43.3333 53.3333H46.6667C47.9274 53.3333 48.8062 53.3326 49.4941 53.2857 50.17 53.2396 50.5636 53.1533 50.8641 53.0289 51.8442 52.6229 52.6229 51.8442 53.0289 50.8641 53.1533 50.5636 53.2396 50.17 53.2857 49.4941 53.3326 48.8062 53.3333 47.9274 53.3333 46.6667V43.3333C53.3333 42.0726 53.3326 41.1938 53.2857 40.5059 53.2396 39.83 53.1533 39.4364 53.0289 39.1359 52.6229 38.1558 51.8442 37.3771 50.8641 36.9711 50.5636 36.8467 50.17 36.7604 49.4941 36.7143 48.8062 36.6674 47.9274 36.6667 46.6667 36.6667H43.3333C42.0726 36.6667 41.1938 36.6674 40.5059 36.7143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className="flex items-center py-4 px-6 gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="users"
                  className="w-6 h-6"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <circle
                    cx="88"
                    cy="108"
                    r="52"
                    fill="none"
                    stroke="#3f5391"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  ></circle>
                  <path
                    fill="none"
                    stroke="#3f5391"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                    d="M155.41251 57.937A52.00595 52.00595 0 1 1 169.52209 160M15.99613 197.39669a88.01736 88.01736 0 0 1 144.00452-.00549M169.52209 160a87.89491 87.89491 0 0 1 72.00032 37.3912"
                  ></path>
                </svg>
                <span>Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className="flex items-center py-4 px-6 gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 512 512"
                  id="edit"
                  className="w-6 h-6 fill-blueReg"
                >
                  <path d="M435.824,296.954a10,10,0,0,0-10,10v88.791a30.034,30.034,0,0,1-30,30H115.233a30.034,30.034,0,0,1-30-30V135.155a30.034,30.034,0,0,1,30-30h88.791a10,10,0,0,0,0-20H115.233a50.057,50.057,0,0,0-50,50V395.746a50.057,50.057,0,0,0,50,50H395.824a50.057,50.057,0,0,0,50-50V306.955A10,10,0,0,0,435.824,296.954Z"></path>
                  <rect
                    width="206.495"
                    height="66.596"
                    x="214.903"
                    y="161.57"
                    transform="rotate(-45 318.15 194.868)"
                  ></rect>
                  <polygon points="197.775 315.246 249.815 300.83 212.191 263.206 197.775 315.246"></polygon>
                  <path d="M427.721,73.566h0a25.027,25.027,0,0,0-35.355,0L381.76,84.172l47.091,47.091,10.606-10.606a25.029,25.029,0,0,0,0-35.355Z"></path>
                </svg>
                <span>Posts</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/popular"
                className="flex items-center py-4 px-6 gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="trending"
                  className="w-6 h-6"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="6.745"
                      x2="19.127"
                      y1="19.353"
                      y2="6.971"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#3f5391"></stop>
                      <stop offset="1" stopColor="#3f5391"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    d="m19.262,7.251c-.471-.741-.864-1.03-1.33-.998-.576.053-.747.563-.86.901-.098.293-.242.72-.581,1.255-.029-1.001-.136-2.354-.818-3.74-.312-.635-1.441-2.689-2.82-2.404-.866.173-1.125,1.053-1.353,1.829-.062.212-.126.434-.206.65-.549,1.512-1.583,2.149-2.78,2.887-1.108.684-2.364,1.457-3.18,3.022-1.025,1.966-1.031,4.521-.013,6.668,1.188,2.508,3.791,4.245,6.63,4.427.164.011.325.016.484.016,4.572,0,7.101-4.198,7.209-4.383,0,0,0,0,0,0,2.298-3.911.753-8.336-.385-10.129Zm-4.43,10.888c-.01.018-1.001,1.716-2.493,1.716-.048,0-.097,0-.149-.005-.933-.063-1.786-.667-2.174-1.538-.323-.727-.337-1.667-.034-2.287.204-.416.538-.647,1.163-1.058.393-.259.859-.565,1.314-.986.052.775.307,2.093,1.699,2.451l.151.04c.058.016.117.024.177.025l.202.004c.194,0,.382-.024.564-.074-.006.555-.112,1.156-.418,1.712Zm3.522-1.52c-.056.094-.867,1.424-2.337,2.45.078-.117.122-.194.124-.198.759-1.377.672-2.863.465-3.867-.057-.278-.266-.5-.541-.573-.273-.07-.566.016-.755.227-.269.303-.466.344-.608.344l-.166-.021c-.417-.107-.578-.49-.593-1.415-.008-.496-.019-1.114-.202-1.768-.084-.3-.344-.517-.654-.545-.3-.026-.604.138-.741.417-.514,1.049-1.317,1.577-2.028,2.046-.662.434-1.288.844-1.683,1.649-.5,1.022-.495,2.418.011,3.556.022.049.052.094.075.142-.87-.613-1.588-1.425-2.043-2.384-.808-1.705-.813-3.798-.013-5.332.625-1.198,1.603-1.801,2.637-2.438,1.254-.773,2.675-1.649,3.403-3.652.089-.246.164-.498.235-.739.068-.23.163-.556.247-.729.264.173.751.754,1.14,1.544.632,1.285.656,2.574.673,3.516.016.869.031,1.69.824,1.882.77.189,1.269-.536,1.795-1.305.258-.378.441-.721.576-1.016.812,1.535,1.996,5.082.159,8.211Z"
                  ></path>
                </svg>
                <span>Popular</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/comments"
                className="flex items-center py-4 px-6 gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="chat-teardrop-dots"
                  className="w-6 h-6 fill-blueReg"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <path
                    fill="none"
                    stroke="#3f5391"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                    d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
                  ></path>
                  <circle cx="132" cy="128" r="8"></circle>
                  <circle cx="84" cy="128" r="8"></circle>
                  <circle cx="180" cy="128" r="8"></circle>
                </svg>
                <span>Comments</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
