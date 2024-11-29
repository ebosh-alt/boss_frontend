import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
// import {DevSupport} from "@react-buddy/ide-toolbox";
// import {ComponentPreviews, useInitial} from "./dev";

// ReactDOM.createRoot(document.getElementById('root')).render(<DevSupport ComponentPreviews={ComponentPreviews}
//                                                                         useInitialHook={useInitial}
// >/
//     <App/>
// </DevSupport>);
ReactDOM.createRoot(document.getElementById('root')).render(
     <App/>
);
reportWebVitals();
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );






