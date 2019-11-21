import React, { Component } from 'react'
import {SortableContainer} from 'react-sortable-hoc';
import SortableList from '../shared/sortableList';
import ChapterItem from './chapterItem';
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
    return (
      <SortableList items={this.state.items}
                    onSortEnd={this.onSortEnd}
                    pressDelay={120}
                    renderItem={(value)=> <ChapterItem value={value}/>}
                    wrapperClass="chapter-list"
      />
    );
  }
}

export default ChapterList;