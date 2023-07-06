const TodoItem = ({ itemProp, setTodos }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => console.log('clicked')}
      />
      {itemProp.title}
    </li>
  );
};
export default TodoItem;

