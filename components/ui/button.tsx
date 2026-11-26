import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: { primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700", secondary: "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50", ghost: "text-slate-700 hover:bg-slate-100", dark: "bg-navy-950 text-white hover:bg-navy-800" },
    size: { default: "h-11 px-4", sm: "h-9 px-3 text-xs", lg: "h-12 px-5" },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
