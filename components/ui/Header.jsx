import Logo from './Logo'
import Button from './Button'
import StickyHeader from './StickyHeader'

// Logo y rótulo de la hoja a la izquierda; Soly en línea e Ingresar a la derecha.
// En escritorio la cabecera usa las mismas columnas que el hero: "Soly en línea" queda centrado justo encima de la roca.
// "Habla con Soly" no va aquí: está debajo de la roca. En móvil solo quedan el logo e Ingresar.
export default function Header({ cta }) {
  return (
    <StickyHeader>
      <div className="sd-container sd-header-inner">
        <div className="sd-header-brand">
          <a href="#" className="sd-header-home"><Logo size={34} /></a>
          <span className="sd-header-tag">Agentes de IA para WhatsApp</span>
        </div>
        <span className="sd-header-live"><i aria-hidden="true" />Soly en línea</span>
        <div className="sd-header-actions">
          <Button size="sm" variant="secondary" href={cta.href}>{cta.label}</Button>
        </div>
      </div>
    </StickyHeader>
  )
}
