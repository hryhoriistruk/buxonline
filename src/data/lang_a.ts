import { ReactNode } from "react";

interface Language {

    code:string;
pic: string;
name: string;
menu: string[];
}

const lang_a: Language[] = [
{
code: "uk",
pic: require('../assets/svg/flags/4x3/uk.svg').default,
    name: "Ukrainian",
    menu: ['Вакансії', 'Для Бізнесу', 'Відправити Резюме']
  },
  {
    code: "en",
    pic: require('../assets/svg/flags/4x3/gb.svg').default,
    name: "English",
    menu: ['Vacancies', 'For Business', 'Submit Resume']
  },
  {
    code: "fr",
    pic: require('../assets/svg/flags/4x3/fr.svg').default,
    name: "French",
    menu: ['Offres d\'emploi', 'Pour les entreprises', 'Soumettre un CV']
  },
  {
    code: "de",
    pic: require('../assets/svg/flags/4x3/de.svg').default,
    name: "German",
    menu: ['Stellenangebote', 'Für Unternehmen', 'Lebenslauf einreichen']
  },
  {
    code: "it",
    pic: require('../assets/svg/flags/4x3/it.svg').default,
    name: "Italian",
    menu: ['Offerte di lavoro', 'Per le aziende', 'Invia il curriculum']
  },
  {
    code: "es",
    pic: require('../assets/svg/flags/4x3/es.svg').default,
    name: "Spanish",
    menu: ['Ofertas de empleo', 'Para Empresas', 'Enviar Currículum']
  },
  {
    code: "tr",
    pic: require('../assets/svg/flags/4x3/tr.svg').default,
    name: "Turkish",
    menu: ['İş İlanları', 'İşverenler için', 'Özgeçmiş Gönder']
  },
  {
    code: "az",
    pic: require('../assets/svg/flags/4x3/az.svg').default,
    name: "Azerbaijani",
    menu: ['Vakansiyalar', 'Biznes üçün', 'Özgeçmiş göndər']
  },
  {
    code: "bg",
    pic: require('../assets/svg/flags/4x3/bg.svg').default,
    name: "Bulgarian",
    menu: ['Обяви за работа', 'За бизнеса', 'Изпрати резюме']
  },
  {
    code: "hr",
    pic: require('../assets/svg/flags/4x3/hr.svg').default,
    name: "Croatian",
    menu: ['Poslovi', 'Za poslodavce', 'Pošaljite životopis']
  },
  {
    code: "fi",
    pic: require('../assets/svg/flags/4x3/fi.svg').default,
    name: "Finnish",
    menu: ['Työpaikat', 'Yrityksille', 'Lähetä ansioluettelo']
  },
  {
    code: "hu",
    pic: require('../assets/svg/flags/4x3/hu.svg').default,
    name: "Hungarian",
    menu: ['Állásajánlatok', 'Vállalatoknak', 'Önéletrajz beküldése']
  },
  {
    code: "is",
    pic: require('../assets/svg/flags/4x3/is.svg').default,
    name: "Icelandic",
    menu: ['Staða', 'Fyrir Fyrirtæki', 'Senda ferilskrá']
  },
  {
    code: "lv",
    pic: require('../assets/svg/flags/4x3/lv.svg').default,
    name: "Latvian",
    menu: ['Vakances', 'Uzņēmumiem', 'Iesūtīt dzīves aprakstu']
  },
  {
    code: "lt",
    pic: require('../assets/svg/flags/4x3/lt.svg').default,
    name: "Lithuanian",
    menu: ['Darbo skelbimai', 'Įmonėms', 'Pateikti CV']
  },
  {
    code: "mt",
    pic: require('../assets/svg/flags/4x3/mt.svg').default,
    name: "Maltese",
    menu: ['Vaganzi', 'Għal In-N