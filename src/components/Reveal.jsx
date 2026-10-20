import { useReveal } from "../hooks/useReveal";

// 画面に入ったら下からふわっと表示される要素。as でタグを変えられます。
export default function Reveal({ as: Tag = "div", className = "", style, children, ...rest }) {
  const [ref, { shown, delay }] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? " is-show" : ""} ${className}`.trim()}
      style={{ ...style, transitionDelay: shown ? `${delay}s` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
