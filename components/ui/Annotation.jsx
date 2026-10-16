export default function Annotation({ children }) {
  return (
    <span className="sd-annot sd-annot-row">
      <span className="sd-annot-head"><span className="sd-annot-node" aria-hidden="true" /></span>
      <span className="sd-annot-text">{children}</span>
    </span>
  )
}
