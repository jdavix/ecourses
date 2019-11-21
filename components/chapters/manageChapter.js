import React, {useState, useContext} from 'react';
import ContentList from './contentList';
import ContentInput from './contentInput';
import Modal from 'react-modal';
import {observer} from 'mobx-react-lite';
import CourseStore from '../../stores/courseStore';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

const ManageChapter = observer((props) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const courseStore = useContext(CourseStore);
  let {currentCourse, currentChapter, setChapter} = courseStore;



  function updateChapter(e) {
    console.log("TYped:", e.target.value)
    setChapter({title: e.target.value})
  }

  const [contentType, setType] = useState("html")


  console.log("Chapter:", currentChapter);

  return (
    <>
      <div className="content-main">
        <div className="c-m-head">
          <div className="c-m-head-1">
            <h5>{currentCourse.name} / </h5>
            <div className="pure-form">
              <input onChange={updateChapter} type="text" placeholder="Chapter Title"/>
            </div>
          </div>
          <div className="c-m-head-2"><a onClick={openModal} className="pure-button pure-button-primary">ADD CONTENT</a></div>
        </div>
        <div className="c-m-content">
          <h4>Chapter Content:</h4>
          <ContentList onClick={openModal}/>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="modal-content">
            <h3>Add New Content</h3>
            <div className="pure-form pure-form-aligned">
              <div className="pure-control-group">
                  <label for="title">Title</label>
                  <input id="title" type="text" placeholder="Title" />
                  <span className="pure-form-message-inline">Required!</span>
              </div>
              <div className="pure-control-group">
                <label for="content-type">Chapter</label>
                <select id="content-type" onChange={(e)=>{setChapter(e.target.value)}}>
                  <option value="1" default>Chapter 1</option>
                  <option value="2">Chapter 2</option>
                  <option value="3">Chapter 3</option>
                  <option value="4">Chapter 4</option>
                  <option value="5">Chapter 5</option>
                </select>
                <span className="pure-form-message-inline">Required!</span>
              </div>
              <div className="pure-control-group">
                <label for="content-type">Content Type</label>
                <select id="content-type" onChange={(e)=>{setType(e.target.value)}}>
                  <option value="html" default>HTML</option>
                  <option value="audio">Audio</option>
                  <option value="video">Video</option>
                  <option value="pdf">PDF</option>
                  <option value="download">Download</option>
                </select>
                <span className="pure-form-message-inline">Required!</span>
              </div>
              <ContentInput contentType={contentType}/>
              <div className="pure-controls"><a onClick={closeModal} className="pure-button pure-button-primary">SAVE</a></div>
            </div>
          </div>
        </Modal>
      </div>
      <style jsx>{`
        .content-main h5 {
          border: none;
          text-align: left;
        }
        .content-main p {
          text-align: center;
        }
        .content-main {
          width: 65%;
          min-height: 400px;
        }
        h5 {
          font-size: 1.4vw;
          border-top: 1px solid #ccc;
          padding: 1vw;
          margin: 0;
        }
        h4 {
          font-size: 1.2vw;
          padding: 1vw;
          margin: 0;
        }
        .c-m-head {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .c-m-head-1 {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex: 0.7
        }
        .c-m-head-2 {
          flex: 0.3
        }
        .c-m-content {
          padding: 0.5vw;
        }
        .modal-content {
          width: 70vw;
          height: 80vh;
        }
      `}</style>
    </>
  )
})

export default ManageChapter;