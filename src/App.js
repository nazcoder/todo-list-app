import Grid from "@material-ui/core/Grid";
import "./App.css";
import TodoPage from "./Components/TodoPage";

function App() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={4}>
        <h1 className="main-header"> To-Do List App</h1>
        <TodoPage />
      </Grid>
    </Grid>
  );
}

export default App;
