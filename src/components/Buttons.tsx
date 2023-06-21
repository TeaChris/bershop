interface ButtonsProps {
  className: string
  text?: string
  disabled?: boolean
  children?: string
  onClick?: () => void
}

const Button: React.FC<ButtonsProps> = ({
  className,
  text,
  disabled,
  children,
  onClick,
}) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {text || children}
    </button>
  )
}

export default Button
