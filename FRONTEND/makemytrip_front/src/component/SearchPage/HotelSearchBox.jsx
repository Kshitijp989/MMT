import { useState, useEffect } from "react";
import styled from "styled-components";

const Style = styled.div`
  height: 250px;
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
  .jelo {
    width: 100%;
    background-color: #03032c;
    .topdiv {
      width: 90%;
      height: 100px;
      padding-bottom: 10px;
      margin: auto;
      display: flex;
      justify-content: space-around;
      padding-top: 8px;
      align-items: center;
      .first {
        width: 120px;
        padding: 0;
        margin: 0;
        line-height: 0px;
        text-align: center;
        background: rgba(104, 105, 104, 0.3);
        border-radius: 5px;
        p {
          font-size: 14px;
          font-weight: 600;
          color: #2c98f1;
        }
        select {
          border: 0px;
          //-webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          color: white;
          font-size: 17px;
          text-overflow: "";
          outline: 0px;
          width: 100%;
          text-align: center;
          background-color: transparent;
          padding: 3px;
        }
        option {
          background-color: #7e7e7e;
        }
      }
      .second {
        width: 170px;
        line-height: 0;
        background: rgba(104, 105, 104, 0.3);
        border-radius: 5px;
        p {
          font-size: 14px;
          font-weight: 600;
          margin-left: 10px;
          color: #2c98f1;
        }
        select {
          border: 0px;
          //-webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 8px;
          color: white;
          font-size: 17px;
          text-overflow: "";
          outline: 0px;
          width: 100%;
          background-color: #21233e ;
          padding: 3px;
        }
        option {
          background-color: #494949;
        }
      }
      button {
        width: 170px;
        height: 45px;
        border-radius: 25px;
        background: linear-gradient(
          to right,
          #8f92fa 0%,
          #6165f0 50%,
          #6c70eb 50%,
          #3339e9 100%
        );
        border: none;
        color: white;
        font-weight: 700;
        font-size: 20px;
      }
    }
  }
  .hello {
    position: fixed;
    z-index: 100;
    top: 0;
  }
    .fromtodiv {
    display:grid;
    grid-template-columns: 1fr 1fr;
    height: 87%;
       p {
          font-size: 14px;
          font-weight: 600;
          margin-left: 10px;
          color: #2c98f1;
        }
}
    .date{
    border:none;
    font-size: 16px;
    margin-left: 10px;
    text-color: white
}
`;

export const HotelSearchBox = ({ handle }) => {

    const [text, setText] = useState([]);
    useEffect(() => {
      let promise = async () => {
        const data = await fetch(
          "https://raw.githubusercontent.com/ashhadulislam/JSON-Airports-India/master/airports.json"
        );
        const ans = await data.json();
        setText(ans.airports);
      };
      promise();
    }, []);

  const [select, setSelect] = useState({
    location: "",
    checkin: "",
    checkout: ""
  });

  const handleSelect = (e) => {
    const { value, name } = e.target;
    setSelect({
      ...select,
      [name]: value
    });
  };

  const handleButton = () => {
    handle(select);
  };

  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);

  return (
    <Style>
      <div className={nav === true ? "hello jelo" : "jelo"}>
        <div className="topdiv">
          <div className="second">
            <p>Location</p>
            <select onChange={handleSelect} name="from" id="">
            {text.map((e) => (
              <option value={e.IATA_code} key={e.IATA_code}
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "White",
                fontSize: "17px",
                padding: "3px"
              }}
            >
                {e.city_name}
              </option>
            ))}
          </select>
            {/* <input
              type="text"
              name="location"
              value={select.location}
              onChange={handleSelect}
              placeholder="Enter location"
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "17px",
                padding: "3px"
              }}
            /> */}
          </div>
          <div className="second">
            <p>Check-in</p>
            <input
              type="date"
              id="checkin"
              className="date"
              value={select.checkin}
              onChange={handleSelect}
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "17px",
                padding: "3px"
              }}
            />
          </div>
          <div className="second">
            <p>Check-out</p>
            <input
              type="date"
              id="checkout"
              className="date"
              value={select.checkout}
              onChange={handleSelect}
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "17px",
                padding: "3px"
              }}
            />
          </div>
          <button onClick={handleButton}>SEARCH</button>
        </div>
      </div>
    </Style>
  );
};
