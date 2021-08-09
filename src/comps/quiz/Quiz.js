import React,{useState} from 'react';


const Quiz = () => {
  const initialUserAnswersState = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  };

  const correctAnswers = {
    1: "yes",
    2: "no",
    3: "yes",
    4: "yes",
    5: "yes",
    // 6: "30",
    // 7: "5"
  };
  const [status, setStatus] = useState(initialUserAnswersState);
  const [correctans, setcorrectans] = useState(0)

    // const questions = [
    //   {
    //     q: "1.If a triangle has angles 135, 150, 300. Is it an obtuse triangle?",
    //     a: "yes",
    //     b: "no",
    //     cans: "1",
    //   },
    //   {
    //     q: "2.If a triangle has angles 1150, 250, 400. Is it an acute triangle?",
    //     a: "yes",
    //     b: "no",
    //     cans: "a",
    //   },
    //   {
    //     q: "3.If a triangle has angles 900, 600, 300. Is it a right angle triangle?",
    //     a: "yes",
    //     b: "no",
    //     cans: "a",
    //   },
    //   {
    //     q: "4.A triangle has angles 600, 600, 600. Is it an equilateral triangle?",
    //     a: "yes",
    //     b: "no",
    //     cans: "a",
    //   },
    //   {
    //     q: "5.If a triangle has angles 250, 750, 800. Is it an acute triangle?",
    //     a: "yes",
    //     b: "no",
    //     cans: "a",
    //   },
    //   {
    //     q: "6.If a triangle has 2 sides with equal lengths and 750 angle between them. What is the type of triangle?",
    //     a: "Equilateral",
    //     b: "Isosceles",
    //     c: "Right Angle traingle",
    //     cans: "a",
    //   },
    //   {
    //     q: "7.If a triangle has 2 angles of 750. What is the measure of third angle in degree?",
    //     a: "25",
    //     b: "30",
    //     c: "15",
    //     cans: "a",
    //   },
    //   {
    //     q: "8.If a triangle has 2 sides with equal lengths and 600 angle between them. What is the type of triangle?",
    //     a: "Equilateral",
    //     b: "Isosceles",
    //     c: "Both",
    //     cans: "a",
    //   },
    //   {
    //     q: "9.The perimeter of an equilateral triangle is 15cm. What is the length of one side?",
    //     a: "15cm",
    //     b: "45cm",
    //     c: "5cm",
    //     cans: "a",
    //   },
    //   {
    //     q: "10.If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?",
    //     a: "Equilateral",
    //     b: "Isosceles",
    //     c: "Scalene",
    //     cans: "a",
    //   },
    // ];

    const handleinput = (event) => {
      
      const value = event.target.value;
  
      switch (event.target.name) {
        case "q1":
          setStatus((prevState) => ({ ...prevState, 1: value }));
          break;

        case "q2":
          setStatus((prevState) => ({ ...prevState, 2: value }));
          break;

        case "q3":
          setStatus((prevState) => ({ ...prevState, 3: value }));
          break;

        case "q4":
          setStatus((prevState) => ({ ...prevState, 4: value }));
          break;

        case "q5":
          setStatus((prevState) => ({ ...prevState, 5: value }));
          break;

        // case "QuestionSix":
        //   setUserAnswers((prevState) => ({ ...prevState, 6: value }));
        //   break;

        // case "QuestionSeven":
        //   setUserAnswers((prevState) => ({ ...prevState, 7: value }));
        //   break;

        default:
          console.log("N/ot a Question");
      }
    };
     
   

    const handleoutput = e => {
      e.preventDefault();

   let  countOfCorrectAnswers = 0;

    for (let key in correctAnswers) {
      if (correctAnswers[key] === status[key]) countOfCorrectAnswers += 1;
    }

   setcorrectans(countOfCorrectAnswers)
  
    }
    return (
      <div className="verticleMiddle">
        <div className="quiz">
          <form className="radioform" onSubmit={handleoutput}>
            <div className="ques ans">
              <div className="label-que">
                1.If a triangle has angles 135<sup>0</sup>, 15<sup>0</sup>, 30
                <sup>0</sup>. Is it an obtuse triangle?
                <br />
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q1"
                    checked={status[1] === "yes"}
                    onChange={handleinput}
                    value="yes"
                  />
                  yes
                </label>
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q1"
                    checked={status[1] === "no"}
                    onChange={handleinput}
                    // checked={resultarray.push("b")}

                    value="no"
                  />
                  no
                </label>
              </div>
            </div>
            <div className="ques ans">
              <div className="label-que">
                2.If a triangle has angles 115<sup>0</sup>, 25<sup>0</sup>, 40
                <sup>0</sup>. Is it an acute triangle?
                <br />
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q2"
                    checked={status[2] === "yes"}
                    onChange={handleinput}
                    value="yes"
                  />
                  yes
                </label>
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q2"
                    checked={status[2] === "no"}
                    onChange={handleinput}
                    value="no"
                  />
                  no
                </label>
              </div>
            </div>
            <div className="ques ans">
              <div className="label-que">
                3.If a triangle has angles 90<sup>0</sup>, 60<sup>0</sup>, 30
                <sup>0</sup>. Is it a right angle triangle?
                <br />
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q3"
                    checked={status[3] === "yes"}
                    onChange={handleinput}
                    value="yes"
                  />
                  yes
                </label>
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q3"
                    checked={status[3] === "no"}
                    onChange={handleinput}
                    value="no"
                  />
                  no
                </label>
              </div>
            </div>
            <div className="ques ans">
              <div className="label-que">
                4.A triangle has angles 60<sup>0</sup>, 60<sup>0</sup>, 60
                <sup>0</sup>. Is it an equilateral triangle?
                <br />
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q4"
                    checked={status[4] === "yes"}
                    onChange={handleinput}
                    value="yes"
                  />
                  yes
                </label>
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q4"
                    checked={status[4] === "no"}
                    onChange={handleinput}
                    value="no"
                  />
                  no
                </label>
              </div>
            </div>
            <div className="ques ans">
              <div className="label-que">
                If a triangle has angles 25<sup>0</sup>, 75<sup>0</sup>, 80
                <sup>0</sup>. Is it an acute triangle?
                <br />
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q5"
                    checked={status[5] === "yes"}
                    onChange={handleinput}
                    value="yes"
                  />
                  yes
                </label>
                <label htmlFor="radio1" className="label">
                  <input
                    required
                    type="radio"
                    id="radio1"
                    name="q5"
                    checked={status[5] === "no"}
                    onChange={handleinput}
                    value="no"
                  />
                  no
                </label>
              </div>
            </div>
            <button className="sub-btnn" type="submit">
              calculate
            </button>
          </form>
          <p>{correctans}</p>
        </div>
      </div>
    );
}


export default Quiz;