import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, BookOpen, Users } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "ICT4E District Ambassador",
    description: "Recognized by a2i – Aspire to Innovate for outstanding contributions to ICT education and digital transformation across Bangladesh.",
  },
  {
    icon: Globe,
    title: "10 Minute School Instructor",
    description: "Reached millions of students nationwide through online courses and digital content on Bangladesh's largest e-learning platform.",
  },
  {
    icon: BookOpen,
    title: "PGD in ICT from BUET",
    description: "Completed a prestigious Post Graduate Diploma in ICT from Bangladesh University of Engineering and Technology (BUET IICT).",
  },
  {
    icon: Users,
    title: "কিশোর বাতায়ন Lecturer",
    description: "Serving as an ICT lecturer on the national youth platform, empowering the next generation with digital literacy and skills.",
  },
];

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

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="m3-surface-high p-6 sm:p-8 text-center relative overflow-hidden group hover:scale-[1.02] transition-transform"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />

                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={28} />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
