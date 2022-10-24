import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbWorld } from "react-icons/tb";
import { useState } from "react";
import { receive } from "../store/slicer/forsendmoney";
import { Link, useNavigate } from "react-router-dom";

const Feature = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    money: "",
    total: "",
    exchange: "",
    recipent: "",
  });
  const [arr, setArr] = useState([]);

  const handleFormDataChange = (e) => {
    // console.log(e.target.name)
    setFormData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
  const reduxFormData = useSelector((state) => state.avc);

  const state = useSelector((state) => state.forfeauter);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(receive(formData));
  };

  console.log(reduxFormData);

  return (
    <div>
      {reduxFormData.length !== 0 && (
        <div>
          {reduxFormData.map((i, index) => (
            <div key={index}>
              <p>{i.money}</p>
            </div>
          ))}
        </div>
      )}
      <div className=" mt-[100px]">
        <div className=" space-y-3 text-center">
          <h1 className=" font-extrabold text-[30px]">
            A better way to send money
          </h1>
          <p className=" w-[60%] mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste illo
            voluptas deleniti nulla quaerat fugit?
          </p>
        </div>

        <div className=" flex justify-between items-center mt-10 w-[95%] mx-auto ">
          <div className=" w-[50%] ml-6 space-y-10">
            <div className=" space-y-3 ">
              <h1 className=" text-2xl font-extrabold">
                Transfer funds world-wide
              </h1>
              <p className="text-[16px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                asperiores eveniet repellendus quam tenetur repudiandae, modi
                cupiditate officiis, voluptas unde dolorem. Aspernatur
                perferendis inventore consequuntur harum. Molestias
                exercitationem minus error.
              </p>
            </div>
            {state.map((i, index) => (
              <>
                <div
                  key={index}
                  className=" mt-10 flex flex-row justify-between items-start"
                >
                  <div className=" bg-blue-700 rounded-lg p-3 ">
                    <div className=" w-[20px] text-white text-3xl h-[20px] ">
                      {i.icon}
                    </div>
                  </div>
                  <div className=" ml-5 space-y-3">
                    <div className=" text-lg font-bold">{i.title}</div>
                    <div className="  text-sm text-gray-500">{i.para}</div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <form
            onSubmit={submitHandler}
            className=" w-[35%] mr-20  border shadow-lg rounded-lg "
          >
            <div className=" space-y-5  p-8">
              <div>
                <h1 className=" font-bold">Send money</h1>
                <p className=" text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" space-y-1">
                <h1 className=" text-[15px]">Recipinet</h1>

                <select
                  id="countries"
                  class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  sentDataToRedux
                >
                  <option selected="">Molly Sanders</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className=" h-[0.5px] w-full bg-gray-300"></div>

            <div className=" p-8 space-y-5">
              <div>
                <h1>How much do you want to send</h1>

                <div className=" flex">
                  <div className=" w-full ">
                    <input
                      onChange={handleFormDataChange}
                      name="money"
                      type="number"
                      className=" rounded-lg rounded-r-none  w-full"
                    />
                  </div>
                  <div className="">
                    <select
                      name=""
                      id=""
                      className=" bg-gray-100 rounded-r-lg w-full"
                    >
                      <option name="molly" selected="">
                        Molly Sanders
                      </option>
                      <option name="us" value="US">
                        United States
                      </option>
                      <option name="ca" value="CA">
                        {" "}
                        CAD
                      </option>
                      <option name="fr" value="FR">
                        France
                      </option>
                      <option name="ge" value="DE">
                        Germany
                      </option>
                    </select>
                  </div>
                </div>

                <div className=" mt-10">
                  <input
                    onChange={handleFormDataChange}
                    name="total"
                    type="text"
                    className=" rounded rounded-b-none  block w-full placeholder:text-right"
                    placeholder=" Total Fees"
                    form
                  />
                  <input
                    onChange={handleFormDataChange}
                    name="exchange"
                    type="text"
                    className=" rounded rounded-t-none w-full placeholder:text-right"
                    placeholder=" Exchange rate"
                  />
                </div>

                <div className=" mt-10 space-y-2">
                  <div>
                    <h1>Recipent gets</h1>
                    <div className=" flex">
                      <div className=" w-full ">
                        <input
                          onChange={handleFormDataChange}
                          name="recipent"
                          type="text"
                          className=" rounded-lg rounded-r-none  w-full"
                        />
                      </div>
                      <div className="">
                        <select
                          name=""
                          id=""
                          className=" bg-gray-100 rounded-r-lg w-full"
                        >
                          <option name="molly" selected="">
                            Molly Sanders
                          </option>
                          <option name="us" value="US">
                            United States
                          </option>
                          <option name="ca" value="CA">
                            {" "}
                            CAD
                          </option>
                          <option name="fr" value="FR">
                            France
                          </option>
                          <option name="ge" value="DE">
                            Germany
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-gray-100 border-t p-5 w-full">
              <div className=" flex justify-end ">
                <div className=" my-auto  mr-3">
                  <p className=" cursor-pointer">Cancle</p>
                </div>
                <button className="  ">
                  <button
                   
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-700 text-white  rounded-lg px-6 text-sm py-[12px]"
                  >
                    Counting
                  </button>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feature;
