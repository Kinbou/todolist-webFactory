import { ThemeContext } from '@/contexts/theme-context'
import cx from 'classnames'
import { useContext } from 'react'

interface ButtonProps {
  text: string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disable?: boolean
}

const Button = ({ text, type = 'button', onClick, disable }: ButtonProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <button
      type={type}
      onClick={onClick}
      className={cx(
        `${theme} mt-2em w-auto w-min px-1.2em py-0.6em border-none cursor-pointer rounded-md text-16px bg-background text-text`,
        {
          'opacity-50': disable,
        },
      )}
      disabled={disable}
    >
      {text}
    </button>
  )
}

export default Button
