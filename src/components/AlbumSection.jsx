import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function AlbumSection({ items }) {
  return (
    <FadeInSection className="section">
      <div className="container">
        <SectionTitle
          eyebrow="相册"
          title="把回忆留在画面里，也留在旁白里"
          description="这里先放占位图。以后你换上真正的照片，这些片段会更像一部只属于你们的私人电影。"
        />
        <div className="album-grid">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className="album-card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
            >
              <img src={item.image} alt={item.title} />
              <div className="album-copy">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
