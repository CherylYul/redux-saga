import { useDispatch, useSelector } from "react-redux";
import { buyCookie } from "../redux/cookie/cookieActions";

export default function Cookiecontainer() {
  const numOfCookies = useSelector(
    (state: {
      cookie: {
        numOfCookies: number;
      };
    }) => state.cookie.numOfCookies
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cookies - {numOfCookies}</h1>
      <button onClick={() => dispatch(buyCookie())}>Buy Cookie</button>
    </div>
  );
}
