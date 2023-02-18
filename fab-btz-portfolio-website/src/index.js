import ReactDOM from 'react-dom';
import App from './App'; 
import './index.css';

ReactDOM.render(
    <App/>, document.querySelector("#root"));

// originally is this form but in the course did this last way
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );