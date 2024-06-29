import React from 'react'
import { Loading } from '@icon-park/react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  children,
  className = '',
  disabled,
  onClick,
  ...props
}) => {
  const baseClasses =
    ':uno: cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    primary:
      ':uno: bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      ':uno: bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline:
      ':uno: border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    ghost: ':uno: text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
  }

  const sizeClasses = {
    sm: ':uno: text-sm px-3 py-2',
    md: ':uno: text-base px-4 py-2',
    lg: ':uno: text-lg px-6 py-3'
  }

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? ':uno: w-full' : '',
    loading ? ':uno: opacity-75 cursor-not-allowed' : '',
    disabled ? ':uno: opacity-50 cursor-not-allowed' : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      {...props}
      className={classes}
      onClick={() => {
        if (loading || disabled) return
        onClick?.()
      }}
    >
      {loading && (
        <Loading
          className=":uno: i-gg-spinner-two-alt mr-2 animate-spin"
          aria-hidden="true"
        />
      )}

      {children}
    </div>
  )
}

export default Button
