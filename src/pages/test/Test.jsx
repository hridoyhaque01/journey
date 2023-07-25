import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Test() {
  const { state } = useLocation();
  const { payload } = state || {};
  const navigate = useNavigate();
  console.log(payload);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);
    const updatedPayload = payload
      ? [...payload, { name, id: payload.length + 1 }]
      : [{ name, id: 1 }];
    history.pu;
    navigate("/test", {
      state: {
        payload: updatedPayload,
      },
    });
  };
  return (
    <section className="p-10">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 grid gird-cols-6 gap-4">
          {payload?.map((item) => (
            <div className="p-4 bg-white rounded-md" key={item?.id}>
              {item?.name}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="enter name"
              name="name"
              className="p-4 outline-none w-full"
            />
          </div>
          <button className="px-6 py-3 bg-primaryColor rounded-md text-white mt-5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Test;
