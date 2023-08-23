import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-0wk450uslnf8hffz.us.auth0.com"
      clientId="y0dE0ycEnwJSTadsfynMUVzsvGZM5YNP"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);