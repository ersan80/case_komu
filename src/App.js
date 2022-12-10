import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./scss/App.scss";
import { toastsuccess, toastwarn } from "./toastify/Toastify";


function App() {
  const { v4: uuidv4 } = require("uuid");
  console.log(uuidv4())
  const [task, setTask] = useState([]);
  const url = " http://localhost:3002/task";

  const getData =  () => {
    fetch(url).then((res)=>res.json()).then((data)=>setTask(data));
/*     const data = response.json();
    setTask(data); */
  };

  const postData =  (data) => {
     axios.post(url, data);
    getData();
    toastsuccess("New Cargo Added Successfully");
  };
  const deleteData =  (id) => {
   axios.delete(url + `/${id}`);
    getData();
    toastwarn("Cargo information deleted successfuly");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Home task={task} postData={postData} deleteData={deleteData} />
    </div>
  );
}

export default App;
