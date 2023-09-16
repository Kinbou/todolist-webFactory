import { Todo } from '@models/Todo'
import React, { createContext, useMemo, useState } from 'react'

interface ContextProps {
  todoList: Todo[]
  updateTodoList: (newList: Todo[]) => void
}

export const TodoContext = createContext<ContextProps>({
  todoList: [],
  updateTodoList: () => {},
})

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const obj = useMemo(
    () => ({
      todoList,
      updateTodoList: (newList: Todo[]) => setTodoList(newList),
    }),
    [todoList]
  )
  return <TodoContext.Provider value={obj}>{children}</TodoContext.Provider>
}

export default TodoProvider
