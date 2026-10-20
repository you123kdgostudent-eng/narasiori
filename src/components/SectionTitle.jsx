import Reveal from "./Reveal";

// 見出しは小さな案内標識のプレート風
export default function SectionTitle({ children, en }) {
  return (
    <Reveal as="h2" className="section-title">
      <span className="section-title__plate">{children}</span>
      <span className="section-title__en">{en}</span>
    </Reveal>
  );
}
