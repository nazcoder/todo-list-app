import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

const iconStyle = { padding: 12 };

const Todo = ({ item, uniquekey, deleteTodoItem, editButtonClicked }) => {
  return (
    <Grid
      container
      justifyContent="center"
      style={{ padding: 5, background: "#eee", border: "1px solid black" }}
    >
      <Grid item xs={6}>
        <p>{item.todoText}</p>
      </Grid>
      <Grid item xs={6} style={{ textAlign: "right" }}>
        <EditIcon style={iconStyle} onClick={() => editButtonClicked(item)} />
        <DeleteIcon
          style={iconStyle}
          onClick={() => deleteTodoItem(uniquekey)}
        />
      </Grid>
    </Grid>
  );
};

export default Todo;
