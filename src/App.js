import React from 'react';
import Navbar from './components/Navbar.js'
import ElRoStudents from './components/ElRoStudents.js'
import data from './ElRoStudentData.js'
import './App.css';

const App = () => {
  const component = new React.Component()
  
  component.render = () => {
	  const build = []
	  for(var i=0; i<data.length; i++){
		  build.push(
		  <ElRoStudents student={data[i]}/>)
	  }
    return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
			{build}
			{/* {data.map((i)=>{
			return<ElRoStudents student={i}/>	
			)
		  }
		  <ElRoStudents student={data[0]}/>
		*/}
        </div>
      </div>
    </div>
  )}
  
  return component
}

export default App;
