"use client";

import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "minimal" | "full";
  className?: string;
}

export function LanguageSwitcher({
  variant = "minimal",
  className
}: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  if (variant === "minimal") {
    return (
      <button
        onClick={toggleLanguage}
        className={cn(
          "flex items-center justify-center p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
          className
        )}
        aria-label={`Switch to ${language === "es" ? "English" : "Spanish"}`}
      >
        <span className="text-sm font-medium">{t("language.switch")}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
        className
      )}
      aria-label={`Switch to ${language === "es" ? "English" : "Spanish"}`}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{t("language.switch")}</span>
    </button>
  );
}
