import { motion } from "framer-motion";

export default function HeroSection({ content, anniversaryText, dayCount }) {
  const scrollToStory = () => {
    const target = document.getElementById("story");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-kicker">Love Memorial</span>
          <p className="hero-aliases">{content.aliases}</p>
          <h1>{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <p className="hero-quote">{content.heroQuote}</p>
          <p className="hero-intro">{content.heroIntro}</p>

          <div className="hero-actions">
            <button className="primary-button" onClick={scrollToStory}>
              继续往下看
            </button>
            <div className="hero-duration-card">
              <span>{content.durationLabel}</span>
              <strong>{anniversaryText}</strong>
              <small>已经相爱 {dayCount} 天</small>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-panel glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-badge-row">
            <span>私人纪念册</span>
            <span>长沙 / 沈阳 / 哈尔滨 / 通辽 / 深圳 / 北京</span>
          </div>
          <div className="hero-couple">
            <div>
              <p className="hero-name">我</p>
              <span>177cm</span>
            </div>
            <div className="hero-heartline" aria-hidden="true">
              <span />
            </div>
            <div>
              <p className="hero-name">{content.partner}</p>
              <span>166cm</span>
            </div>
          </div>
          <div className="hero-note">
            {content.heroPanelLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
