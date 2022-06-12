import Card from "../Card/Card";
import style from "./CardTodo.module.css";
function CardTodo({ header, todoList = [] }) {
    return (
        <Card header={header}>
            <div className={style.container}>
                <div className={style.todoLists}>
                    {
                        todoList.map(todo => (<span className={style.todoItem} key={todo}>{todo}</span>))
                    }
                </div>
            </div>
        </Card>
    )
}
export default CardTodo;