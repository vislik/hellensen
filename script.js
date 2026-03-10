const state = {
  lang: localStorage.getItem("olga-site-lang") || "ru",
  serviceFilter: "all",
  newsFilter: "all",
};

const translations = {
  ru: {
    pageTitle: "Ольга Назарова | Стоматолог в Москве",
    pageDescription:
      "Персональный сайт стоматолога Ольги Назаровой: услуги, цены, запись на прием и новости.",
    navBio: "Обо мне",
    navServices: "Услуги и стоимость",
    navBooking: "Запись на прием",
    navDirections: "Как добраться",
    navNews: "Новости",
    heroKicker: "Частный стоматолог в Москве",
    heroTitle: "Ольга Назарова",
    heroSubtitle:
      "Выпускница ПИМУ, практикующий врач-стоматолог с аккуратным подходом и фокусом на эстетичный, предсказуемый результат.",
    ctaPrimary: "Записаться на прием",
    ctaSecondary: "Смотреть услуги",
    factEducation: "Сильная академическая база и уверенная клиническая подготовка",
    factCoverage: "Терапия, профгигиена, эстетика и имплантация в одном подходе",
    factVipers: "Выполняю эстетические кейсы по протоколу VIPERS smile",
    factSupport: "Понятный план лечения и сопровождение после каждого приема",
    signatureTitle: "Персональный подход",
    signatureText: "Диагностика, план лечения и сопровождение в одном ритме.",
    bioKicker: "Биография",
    bioTitle: "О специалисте",
    bioEducationTitle: "Образование и рост",
    bioEducationText:
      "Ольга Назарова окончила ПИМУ по специальности «Стоматология», показала высокую успеваемость и сразу включилась в клиническую практику.",
    bioEducationPoint1: "ПИМУ, стоматологический факультет, сильная теоретическая база",
    bioEducationPoint2: "Практика по современным терапевтическим протоколам",
    bioEducationPoint3: "Постоянное обучение по эстетической стоматологии и реабилитации улыбки",
    bioApproachTitle: "Подход к лечению",
    bioApproachText:
      "Основной принцип: объяснить пациенту каждый этап и выбрать решение, которое будет функциональным, эстетичным и устойчивым в долгую.",
    bioApproachPoint1: "План лечения с понятной стоимостью",
    bioApproachPoint2: "Фото- и рентген-контроль на ключевых этапах",
    bioApproachPoint3: "Чек-лист рекомендаций после приема",
    galleryKicker: "Визуальные кейсы",
    galleryTitle: "До/после и рабочая среда",
    galleryCaption1: "Эстетическая реставрация фронтальной группы",
    galleryCaption2: "Профессиональная гигиена и полировка",
    galleryCaption3: "Оборудование и стерильная рабочая зона",
    galleryCaption4: "Диагностика перед составлением плана лечения",
    servicesKicker: "Услуги",
    servicesTitle: "Услуги и стоимость",
    tabAll: "Все",
    tabTherapy: "Терапия",
    tabHygiene: "Профгигиена",
    tabImplant: "Имплантация",
    tabEsthetic: "Эстетика",
    calcTitle: "Оценка стоимости приема",
    calcSubtitle: "Калькулятор дает ориентир до очной диагностики.",
    calcService: "Услуга",
    calcVisitType: "Формат приема",
    calcVisitStandard: "Плановый",
    calcVisitUrgent: "Срочный (+20%)",
    calcDiagnostics: "Доп. диагностика",
    calcDiagNone: "Без доп. диагностики",
    calcDiagXray: "Прицельный снимок (+1 200 ₽)",
    calcDiagCt: "КТ-сегмент (+3 900 ₽)",
    calcResultTitle: "Ориентировочная стоимость:",
    bookingKicker: "Запись",
    bookingTitle: "Запись на прием",
    bookingInfoTitle: "Как проходит запись",
    bookingStep1: "Оставляете заявку и выбираете удобную дату.",
    bookingStep2: "Получаете подтверждение в Telegram в течение 30 минут.",
    bookingStep3: "На приеме получаете персональный план лечения.",
    fieldName: "Имя",
    fieldPhone: "Телефон / Telegram",
    fieldService: "Услуга",
    fieldDate: "Дата",
    fieldTime: "Время",
    fieldComment: "Комментарий",
    fieldConsent: "Согласен(а) на обработку персональных данных",
    bookingSubmit: "Отправить заявку",
    directionsKicker: "Локация",
    directionsTitle: "Как добраться",
    locationAddressTitle: "Адрес приема",
    locationAddressText:
      "Нижний Новгород, улица Белинского, 32",
    locationMetro: "Метро: Горьковская, 10 минут пешком",
    locationHours: "График: Пн-Пт, 08:00-17:00",
    newsKicker: "Медиа",
    newsTitle: "Новости и акции",
    newsTabAll: "Все",
    newsTabNews: "Новости",
    newsTabPromo: "Акции",
    footerText: "Персональный pet-проект стоматолога Ольги Назаровой. RU/EN версия.",
    catTherapy: "Терапия",
    catHygiene: "Профгигиена",
    catImplant: "Имплантация",
    catEsthetic: "Эстетика",
    readMore: "Подробнее",
    badgeNews: "Новость",
    badgePromo: "Акция",
    calcFrom: "от",
    slotPlaceholder: "Сначала выберите дату",
    slotNoWork: "В выходные прием не ведется. Выберите будний день",
    slotNoSlots: "Нет свободных слотов",
    bookingSuccess:
      "Заявка принята: {service}, {date} в {time}. Напишите в Telegram для подтверждения: @HELLENSENN.",
    bookingErrorRequired: "Заполните обязательные поля и подтвердите согласие.",
    bookingErrorSunday: "В выходные прием не ведется. Выберите будний день.",
  },
  en: {
    pageTitle: "Olga Nazarova | Dentist in Moscow",
    pageDescription:
      "Personal website of dentist Olga Nazarova: services, pricing, appointment booking, and news.",
    navBio: "About",
    navServices: "Services & Fees",
    navBooking: "Book Appointment",
    navDirections: "Directions",
    navNews: "News",
    heroKicker: "Private Dentist in Moscow",
    heroTitle: "Olga Nazarova",
    heroSubtitle:
      "PIMU graduate and practicing dentist focused on precise care and a predictable, aesthetic outcome.",
    ctaPrimary: "Book Appointment",
    ctaSecondary: "View Services",
    factEducation: "Strong academic foundation and confident clinical training",
    factCoverage: "Therapy, hygiene, aesthetic care, and implants in one workflow",
    factVipers: "Aesthetic cases with the VIPERS smile protocol",
    factSupport: "Clear treatment roadmap and follow-up after each visit",
    signatureTitle: "Personalized Care",
    signatureText: "Diagnosis, treatment plan, and follow-up in one clear workflow.",
    bioKicker: "Biography",
    bioTitle: "About the Specialist",
    bioEducationTitle: "Education & Growth",
    bioEducationText:
      "Olga Nazarova graduated from PIMU in Dentistry with strong academic performance and quickly transitioned into hands-on clinical practice.",
    bioEducationPoint1: "PIMU Faculty of Dentistry with a strong core curriculum",
    bioEducationPoint2: "Hands-on training with modern therapeutic protocols",
    bioEducationPoint3: "Ongoing education in aesthetic dentistry and smile rehabilitation",
    bioApproachTitle: "Treatment Approach",
    bioApproachText:
      "Core principle: explain every step and choose a solution that is functional, aesthetic, and sustainable long-term.",
    bioApproachPoint1: "Transparent treatment plan and pricing",
    bioApproachPoint2: "Photo and X-ray control at key stages",
    bioApproachPoint3: "Aftercare checklist after each visit",
    galleryKicker: "Visual Cases",
    galleryTitle: "Before/After and Clinical Environment",
    galleryCaption1: "Aesthetic restoration of the frontal teeth group",
    galleryCaption2: "Professional hygiene and polishing session",
    galleryCaption3: "Modern equipment and sterile workspace",
    galleryCaption4: "Diagnostics before a personalized treatment plan",
    servicesKicker: "Services",
    servicesTitle: "Services & Fees",
    tabAll: "All",
    tabTherapy: "Therapy",
    tabHygiene: "Hygiene",
    tabImplant: "Implant",
    tabEsthetic: "Aesthetic",
    calcTitle: "Visit Cost Estimator",
    calcSubtitle: "Estimator gives an approximate fee before in-person diagnostics.",
    calcService: "Service",
    calcVisitType: "Visit Type",
    calcVisitStandard: "Standard",
    calcVisitUrgent: "Urgent (+20%)",
    calcDiagnostics: "Additional diagnostics",
    calcDiagNone: "No extra diagnostics",
    calcDiagXray: "Targeted X-ray (+1,200 RUB)",
    calcDiagCt: "CT segment (+3,900 RUB)",
    calcResultTitle: "Estimated cost:",
    bookingKicker: "Booking",
    bookingTitle: "Book an Appointment",
    bookingInfoTitle: "How Booking Works",
    bookingStep1: "Submit the form and pick a convenient date.",
    bookingStep2: "Get confirmation on Telegram within 30 minutes.",
    bookingStep3: "Receive a personal treatment plan during the visit.",
    fieldName: "Name",
    fieldPhone: "Phone / Telegram",
    fieldService: "Service",
    fieldDate: "Date",
    fieldTime: "Time",
    fieldComment: "Comment",
    fieldConsent: "I agree to personal data processing",
    bookingSubmit: "Submit Request",
    directionsKicker: "Location",
    directionsTitle: "Directions",
    locationAddressTitle: "Appointment Address",
    locationAddressText:
      "32 Belinskogo Street, Nizhny Novgorod",
    locationMetro: "Metro: Gorkovskaya, 10-minute walk",
    locationHours: "Schedule: Mon-Fri, 08:00-17:00",
    newsKicker: "Media",
    newsTitle: "News & Offers",
    newsTabAll: "All",
    newsTabNews: "News",
    newsTabPromo: "Offers",
    footerText: "Personal pet project of dentist Olga Nazarova. RU/EN version.",
    catTherapy: "Therapy",
    catHygiene: "Hygiene",
    catImplant: "Implant",
    catEsthetic: "Aesthetic",
    readMore: "Read more",
    badgeNews: "News",
    badgePromo: "Offer",
    calcFrom: "from",
    slotPlaceholder: "Choose a date first",
    slotNoWork: "No appointments on weekends. Please choose a weekday",
    slotNoSlots: "No slots available",
    bookingSuccess:
      "Request received: {service}, {date} at {time}. Please confirm via Telegram: @HELLENSENN.",
    bookingErrorRequired: "Please fill all required fields and confirm consent.",
    bookingErrorSunday: "No appointments on weekends. Please choose a weekday.",
  },
};

