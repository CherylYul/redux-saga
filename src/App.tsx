import { Provider } from "react-redux";
import Cakecontainer from "./components/Cakecontainer.js";
import Cookiecontainer from "./components/Cookiecontainer.js";
import store from "./redux/store.js";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Cakecontainer />
        <Cookiecontainer />
      </Provider>
    </div>
  );
}

export default App;
