// import React, { Component } from 'react';

// class PracticeYesterday extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          laungage:'React'
//       }
//     }
//     changeLung(){
//         this.setState({
//             laungage:'Javascript'
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Class Component</h2>
//                 <h4>Laungage : {this.state.laungage}</h4>
//                 <button onClick={this.changeLung.bind(this)}>Click it</button>
//             </div>
//         );
//     }
// }

// export default PracticeYesterday;

// import React, { Component } from 'react';

// class PracticeYesterday extends Component {
//     render() {
//         const{name,city,age}=this.props

//         return (
//             <div>
//                 <h2>Props Destructuring</h2>
//                 <h4>Name:{this.props.name}</h4>
//                 <h4>City:{this.props.city}</h4>
//                 <h4>Age:{this.props.age}</h4>
//             </div>
//         );
//     }
// }

// export default PracticeYesterday;

//functional component

// import React, { useState } from 'react'

// function PracticeYesterday() {
//     const[fruit,setFruit]=useState('Mango')
//     function changeFruit(){
//         setFruit('Cherry')
//     }
//   return (
//     <div>
//         <h2>Functional Component</h2>
//         <h4>Fruit is:{fruit}</h4>
//         <button onClick={changeFruit}>Change Fruit</button>
//     </div>
//   )
// }

// export default PracticeYesterday

//Destructuring using function component

// import React from 'react'

// function PracticeYesterday({name,city,age}) {
//    return (
//     <div>
//         <h2>Destructuring using function component</h2>
//         <h4>Name:{name}</h4>
//         <h4>City:{city}</h4>
//         <h4>Age:{age}</h4>
//     </div>
//   )
// }

// export default PracticeYesterday

//list rendering

// import React, { Component } from 'react';

// class PracticeYesterday extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          Flowers:["Rose","Lotus","Lilly","Jasmin","Tulip","Daisy","Mogra"]
//       }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>List Rendering</h1>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>
//                                 Flowers Name
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.Flowers.map((element)=>(<tr><h4>{element}</h4></tr>))
//                         }
//                     </tbody>
//                 </table>

//             </div>
//         );
//     }
// }

// export default PracticeYesterday;

// import React, { Component } from 'react';
// import Child from './Child';

// class PracticeYesterday extends Component {
//     getDataFromChild(msg){
//         alert(`Function Called...${msg}`)
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Parent </h2>
//                 <Child parentFun ={this.getDataFromChild} />
//             </div>
//         );
//     }
// }

// export default PracticeYesterday;


//pure component

// import React, { Component } from 'react';

// class PracticeYesterday extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             message: "Welcome"
//         }
//     }

//     changeMessage = () => {
//         this.setState({
//             message: "Welcome"
//         })
//     }

// render() {
//     console.log("Successefully...")
//     return (
//         <div>
//             <h2>Pure Component</h2>
//             <h4>Hello: {this.state.message}</h4>
//             <button onClick={this.changeMessage.bind(this)}>Change Message</button>
//         </div>
//     );
// }
// }

// export default PracticeYesterday;