const services = [
  {
    id: "caries",
    category: "therapy",
    price: 7600,
    ru: {
      title: "Лечение кариеса",
      description: "Атравматичное удаление пораженных тканей и эстетичная композитная реставрация.",
    },
    en: {
      title: "Caries Treatment",
      description: "Minimally invasive decay removal and aesthetic composite restoration.",
    },
  },
  {
    id: "endodontics",
    category: "therapy",
    price: 14800,
    ru: {
      title: "Эндодонтическое лечение",
      description: "Обработка и пломбирование корневых каналов под увеличением.",
    },
    en: {
      title: "Endodontic Treatment",
      description: "Root canal treatment under magnification with modern sealing protocols.",
    },
  },
  {
    id: "hygiene",
    category: "hygiene",
    price: 7900,
    ru: {
      title: "Профессиональная гигиена",
      description: "AirFlow, ультразвук и реминерализирующая полировка за один визит.",
    },
    en: {
      title: "Professional Hygiene",
      description: "AirFlow, ultrasonic cleaning, and remineralizing polish in one visit.",
    },
  },
  {
    id: "whitening",
    category: "esthetic",
    price: 18900,
    ru: {
      title: "Клиническое отбеливание",
      description: "Щадящий протокол с контролем чувствительности и подбором оттенка.",
    },
    en: {
      title: "Clinical Whitening",
      description: "Gentle in-office protocol with sensitivity control and shade matching.",
    },
  },
  {
    id: "implant",
    category: "implant",
    price: 69000,
    ru: {
      title: "Имплантация (1 единица)",
      description: "Установка импланта с навигацией, планированием и рекомендациями по восстановлению.",
    },
    en: {
      title: "Implant Placement (single unit)",
      description: "Implant placement with guided planning and post-op recovery protocol.",
    },
  },
  {
    id: "crown",
    category: "implant",
    price: 32900,
    ru: {
      title: "Коронка на имплант",
      description: "Индивидуальная ортопедическая конструкция с естественной анатомией.",
    },
    en: {
      title: "Implant Crown",
      description: "Individual prosthetic crown with natural shape and bite fit.",
    },
  },
  {
    id: "veneers",
    category: "esthetic",
    price: 47900,
    ru: {
      title: "Керамические виниры",
      description: "Визуальное моделирование улыбки и минимально инвазивная подготовка.",
    },
    en: {
      title: "Ceramic Veneers",
      description: "Smile preview with minimally invasive preparation and lab design.",
    },
  },
  {
    id: "consultation",
    category: "hygiene",
    price: 2900,
    ru: {
      title: "Консультация и диагностика",
      description: "Осмотр, фотопротокол, оценка рисков и персональный план лечения.",
    },
    en: {
      title: "Consultation & Diagnostics",
      description: "Exam, photo protocol, risk evaluation, and personalized treatment plan.",
    },
  },
];

