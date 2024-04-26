import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { useState } from "react";

export default function Cakecontainer() {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector(
    (state: {
      cake: {
        numOfCakes: number;
      };
    }) => state.cake.numOfCakes
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes - {numOfCakes} </h1>
      <input
        type="number"
        value={number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNumber(Number(e.target.value))
        }
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cake
      </button>
    </div>
  );
}
