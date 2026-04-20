import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function AnniversarySection({ label, note, metrics }) {
  return (
    <FadeInSection className="section section-tight">
      <div className="container">
        <div className="anniversary-wrap glass-card">
          <SectionTitle
            eyebrow={label}
            title="把爱过的日子，一天一天地记下来"
            description={note}
          />
          <div className="anniversary-metrics">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
