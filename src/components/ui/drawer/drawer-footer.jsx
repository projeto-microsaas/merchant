import * as React from "react";
import { cn } from "@/lib/utils";

const DrawerFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

export { DrawerFooter };