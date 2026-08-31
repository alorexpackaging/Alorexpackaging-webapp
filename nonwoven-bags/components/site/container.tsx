import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Brand container — one controlled max-width (1280px) with fluid
 * edge padding, defined once in globals.css (`@utility container`).
 * Every section's content should be wrapped in this, never in an
 * ad hoc `max-w-*` div.
 */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("container", className)} {...props} />;
}

export { Container };
