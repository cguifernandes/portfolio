import { useEffect, useState } from "react";
import { useI18n } from "../i18n/useI18n";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

type Language = "pt" | "en";

const I18N_STORAGE_KEY = "language";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "pt";

  const stored = window.localStorage.getItem(I18N_STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;

  const browserLang = window.navigator.language.toLowerCase();
  if (browserLang.startsWith("pt")) return "pt";

  return "en";
};

const applyLanguage = (lang: Language) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(I18N_STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  window.dispatchEvent(
    new CustomEvent("i18n-language-changed", { detail: { language: lang } }),
  );
};

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t } = useI18n();
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const initial = getInitialLanguage();
    setLanguage(initial);
    applyLanguage(initial);
  }, []);

  const handleChangeLanguage = (lang: Language) => {
    setLanguage(lang);
    applyLanguage(lang);
  };

  return (
    <Tooltip>
      <TooltipTrigger className={className} asChild>
        <div className="flex items-center gap-1 rounded-lg bg-neutral-900/60 px-1 py-0.5 border border-neutral-800">
          <button
            type="button"
            onClick={() => handleChangeLanguage("pt")}
            className={`px-2 py-0.5 text-xs font-medium cursor-pointer rounded-md transition-colors duration-200 ${
              language === "pt"
                ? "bg-neutral-100 text-neutral-900"
                : "bg-transparent text-neutral-300 hover:bg-neutral-800"
            }`}
          >
            PT
          </button>

          <button
            type="button"
            onClick={() => handleChangeLanguage("en")}
            className={`px-2 py-0.5 text-xs font-medium cursor-pointer rounded-md transition-colors duration-200 ${
              language === "en"
                ? "bg-neutral-100 text-neutral-900"
                : "bg-transparent text-neutral-300 hover:bg-neutral-800"
            }`}
          >
            EN
          </button>
        </div>
      </TooltipTrigger>

      <TooltipContent side="bottom">{t("header.changeLanguage")}</TooltipContent>
    </Tooltip>
  );
};

export default LanguageSwitcher;
