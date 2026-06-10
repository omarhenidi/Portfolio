type TechTagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TechTag({ children, className = "" }: TechTagProps) {
  return (
    <span
      className={`border border-outline-variant bg-surface-container-highest px-3 py-1 font-mono text-tech-tag text-on-surface-variant ${className}`}
    >
      {children}
    </span>
  );
}
