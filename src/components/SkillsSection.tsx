import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Video, Cpu, Palette, Scale } from "lucide-react";

const skills = [
  { name: "ICT Teaching", icon: Monitor, level: 95 },
  { name: "Online Education", icon: Video, level: 90 },
  { name: "Educational Technology", icon: Cpu, level: 92 },
  { name: "Digital Content Creation", icon: Palette, level: 88 },
  { name: "Criminology", icon: Scale, level: 85 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-surface-container">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="m3-chip mb-4">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="m3-surface-elevated p-5"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <span className="font-display font-bold text-foreground flex-1">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
