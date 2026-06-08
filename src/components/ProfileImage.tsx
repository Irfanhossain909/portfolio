import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  size?: "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  md: "w-32 h-32 sm:w-36 sm:h-36",
  lg: "w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-square",
  xl: "w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px] aspect-square",
};

const ProfileImage = ({ size = "lg", className }: ProfileImageProps) => {
  return (
    <div
      className={cn(
        "relative shrink-0",
        sizeMap[size],
        className,
      )}
    >
      <div className="absolute -inset-2 rounded-2xl border border-primary/25 -z-10" />
      <div className="w-full h-full rounded-2xl border-[3px] border-primary overflow-hidden shadow-[0_0_40px_-12px_hsl(var(--primary)/0.45)] bg-muted">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.currentTarget.src = "/images/profile.svg";
          }}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
