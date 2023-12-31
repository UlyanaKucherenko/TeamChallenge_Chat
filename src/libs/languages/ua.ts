export const uaTranslation = {
  main: {
    title: 'Вітаємо у чаті',
    description:
      "Спілкуйтеся, підключайтеся, залишайтеся на зв'язку і робіть спілкування простим.",
    ourTeem: 'Наша команда',
    version: 'Версія',
  },
  sidebar: {
    publicRooms: 'Публічні кімнати',
    myPublicRooms: 'Мої Публічні кімнати',
    privateRooms: 'Приватні кімнати',
    createRoom: 'Створити кімнату',
  },
  auth: {
    join: 'Приєднатися',
    logout: 'Вихід',
    inputPlaceholder: "Ім'я",
    formText: "Введіть своє ім'я",
    formDesc:
      'Якщо ви хочете приєднатися до кімнати, то ви повинні зареєструватися',
    greetingText: 'Дякуємо, що приєдналися до Talkie',
    logoutWarningTitle: 'Ви впевнені що хочете вийти?',
    logoutWarningDescription: 'Ви більше не зможете зайти в цей акаунт',
    logoutWarningCloseButton: 'Закрити',
    logoutWarningConfirmButton: 'Добре',
  },
  rooms: {
    public: 'Публічні кімнати',
    private: 'Приватні кімнати',
    myPublicRooms: 'Мої Публічні кімнати',
    title: 'Назва',
    description: 'Опис',
    topic: 'Тема',
    titlePlaceholder: 'Введіть назву кімнати',
    descriptionPlaceholder: 'Введіть опис кімнати',
    topicPlaceholder: 'Виберіть тему кімнати',
  },
  search: {
    title: 'Результати пошуку',
    notFound: 'Результатів не знайдено',
    placeholder: 'Пошук...',
  },
  chat: {
    placeholder: 'Напишіть повідомлення...',
    noMessagesYet: 'Повідомлень ще немає',
    members: 'учасники',
    owner: 'власник',
    today: 'сьогодні',
    yesterday: 'вчора',
  },
  pageError: {
    pageNotFound: 'сторінку не знайдено',
    returnHome: 'Повернутися на головну сторінку',
  },
  errors: {
    userNameLengthValidation: "Ім'я тільки з 2-30 символів",
    userNameCharacterValidation: "Введіть тільки допустимі символи('’._-)",
    publicRoomTitleLengthValidation: 'Заголовок тільки з 2-30 символів',
    publicRoomTitleCharacterValidation:
      "Введіть тільки допустимі символи('’._-)",
    publicRoomDescriptionLengthValidation: 'Опис тільки з 1-300 символів',
    publicRoomDescriptionCharacterValidation: `Введіть тільки допустимі символи(.,&@'’():;!?"$*+/%-=_)`,
    publicRoomTopicValidation: 'Виберіть тему',
    inputValidation: 'Імя має бути не менше 2 символів і не більше 30',
  },
} as const;
