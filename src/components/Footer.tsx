import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="section-container text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Masud Hasan. Built with
        <Heart size={14} className="text-accent fill-accent" />
      </p>
    </div>
  </footer>
);

export default Footer;
