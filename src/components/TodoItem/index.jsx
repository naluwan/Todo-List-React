/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { memo } from 'react';
import cx from 'classnames';
import RenderTip from '../RenderTip';
// TODO
import style from './TodoItem.module.scss';

type TodoItemProps = {
  id: string,
  done: boolean,
  text: string,
  onToggleItem: (id: string) => void,
  onDeleteItem: (id: string) => void,
};

const TodoItem: React.FC<TodoItemProps> = memo((props) => {
  const { id, text, done, onToggleItem, onDeleteItem } = props;

  const atClick = (condition: string) => {
    switch (condition) {
      case 'toggle':
        onToggleItem(id);
        break;
      case 'delete':
        onDeleteItem(id);
        break;
      default:
        break;
    }
  };

  return (
    <section data-name="TodoItem" data-gradient className="style-3">
      <RenderTip />
      <div
        data-active={done}
        className={style.todoItem}
        onClick={() => atClick('toggle')}
      >
        {text}
      </div>
      {/* FIXME delete not working */}
      <button
        className={cx('btn btn-danger')}
        onClick={() => atClick('delete')}
      >
        Delete
      </button>
    </section>
  );
});

export default TodoItem;
