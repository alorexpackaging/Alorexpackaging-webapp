import type { LucideIcon } from "lucide-react";
import {
  Package,
  Layers,
  Scissors,
  Printer,
  CircleDot,
  Hammer,
  ClipboardCheck,
  PackageCheck,
  Truck,
} from "lucide-react";

export type ProcessStep = {
  label: string;
  icon: LucideIcon;
};

/** The nine-stage production line, in order. */
export const PROCESS_STEPS: ProcessStep[] = [
  { label: "Raw Material", icon: Package },
  { label: "Fabric", icon: Layers },
  { label: "Cutting", icon: Scissors },
  { label: "Printing", icon: Printer },
  { label: "Handle / Punching", icon: CircleDot },
  { label: "Bag Making", icon: Hammer },
  { label: "Quality Inspection", icon: ClipboardCheck },
  { label: "Packaging", icon: PackageCheck },
  { label: "Dispatch", icon: Truck },
];
