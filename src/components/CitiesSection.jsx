import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function CitiesSection({ cities }) {
  return (
    <FadeInSection className="section">
      <div className="container">
        <SectionTitle
          eyebrow="城市坐标"
          title="我们的故事，散落在不同的城市里"
          description="有的城市用来相见，有的城市用来旅行，有的城市见证低谷，也有的城市替我们保管想念。"
        />

        <div className="cities-layout">
          <div className="map-card glass-card">
            <div className="map-header">
              <span>Story Route</span>
              <span>长沙 → 沈阳 / 哈尔滨 / 通辽 → 深圳 → 北京</span>
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
