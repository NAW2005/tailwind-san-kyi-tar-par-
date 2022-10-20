import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [show, setShow] = useState([
    {
      id: 1,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
        eius tenetur, facilis commodi saepe tempore. Exercitationem
        eligendi quidem illum provident! `,
      one: false,
    },
    {
      id: 2,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
        eius tenetur, facilis commodi saepe tempore. Exercitationem
        eligendi quidem illum provident! `,
      one: false,
    },

    {
      id: 3,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
        eius tenetur, facilis commodi saepe tempore. Exercitationem
        eligendi quidem illum provident! `,
      one: false,
    },
    {
      id: 4,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
        eius tenetur, facilis commodi saepe tempore. Exercitationem
        eligendi quidem illum provident! `,
      one: false,
    },
    {
      id: 5,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
        eius tenetur, facilis commodi saepe tempore. Exercitationem
        eligendi quidem illum provident! `,
      one: false,
    },
  
   
  ]);

  const handleClick = (x) => {
    setShow(
      show.map((a) =>
        a.id === x ? { ...a, one: !a.one } : { ...a, one: false }
      )
    );
  };

  // handleshow = () =>{
  //     setShow()
  // }
  return (
    <div>
      <div className="  min-h-[100vh] ">
        <div className=" w-[90%] sm:w-[60%]   mx-auto space-y-5">
          <div className=" pt-20 pb-3 text-center font-extrabold text-3xl">
            <p className=" text-[18px] w-full sm:w-auto  sm:text-[25px] lg:text-[30px] ">
              Frequently asked questions
            </p>
           
          </div>
            <div> <hr /></div>      

          {show.map((i, index) => (
           <>
            <div key={index} className=" space-y-3">
              <div className=" flex justify-between items-center">
                <p className=" text-lg text">{i.title}</p>
                <IoIosArrowDown
                  className=" cursor-pointer"
                  onClick={() => handleClick(i.id)}
                />
              </div>

              <div>
                <p
                  className={`${
                    i.one ? "block" : "hidden"
                  } text-gray-500 text-sm duration-300`}
                >
                  {i.paragraph}
                </p>
              </div>

              
              
            </div>
            <div><hr /></div>

           
           </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
