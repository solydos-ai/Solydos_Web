import Logo from './Logo'
import Button from './Button'

export default function Header({ cta }) {
  return (
    <header className="sd-header">
      <div className="sd-container sd-header-inner">
        <a href="#" className="sd-header-home"><Logo size={26} /></a>
        <div className="sd-header-actions">
          <Button size="sm" href={cta.href} target="_blank" rel="noopener">{cta.label}</Button>
        </div>
      </div>
    </header>
  )
}
