import React, { Component } from 'react';
import SortableList from '../shared/sortableList';
import ContentItem from './contentItem';
import arrayMove from 'array-move';

class ContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{id: 1, title: "Content 1 title", type: 'html'},
              {id: 2, title: "Content 2 title", type: 'pdf'},
              {id: 3, title: "Content 3 title", type: 'audio'},
              {id: 4, title: "Content 4 title", type: 'video'},
              {id: 5, title: "Content 5 title", type: 'download'}],
    };
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    return (
      <SortableList items={this.state.items}
                    onSortEnd={this.onSortEnd}
                    pressDelay={120}
                    renderItem={(value)=> <ContentItem value={value} onClick={this.props.onClick}/>}
                    wrapperClass="chapter-list"
      />
    );
  }
}

export default ContentList;