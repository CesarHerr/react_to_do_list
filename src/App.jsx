import TodoWrapped from './components/TodosLogic';
import Root from './routes/root';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './routes/error-page';
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact/:contactId",
        element: <Contact />,
      },
      {
        path: "/",
        element: <TodoWrapped />
        
      },
      
    ],
  },
]);

const TodoApp = () => {
  return (
    <>
      <RouterProvider router={router}/>        
      
    </>
  );
};
export default TodoApp;