const newsItems = [
  {
    id: 1,
    type: "news",
    date: "2026-02-24",
    ru: {
      title: "Новый протокол лечения чувствительности",
      teaser: "Добавлен протокол мягкой реминерализации эмали после профгигиены.",
      body: "С марта используется расширенный протокол после гигиены: диагностика чувствительных зон, индивидуальный реминерализирующий гель и контрольная оценка через 14 дней.",
    },
    en: {
      title: "New Sensitivity Care Protocol",
      teaser: "A gentle enamel remineralization protocol is now included after hygiene visits.",
      body: "Starting in March, after hygiene visits we add targeted sensitivity mapping, personalized remineralization gel, and a follow-up check in 14 days.",
    },
  },
  {
    id: 2,
    type: "promo",
    date: "2026-03-02",
    ru: {
      title: "Комплекс «Гигиена + диагностика»",
      teaser: "До конца месяца фиксированная стоимость 9 900 ₽ вместо 10 800 ₽.",
      body: "В комплекс входит профгигиена, фотопротокол, прицельный снимок и персональные рекомендации по домашнему уходу.",
    },
    en: {
      title: "Hygiene + Diagnostics Package",
      teaser: "Fixed fee 9,900 RUB until month-end instead of 10,800 RUB.",
      body: "Includes professional hygiene, photo protocol, targeted X-ray, and a personalized home-care guide.",
    },
  },
  {
    id: 3,
    type: "news",
    date: "2026-03-05",
    ru: {
      title: "Запуск мини-лекций для пациентов",
      teaser: "Новые короткие материалы по уходу за зубами после реставраций и имплантации.",
      body: "Каждую неделю публикуются короткие заметки и чек-листы по послеоперационному уходу, профилактике кариеса и сохранению эстетических работ.",
    },
    en: {
      title: "Patient Mini-Lectures Started",
      teaser: "Short educational notes on aftercare for restorations and implants are now available.",
      body: "Each week we publish practical checklists on post-op care, caries prevention, and long-term maintenance of aesthetic work.",
    },
  },
];

