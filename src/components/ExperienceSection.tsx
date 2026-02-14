import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Head of ICT Department",
    org: "Nirjhor Cantonment Public School & College",
    period: "2019 – Present",
    current: true,
  },
  {
    title: "ICT4E District Ambassador",
    org: "a2i - Aspire to Innovate",
    period: "2020 – Present",
    current: true,
  },
  {
    title: "Lecturer in ICT",
    org: "কিশোর বাতায়ন",
    period: "2020 – Present",
    current: true,
  },
  {
    title: "Instructor",
    org: "10 Minute School",
    period: "2018 – Present",
    current: true,
  },
  {
    title: "Lecturer",
    org: "Rajuk Uttara Model College",
    period: "2015 – 2019",
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-surface-container">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="m3-chip mb-4">Career</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 top-1 w-5 h-5 rounded-full border-2 ${
                exp.current
                  ? "bg-primary border-primary"
                  : "bg-card border-border"
              }`} />

              <div className="m3-surface-elevated p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">{exp.title}</h3>
                    <p className="text-muted-foreground mt-1">{exp.org}</p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full shrink-0 ${
                    exp.current
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {exp.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
