import { useId } from 'react'
import geo from '@/data/geo.json'

const ROCK_SRC = '/brand/solydos-roca.webp'
const TRACES = ['M292 402H350L372 424V468', 'M282 444H330L346 460H402', 'M318 498V528L340 550H384', 'M262 478H298V522', 'M352 356H390L412 378', 'M244 548L264 568H318', 'M300 300H336L352 316V340']
const NODES = [[372, 468], [402, 460], [384, 550], [298, 522], [412, 378], [318, 568], [352, 340]]

// La roca, las curvas de nivel que fluyen a su alrededor y el núcleo cableado.
export default function Specimen() {
  const clip = `sd-clip-${useId().replace(/:/g, '')}`
  const [rx, ry, rw, rh] = geo.rock
  return (
    <svg className="sd-specimen" viewBox="0 0 600 760" role="img"
      aria-label="Muestra Solydos: piedra con núcleo de circuito y curvas de nivel">
      <defs><clipPath id={clip}><path d={geo.sil} /></clipPath></defs>
      <g className="sd-sp-flow">
        {geo.contours.map((c, i) => <path key={i} d={c.d} className={c.dot ? 'sd-sp-line sd-sp-dotted' : 'sd-sp-line'} />)}
      </g>
      <image href={ROCK_SRC} x={rx} y={ry} width={rw} height={rh} preserveAspectRatio="none" className="sd-sp-rock" />
      <g clipPath={`url(#${clip})`} className="sd-sp-core">
        <rect x="330" y="470" width="18" height="18" className="sd-sp-chip" />
        {TRACES.map((d, i) => <path key={i} d={d} className="sd-sp-trace" />)}
        {NODES.map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="3.2" className="sd-sp-node" />)}
      </g>
      <g className="sd-sp-annot">
        <rect x="76" y="98" width="6" height="6" /><text x="72" y="88">+980</text><path className="sd-sp-leader" d="M79 106V190" />
        <text x="318" y="60">+860</text><path className="sd-sp-leader" d="M332 68V124" />
        <path className="sd-sp-reg" d="M28 440h16M36 432v16" /><path className="sd-sp-leader" d="M48 440H150" />
        <rect x="150" y="437" width="6" height="6" className="sd-sp-fill" /><text x="138" y="426">+720</text>
        <text x="506" y="512">+540</text><path className="sd-sp-leader" d="M522 520V640H470" />
        <path className="sd-sp-leader" d="M402 460H470" /><circle cx="470" cy="460" r="2.5" className="sd-sp-fill" />
        <text x="478" y="464" className="sd-sp-label">NÚCLEO</text>
        <text x="440" y="716">−380</text>
        <text x="24" y="744" className="sd-sp-label">MUESTRA 01 — SOLYDOS</text>
      </g>
    </svg>
  )
}
