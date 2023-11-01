import React from "react";
import ReactDOM from "react-dom/client";
import {DataProvider} from './projects/ecommerce-product-page-main/build/Context/DataContext'

import './projects/ecommerce-product-page-main/build/app.css'
import App from './projects/ecommerce-product-page-main/build/App'

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
