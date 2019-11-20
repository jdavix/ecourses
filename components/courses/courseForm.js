import React, { useState } from 'react'

const CourseForm = (props) => {
  return <div className="pure-form pure-form-aligned">
    <div className="pure-control-group">
        <label for="name">Course Name</label>
        <input id="name" type="text" placeholder="Name" />
        <span className="pure-form-message-inline">This is a required field.</span>
    </div>
    <div className="pure-control-group">
        <label for="email">Subtitle</label>
        <input id="email" type="email" placeholder="Description" />
    </div>

    <div className="pure-control-group">
        <label for="foo">Description</label>
        <input id="foo" type="text" placeholder="Enter something here..." />
    </div>

    <div className="pure-control-group">
        <label for="foo">Price</label>
        <input id="foo" type="text" placeholder="Enter something here..." />
    </div>

    <div className="pure-control-group">
        <label for="foo">Duration</label>
        <input id="foo" type="text" placeholder="Enter something here..." />
    </div>

    <div className="pure-controls">
        <button type="submit" className="pure-button pure-button-primary" onClick={()=> props.setSaved(true)}>SAVE</button>
    </div>
    <style jsx>{`
      .pure-form {
        padding: 0.5vw 0;
      }
    `}</style>
  </div>
}

export default CourseForm;