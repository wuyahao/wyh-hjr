import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function LetterSection({ letter, closing }) {
  return (
    <FadeInSection className="section">
      <div className="container">
        <div className="letter-card glass-card">
          <SectionTitle
            eyebrow="写给郝佳锐"
            title="你是我的可爱小鸡鸡"
            description="这句话不需要被所有人理解。它只要被你听见，就已经足够。"
          />
          <div className="letter-stack">
            <p className="letter-copy">{letter}</p>
            <p className="letter-copy">{closing}</p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
