import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Showmoney = () => {
  const dispatch = useDispatch();
  const reduxFormData = useSelector((state) => state.avc);
 
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
    </div>
  );
};

export default Showmoney;
