import { ThemeContext } from '@/contexts/theme-context'
import { useContext } from 'react'

interface ButtonIconProps {
  iconName: string
  onClick: () => void
  styles?: string
}

const ButtonIcon = ({ iconName, onClick, styles }: ButtonIconProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <button
      className={`${theme} text-iconColor cursor-pointer ${iconName} ${styles}`}
      type="button"
      onClick={onClick}
    />
  )
}

export default ButtonIcon
