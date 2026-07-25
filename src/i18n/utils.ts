import { translations, defaultLang, type Lang } from './translations'

/**
 * Get translation function for a specific locale.
 * Returns the translated string for the given key.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]): string {
    return translations[lang][key] ?? translations[defaultLang][key] ?? key
  }
}

/**
 * Get the language from Astro.currentLocale or fall back to default.
 */
export function getLangFromLocale(locale: string | undefined): Lang {
  if (locale && locale in translations) {
    return locale as Lang
  }
  return defaultLang
}

/**
 * Get the alternate language link path.
 * If current is "ru", returns "/en/"; if "en", returns "/".
 */
export function getAlternateLangPath(lang: Lang): string {
  return lang === 'ru' ? '/en/' : '/'
}

/**
 * Get the alternate language code.
 */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'ru' ? 'en' : 'ru'
}
