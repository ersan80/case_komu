import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./scss/App.scss";
import { toastsuccess, toastwarn } from "./toastify/Toastify";


function App() {
  const { v4: uuidv4 } = require("uuid");
  console.log(uuidv4());
  const [task, setTask] = useState([]);
  //const url = " http://localhost:3002/task";
  const url = " https://63927eabac688bbe4c64aa3c.mockapi.io/users/";

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTask(data);
    } catch (error) {
      console.log(error);
      toastwarn(error);
    }
  };

  const postData = async (data) => {
    try {
      await axios.post(url, data);
      getData();
      toastsuccess("New Cargo Added Successfully");
    } catch (error) {
      console.log(error);
      toastwarn(error);
    }
  };
  const deleteData = async (id) => {
    try {
      await axios.delete(url+`/${id}`);
      getData();
      toastwarn("Cargo information deleted successfuly");
    } catch (error) {
      console.log(error);
      toastwarn(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div data-testid="app">
      <Home task={task} postData={postData} deleteData={deleteData} getData={getData} />
    </div>
  );
}

export default App;