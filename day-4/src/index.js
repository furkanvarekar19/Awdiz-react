import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Toaster } from "react-hot-toast";
import MyContextProvider from './contex/authcontext';
import Counterprovider from './contex/countercontext';
import ThemeContextProvider from './contex/themecontext';
import {Provider} from 'react-redux'
import store from './router/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
    <Counterprovider>
    <MyContextProvider>
    <BrowserRouter>
    <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 1000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

    <Provider store={store}>
    <App /> 
    </Provider>

    </BrowserRouter>
    </MyContextProvider>
    </Counterprovider>
    </ThemeContextProvider>
  </React.StrictMode>
);

