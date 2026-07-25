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
    'meta.description': 'Портфолио мобильного разработчика. Создаю приложения, которые меняют мир к лучшему.',
    'meta.ogLocale': 'ru_RU',

    // Header
    'nav.portfolio': 'Портфолио',
    'nav.about': 'О себе',
    'nav.principles': 'Принципы',
    'nav.contact': 'Связаться',
    'nav.ariaLabel': 'Основная навигация',

    // Hero
    'hero.greeting': 'Привет, я Антон',
    'hero.title.line1': 'Создаю мобильные',
    'hero.title.line2': 'приложения',
    'hero.subtitle': 'Мобильные устройства определяют наше будущее. Каждое приложение — это возможность изменить чей-то мир к лучшему, один экран за другим.',
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
    'about.text1': 'Более 5 лет создаю мобильные приложения, которые решают реальные задачи. Верю, что маленький экран в кармане способен изменить жизнь миллионов людей — и каждый день работаю над тем, чтобы это происходило.',
    'about.text2': 'Специализируюсь на iOS и Android разработке. Уделяю внимание деталям, производительности и пользовательскому опыту. Для меня каждый проект — это не просто код, а инструмент, который делает чью-то повседневность немного проще и приятнее.',
    'about.text3': 'Моя цель — создавать цифровые продукты, которыми хочется пользоваться. Продукты, где каждая деталь продумана, каждое взаимодействие интуитивно, и каждый экран рассказывает свою историю.',
    'about.stat.years': 'Лет опыта',
    'about.stat.projects': 'Проектов',
    'about.stat.users': 'Пользователей',

    // Principles
    'principles.label': 'Принципы',
    'principles.title': 'Чем я руководствуюсь',
    'principles.quality.title': 'Качество',
    'principles.quality.desc': 'Каждая строка кода — это обещание пользователю. Не иду на компромиссы с качеством, даже когда никто не видит.',
    'principles.simplicity.title': 'Простота',
    'principles.simplicity.desc': 'Лучшее решение — то, которое не нуждается в объяснении. Стремлюсь к элегантной простоте в коде и интерфейсах.',
    'principles.responsibility.title': 'Ответственность',
    'principles.responsibility.desc': 'Беру на себя полную ответственность за результат. Мой проект — мое слово, и я его держу.',
    'principles.growth.title': 'Рост',
    'principles.growth.desc': 'Технологии не стоят на месте, и я тоже. Каждый день учусь, каждый проект делает меня сильнее как разработчика.',

    // Contact
    'contact.label': 'Связаться',
    'contact.title.line1': 'Давайте создадим',
    'contact.title.line2': 'что-то вместе',
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
    'meta.description': 'Mobile developer portfolio. Building apps that change the world for the better.',
    'meta.ogLocale': 'en_US',

    // Header
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.principles': 'Principles',
    'nav.contact': 'Contact',
    'nav.ariaLabel': 'Main navigation',

    // Hero
    'hero.greeting': "Hi, I'm Anton",
    'hero.title.line1': 'I build mobile',
    'hero.title.line2': 'applications',
    'hero.subtitle': 'Mobile devices shape our future. Every app is a chance to make someone\'s world a little better, one screen at a time.',
    'hero.cta': 'View projects',

    // Portfolio
    'portfolio.label': 'Portfolio',
    'portfolio.title': 'Featured projects',
    'portfolio.altPrefix': 'Screenshot of',
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
    'about.text1': 'For over 5 years I\'ve been building mobile apps that solve real problems. I believe the small screen in your pocket can change the lives of millions — and I work every day to make that happen.',
    'about.text2': 'I specialize in iOS and Android development. I pay close attention to detail, performance, and user experience. For me, every project is not just code — it\'s a tool that makes someone\'s everyday life a little easier and more enjoyable.',
    'about.text3': 'My goal is to create digital products that people love to use. Products where every detail is thought through, every interaction is intuitive, and every screen tells its own story.',
    'about.stat.years': 'Years of experience',
    'about.stat.projects': 'Projects',
    'about.stat.users': 'Users',

    // Principles
    'principles.label': 'Principles',
    'principles.title': 'What guides me',
    'principles.quality.title': 'Quality',
    'principles.quality.desc': 'Every line of code is a promise to the user. I never compromise on quality, even when no one is watching.',
    'principles.simplicity.title': 'Simplicity',
    'principles.simplicity.desc': 'The best solution is one that needs no explanation. I strive for elegant simplicity in code and interfaces.',
    'principles.responsibility.title': 'Responsibility',
    'principles.responsibility.desc': 'I take full responsibility for the result. My project is my word, and I keep it.',
    'principles.growth.title': 'Growth',
    'principles.growth.desc': 'Technology never stands still, and neither do I. Every day I learn, every project makes me stronger as a developer.',

    // Contact
    'contact.label': 'Contact',
    'contact.title.line1': "Let's create",
    'contact.title.line2': 'something together',
    'contact.subtitle': 'Open to new projects and collaboration. Choose a convenient way to reach out.',
    'contact.telegram.aria': 'Message on Telegram',
    'contact.max.aria': 'Profile on Max',
    'contact.email.aria': 'Send an email',
    'contact.email.label': 'Email',

    // Footer
    'footer.copy': 'Anton Androsov',
    'footer.note': 'Crafted with attention to detail',
  },
} as const
