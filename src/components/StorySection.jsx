import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function StorySection({ story }) {
  return (
    <FadeInSection className="section" delay={0.05}>
      <div className="container story-layout" id="story">
        <div className="glass-card story-card">
          <SectionTitle
            eyebrow="爱情故事"
            title="从相识，到认真地走进彼此生活"
            description="有些关系不是突然发生，而是在日复一日的陪伴里，慢慢长成了无法替代的牵挂。"
          />
          <p className="story-copy">{story}</p>
        </div>
      </div>
    </FadeInSection>
  );
}
