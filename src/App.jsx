import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./contexts";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [todos, settodos] = useLocalStorage("Todo-App.tasks", []);

  const addTodo = (todo) => {
    settodos([{ ...todo }, ...todos]);
  };

  const updateTodo = (id, updateTodo) => {
    settodos(todos.map((todo) => (todo.id === id ? updateTodo : todo)));
  };

  const deleteTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //? <<<<<< if not using a custom hook >>>>>>
  // useEffect(() => {
  //   let todos = JSON.parse(localStorage.getItem("todos"));
  //   if (todos && todos.lenght > 0) {
  //     settodos(todos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
