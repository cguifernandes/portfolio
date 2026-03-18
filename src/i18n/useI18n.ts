import { useEffect, useState } from "react";
import pt from "./pt.json";
import en from "./en.json";

const translations = {
  pt,
  en,
} as const;

export type Language = keyof typeof translations;

const STORAGE_KEY = "language";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "pt";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;

  const browserLang = window.navigator.language.toLowerCase();
  if (browserLang.startsWith("pt")) return "pt";

  return "en";
};

const getNested = (obj: unknown, path: string): unknown => {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

export const useI18n = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const handleChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ language: Language }>;
      if (customEvent.detail?.language) {
        setLanguage(customEvent.detail.language);
      }
    };

    window.addEventListener("i18n-language-changed", handleChange);
    return () => {
      window.removeEventListener("i18n-language-changed", handleChange);
    };
  }, []);

  const t = (key: string): string => {
    const value = getNested(translations[language], key);
    if (typeof value === "string") return value;
    return key;
  };

  return {
    language,
    t,
  };
};

