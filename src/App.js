// import { Component } from 'react';
import './App.css';

// import FirstComponent from './components/learning-examples/FirstComponent';
// import SecondComponent from './components/learning-examples/SecondComponent';
// import ThirdComponent from './components/learning-examples/ThirdComponent';
// import FourthComponent from './components/learning-examples/FourthComponent';


// import { FifthComponent } from './components/learning-examples/FirstComponent';

// import LearningComponent from './components/learning-examples/LearningComponent';

import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <FirstComponent></FirstComponent>

      <SecondComponent />

      <ThirdComponent />

      <FourthComponent />

      <FifthComponent></FifthComponent> */}
      {/* 
      <LearningComponent></LearningComponent> */}

      {/* <PlayingWithProps prop1='val1' prop2='val2'></PlayingWithProps> */}
      {/* <CounterComponent by={1}></CounterComponent> */}

      <Counter></Counter>
    </div >
  );
}

// function PlayingWithProps(properties) {
//   console.log(properties);
//   console.log(properties.prop1);
//   console.log(properties.prop2);

//   return (
//     <div>Props</div>
//   );
// }


// function PlayingWithProps({ prop1, prop2 }) {
//   console.log(prop1);
//   console.log(prop2);

//   return (
//     <div>Props</div>
//   );
// }

export default App;
