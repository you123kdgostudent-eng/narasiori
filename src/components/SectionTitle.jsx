import Reveal from "./Reveal";

export default function SectionTitle({ children }) {
  return <Reveal as="h2" className="section-title">{children}</Reveal>;
}
