export const Todo = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <button
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
