import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChapterItem = (props) => {
  let {value} = props;
  return (
    <div className="chapter-item">
      <div className="c-icon"><FontAwesomeIcon icon="arrows-alt" color="#757575" size="lg"/></div>
      <div className="c-title">{value.title}</div>
      <div className="action"><a href="/courses/1/chapters/1/edit" className="pure-button pure-button-primary"><FontAwesomeIcon icon="edit" color="#fff" size="lg"/></a></div>
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
          flex: 0.2;
        }
        .chapter-item .c-title {
          flex: 0.7;
          font-weight: bold;
        }
        .chapter-item .action {
          flex: 0.1;
          font-size: 0.5vw;
        }
      `}</style>
    </div>
  )
}

export default ChapterItem;