import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props} data-id="ucqrjnqxr" data-path="src/components/ui/card.tsx" />

);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} data-id="ipkdxvd18" data-path="src/components/ui/card.tsx" />

);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props} data-id="vh4vuhen8" data-path="src/components/ui/card.tsx" />

);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} data-id="redx5c3p3" data-path="src/components/ui/card.tsx" />

);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) =>
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} data-id="yyao9m4cn" data-path="src/components/ui/card.tsx" />
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props} data-id="k986gqvir" data-path="src/components/ui/card.tsx" />

);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };