import React,{useState} from 'react';

const Hypo = () => {
    const [a1, seta1] = useState();
    const [b1, setb1] = useState();
    const [result, setresult] = useState("C= √a2+b2");

    const handlehypo = event => {
        event.preventDefault()
        var ans = Math.sqrt(((Number(a1))*(Number(a1))) + ((Number(b1))*(Number(b1)))
            ) 
            setresult(ans);   
        }

  return (
    <div className="hypo">
      <h3>Enter the lengths of sides of right angle triangle</h3>
      <form onSubmit={handlehypo}>
        <label htmlFor="text" className="label">
          a=
          <input
            className="input-angle"
            required
            value={a1}
            min="0.0001"
            type="number"
            step="0.00001"
            onChange={(e) => {
              seta1(e.target.value);
            }}
          />
        </label>
        <label htmlFor="text" className="label">
          b=
          <input
            className="input-angle"
            required
            value={b1}
            min="0.0001"
            type="number"
            step="0.00001"
            onChange={(e) => {
              setb1(e.target.value);
            }}
          />
        </label>
        <button className="sub-btn">calculate</button>
        <h2>Hypotenuse will be calculated here-</h2>
        <div className="output">{result}</div>
      </form>
    </div>
  );
}


export default Hypo;