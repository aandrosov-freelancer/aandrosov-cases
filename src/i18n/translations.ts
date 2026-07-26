export const languages = {
  ru: 'Русский',
  en: 'English',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'ru'

export const translations = {
  ru: {
    // Meta
    'meta.title': 'Антон Андросов — Мобильный разработчик',
    'meta.description': 'Портфолио мобильного разработчика. Создаю будущее, улучшая мир пользователей.',
    'meta.ogLocale': 'ru_RU',

    // Header
    'nav.portfolio': 'Портфолио',
    'nav.about': 'О себе',
    'nav.principles': 'Принципы',
    'nav.testimonials': 'Отзывы',
    'nav.contact': 'Связаться',
    'nav.ariaLabel': 'Основная навигация',

    // Hero
    'hero.greeting': 'Привет, я Антон',
    'hero.title.line1': 'Меняю мир',
    'hero.title.line2': 'и технологии',
    'hero.subtitle': 'Создаю будущее через мобильные приложения',
    'hero.cta': 'Смотреть работы',

    // Portfolio
    'portfolio.label': 'Портфолио',
    'portfolio.title': 'Избранные проекты',
    'portfolio.altPrefix': 'Скриншот приложения',
    'portfolio.cat.health': 'Здоровье',
    'portfolio.cat.finance': 'Финансы',
    'portfolio.cat.delivery': 'Доставка',
    'portfolio.cat.wellness': 'Велнес',
    'portfolio.cat.social': 'Соцсети',
    'portfolio.cat.travel': 'Путешествия',

    // About
    'about.label': 'О себе',
    'about.photoAlt': 'Антон Андросов — мобильный разработчик',
    'about.name': 'Антон Андросов',
    'about.role': 'Мобильный разработчик',
    'about.text1': 'Мобильная разработка - моя самая любимая сфера в информационных технологиях, поскольку мы можем дать возможность любому человеку окунуться в этот дивный мир всего-лишь одним касанием пальца об экран смартфона.',
    'about.text2': 'Я горю своей работой и дорожу репутацией, доводя цифровые продукты до релиза. Мой опыт работы составляет больше двух лет. За это время я успел потрудиться в крупных студиях и выпустить достойное количество цифровых проектов в свет.',
    'about.text3': 'Моя цель - оставить след в истории человечества своими превосходными творениями и изменить мир к лучшему.',
    'about.stat.years': 'Лет опыта',
    'about.stat.projects': 'Проектов',
    'about.stat.users': 'Пользователей',

    // Principles
    'principles.label': 'Принципы',
    'principles.title': 'Чем я руководствуюсь',
    'principles.quality.title': 'Простотой и минимализмом',
    'principles.quality.desc': 'Потребителю не нужны сложные интерфейсы - ему нужно удобное приложение, закрывающее его потребности.',
    'principles.simplicity.title': 'Эффективностью и скоростью',
    'principles.simplicity.desc': 'Использую премиальные инструменты в своей работе, которые не доступны обычному пользователю. Я быстро достигаю качественного результата.',
    'principles.responsibility.title': 'Ответственностью и прозрачностью',
    'principles.responsibility.desc': 'Веду отчетность о проделанной работе, никогда не оставляю заказчика один на один с собой.',
    'principles.growth.title': 'Трудолюбивостью и усердием',
    'principles.growth.desc': 'Я руководствуюсь ясностью ума и усердием в работе. Мобильная разработка — это не просто работа, это моя жизнь.',

    // Testimonials
    'testimonials.label': 'Отзывы',
    'testimonials.title': 'Что говорят клиенты',
    'testimonials.source': 'Источник',
    'testimonials.project': 'Проект',

    // Contact
    'contact.label': 'Связаться',
    'contact.title.line1': 'Давайте двигать',
    'contact.title.line2': 'прогресс вместе?',
    'contact.subtitle': 'Открыт к новым проектам и сотрудничеству. Выберите удобный способ связи.',
    'contact.telegram.aria': 'Написать в Telegram',
    'contact.max.aria': 'Профиль на Max',
    'contact.email.aria': 'Написать на почту',
    'contact.email.label': 'Почта',

    // Footer
    'footer.copy': 'Антон Андросов',
    'footer.note': 'Сделано с вниманием к деталям',
  },

  en: {
    // Meta
    'meta.title': 'Anton Androsov — Mobile Developer',
    'meta.description': 'Mobile developer portfolio. Shaping the future by enhancing the user experience.',
    'meta.ogLocale': 'en_US',

    // Header
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.principles': 'Principles',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.ariaLabel': 'Main navigation',

    // Hero
    'hero.greeting': "Hi, I'm Anton",
    'hero.title.line1': 'Changing the world',
    'hero.title.line2': 'and technology',
    'hero.subtitle': 'Creating the future through mobile applications',
    'hero.cta': 'View works',

    // Portfolio
    'portfolio.label': 'Portfolio',
    'portfolio.title': 'Featured projects',
    'portfolio.altPrefix': 'App screenshot',
    'portfolio.cat.health': 'Health',
    'portfolio.cat.finance': 'Finance',
    'portfolio.cat.delivery': 'Delivery',
    'portfolio.cat.wellness': 'Wellness',
    'portfolio.cat.social': 'Social',
    'portfolio.cat.travel': 'Travel',

    // About
    'about.label': 'About',
    'about.photoAlt': 'Anton Androsov — mobile developer',
    'about.name': 'Anton Androsov',
    'about.role': 'Mobile Developer',
    'about.text1': 'Mobile development is my absolute favorite area in IT, as it gives anyone the ability to dive into a wonderful digital world with just a single tap on a smartphone screen.',
    'about.text2': 'I am passionate about my craft and value my reputation, bringing digital products all the way to release. With over 2 years of experience, I have worked with major agencies and launched numerous successful digital projects.',
    'about.text3': 'My goal is to leave a mark with my best creations and change the world for the better.',
    'about.stat.years': 'Years of experience',
    'about.stat.projects': 'Projects',
    'about.stat.users': 'Users',

    // Principles
    'principles.label': 'Principles',
    'principles.title': 'What guides me',
    'principles.quality.title': 'Simplicity & Minimalism',
    'principles.quality.desc': 'Users do not need overcomplicated interfaces — they need an intuitive app that solves their real needs.',
    'principles.simplicity.title': 'Efficiency & Speed',
    'principles.simplicity.desc': 'I utilize premium tools and workflows that give a distinct competitive edge in speed and quality.',
    'principles.responsibility.title': 'Clarity & Transparency',
    'principles.responsibility.desc': 'I maintain clear reporting on all progress and never leave clients in the dark.',
    'principles.growth.title': 'Diligence & Integrity',
    'principles.growth.desc': 'I am guided by passion, clarity of mind, and dedication. Mobile development is not just my job — it is my life.',

    // Testimonials
    'testimonials.label': 'Testimonials',
    'testimonials.title': 'What clients say',
    'testimonials.source': 'Source',
    'testimonials.project': 'Project',

    // Contact
    'contact.label': 'Contact',
    'contact.title.line1': "Let's drive",
    'contact.title.line2': 'progress together?',
    'contact.subtitle': 'Open to new projects and collaboration. Choose your preferred way to get in touch.',
    'contact.telegram.aria': 'Message on Telegram',
    'contact.max.aria': 'Profile on Max',
    'contact.email.aria': 'Send an email',
    'contact.email.label': 'Email',

    // Footer
    'footer.copy': 'Anton Androsov',
    'footer.note': 'Crafted with attention to detail',
  },
} as const
