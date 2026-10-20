import Reveal from "./Reveal";

export default function SectionTitle({ children, en }) {
  return (
    <Reveal as="h2" className="section-title">
      {children} <span>{en}</span>
    </Reveal>
  );
}
