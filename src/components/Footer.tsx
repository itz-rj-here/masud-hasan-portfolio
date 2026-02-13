import { Heart } from "lucide-react";
import { socialLinks } from "@/lib/socials";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="section-container flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        © {new Date().getFullYear()} Masud Hasan. Built with
        <Heart size={14} className="text-accent fill-accent" />
      </p>
      <p className="text-xs text-muted-foreground">
        Website created by{" "}
        <a
          href="https://github.com/itz-rj-here"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          itzrjhere
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
