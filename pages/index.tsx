import { Grid } from "@chakra-ui/react";
import { ITodo } from "./tienda/context/types";
import { useTodoContext } from "./tienda/StoreProvider";

const IndexRoute: React.FC = () => {
  const { todos } = useTodoContext();
  return <Grid>
    <p>hola inciio</p>
    {todos.map((todo: ITodo) => <p key={todo.id}>{todo.title}</p>)}
  </Grid>;
}

export default IndexRoute;