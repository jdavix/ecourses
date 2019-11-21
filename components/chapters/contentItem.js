import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContentIcon = (props) => {
  let icon = {
  }

  switch(props.type) {
    case "audio":
      icon = {name: "music", color: '#1c91ff'};
      break;
    case "html":
      icon = {name: "file-code", color: '#005291'};
      break;
    case "video":
      icon = {name: 'file-video', color: '#bc0000'};
      break;
    case "download":
      icon = {name: 'file-download', color: '#005b15'};
      break;
    case "pdf":
      icon = {name: 'file-pdf', color: '#e5000f'};
  }

  return (
    <FontAwesomeIcon icon={icon.name} color={icon.color} size="lg" />
  );
};

const ContentItem = (props) => {
  let {value} = props;
  return (
    <div className="chapter-item">
      <div className="c-icon"><FontAwesomeIcon icon="arrows-alt" color="#757575" size="lg"/></div>
      <div className="c-title"><ContentIcon type={value.type}/><span className="c-title-text">{value.title}</span></div>
      <div className="action"><a onClick={props.onClick} className="pure-button pure-button-primary"><FontAwesomeIcon icon="edit" color="#fff" size="lg"/></a></div>
      <style jsx>{`
        .chapter-item {
          padding: 0.7vw 0.4vw;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: #ffffff;
          border: 1px solid #ccc;
          cursor: pointer;
          margin-bottom: 5px;
        }
        .chapter-item .c-icon{
          width: 30px;
        }
        .chapter-item .c-title {
          flex: 0.85;
          font-weight: bold;
          text-align: left;
        }
        .c-title-text {
          margin-left: 15px;
        }
        .chapter-item .action {
          width: 120px;
          font-size: 0.7vw;
        }
      `}</style>
    </div>
  );
};

export default ContentItem;