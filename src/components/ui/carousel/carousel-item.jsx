import React from 'react';
import * as React from "react";
import { cn } from "@/lib/utils";
import { useCarousel } from "./carousel-context";

const CarouselItem = React.forwardRef(function CarouselItem({ className, ...props }, ref) {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        orientation === "horizontal" ? "pl-2 sm:pl-4" : "pt-2 sm:pt-4", // Responsividade
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

export { CarouselItem };