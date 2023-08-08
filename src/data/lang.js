const lang = [
  {
      id: 1,
      page_meta: {
        menu_vacancies: "Вакансії",
        menu_for_business: "Для Бізнесу",
        menu_send_cv: "Відправити Резюме",
        menu_categories: "Категорії",
        footer_bot: "Підключитися до телеграм-бота",
        footer_privacy: "Політика конфіденційності",
        footer_cookie: "Політика використання файлів cookie",
        footer_rights: "Всі права захищені",
        err_title: "Сторінка не знайдена",
        err_subtitle: "Помилка 404",
        err_text: "Запрошувану сторінку не знайдено. Можливо, ви ввели неправильну адресу або видалено сторінку.",
        err_link: "Повернутися на головну"
      },
      pic: require('../assets/svg/flags/4x3/uk.svg').default,
      name: "Ukrainian",
      code: "uk"
  },
  {
      id: 2,
      page_meta: {
        menu_vacancies: "Jobs",
        menu_for_business: "For business",
        menu_send_cv: "Send CV",
        menu_categories: "Category",
        footer_bot: "Connect to telegram bot",
        footer_privacy: "Privacy Policy",
        footer_cookie: "Cookie Policy",
        footer_rights: "All rights reserved",
        err_title: "Page not found",
        err_subtitle: "Error 404",
        err_text: "The requested page was not found. You may have entered the wrong address or you may have deleted the page.",
        err_link: "Back to main page"
      },
      pic: require('../assets/svg/flags/4x3/en.svg').default,
      name: "English",
      code: "en"
  },
  {
      id: 3,
      page_meta: {
          menu_vacancies: "Emplois",
          menu_for_business: "Pour les entreprises",
          menu_send_cv: "Envoyer un CV",
          menu_categories: "Catégorie",
          footer_bot: "Se connecter au bot telegram",
          footer_privacy: "Politique de confidentialité",
          footer_cookie: "Politique en matière de cookies",
          footer_rights: "Tous droits réservés",
          err_title: "Page introuvable",
          err_subtitle: "Erreur 404",
          err_text: "La page demandée est introuvable. Vous avez peut-être entré la mauvaise adresse ou vous avez peut-être supprimé la page.",
          err_link: "Retour à la page principale"
      },
      pic: require('../assets/svg/flags/4x3/fr.svg').default,
      name: "French",
      code: "fr"
  },
  {
      id: 4,
      page_meta: {
          menu_vacancies: "Lavori",
          menu_for_business: "Per le aziende",
          menu_send_cv: "Invia CV",
          menu_categories: "Categoria",
          footer_bot: "Connettiti al bot di telegramma",
          footer_privacy: "Informativa sulla privacy",
          footer_cookie: "Politica sui cookie",
          footer_rights: "Tutti i diritti riservati",
          err_title: "Pagina non trovata",
          err_subtitle: "Errore 404",
          err_text: "Impossibile trovare la pagina richiesta. Potresti aver inserito l'indirizzo sbagliato o aver cancellato la pagina.",
          err_link: "Torna alla pagina principale"
      },
      pic: require('../assets/svg/flags/4x3/it.svg').default,
      name: "Italian",
      code: "it"
  },
  {
      id: 5,
      page_meta: {
          menu_vacancies: "Punë",
          menu_for_business: "Për biznes",
          menu_send_cv: "Dërgo CV",
          menu_categories: "Kategoritë",
          footer_bot: "Lidhu me bot telegram",
          footer_privacy: "Politika e privatësisë",
          footer_cookie: "Politika e cookie-ve",
          footer_rights: "Të gjitha të drejtat e rezervuara",
          err_title: "Faqja nuk gjendet",
          err_subtitle: "Gabim 404",
          err_text: "Faqja e kërkuar nuk u gjet. Ju mund të keni hyrë në adresën e gabuar ose mund të keni fshirë faqen.",
          err_link: "Prapa në faqen kryesore"
      },
      pic: require('../assets/svg/flags/4x3/al.svg').default,
      name: "Albanian",
      code: "al"
  },
  {
      id: 6,
      page_meta: {
          menu_vacancies: "Treballs",
          menu_for_business: "Per a empreses",
          menu_send_cv: "Enviar CV",
          menu_categories: "Categoria",
          footer_bot: "Connecteu-vos al bot de telegrames",
          footer_privacy: "Política de privacitat",
          footer_cookie: "Política de galetes",
          footer_rights: "Tots els drets reservats",
          err_title: "No s'ha trobat la pàgina",
          err_subtitle: "Error 404",
          err_text: "No s'ha trobat la pàgina sol·licitada. És possible que hàgiu introduït una adreça incorrecta o que hàgiu suprimit la pàgina.",
          err_link: "Tornar a la pàgina principal"
      },
      pic: require('../assets/svg/flags/4x3/ca.svg').default,
      name: "Catalan",
      code: "ca"
  },
  {
      id: 7,
      page_meta: {
          menu_vacancies: "Ջոբս",
          menu_for_business: "Բիզնեսի համար",
          menu_send_cv: "Ուղարկել CV",
          menu_categories: "Կատեգորիա",
          footer_bot: "Միացրեք հեռագիր bot-ին",
          footer_privacy: "Գաղտնիության քաղաքականություն",
          footer_cookie: "Կուկիի քաղաքականություն",
          footer_rights: "Բոլոր իրավունքները պաշտպանված են",
          err_title: "Էջը չի գտնվել",
          err_subtitle: "Սխալ 404",
          err_text: "Չգտավ խնդրված էջը: Գուցե սխալ հասցե եք մտել կամ ջնջել եք էջը։",
          err_link: "Վերադառնալով գլխավոր էջ"
      },
      pic: require('../assets/svg/flags/4x3/hy.svg').default,
      name: "Armenian",
      code: "hy"
  },
  {
      id: 8,
      page_meta: {
          menu_vacancies: "Arbeitsplätze",
          menu_for_business: "Für Unternehmen",
          menu_send_cv: "Lebenslauf senden",
          menu_categories: "Kategorie",
          footer_bot: "Verbinden Sie sich mit dem Telegrammbot",
          footer_privacy: "Datenschutzrichtlinie",
          footer_cookie: "Cookie-Richtlinie",
          footer_rights: "Alle Rechte vorbehalten",
          err_title: "Seite nicht gefunden",
          err_subtitle: "Fehler 404",
          err_text: "Die angeforderte Seite wurde nicht gefunden. Möglicherweise haben Sie die falsche Adresse eingegeben oder die Seite gelöscht.",
          err_link: "Zurück zur Hauptseite"
      },
      pic: require('../assets/svg/flags/4x3/de.svg').default,
      name: "German",
      code: "de"
  },
  {
      id: 9,
      page_meta: {
          menu_vacancies: "İşlər",
          menu_for_business: "Biznes üçün",
          menu_send_cv: "CV göndər",
          menu_categories: "Kateqoriya",
          footer_bot: "Tel-teleqram botu ilə bağla",
          footer_privacy: "Gizlilik Siyasəti",
          footer_cookie: "Kuki Siyasəti",
          footer_rights: "Bütün hüquqlar qorunur",
          err_title: "Səhifə tapılmadı",
          err_subtitle: "Xəta 404",
          err_text: "İstənilmiş səhifə tapılmadı. Ola bilər ki, siz səhv ünvana daxil olub və ya səhifəni silmisiniz.",
          err_link: "Ana səhifəyə qayıt"
      },
      pic: require('../assets/svg/flags/4x3/az.svg').default,
      name: "Azerbaijani",
      code: "az"
  },
  {
      id: 10,
      page_meta: {
          menu_vacancies: "Banen",
          menu_for_business: "Voor bedrijven",
          menu_send_cv: "Stuur CV",
          menu_categories: "Categorie",
          footer_bot: "Verbinding maken met telegrambot",
          footer_privacy: "Privacybeleid",
          footer_cookie: "Cookiebeleid",
          footer_rights: "Alle rechten voorbehouden",
          err_title: "Pagina niet gevonden",
          err_subtitle: "Fout 404",
          err_text: "De opgevraagde pagina is niet gevonden. Mogelijk hebt u het verkeerde adres ingevoerd of hebt u de pagina verwijderd.",
          err_link: "Terug naar hoofdpagina"
      },
      pic: require('../assets/svg/flags/4x3/nl.svg').default,
      name: "Dutch",
      code: "nl"
  },
  {
      id: 11,
      page_meta: {
          menu_vacancies: "Posla",
          menu_for_business: "Za posao",
          menu_send_cv: "Pošalji CV",
          menu_categories: "Kategorija",
          footer_bot: "Poveži se sa telegramskim botom",
          footer_privacy: "Politika privatnosti",
          footer_cookie: "Politika kolačića",
          footer_rights: "Sva prava pridržana",
          err_title: "Stranica nije pronađena",
          err_subtitle: "Greška 404",
          err_text: "Tražena stranica nije pronađena. Možda ste unijeli pogrešnu adresu ili ste možda izbrisali stranicu.",
          err_link: "Nazad na glavnu stranicu"
      },
      pic: require('../assets/svg/flags/4x3/bs.svg').default,
      name: "Bosnian",
      code: "bs"
  },
  {
      id: 12,
      page_meta: {
          menu_vacancies: "Poslove",
          menu_for_business: "Za posao",
          menu_send_cv: "Pošalji životopis",
          menu_categories: "Kategorija",
          footer_bot: "Povezivanje s telegramskim botom",
          footer_privacy: "Privatnosti",
          footer_cookie: "Pravila o kolačićima",
          footer_rights: "Sva prava pridržana",
          err_title: "Stranica nije pronađena",
          err_subtitle: "Pogreška 404",
          err_text: "Tražena stranica nije pronađena. Možda ste unijeli pogrešnu adresu ili ste je izbrisali.",
          err_link: "Povratak na glavnu stranicu"
      },
      pic: require('../assets/svg/flags/4x3/hr.svg').default,
      name: "Croatian",
      code: "hr"
  },
  {
      id: 13,
      page_meta: {
          menu_vacancies: "Poslove",
          menu_for_business: "Za posao",
          menu_send_cv: "Pošalji CV",
          menu_categories: "Kategorija",
          footer_bot: "Poveži se sa telegram botom",
          footer_privacy: "Politika privatnosti",
          footer_cookie: "Politika kolačića",
          footer_rights: "Sva prava zadržana",
          err_title: "Stranica nije pronađena",
          err_subtitle: "Greška 404",
          err_text: "Zahtevana stranica nije pronađena. Možda ste uneli pogrešnu adresu ili ste je izbrisali.",
          err_link: "Nazad na glavnu stranicu"
      },
      pic: require('../assets/svg/flags/4x3/sr.svg').default,
      name: "Serbian",
      code: "sr"
  },
  {
      id: 14,
      page_meta: {
          menu_vacancies: "Работни места",
          menu_for_business: "За бизнеса",
          menu_send_cv: "Изпрати CV",
          menu_categories: "Категория",
          footer_bot: "Свързване към телеграма бот",
          footer_privacy: "Политика за поверителност",
          footer_cookie: "Политика за бисквитки",
          footer_rights: "Всички права запазени",
          err_title: "Страницата не е намерена",
          err_subtitle: "Грешка 404",
          err_text: "Заявената страница не бе намерена. Възможно е да сте въвели грешен адрес или да сте изтрили страницата.",
          err_link: "Обратно към главната страница"
      },
      pic: require('../assets/svg/flags/4x3/bg.svg').default,
      name: "Bulgarian",
      code: "bg"
  },
  {
      id: 15,
      page_meta: {
          menu_vacancies: "Pracovní místa",
          menu_for_business: "Pro firmy",
          menu_send_cv: "Poslat životopis",
          menu_categories: "Kategorie",
          footer_bot: "Připojte se k telegramovému robotovi",
          footer_privacy: "Zásady ochrany osobních údajů",
          footer_cookie: "Zásady používání souborů cookie",
          footer_rights: "Všechna práva vyhrazena",
          err_title: "Stránka nenalezena",
          err_subtitle: "Chyba 404",
          err_text: "Požadovaná stránka nebyla nalezena. Možná jste zadali nesprávnou adresu nebo jste stránku odstranili.",
          err_link: "Zpět na hlavní stránku"
      },
      pic: require('../assets/svg/flags/4x3/cs.svg').default,
      name: "Czech",
      code: "cs"
  },
  {
      id: 16,
      page_meta: {
          menu_vacancies: "Job",
          menu_for_business: "Til virksomheder",
          menu_send_cv: "Send CV",
          menu_categories: "Kategori",
          footer_bot: "Opret forbindelse til telegrambot",
          footer_privacy: "Håndtering af persondata",
          footer_cookie: "Cookie-politik",
          footer_rights: "Alle rettigheder forbeholdes",
          err_title: "Siden blev ikke fundet",
          err_subtitle: "Fejl 404",
          err_text: "Den ønskede side blev ikke fundet. Du kan have indtastet den forkerte adresse, eller du kan have slettet siden.",
          err_link: "Tilbage til hovedsiden"
      },
      pic: require('../assets/svg/flags/4x3/da.svg').default,
      name: "Danish",
      code: "da"
  },
  {
      id: 17,
      page_meta: {
          menu_vacancies: "Töökohti",
          menu_for_business: "Ärikliendile",
          menu_send_cv: "Saada CV",
          menu_categories: "Kategooria",
          footer_bot: "Ühendage telegrammi botiga",
          footer_privacy: "Privaatsuspoliitika",
          footer_cookie: "Küpsiste poliitika",
          footer_rights: "Kõik õigused kaitstud",
          err_title: "Lehte ei leitud",
          err_subtitle: "Viga 404",
          err_text: "Soovitud lehte ei leitud. Võib-olla olete sisestanud vale aadressi või olete lehe kustutanud.",
          err_link: "Tagasi pealehele"
      },
      pic: require('../assets/svg/flags/4x3/et.svg').default,
      name: "Estonian",
      code: "et"
  },
  {
      id: 18,
      page_meta: {
          menu_vacancies: "Työpaikkoja",
          menu_for_business: "Yrityksille",
          menu_send_cv: "Lähetä CV",
          menu_categories: "Luokka",
          footer_bot: "Yhdistä sähkebottiin",
          footer_privacy: "Tietosuojakäytäntö",
          footer_cookie: "Evästeiden käyttö",
          footer_rights: "Kaikki oikeudet pidätetään",
          err_title: "Sivua ei löydy",
          err_subtitle: "Virhe 404",
          err_text: "Pyydettyä sivua ei löytynyt. Olet ehkä antanut väärän osoitteen tai olet ehkä poistanut sivun.",
          err_link: "Takaisin pääsivulle"
      },
      pic: require('../assets/svg/flags/4x3/fi.svg').default,
      name: "Finnish",
      code: "fi"
  },
  {
      id: 19,
      page_meta: {
          menu_vacancies: "Jobb",
          menu_for_business: "För företag",
          menu_send_cv: "Skicka CV",
          menu_categories: "Kategori",
          footer_bot: "Anslut till telegrambot",
          footer_privacy: "Integritetspolicy",
          footer_cookie: "Policy för cookies",
          footer_rights: "Alla rättigheter förbehållna",
          err_title: "Sidan hittades inte",
          err_subtitle: "Fel 404",
          err_text: "Den begärda sidan hittades inte. Du kan ha angett fel adress eller så kan du ha tagit bort sidan.",
          err_link: "Tillbaka till huvudsidan"
      },
      pic: require('../assets/svg/flags/4x3/sv.svg').default,
      name: "Swedish",
      code: "sv"
  },
  {
      id: 20,
      page_meta: {
          menu_vacancies: "ვაკანსიები",
          menu_for_business: "ბიზნესი",
          menu_send_cv: "CV გადაგზავნა",
          menu_categories: "კატეგორია",
          footer_bot: "დაუკავშირდით დეპეშის ბოტს",
          footer_privacy: "კონფიდენციალურობის პოლიტიკა",
          footer_cookie: "Cookie-ფაილების გამოყენების პოლიტიკა",
          footer_rights: "ყველა უფლება დაცულია",
          err_title: "გვერდი ვერ მოიძებნა",
          err_subtitle: "შეცდომა 404",
          err_text: "მოთხოვნილი გვერდი ვერ მოიძებნა. თქვენ შეიძლება შეიყვანოთ არასწორი მისამართი ან შეიძლება წაიშალოთ გვერდი.",
          err_link: "მთავარ გვერდზე დაბრუნება"
      },
      pic: require('../assets/svg/flags/4x3/ka.svg').default,
      name: "Georgian",
      code: "ka"
  },
  {
      id: 21,
      page_meta: {
          menu_vacancies: "Θέσεις εργασίας",
          menu_for_business: "Για επιχειρήσεις",
          menu_send_cv: "Αποστολή βιογραφικού",
          menu_categories: "Κατηγορία",
          footer_bot: "Συνδεθείτε στο telegram bot",
          footer_privacy: "Πολιτική Απορρήτου",
          footer_cookie: "Πολιτική Cookies",
          footer_rights: "Με την επιφύλαξη παντός δικαιώματος",
          err_title: "Η σελίδα δεν βρέθηκε",
          err_subtitle: "Σφάλμα 404",
          err_text: "Η σελίδα που ζητήθηκε δεν βρέθηκε. Μπορεί να έχετε εισαγάγει λάθος διεύθυνση ή μπορεί να έχετε διαγράψει τη σελίδα.",
          err_link: "Επιστροφή στην αρχική σελίδα"
      },
      pic: require('../assets/svg/flags/4x3/el.svg').default,
      name: "Greek",
      code: "el"
  },
  {
      id: 22,
      page_meta: {
          menu_vacancies: "Munkahelyek",
          menu_for_business: "Üzleti célokra",
          menu_send_cv: "Önéletrajz küldése",
          menu_categories: "Kategória",
          footer_bot: "Csatlakozás a távirati bothoz",
          footer_privacy: "Adatvédelem",
          footer_cookie: "Cookie szabályzat",
          footer_rights: "Minden jog fenntartva",
          err_title: "Az oldal nem található",
          err_subtitle: "404-es hiba",
          err_text: "A kért oldal nem található. Lehet, hogy rossz címet adott meg, vagy törölte az oldalt.",
          err_link: "Vissza a főoldalra"
      },
      pic: require('../assets/svg/flags/4x3/hu.svg').default,
      name: "Hungarian",
      code: "hu"
  },
  {
      id: 23,
      page_meta: {
          menu_vacancies: "Vinnslur",
          menu_for_business: "Fyrir viðskipti",
          menu_send_cv: "Senda ferilskrá",
          menu_categories: "Flokkur",
          footer_bot: "Tengstu við telegram láni",
          footer_privacy: "Persónuverndarstefnu",
          footer_cookie: "Stefna um vafrakökur",
          footer_rights: "Allur réttur áskilinn",
          err_title: "Síða fannst ekki",
          err_subtitle: "Villa 404",
          err_text: "Umbeðin síða fannst ekki. Þú gætir hafa slegið inn rangt heimilisfang eða þú gætir hafa eytt síðunni.",
          err_link: "Til baka á aðalsíðu"
      },
      pic: require('../assets/svg/flags/4x3/is.svg').default,
      name: "Icelandic",
      code: "is"
  },
  {
      id: 24,
      page_meta: {
          menu_vacancies: "Poist",
          menu_for_business: "Le haghaidh gnó",
          menu_send_cv: "Seol CV",
          menu_categories: "Catagóir",
          footer_bot: "Ceangail le bot teileagram",
          footer_privacy: "Polasaí Príobháideachais",
          footer_cookie: "Polasaí Fianán",
          footer_rights: "Gach ceart ar cosaint",
          err_title: "Níor aimsíodh an leathanach",
          err_subtitle: "Earráid 404",
          err_text: "Níor aimsíodh an leathanach iarrtha. B'fhéidir gur chuir tú an seoladh mícheart isteach nó b'fhéidir gur scrios tú an leathanach.",
          err_link: "Ar ais go dtí an príomhleathanach"
      },
      pic: require('../assets/svg/flags/4x3/ga.svg').default,
      name: "Irish",
      code: "ga"
  },
  {
      id: 25,
      page_meta: {
          menu_vacancies: "Darbu",
          menu_for_business: "Biznesam",
          menu_send_cv: "Nosūtīt CV",
          menu_categories: "Kategorija",
          footer_bot: "Izveidojiet savienojumu ar telegrammas botu",
          footer_privacy: "Privātuma politika",
          footer_cookie: "Sīkdatņu politika",
          footer_rights: "Visas tiesības aizsargātas",
          err_title: "Lapa nav atrasta",
          err_subtitle: "Kļūda 404",
          err_text: "Pieprasītā lapa netika atrasta. Iespējams, esat ievadījis nepareizu adresi vai izdzēsis lapu.",
          err_link: "Atpakaļ uz galveno lapu"
      },
      pic: require('../assets/svg/flags/4x3/lv.svg').default,
      name: "Latvian",
      code: "lv"
  },
  {
      id: 26,
      page_meta: {
          menu_vacancies: "Darbo vietų",
          menu_for_business: "Verslui",
          menu_send_cv: "Siųsti CV",
          menu_categories: "Kategorija",
          footer_bot: "Prisijunkite prie telegramos roboto",
          footer_privacy: "Privatumo politika",
          footer_cookie: "Slapukų politika",
          footer_rights: "Visos teisės saugomos",
          err_title: "Puslapis nerastas",
          err_subtitle: "404 klaida",
          err_text: "Prašomas puslapis nerastas. Galbūt įvedėte neteisingą adresą arba ištrynėte puslapį.",
          err_link: "Grįžti į pagrindinį puslapį"
      },
      pic: require('../assets/svg/flags/4x3/lt.svg').default,
      name: "Lithuanian",
      code: "lt"
  },
  {
      id: 28,
      page_meta: {
          menu_vacancies: "Impjiegi",
          menu_for_business: "Għan-negozju",
          menu_send_cv: "Ibgħat CV",
          menu_categories: "Kategorija",
          footer_bot: "Ikkonnettja ma 'bot tat-telegramma",
          footer_privacy: "Regoli tal-privatezza",
          footer_cookie: "Politika dwar il-Cookies",
          footer_rights: "Id-drittijiet kollha riżervati",
          err_title: "Il-paġna ma nstabitx",
          err_subtitle: "Żball 404",
          err_text: "Il-paġna mitluba ma nstabitx. Jista' jkun li daħħalt l-indirizz ħażin jew forsi ħassart il-paġna.",
          err_link: "Lura għall-paġna ewlenija"
      },
      pic: require('../assets/svg/flags/4x3/mt.svg').default,
      name: "Maltese",
      code: "mt"
  },
  {
      id: 31,
      page_meta: {
          menu_vacancies: "Jobber",
          menu_for_business: "For bedrifter",
          menu_send_cv: "Send CV",
          menu_categories: "Kategori",
          footer_bot: "Koble til telegrambot",
          footer_privacy: "Personvernpolicy",
          footer_cookie: "Retningslinjer for informasjonskapsler",
          footer_rights: "Alle rettigheter forbeholdt",
          err_title: "Finner ikke siden",
          err_subtitle: "Feil 404",
          err_text: "Den forespurte siden ble ikke funnet. Du kan ha skrevet inn feil adresse, eller du kan ha slettet siden.",
          err_link: "Tilbake til hovedsiden"
      },
      pic: require('../assets/svg/flags/4x3/no.svg').default,
      name: "Norwegian",
      code: "no"
  },
  {
      id: 32,
      page_meta: {
          menu_vacancies: "Locuri",
          menu_for_business: "Pentru afaceri",
          menu_send_cv: "Trimite CV",
          menu_categories: "Categorie",
          footer_bot: "Conectați-vă la botul de telegrame",
          footer_privacy: "Politica de confidențialitate",
          footer_cookie: "Politica privind cookie-urile",
          footer_rights: "Toate drepturile rezervate",
          err_title: "Pagina nu a fost găsită",
          err_subtitle: "Eroare 404",
          err_text: "Pagina solicitată nu a fost găsită. Este posibil să fi introdus o adresă greșită sau să fi șters pagina.",
          err_link: "Înapoi la pagina principală"
      },
      pic: require('../assets/svg/flags/4x3/ro.svg').default,
      name: "Romanian",
      code: "ro"
  },
  {
      id: 33,
      page_meta: {
          menu_vacancies: "Delovna mesta",
          menu_for_business: "Za podjetja",
          menu_send_cv: "Pošlji življenjepis",
          menu_categories: "Kategorija",
          footer_bot: "Povežite se s telegramskim botom",
          footer_privacy: "Pravilnik o zasebnosti",
          footer_cookie: "Politika piškotkov",
          footer_rights: "Vse pravice pridržane",
          err_title: "Strani ni bilo mogoče najti",
          err_subtitle: "Napaka 404",
          err_text: "Zahtevane strani ni bilo mogoče najti. Morda ste vnesli napačen naslov ali pa ste stran izbrisali.",
          err_link: "Nazaj na glavno stran"
      },
      pic: require('../assets/svg/flags/4x3/sl.svg').default,
      name: "Slovenian",
      code: "sl"
  },
  {
      id: 34,
      page_meta: {
          menu_vacancies: "Trabajos",
          menu_for_business: "Para negocios",
          menu_send_cv: "Enviar CV",
          menu_categories: "Categoría",
          footer_bot: "Conectarse al bot de telegramas",
          footer_privacy: "Política de privacidad",
          footer_cookie: "Política de cookies",
          footer_rights: "Todos los derechos reservados",
          err_title: "Página no encontrada",
          err_subtitle: "Error 404",
          err_text: "No se encontró la página solicitada. Es posible que haya introducido la dirección incorrecta o que haya eliminado la página.",
          err_link: "Volver a la página principal"
      },
      pic: require('../assets/svg/flags/4x3/es.svg').default,
      name: "Spanish",
      code: "es"
  },
  {
      id: 36,
      page_meta: {
          menu_vacancies: "Işleri",
          menu_for_business: "İşletmeler için",
          menu_send_cv: "CV Gönder",
          menu_categories: "Kategori",
          footer_bot: "Telgraf botuna bağlan",
          footer_privacy: "Gizlilik Politikası",
          footer_cookie: "Çerez Politikası",
          footer_rights: "Tüm hakları saklıdır",
          err_title: "Sayfa bulunamadı",
          err_subtitle: "Hatası 404",
          err_text: "İstenen sayfa bulunamadı. Yanlış adres girmiş olabilirsiniz veya sayfayı silmiş olabilirsiniz.",
          err_link: "Ana sayfaya geri dön"
      },
      pic: require('../assets/svg/flags/4x3/tr.svg').default,
      name: "Turkish",
      code: "tr"
  }
]

export default lang;
