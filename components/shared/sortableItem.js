import {SortableElement} from 'react-sortable-hoc';

const Item = SortableElement((props) => {
  return props.children;
});

export default Item;