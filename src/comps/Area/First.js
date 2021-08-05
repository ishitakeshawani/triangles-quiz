import { React,useState } from 'react';

const First = () => {
  const [base, setbase] = useState();
  const [side, setside] = useState();
  const [ttext, setttext] = useState("Area= 1/2*base*height");

  let area = 1/2*parseFloat(base)*parseFloat(side);

  const handlearea = (event) => {
    event.preventDefault();
    setttext(area);
  };



    return (
      <div className="first">
        <form onSubmit={handlearea}>
          <label htmlFor="text">base= </label>
          <input
            className="input-angle"
            type="number"
            min="0.0001"
            // max="180"
            value={base}
            step="0.00001"
            required
            onChange={(e) => {
              setbase(e.target.value);
            }}
          />
          <label htmlFor="text">height= </label>
          <input
            className="input-angle"
            type="number"
            min="0.0001"
            // max="180"
            value={side}
            required
            step="0.00001"
            onChange={(e) => {
              setside(e.target.value);
            }}
          />
          <button className="sub-btn">calculate</button>
          <h2>Area will be calculated here-</h2>
          <div className="output">{ttext}</div>
        </form>
      </div>
    );
}


export default First;