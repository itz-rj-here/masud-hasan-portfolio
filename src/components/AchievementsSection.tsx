import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star } from "lucide-react";

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="m3-chip mb-4">Recognition</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-4">
            Achievements & <span className="text-primary">Recognition</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto m3-surface-high p-8 sm:p-10 text-center relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />

          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Award className="text-accent" size={32} />
          </div>

          <h3 className="text-2xl font-display font-bold text-foreground mb-3">
            ICT4E District Ambassador
          </h3>
          <p className="text-muted-foreground mb-6">
            Recognized by <strong className="text-foreground">a2i – Aspire to Innovate</strong> for 
            outstanding contributions to ICT education and digital transformation across Bangladesh.
          </p>

          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-accent fill-accent" size={18} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
