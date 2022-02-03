import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Button color="primary">꿀매 찾기(거래소)</Button>
      <Button color="success">꿀매 찾기(경매장)</Button>
    </div>
  );
}

export default App;
