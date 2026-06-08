interface StoreLinksProps {
  appStoreUrl?: string;
  playStoreUrl?: string;
  size?: "sm" | "md";
}

const StoreLinks = ({ appStoreUrl, playStoreUrl, size = "md" }: StoreLinksProps) => {
  const height = size === "sm" ? "h-9" : "h-11";

  if (!appStoreUrl && !playStoreUrl) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Download on the App Store"
          className={`${height} opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300`}
        >
          <img
            src="/icons/app-store-badge.svg"
            alt="Download on the App Store"
            className={`${height} w-auto`}
          />
        </a>
      )}
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Get it on Google Play"
          className={`${height} opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300`}
        >
          <img
            src="/icons/google-play-badge.svg"
            alt="Get it on Google Play"
            className={`${height} w-auto`}
          />
        </a>
      )}
    </div>
  );
};

export default StoreLinks;
