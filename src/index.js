import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "./actions";
import { v4 as uuidv4 } from 'uuid';



const reducer = (state=[], action) => {
    switch(action.type) {
        case ADD_ITEM:
            return [...state, {...action.payload, uniqueId: uuidv4()}];
        case REMOVE_ITEM:
            return state.filter((i) => i.uniqueId !== action.payload);
        default:
            return state;
    }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
