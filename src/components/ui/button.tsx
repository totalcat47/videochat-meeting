import React from "react";
import clsx from "clsx";

export function Button({
  children,
  className = "",
  variant = "solid",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
}) {
  const base = "px-4 py-2 rounded font-semibold focus:outline-none transition";
  const styles = {
    solid: "bg-[#0057E7] text-white hover:bg-blue-700",
    outline: "border border-[#0057E7] text-[#0057E7] hover:bg-[#0057E7]/10"
  };

  return (
    <button className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}