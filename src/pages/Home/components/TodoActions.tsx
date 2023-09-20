import { useContext } from 'react'

import { ThemeContext } from '@/contexts/theme-context'
import ButtonIcon from '@components/buttons/ButtonIcon'

const TodoActions = ({ goToTodoDetail }: { goToTodoDetail: () => void }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${theme} absolute top-3px right-0 pl-.5em bg-background`}>
      <div
        className={`${theme} w-40px h-40px !hover:bg-hoverButtonIcon flex items-center justify-center rounded-md cursor-pointer`}
      >
        <ButtonIcon iconName="i-carbon-edit" onClick={goToTodoDetail} />
      </div>
    </div>
  )
}

export default TodoActions
