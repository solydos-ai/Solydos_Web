import type { ComponentProps, ReactNode } from 'react'
import Icon, { type IconName } from './Icon'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'sm'
  icon?: IconName
  href?: string
  className?: string
  disabled?: boolean
  children: ReactNode
} & Omit<ComponentProps<'a'> & ComponentProps<'button'>, 'className' | 'children' | 'href'>

// Botón de la web: con `href` es un enlace, sin él un <button>.
export default function Button({ variant = 'primary', size, icon, href, className = '', children, ...rest }: ButtonProps) {
  const cls = ['sd-btn', `sd-btn-${variant}`, size === 'sm' && 'sd-btn-sm', className].filter(Boolean).join(' ')
  const content = (<><span>{children}</span>{icon && <Icon name={icon} size={16} />}</>)
  if (href && !rest.disabled) return <a href={href} className={cls} {...(rest as ComponentProps<'a'>)}>{content}</a>
  return <button type="button" className={cls} {...(rest as ComponentProps<'button'>)}>{content}</button>
}
