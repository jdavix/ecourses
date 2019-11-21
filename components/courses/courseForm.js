import React, { useState } from 'react'
import { Form, Input } from '@rocketseat/unform';

const CourseForm = (props) => {

    function handleSubmit(data) {
      props.setCourse(data)
      console.log("Data: ", data);
      props.setSaved(true)
    }

  return (
    <Form className="pure-form pure-form-aligned"
          onSubmit={handleSubmit}
          initialData={props.course}
    >
      <div className="pure-control-group">
          <label for="name">Course Name</label>
          <Input id="name" type="text" placeholder="Name" name="name"/>
          <span className="pure-form-message-inline">This is a required field.</span>
      </div>
      <div className="pure-control-group">
          <label for="subtitle">Subtitle</label>
          <Input id="subtitle" type="text" placeholder="Subtitle" name="subtitle"/>
      </div>

      <div className="pure-control-group">
          <label for="description">Description</label>
          <Input id="description" placeholder="Enter text here..." multiline name="description"/>
      </div>

      <div className="pure-control-group">
          <label for="price">Price</label>
          <Input id="price" type="number" step="0.01" placeholder="00.00" name="price"/>
      </div>

      <div className="pure-control-group">
          <label for="duration">Duration</label>
          <Input id="duration" type="number" step="0.01" placeholder="00.00" name="duration"/>
      </div>

      <div className="pure-controls">
          <button type="submit" className="pure-button pure-button-primary">SAVE</button>
      </div>
      <style jsx>{`
        .pure-form {
          padding: 0.5vw 0;
        }
      `}</style>
  </Form>
  )
}

export default CourseForm;