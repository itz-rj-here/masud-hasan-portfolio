import { Heart, Github } from "lucide-react";

const Footer = () => (
  <footer className="py-10 mt-auto border-t border-border bg-muted/30">
    <div className="section-container">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground flex items-center gap-1.5 order-2 sm:order-1">
          © {new Date().getFullYear()} Masud Hasan · Built with
          <Heart size={14} className="text-accent fill-accent inline-block" aria-hidden />
        </p>
        <a
          href="https://github.com/itz-rj-here"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors order-1 sm:order-2"
          aria-label="View itzrjhere on GitHub"
        >
          <Github size={18} className="shrink-0" />
          <span>It'z RJ</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
