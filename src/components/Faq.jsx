import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/slicer/forfaq";
const Faq = () => {
  const dispath = useDispatch();
  const state = useSelector((state) => state.faq);

  return (
    <div>
      <div className="  min-h-[100vh] ">
        <div className=" w-[90%] sm:w-[60%]   mx-auto space-y-5">
          <div className=" pt-20 pb-3 text-center font-extrabold text-3xl">
            <p className=" text-[18px] w-full sm:w-auto  sm:text-[25px] lg:text-[30px] ">
              Frequently asked questions
            </p>
          </div>
          <div>
            {" "}
            <hr />
          </div>

          {state.map((a, index) => (
            <>
              <div key={index} className=" space-y-3">
                <div className=" flex justify-between items-center">
                  <p className=" text-lg text">{a.title}</p>
                  <IoIosArrowDown
                    className=" cursor-pointer"
                    onClick={()=> dispath(toggle(a.id))}
                  />
                </div>

                <div>
                  <p
                    className={`${
                      a.one ? "block" : "hidden"
                    } text-gray-500 text-sm duration-300`}
                  >
                    {a.paragraph}
                  </p>
                </div>
              </div>
              <div>
                <hr />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
