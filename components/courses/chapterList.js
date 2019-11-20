import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

class ChapterList extends Component {
  state = {
    items: [{id: 1, title: "Chapter 1 title"},
            {id: 2, title: "Chapter 2 title"},
            {id: 3, title: "Chapter 3 title"},
            {id: 4, title: "Chapter 4 title"},
            {id: 5, title: "Chapter 5 title"}],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <>
      <List items={this.state.items} onSortEnd={this.onSortEnd} />
    </>;
  }
}

const Item = SortableElement(({value}) => (
  <div className="chapter-item">
    <div className="c-icon"><FontAwesomeIcon icon="arrows-alt" color="#000000" size="lg"/></div>
    <div className="c-title">{value.title}</div>
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
        flex: 0.8;
        font-weight: bold;
      }
    `}</style>
  </div>
));

const List = SortableContainer(({items}) => {
  return (
    <div className="chapter-list">
      {items.map((value, index) => (
        <Item key={`item-${value.id}`} index={index} value={value} />
      ))}
      <style jsx>{`
        .chapter-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
});


export default ChapterList;