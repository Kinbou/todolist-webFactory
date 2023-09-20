interface ButtonIconProps {
  iconName: string
  onClick: () => void
  styles?: string
}

const ButtonIcon = ({ iconName, onClick, styles }: ButtonIconProps) => {
  return (
    <button
      className={`cursor-pointer ${iconName} ${styles}`}
      type="button"
      onClick={onClick}
    />
  )
}

export default ButtonIcon
