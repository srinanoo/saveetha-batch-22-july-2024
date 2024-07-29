import { useEffect, useRef, useState } from 'react';
import './App.css'
import PropsComponent, { Child2Component, ChildComponent } from './components/PropsComp'
import axios from 'axios';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComp from './components/HeaderComp/HeaderComp';
import CEOPage from './pages/AboutPage/CEOPage';
import TraineesListPage from './pages/TraineesPages/TraineesListPage';

// function App() {
//   return (
//     <>
//       <div className="row1">
//         <div className="row1section1">
//             <div>
//                 <img src="images/Dinesh.jpg" alt="" className="logo" />
//             </div>
//             <div>
//                 <h3>Dinesh</h3>
//                 <div>Technical Trainer</div>
//                 <div>Web Developer</div>
//                 <div>Email Me</div>
//             </div>
//         </div>
//         <div className="row1section2">
//             <div>Projects</div>
//             <div>About Me</div>
//             <div>Contact Me</div>
//         </div>
//     </div>
//     <div className="row2">
//         <h3>Projects / Experiences</h3>
//         <div className="row2section1">
//             <div>
//                 <img src="images/background.jpeg" alt="" /><br />
//                 Project 1<br />
//                 Project Description goes here...
//             </div>
//             <div>
//                 <img src="images/background.jpeg" alt="" /><br />
//                 Project 1<br />
//                 Project Description goes here...
//             </div>
//             <div>
//                 <img src="images/background.jpeg" alt="" /><br />
//                 Project 1<br />
//                 Project Description goes here...
//             </div>
//             <div>
//                 <img src="images/background.jpeg" alt="" /><br />
//                 Project 1<br />
//                 Project Description goes here...
//             </div>
//             <div>
//                 <img src="images/background.jpeg" alt="" /><br />
//                 Project 1<br />
//                 Project Description goes here...
//             </div>
//             <div>
//                 <img src="images/background.jpeg" alt="" /><br />
//                 Project 1<br />
//                 Project Description goes here...
//             </div>
//         </div>
//     </div>
//     <div className="row3">
//         <h3>About Me</h3>
//         <div className="row3section1">
//             <div>
//                 <h4>Personal Details</h4>
//                 <ul>
//                     <li>ITEM</li>
//                     <li>ITEM</li>
//                     <li>ITEM</li>
//                     <li>ITEM</li>
//                 </ul>
//             </div>
//             <div>
//                 <h4>Educational Details</h4>
//                 <ul>
//                     <li>ITEM</li>
//                     <li>ITEM</li>
//                     <li>ITEM</li>
//                     <li>ITEM</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//     <div className="row4">
//         <div>&copy; Copyright. All Rights Reserved.</div>
//     </div>
//     </>
//   )
// }

// function App() {
//   let name = "Dinesh";
//   let age = 20;
//   let active = true;
//   let subjects = ["HTML", "CSS", "JavaScript", "ReactJs", "NodeJs"];

//   let output = [];
//   for(let i = 0; i < subjects.length; i++) {
//     output.push(<li key={i}>{subjects[i]}</li>)
//   }

//   let marks = {
//     "html": 30,
//     "css": 30,
//     "js": 30,
//     "ReactJs": 30
//   }

//   return (
//     <>
//       {
//         active
//           ?
//             <p>Active is true</p>
//           :
//             <p>Active is not true</p>
//       }

//       {
//         active && <p>Active is true</p>
//       }
//       <div>
//         <p>Name: {name}</p>
//         <p>Age: {age}</p>
//         <p>Active: {active.toString()}</p>
//         <div>Subjects: 
//           <ul>
//           {
//             subjects.map((v, i) => {
//               return (
//                 <li key={i}>
//                   <span>{v}</span>
//                 </li>
//               )
//             })
//           }
//           </ul>

//           <ul>
//             {output}
//           </ul>
//         </div>
//         <div>
//           <p>HTML : {marks.html}</p>
//         </div>
//       </div>
//     </>
//   )
// }

// function App() {
//     let name = "Dinesh";
//     let age = 20;
//     let active = true;
//     let subjects = ["HTML", "CSS", "JavaScript", "ReactJs", "NodeJs"];
  
//     let output = [];
//     for(let i = 0; i < subjects.length; i++) {
//       output.push(<li key={i}>{subjects[i]}</li>)
//     }
  
//     let marks = {
//       "html": 30,
//       "css": 30,
//       "js": 30,
//       "ReactJs": 30
//     }
  
//   return (
//     <>
//       <h1>App Component</h1>

//       <PropsComponent name={name} age={20} data={marks} subjects={subjects} />

//       {
//         active
//           ?
//             <ChildComponent />
//           :
//             <Child2Component />
//       }

//     </>
//   )
// }

// function App() {
//   // let active = true;

//   const [active, setActive] = useState(false)
//   let name = "Dinesh";

//   console.log(active);
//   console.log(name);

//   const handleChange = () => {
//     console.log("Button is clicked");
//     console.log(active, " - inside the function before variable is updated");
//     setActive(true);
//     console.log(active, " - inside the function after variable is updated");
//   }

//   return (
//     <>
//       <p>Active: {active.toString()}</p>
//       <p>Name: {name}</p>
//       <p><button onClick={handleChange}>Click</button></p>

//       {
//         active && <ChildComponent />
//       }
//     </>
//   )
// }

// function App() {
//   let usernameRef = useRef("");
//   let passwordRef = useRef("");

