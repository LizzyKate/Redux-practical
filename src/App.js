import { Provider } from "react-redux";
import { store } from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IceContainer from "./components/IceContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
