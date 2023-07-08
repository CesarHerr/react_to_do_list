import Header from './Header';
import TodosLogic from './TodosLogic';
import Navbar from './Navbar';

const TodoApp = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="todos">
          <Header />
          <TodosLogic />
        </div>
      </div>
    </>
  );
};
export default TodoApp;
