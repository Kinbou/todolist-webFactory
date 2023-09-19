import cx from 'classnames'

interface ButtonProps {
  text: string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disable?: boolean
}

const Button = ({ text, type = 'button', onClick, disable }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cx(
        'mt-2em w-auto w-min px-1.2em py-0.6em border-none cursor-pointer rounded-md text-16px',
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
