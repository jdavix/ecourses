import {SortableContainer} from 'react-sortable-hoc';
import Item from './sortableItem';

const SortableList = SortableContainer((props) => {
  let {items, wrapper, wrapperClass, renderItem} = props;
  return (
    <div className={wrapperClass}>
      {items.map((value, index) => (
        <Item key={`item-${value.id}`} index={index}>{renderItem(value)}</Item>
      ))}
      <style jsx>{`
        .{wrapperClass} {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
});

//chapter-list

export default SortableList;