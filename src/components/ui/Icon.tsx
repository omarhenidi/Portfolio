import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Cpu,
  ExternalLink,
  Menu,
  Network,
  X,
  type LucideIcon,
} from "lucide-react";

const icons = {
  arrow_forward: ArrowRight,
  arrow_outward: ArrowUpRight,
  close: X,
  open_in_new: ExternalLink,
  code: Code,
  hub: Network,
  memory: Cpu,
  menu: Menu,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export default function Icon({ name, className = "", size = 24, strokeWidth = 1.5 }: IconProps) {
  const Component = icons[name];
  return (
    <Component
      className={`shrink-0 ${className}`}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}
