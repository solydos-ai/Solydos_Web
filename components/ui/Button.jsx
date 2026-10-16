import Icon from './Icon'

export default function Button({ variant = 'primary', size, icon, href, className = '', children, ...rest }) {
  const cls = ['sd-btn', `sd-btn-${variant}`, size === 'sm' && 'sd-btn-sm', className].filter(Boolean).join(' ')
  const content = (<><span>{children}</span>{icon && <Icon name={icon} size={16} />}</>)
  if (href && !rest.disabled) return <a href={href} className={cls} {...rest}>{content}</a>
  return <button type="button" className={cls} {...rest}>{content}</button>
}