//   const [usernameState, setUsernameState] = useState("");
//   const [passwordState, setPasswordState] = useState("");
  
//   const handleImpureForm = () => {
//     console.log("Impure React Way!");
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     console.log(username, password);
//   }

//   const handleHalfReactForm = () => {
//     console.log("Half React Way!");
//     let username = usernameRef.current.value;
//     let password = passwordRef.current.value;
//     console.log(username, password);
//   }

//   const handleUsername = (event) => {
//     console.log(event.target.className);
//     console.log(event.target.id);
//     console.log(event.target.value);
//     setUsernameState(event.target.value);
//   }

//   const handlePureReactForm = () => {
//     console.log(usernameState, passwordState);
//   }
  
//   return (
//     <>
//       <h1>Impure React Component Way</h1>
//       <input type="text" id="username" placeholder='Username:' /><br />
//       <input type="text" id="password" placeholder='Password:' /><br />
//       <button onClick={handleImpureForm}>Login</button>

//       <br /><br />

//       <h1>Half React Component Way</h1>
//       <input type="text" ref={usernameRef} placeholder='Username:' /><br />
//       <input type="text" ref={passwordRef} placeholder='Password:' /><br />
//       <button onClick={handleHalfReactForm}>Login</button>

//       <br /><br />

//       <h1>Pure React Component Way</h1>
//       <input type="text" onChange={handleUsername} id="username" className='clsInput' placeholder='Username:' /><br />
//       <input type="text" onChange={(e) => {setPasswordState(e.target.value)}} placeholder='Password:' /><br />
//       <button onClick={handlePureReactForm}>Login</button>
//     </>
//   )
// }

// function App() {
//   const [toDoList, setToDoList] = useState([]);
//   const [toDo, setToDo] = useState("");

//   const handleToDoList = () => {
//     if(toDoList.includes(toDo)) {
//       alert("Task already exists!");
//     } else {
//       let temp = [...toDoList, toDo];
//       setToDoList(temp);
//     }
//   }

//   const handleClose = (e) => {
//     if(confirm("Are you sure you want to delete this task?")) {
//       let temp = toDoList.filter((v, i) => i !== parseInt(e.target.id));
//       setToDoList(temp);
//     }
//   }

//   return (
//     <>
//       <h1>To Do List</h1>
//       <input type="text" onChange={(e) => setToDo(e.target.value.trim())} />
//       <button onClick={handleToDoList}>Add Task</button>
//       <br /><br />
//       {
//         toDoList?.map((v, i) => {
//           return (
//             <div key={i}>
//               <div>
//                 {v} <button id={i} onClick={handleClose}>X</button>
//               </div>
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }

// function App() {
//   const [toDoList, setToDoList] = useState([]);
//   const [toDo, setToDo] = useState("");

//   const handleToDoList = () => {
//     let temp = toDoList;
//     temp.push(toDo)
//     setToDoList(temp);
//   }

//   const handleClose = (e) => {
//     console.log(e.target.id);
//   }

//   return (
//     <>
//       <h1>To Do List</h1>
//       <input type="text" onChange={(e) => setToDo(e.target.value.trim())} />
//       <button onClick={handleToDoList}>Add Task</button>
//       <br /><br />
//       {
//         toDoList.length > 0 && toDoList.map((v, i) => {
//           return (
//             <div key={i}>
//               <div>
//                 {v} <button id={i} onClick={handleClose}>X</button>
//               </div>
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Dinesh");

//   // useEffect(() => {
//   //   setCount(1);
//   // }, []); // is equivalent to componentDidMount of Class Cycle

//   // useEffect(() => {
//   //   setCount(1);
//   // }, [count]); // is equivalent to componentDidUpdate of Class Cycle

//   useEffect(() => {
//     setCount(count + 1);
//   }, [name]); // is equivalent to componentDidUpdate of Class Cycle

//   return (
//     <>
//       Name: {name}<br />
//       Count: {count}<br />
//       <button onClick={() => setName("New Name")}>Change Name</button>
//     </>
//   )
// }

// function App() {
//   const [universitiesList, setUniversitiesList] = useState([]);
//   const [country, setCountry] = useState("India");

//   const fetchData = () => {
//     axios.get('http://universities.hipolabs.com/search?country='+country)
//       .then(response => {
//         // console.log(response);
//         setUniversitiesList(response.data);
//       })
//   }

//   useEffect(() => {
//     fetchData();
//   },[]);

//   const handleSearch = () => {
//     fetchData();
//   }

//   return (
//     <>
//       <h1>Universities List</h1>
//       <p><input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
//       <button onClick={handleSearch}>Search</button></p>

//       {
//         universitiesList.length > 0 && universitiesList.map((v, i) => {
//           return (
//             <div key={i}>
//               Name: {v.name}<br />
//               Website: {v.web_pages[0]}
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }

function App() {
  return (
    <>
      <BrowserRouter basename='/saveetha-batch-22-july-2024/'>
        <HeaderComp />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/about/ceo' element={<CEOPage />}></Route>
          <Route path='/about/contact' element={<ContactPage />}></Route>
          <Route path='/project' element={<ProjectPage />}></Route>
          <Route path='/trainees' element={<TraineesListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// test1();

// // regular function
// function test1() {
// }

// // anonymous function
// let test1 = function() {
//   return 'test';
// }

// // arrow function
// let test1 = () => {
//   return 'test';
// }

// let test1 = () => 'test';
