import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function CitiesSection({ cities }) {
  return (
    <FadeInSection className="section">
      <div className="container">
        <SectionTitle
          eyebrow="城市坐标"
          title="我们的故事，散落在不同城市"
          description="这些地方既像坐标，也像证据，记录着我们从相遇到相爱的轨迹。"
        />

        <div className="cities-layout">
          <div className="map-card glass-card">
            <div className="map-header">
              <span>Story Route</span>
              <span>长沙 → 东北 → 深圳 → 北京</span>
            </div>
            <div className="route-visual" aria-hidden="true">
              <div className="route-node route-node-1">
                <span>长沙</span>
              </div>
              <div className="route-node route-node-2">
                <span>东北</span>
              </div>
              <div className="route-node route-node-3">
                <span>深圳</span>
              </div>
              <div className="route-node route-node-4">
                <span>北京</span>
              </div>
              <div className="route-line" />
            </div>
          </div>

          <div className="city-grid">
            {cities.map((city) => (
              <article key={city.name} className="city-card glass-card">
                <span className="city-tag">{city.tag}</span>
                <h3>{city.name}</h3>
                <p>{city.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
