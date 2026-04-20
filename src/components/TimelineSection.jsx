import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";

export default function TimelineSection({ items }) {
  return (
    <FadeInSection className="section">
      <div className="container">
        <SectionTitle
          eyebrow="时间线"
          title="沿着时间回看，我们认真爱过的每一步"
          description="每一个节点都不是仓促路过，而是让关系一点点更深、更稳、更确定。"
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
