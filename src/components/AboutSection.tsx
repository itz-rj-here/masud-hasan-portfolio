import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="m3-chip mb-4">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-4 mb-8">
            Passionate Educator &<br />
            <span className="text-primary">Digital Innovator</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="m3-surface-elevated p-8"
          >
            <p className="text-foreground/80 leading-relaxed text-lg mb-4">
              I am an ICT educator, digital content creator, and criminologist based in Dhaka, Bangladesh. 
              With years of experience in teaching and online education, I'm dedicated to making technology 
              education accessible and engaging for students across the country.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              As the Head of ICT Department at Bangladesh International School & College and an instructor 
              at 10 Minute School, I bridge the gap between traditional education and modern digital learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {[
              { label: "Role", value: "Lecturer & Digital Educator" },
              { label: "Location", value: "Dhaka, Bangladesh" },
              { label: "Focus", value: "ICT & Educational Technology" },
              { label: "Passion", value: "Making education accessible" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="m3-surface p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-display font-bold text-sm">
                    {item.label.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
