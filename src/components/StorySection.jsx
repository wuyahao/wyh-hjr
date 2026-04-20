import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function StorySection({ story }) {
  return (
    <FadeInSection className="section" delay={0.05}>
      <div className="container story-layout" id="story">
        <div className="glass-card story-card">
          <SectionTitle
            eyebrow="爱情故事"
            title="像翻一卷旧胶片，回看我们是怎样走到今天"
            description="这不是一段只由甜蜜组成的关系。它也经过争吵、委屈、疲惫和磨合，所以才更真实。"
          />
          <div className="story-stack">
            {story.map((paragraph) => (
              <p key={paragraph} className="story-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
