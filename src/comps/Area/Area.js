import React from 'react';
import First from './First';
import Second from './Second';

const Area = () => {
  const [status, setStatus] = React.useState(0);


  const radioHandler = (status) => {
    setStatus(status);
  };

    return (
      <div className="area">
        <h2 style={{ textAlign: "center" }}>Calculate Area</h2>
        <h3>Select an option below as per the data you have for a triangle</h3>
        <form>
          <div className="radio">
            <label htmlFor="area">
              <input
                id="calarea"
                type="radio"
                name="grp"
                checked={status === 1}
                onClick={(e) => radioHandler(1)}
              />
              If you have base and height length
            </label>
          </div>
          <div className="radiobtn">
            <div className="radio">
              <label htmlFor="area">
                <input
                  id="calarea"
                  type="radio"
                  name="grp"
                  checked={status === 2}
                  onClick={(e) => radioHandler(2)}
                />
                If you have length of 3 sides
              </label>
            </div>
            <div className="radio">
              <label htmlFor="area">
                <input
                  id="calarea"
                  type="radio"
                  name="grp"
                  checked={status === 3}
                  onClick={(e) => radioHandler(3)}
                />
                If you have length of 2 sides and included angle
              </label>
            </div>
          </div>
        </form>
        {status === 1 && <First />}
        {status === 2 && <Second />}
        {status === 3 && "3"}
      </div>
    );
    
    
}



export default Area;