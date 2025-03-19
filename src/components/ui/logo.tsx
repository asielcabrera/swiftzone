import { LogoSvg } from "./logo-svg";

interface LogoProps {
  variant?: "light" | "dark";
  withText?: boolean;
  withBackground?: boolean;
  className?: string;
}

export function Logo({
  variant = "dark",
  withText = false,
  withBackground = true,
  className = ""
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-primary";

  // Para las dimensiones
  const logoSize = {
    width: withBackground ? 35 : 40,
    height: withBackground ? 35 : 40
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={withBackground ? "relative rounded-xl overflow-hidden bg-primary/10 flex items-center justify-center w-10 h-10" : ""}>
        <LogoSvg
          width={logoSize.width}
          height={logoSize.height}
          variant={variant}
          className="flex-shrink-0"
        />
      </div>
      {withText && (
        <span className={`text-xl font-bold ${textColor}`}>
          Swift<span className="text-primary">Zone</span>
        </span>
      )}
    </div>
  );
}
