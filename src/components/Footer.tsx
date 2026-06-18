import { profile } from "@/data/profile";

const Footer = () => (
  <footer className="border-t border-primary/20 py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p className="text-muted-foreground text-sm">
        Full Stack App Developer · Flutter & Platform Channels
      </p>
    </div>
  </footer>
);

export default Footer;
