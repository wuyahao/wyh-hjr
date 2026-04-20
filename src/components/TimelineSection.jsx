import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function TimelineSection({ items }) {
  return (
    <FadeInSection className="section">
      <div className="container">
        <SectionTitle
          eyebrow="时间线"
          title="那些被时间轻轻标记下来的节点"
          description="从相识、相恋、见面、旅行，到低谷与异地，每一步都让这段关系更像命运认真写下的注脚。"
        />

        <div className="timeline">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className="timeline-card glass-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              <span className="timeline-index">0{index + 1}</span>
              <p className="timeline-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