const serviceGrid = document.getElementById("service-grid");
const newsGrid = document.getElementById("news-grid");
const calcForm = document.getElementById("calc-form");
const calcService = document.getElementById("calc-service");
const calcVisit = document.getElementById("calc-visit");
const calcDiagnostics = document.getElementById("calc-diagnostics");
const calcTotal = document.getElementById("calc-total");
const bookingForm = document.getElementById("booking-form");
const bookingService = document.getElementById("booking-service");
const bookingDate = document.getElementById("booking-date");
const bookingTime = document.getElementById("booking-time");
const bookingResult = document.getElementById("booking-result");
const newsModal = document.getElementById("news-modal");
const modalDate = document.getElementById("modal-date");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

function t(key) {
  return translations[state.lang][key] || key;
}

function formatPrice(value) {
  const locale = state.lang === "ru" ? "ru-RU" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(value) {
  const locale = state.lang === "ru" ? "ru-RU" : "en-US";
  return new Date(value).toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function categoryLabel(category) {
  const map = {
    therapy: t("catTherapy"),
    hygiene: t("catHygiene"),
    implant: t("catImplant"),
    esthetic: t("catEsthetic"),
  };
  return map[category] || category;
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.title = t("pageTitle");

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", t("pageDescription"));
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (key) {
      node.textContent = t(key);
    }
  });

  const placeholders = {
    "patient-name": state.lang === "ru" ? "Анна" : "Anna",
    "patient-contact": state.lang === "ru" ? "+7 / @username" : "+7 / @username",
    "booking-comment":
      state.lang === "ru"
        ? "Опишите жалобу или запрос"
        : "Describe your concern or treatment request",
  };

  Object.entries(placeholders).forEach(([id, value]) => {
    const field = document.getElementById(id);
    if (field) {
      field.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
}

function renderServices() {
  const list = services.filter((item) =>
    state.serviceFilter === "all" ? true : item.category === state.serviceFilter,
  );

  serviceGrid.innerHTML = list
    .map((item, index) => {
      const copy = item[state.lang];
      return `
        <article class="service-card" style="--i:${index};">
          <h3>${copy.title}</h3>
          <p>${copy.description}</p>
          <div class="service-meta">
            <span class="service-tag">${categoryLabel(item.category)}</span>
            <span class="service-price">${formatPrice(item.price)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function fillServiceSelect(selectNode, selectedValue) {
  selectNode.innerHTML = services
    .map((item) => `<option value="${item.id}">${item[state.lang].title}</option>`)
    .join("");

  if (selectedValue && services.some((item) => item.id === selectedValue)) {
    selectNode.value = selectedValue;
  }
}

function calculateTotal() {
  const service = services.find((item) => item.id === calcService.value);
  if (!service) {
    calcTotal.textContent = `${t("calcFrom")} ${formatPrice(0)}`;
    return;
  }

  const visitMultiplier = calcVisit.value === "urgent" ? 1.2 : 1;
  const diagnosticsCost = {
    none: 0,
    xray: 1200,
    ct: 3900,
  }[calcDiagnostics.value];

  const total = Math.round(service.price * visitMultiplier + diagnosticsCost);
  calcTotal.textContent = `${t("calcFrom")} ${formatPrice(total)}`;
}

function updateSlotOptions() {
  const value = bookingDate.value;
  const locale = state.lang === "ru" ? "ru-RU" : "en-US";
  bookingTime.innerHTML = "";

  if (!value) {
    bookingTime.innerHTML = `<option value="">${t("slotPlaceholder")}</option>`;
    return;
  }

  const selectedDate = new Date(`${value}T00:00:00`);
  const weekDay = selectedDate.getDay();

  if (weekDay === 0 || weekDay === 6) {
    bookingTime.innerHTML = `<option value="">${t("slotNoWork")}</option>`;
    return;
  }

  const endHour = 17;
  const start = 8;
  const slots = [];
  for (let hour = start; hour < endHour; hour += 1) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }

  const blocked = new Set(["13:00", "13:30"]);
  const now = new Date();
  const selectedIsToday = selectedDate.toDateString() === now.toDateString();

  const available = slots.filter((slot) => {
    if (blocked.has(slot)) {
      return false;
    }

    if (!selectedIsToday) {
      return true;
    }

    const [hour, minute] = slot.split(":").map(Number);
    const slotDate = new Date(selectedDate);
    slotDate.setHours(hour, minute, 0, 0);
    return slotDate.getTime() - now.getTime() > 60 * 60 * 1000;
  });

  if (available.length === 0) {
    bookingTime.innerHTML = `<option value="">${t("slotNoSlots")}</option>`;
    return;
  }

  bookingTime.innerHTML = available
    .map((slot) => {
      const [hour, minute] = slot.split(":").map(Number);
      const date = new Date(selectedDate);
      date.setHours(hour, minute, 0, 0);
      const label = date.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
      return `<option value="${slot}">${label}</option>`;
    })
    .join("");
}

function setMinDate() {
  const now = new Date();
  const timezoneShift = now.getTimezoneOffset() * 60000;
  const localISODate = new Date(now.getTime() - timezoneShift).toISOString().slice(0, 10);
  bookingDate.min = localISODate;
  if (!bookingDate.value) {
    bookingDate.value = localISODate;
  }
}

function handleBookingSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("patient-name").value.trim();
  const contact = document.getElementById("patient-contact").value.trim();
  const serviceId = bookingService.value;
  const dateValue = bookingDate.value;
  const timeValue = bookingTime.value;
  const hasConsent = document.getElementById("booking-consent").checked;

  bookingResult.classList.remove("error");

  if (!name || !contact || !serviceId || !dateValue || !timeValue || !hasConsent) {
    bookingResult.textContent = t("bookingErrorRequired");
    bookingResult.classList.add("error");
    return;
  }

  const date = new Date(`${dateValue}T00:00:00`);
  if (date.getDay() === 0 || date.getDay() === 6) {
    bookingResult.textContent = t("bookingErrorSunday");
    bookingResult.classList.add("error");
    return;
  }

  const service = services.find((item) => item.id === serviceId);
  const message = t("bookingSuccess")
    .replace("{service}", service ? service[state.lang].title : "")
    .replace("{date}", formatDate(dateValue))
    .replace("{time}", timeValue);

  bookingResult.textContent = message;
  bookingForm.reset();
  setMinDate();
  fillServiceSelect(bookingService, serviceId);
  updateSlotOptions();
}

function renderNews() {
  const list = newsItems
    .filter((item) => (state.newsFilter === "all" ? true : item.type === state.newsFilter))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  newsGrid.innerHTML = list
    .map((item, index) => {
      const copy = item[state.lang];
      return `
        <article class="news-card" style="--i:${index};">
          <div class="news-top">
            <span class="news-badge">${item.type === "promo" ? t("badgePromo") : t("badgeNews")}</span>
            <span class="news-date">${formatDate(item.date)}</span>
          </div>
          <h3>${copy.title}</h3>
          <p>${copy.teaser}</p>
          <button type="button" data-news-id="${item.id}">${t("readMore")}</button>
        </article>
      `;
    })
    .join("");
}

function setLanguage(nextLang) {
  if (!translations[nextLang]) {
    return;
  }
  state.lang = nextLang;
  localStorage.setItem("olga-site-lang", state.lang);

  applyTranslations();
  renderServices();
  renderNews();

  const selectedCalcService = calcService.value;
  const selectedBookingService = bookingService.value;
  fillServiceSelect(calcService, selectedCalcService);
  fillServiceSelect(bookingService, selectedBookingService);

  calculateTotal();
  updateSlotOptions();
}

function setupTabs() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.serviceFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((btn) => {
        btn.classList.toggle("is-active", btn === button);
      });
      renderServices();
    });
  });

  document.querySelectorAll("[data-news-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.newsFilter = button.dataset.newsFilter;
      document.querySelectorAll("[data-news-filter]").forEach((btn) => {
        btn.classList.toggle("is-active", btn === button);
      });
      renderNews();
    });
  });
}

function setupNewsModal() {
  newsGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-news-id]");
    if (!button) {
      return;
    }

    const item = newsItems.find((news) => String(news.id) === button.dataset.newsId);
    if (!item) {
      return;
    }

    const copy = item[state.lang];
    modalDate.textContent = formatDate(item.date);
    modalTitle.textContent = copy.title;
    modalText.textContent = copy.body;

    if (typeof newsModal.showModal === "function") {
      newsModal.showModal();
    }
  });

  newsModal.addEventListener("click", (event) => {
    const rect = newsModal.getBoundingClientRect();
    const isOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (isOutside) {
      newsModal.close();
    }
  });
}

function setupReveal() {
  document.querySelectorAll(".reveal").forEach((block, index) => {
    block.style.setProperty("--reveal-delay", `${Math.min(index * 70, 320)}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll(".reveal").forEach((block) => observer.observe(block));
}

function setupHeroMotion() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const hero = document.querySelector(".hero");
  const shape1 = document.querySelector(".bg-shape-1");
  const shape2 = document.querySelector(".bg-shape-2");
  const layers = [
    { node: document.querySelector(".photo-card-main"), depth: 14 },
    { node: document.querySelector(".photo-card-side"), depth: 9 },
    { node: document.querySelector(".signature-card"), depth: 6 },
  ];

  if (reduceMotion || !finePointer || !hero || layers.some((item) => !item.node)) {
    return;
  }

  let rafId = 0;

  const applyMotion = (dx, dy) => {
    layers.forEach(({ node, depth }) => {
      node.style.transform = `translate3d(${dx * depth}px, ${dy * depth}px, 0)`;
    });

    if (shape1) {
      shape1.style.transform = `translate3d(${dx * 12}px, ${dy * 12}px, 0)`;
    }
    if (shape2) {
      shape2.style.transform = `translate3d(${dx * -10}px, ${dy * -10}px, 0)`;
    }
  };

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const dx = (x - 0.5) * 2;
    const dy = (y - 0.5) * 2;

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => applyMotion(dx, dy));
  });

  hero.addEventListener("pointerleave", () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => applyMotion(0, 0));
  });
}

function setupStaticCardAnimation() {
  document.querySelectorAll(".gallery-card").forEach((card, index) => {
    card.style.setProperty("--i", String(index));
  });
}

function init() {
  setMinDate();
  setupTabs();
  setupNewsModal();
  setupReveal();
  setupHeroMotion();
  setupStaticCardAnimation();

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  calcForm.addEventListener("change", calculateTotal);
  bookingDate.addEventListener("change", updateSlotOptions);
  bookingForm.addEventListener("submit", handleBookingSubmit);

  fillServiceSelect(calcService);
  fillServiceSelect(bookingService);

  setLanguage(state.lang);
}

init();
