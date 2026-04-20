import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function ScenesSection({ items }) {
  return (
    <FadeInSection className="section">
      <div className="container">
        <SectionTitle
          eyebrow="场景切片"
          title="那些一想起就会有画面的瞬间"
          description="有些记忆并不宏大，却足够具体。它们像电影里一闪而过却永远忘不掉的镜头。"
        />
        <div className="scene-grid">
          {items.map((item) => (
            <article key={item.title} className="scene-card glass-card">
              <span className="scene-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
