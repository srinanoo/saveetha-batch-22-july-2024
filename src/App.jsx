import { useState } from 'react';
import './App.css'
import PropsComponent, { Child2Component, ChildComponent } from './components/PropsComp'

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

function App() {
  // let active = true;

  const [active, setActive] = useState(false)
  let name = "Dinesh";

  console.log(active);
  console.log(name);

  const handleChange = () => {
    console.log("Button is clicked");
    console.log(active, " - inside the function before variable is updated");
    setActive(true);
    console.log(active, " - inside the function after variable is updated");
  }

  return (
    <>
      <p>Active: {active.toString()}</p>
      <p>Name: {name}</p>
      <p><button onClick={handleChange}>Click</button></p>

      {
        active && <ChildComponent />
      }
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
