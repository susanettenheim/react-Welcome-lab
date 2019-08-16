import React from 'react'
import './css/StudentCard.css'

const ElRoStudents = (props) => {
	console.log(props.student)
		const Total=props.student["first"]+ " " +props.student["last"]
		const hobby=props.student["hobby"]
		const show=props.student["show"]
		const celebrity=props.student["celebrity"]
		const transportation=props.student["transportation"]
		const photo=props.student["photo"]
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{Total}</h5>
        <div className="card-body">
          <h5 className="card-title">
		  <img className="imgStudent" src={"img/"+props.student["photo"]}/>
			  <span className="badge">transportation: {props.student["transportation"]}</span>
            
            
          </h5>
          <span className="badge badge-header">I Know You Like</span>
          <ul className="list-group">
			  
            <li className="list-group-item">{props.student["hobby"]}</li>
            <li className="list-group-item">{props.student["show"]}</li>
            <li className="list-group-item">{props.student["celebrity"]}</li>
          </ul>
          <span className="badge badge2-header" style={{backgroundColor: "rgb(051,153,255)"}}>I Learned That You Like</span>
          <ul className="list-group">
            <li className="list-group-item learn">food ______________</li>
            <li className="list-group-item learn">color _____________</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ElRoStudents
