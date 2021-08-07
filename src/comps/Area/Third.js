import { React,useState } from 'react';


const Third = () => {
    const [v1, setv1] = useState()
    const [v2, setv2] = useState()
    const [v3, setv3] = useState()
    const [defaultvalue, setdefaultvalue] = useState(" Area= 1/2*b*c*sin(A)")

    var areaof = 1/2*(Number(v1))*(Number(v2))*(Math.sin(Number(v3)*Math.PI/180));

    const handleThree = event => {
        event.preventDefault();
        setdefaultvalue(areaof)
    }

    return (
      <div className="first">
        <form onSubmit={handleThree}>
          <div style={{ display: "block" }}>
            <label htmlFor="text" className="label">
              b=
              <input
                className="input-angle"
                type="number"
                min="0.0001"
                value={v1}
                step="0.00001"
                required
                onChange={(e) => {
                  setv1(e.target.value);
                }}
              />
            </label>
            <label htmlFor="text" className="label">
              c=
              <input
                className="input-angle"
                type="number"
                min="0.0001"
                value={v2}
                step="0.00001"
                required
                onChange={(e) => {
                  setv2(e.target.value);
                }}
              />
            </label>
            <label htmlFor="text" className="label">
              ∠A(deg)=
              <input
                className="input-angle"
                type="number"
                min="0.0001"
                max="360"
                value={v3}
                step="0.00001"
                required
                onChange={(e) => {
                  setv3(e.target.value);
                }}
              />
            </label>
            <button className="sub-btnn">calculate</button>
            <h2>Area will be calculated here-</h2>
            <div className="output">{defaultvalue}</div>
          </div>
        </form>
      </div>
    );
}



export default Third;