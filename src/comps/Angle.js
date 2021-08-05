import { React,useState } from 'react';

const Angle = () => {
  var [a1, setA1] = useState();
  var [a2, setA2] = useState();
  var [a3, setA3] = useState();

  let [text, setText] = useState("Output will be shown here");

  const handleSub  = (e) =>{
    e.preventDefault();
  
    if (parseInt(a1) + parseInt(a2) + parseInt(a3) === 180) {
      setText("Yuhu! these angles can make a triangle");
    } else {
      setText("Oops! these angles cannot make a triangle");
    }
  };

  return (
    <div>
      <form onSubmit={handleSub}>
        <div className="angles">
          <h2>
            Enter the angles in below input boxes and <br></br>
            we will tell you if those angles make a Triangle
          </h2>

          <input
            className="input-angle"
            type="number"
            min="1"
            max="180"
            value={a1 || ''}
            required
            onChange={(e) => {
              setA1(e.target.value);
            }}
          />
          <input
            className="input-angle"
            type="number"
            min="1"
            max="180"
            value={a2 || ''}
            required
            onChange={(e) => setA2(e.target.value)}
          />
          <input
            className="input-angle"
            type="number"
            min="1"
            max="180"
            value={a3 || ''}
            required
            onChange={(e) => setA3(e.target.value)}
          />
        </div>
        <br></br>
        <div className="btn">
          <button className="sub-btn">
            Submit
          </button>
          <div className="output">{text}</div>
        </div>
      </form>
    </div>
  );
}



export default Angle;
