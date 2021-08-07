import { React,useState } from 'react';

const Second = () => {
    const [a, seta] = useState();
    const [b, setb] = useState();
    const [c, setc] = useState()
    const [ans, setans] = useState("Area= √s(s-a)(s-b)(s-c)")
    let s = (parseFloat(a)+parseFloat(b)+parseFloat(c))/2

    const handleSecond = (event) => {
      event.preventDefault();
      var area =
        parseFloat(s) *
        (parseFloat(s) - parseFloat(a)) *
        (parseFloat(s) - parseFloat(b)) *
        (parseFloat(s) - parseFloat(c));
      var re = Math.sqrt(parseFloat(area));
      setans(re);
    };

    return (
      <div className="first">
        <form onSubmit={handleSecond}>
          <label htmlFor="text">
            a=
            <input
              className="input-angle"
              type="number"
              min="0.0001"
              value={a}
              step="0.00001"
              required
              onChange={(e) => {
                seta(e.target.value);
              }}
            />
          </label>
          <label htmlFor="text">
            b=
            <input
              className="input-angle"
              type="number"
              min="0.0001"
              value={b}
              step="0.00001"
              required
              onChange={(e) => {
                setb(e.target.value);
              }}
            />
          </label>
          <label htmlFor="text">
            c=
            <input
              className="input-angle"
              type="number"
              min="0.0001"
              value={c}
              step="0.00001"
              required
              onChange={(e) => {
                setc(e.target.value);
              }}
            />
          </label>
          <button className="sub-btnn">calculate</button>
          <h2>Area will be calculated here-</h2>
          <div className="output">{ans}</div>
          <p>{s}</p>
        </form>
      </div>
    );
}



export default Second;