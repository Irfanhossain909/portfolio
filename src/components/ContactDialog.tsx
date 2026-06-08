import { Mail, Phone, Github, Linkedin } from "lucide-react";
import type { ComponentType } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { profile, type SocialPlatform } from "@/data/profile";
import ProfileImage from "@/components/ProfileImage";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialIconMap: Record<
  SocialPlatform,
  ComponentType<{ className?: string }>
> = {
  facebook: FacebookIcon,
  whatsapp: WhatsAppIcon,
  linkedin: Linkedin,
  github: Github,
};

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-primary/20 bg-card">
        <DialogHeader>
          <DialogTitle className="text-center font-heading text-xl">Contact Me</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center text-center pb-2">
          <ProfileImage size="md" className="mb-5" />

          <div className="mb-4">
            <p className="font-heading text-lg font-bold">{profile.name}</p>
            <p className="text-primary text-sm">{profile.designation}</p>
          </div>

          <div className="w-full space-y-3 mb-8">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 border border-border hover:border-primary/40 transition-colors text-sm"
            >
              <Mail size={18} className="text-primary shrink-0" />
              <span className="text-foreground">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 border border-border hover:border-primary/40 transition-colors text-sm"
            >
              <Phone size={18} className="text-primary shrink-0" />
              <span className="text-foreground">{profile.phone}</span>
            </a>
          </div>

          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">
            Connect with me
          </p>
          <div className="flex items-center justify-center gap-4">
            {profile.socials.map(({ platform, label, url }) => {
              const Icon = socialIconMap[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-12 h-12 flex items-center justify-center rounded-xl glass-card hover:border-primary/50 hover:text-primary text-muted-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
