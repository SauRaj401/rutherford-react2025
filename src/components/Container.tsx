import * as React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "md" | "lg";
};

/**
 * Centralized container so horizontal padding can be tuned in one place.
 * Default: small gap on mobile, slightly larger on md+ screens.
 */
export default function Container({ className = "", children, ...props }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-2 md:px-4 ${className}`} {...props}>
      {children}
    </div>
  );
}