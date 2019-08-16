import React from 'react'
import './css/SchoolCard.css'

const StudentCard = (props) => {
	console.log(props.school)
		const Name=props.school["first"]+props.student["last"]
		const Hobby=props.hobby
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.school["ENTITY_NAME"]}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">2017-18</span>
            <span className="badge">2016-17</span>
            <span className="badge">Archive</span>
          </h5>
          <span className="badge badge-header">Student Data</span>
          <ul className="list-group">
            <li className="list-group-item">Name {Total}</li>
            <li className="list-group-item">hobby</li>
            <li className="list-group-item">show</li>
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">celebrity</li>
            <li className="list-group-item">transportation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SchoolCard
