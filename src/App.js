import "./App.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./components/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import Text from "./components/text";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
    // other store enhancers if any
  )
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Text />
      </div>
    </Provider>
  );
}

export default App;
