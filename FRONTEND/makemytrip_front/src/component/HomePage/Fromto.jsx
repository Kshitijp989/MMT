import { useContext,useEffect, useState } from "react";
import { Fromtocss } from "./Fromtocss";
import Statecontext from '../Context/Statecontext';

export const Fromto = ({handleChange}) => {
  const {apiBaseUrl}=useContext(Statecontext);
  const [text, setText] = useState([]);
  useEffect(() => {
    let promise = async () => {
      const data = await fetch(
        `${apiBaseUrl}getallcountry/countries/cities`
      );
      const ans = await data.json();
      setText(ans);
    };
    promise();
  }, []);
  return (
    <Fromtocss>
      <div className="fromtodiv">
        <div>
          <h3>FROM</h3>
          <select onChange={handleChange} name="from" id="">
            {text.map((e) => (
              <option value={e.airportCode} key={e.cityName}>
                {e.cityName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>TO</h3>
          <select onChange={handleChange} name="to" id="">
            {text.map((e) => (
              <option value={e.airportCode} key={e.cityName}>
                 {e.cityName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="fromtodiv2">
        <div>
          <h3>DEPARTURE</h3>
          <input type="date" className="date" />
        </div>
        <div>
          <h3>RETURN</h3>
          <input placeholder="choose it" type="date" className="date" />
        </div>
        <div>
          <h3>TRAVLLER & CLASS</h3>
          <select name="TravellerClass" id="TravellerClass">
          <option value="">Select</option>

            <option value="1">Economy</option>
            <option value="2">Premium</option>

          </select>
        </div>
      </div>
    </Fromtocss>
  );
};
