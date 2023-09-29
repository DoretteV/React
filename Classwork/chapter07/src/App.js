import React, { Component } from "react";
import GitHub from './GitHub';

class App extends Component {
  render() {
    return (
    <div>
      <GitHub />
    </div>
    );
  }
}
export default App;


// import { Button } from "react-bootstrap";
// import Rating from './Rating'
// import JumboTronComponent from "./JumboTronComponent";
// class App extends Component {
//   render() {
//     const isValid = true;
//     return (
//       <div>
//         <h1>My First React App!</h1>
//         <Products />
//         <Rating rating="1" />
//         <Rating rating="2" />
//         <Rating rating="3" />
//         <Rating rating="4" />
//         <Rating rating="5" />
//         <Button variant="primary" disabled={!isValid}>
//           Default
//         </Button>
//         <JumboTronComponent/>
//       </div>
//     );
//   }
// }
// export default App;