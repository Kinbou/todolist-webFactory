import { useContext } from 'react'

import { ThemeContext } from '@/contexts/theme-context'
import ButtonIcon from '@components/buttons/ButtonIcon'

interface TodoActionProps {
  goToTodoDetail: () => void
  deleteTodo: () => void
}

const TodoActions = ({ goToTodoDetail, deleteTodo }: TodoActionProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`${theme} absolute flex item-center top-0px bottom-0 right-0 pl-.5em bg-background`}
    >
      <div
        className={`${theme} !hover:bg-hoverButtonIcon flex items-center justify-center rounded-md cursor-pointer`}
      >
        <ButtonIcon
          iconName="i-carbon-edit"
          title="Edit"
          onClick={goToTodoDetail}
          styles="w-20px h-20px mx-.5em"
        />
        <ButtonIcon
          iconName="i-carbon-trash-can"
          title="Remove"
          styles="w-20px h-20px mx-.5em"
          onClick={deleteTodo}
        />
      </div>
    </div>
  )
}

export default TodoActions
