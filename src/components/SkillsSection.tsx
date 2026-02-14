import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Video, Cpu, Palette, Scale } from "lucide-react";

const skills = [
  { name: "ICT Teaching", icon: Monitor, level: 95, description: "Curriculum design & classroom instruction" },
  { name: "Online Education", icon: Video, level: 90, description: "E-learning platforms & virtual teaching" },
  { name: "Educational Technology", icon: Cpu, level: 92, description: "EdTech tools & digital integration" },
  { name: "Digital Content Creation", icon: Palette, level: 88, description: "Video production & digital media" },
  { name: "Criminology", icon: Scale, level: 85, description: "Criminal justice research & analysis" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="m3-surface-elevated p-6 group hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
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
