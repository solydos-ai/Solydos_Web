// Letrero que pasa: el título del reto repetido en una banda negra. El primero es el h2; las copias son decorativas.
const Phrase = ({ as: Tag = 'span', ...rest }) => (
  <Tag className="lp-band-item" {...rest}><span>Cada mensaje sin responder es un cliente que se <em>enfría.</em></span></Tag>
)

export default function Marquee() {
  return (
    <div className="lp-band">
      <div className="lp-band-track">
        <Phrase as="h2" />
        {[1, 2, 3, 4, 5].map((i) => <Phrase key={i} aria-hidden="true" />)}
      </div>
    </div>
  )
}
