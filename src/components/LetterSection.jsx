import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function LetterSection({ letter }) {
  return (
    <FadeInSection className="section">
      <div className="container">
        <div className="letter-card glass-card">
          <SectionTitle
            eyebrow="写给郝佳锐"
            title="有些话，想认真留在这里"
            description="不需要太夸张，也不必太用力，真诚本身就已经足够动人。"
          />
          <p className="letter-copy">{letter}</p>
        </div>
      </div>
    </FadeInSection>
  );
}
