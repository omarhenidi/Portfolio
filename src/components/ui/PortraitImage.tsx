import { SITE } from "@/lib/constants";

type PortraitImageProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const DEFAULT_SIZES = "(max-width: 1024px) 100vw, min(42vw, 682px)";

export default function PortraitImage({
  className = "",
  priority = false,
  sizes = DEFAULT_SIZES,
}: PortraitImageProps) {
  const alt = `${SITE.name} (${SITE.nameAr}), ${SITE.title} portrait`;

  return (
    <picture>
      <source
        srcSet={`${SITE.imageWebp} ${SITE.imageWidth}w, ${SITE.imageWebp2x} ${SITE.imageWidth2x}w`}
        sizes={sizes}
        type="image/webp"
      />
      <img
        src={SITE.image}
        srcSet={`${SITE.image} ${SITE.imageWidth}w`}
        sizes={sizes}
        width={SITE.imageWidth}
        height={SITE.imageHeight}
        alt={alt}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
