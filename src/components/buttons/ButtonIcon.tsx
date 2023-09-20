import { ThemeContext } from '@/contexts/theme-context'
import { useContext } from 'react'

interface ButtonIconProps {
  iconName: string
  title?: string
  onClick: () => void
  styles?: string
}

const ButtonIcon = ({ iconName, title, onClick, styles }: ButtonIconProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <button
      className={`${theme} text-iconColor cursor-pointer ${iconName} ${styles}`}
      type="button"
      onClick={onClick}
      title={title}
    />
  )
}

export default ButtonIcon
