import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "MSc in CSE", institution: "Jahangirnagar University" },
  { degree: "Masters in Criminology & Criminal Justice", institution: "University of Dhaka" },
  { degree: "PGD in ICT", institution: "BUET IICT" },
  { degree: "PGD in IT", institution: "IIT, University of Dhaka" },
  { degree: "BSc in ECE", institution: "Institute of Science and Technology" },
  { degree: "HSC", institution: "Government Science College" },
  { degree: "SSC", institution: "BAF Shaheen Haji Ashraf Ali School" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="m3-chip mb-4">Education</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-4">
            Academic <span className="text-primary">Background</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="m3-surface-elevated p-6 hover:scale-[1.02] transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
