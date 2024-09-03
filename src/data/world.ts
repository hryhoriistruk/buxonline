import { ReactNode } from "react";

interface Country {
  code: string;
  pic: string;
  name: string;
}

const world: Country[] = [
  {
    code: "ua",
    pic: require("../assets/svg/flags/4x3/ua.svg").default,
    name: "Ukraine",
  },
  {
    code: "us",
    pic: require("../assets/svg/flags/4x3/us.svg").default,
    name: "United States of America",
  },
  {
    code: "fr",
    pic: require("../assets/svg/flags/4x3/fr.svg").default,
    name: "France",
  },
  {
    code: "it",
    pic: require("../assets/svg/flags/4x3/it.svg").default,
    name: "Italy",
  },
  {
    code: "af",
    pic: require("../assets/svg/flags/4x3/af.svg").default,
    name: "Afghanistan",
  },
  {
    code: "ax",
    pic: require("../assets/svg/flags/4x3/ax.svg").default,
    name: "Aland Islands",
  },
  {
    code: "al",
    pic: require("../assets/svg/flags/4x3/al.svg").default,
    name: "Albania",
  },
  {
    code: "dz",
    pic: require("../assets/svg/flags/4x3/dz.svg").default,
    name: "Algeria",
  },
  {
    code: "as",
    pic: require("../assets/svg/flags/4x3/as.svg").default,
    name: "American Samoa",
  },
  {
    code: "ad",
    pic: require("../assets/svg/flags/4x3/ad.svg").default,
    name: "Andorra",
  },
  {
    code: "ao",
    pic: require("../assets/svg/flags/4x3/ao.svg").default,
    name: "Angola",
  },
  {
    code: "ai",
    pic: require("../assets/svg/flags/4x3/ai.svg").default,
    name: "Anguilla",
  },
  {
    code: "aq",
    pic: require("../assets/svg/flags/4x3/aq.svg").default,
    name: "Antarctica",
  },
  {
    code: "ag",
    pic: require("../assets/svg/flags/4x3/ag.svg").default,
    name: "Antigua and Barbuda",
  },
  {
    code: "ar",
    pic: require("../assets/svg/flags/4x3/ar.svg").default,
    name: "Argentina",
  },
  {
    code: "am",
    pic: require("../assets/svg/flags/4x3/am.svg").default,
    name: "Armenia",
  },
  {
    code: "aw",
    pic: require("../assets/svg/flags/4x3/aw.svg").default,
    name: "Aruba",
  },
  {
    code: "ac",
    pic: require("../assets/svg/flags/4x3/ac.svg").default,
    name: "Ascension Island",
  },
  {
    code: "au",
    pic: require("../assets/svg/flags/4x3/au.svg").default,
    name: "Australia",
  },
  {
    code: "at",
    pic: require("../assets/svg/flags/4x3/at.svg").default,
    name: "Austria",
  },
  {
    code: "az",
    pic: require("../assets/svg/flags/4x3/az.svg").default,
    name: "Azerbaijan",
  },
  {
    code: "bs",
    pic: require("../assets/svg/flags/4x3/bs.svg").default,
    name: "Bahamas",
  },
  {
    code: "bh",
    pic: require("../assets/svg/flags/4x3/bh.svg").default,
    name: "Bahrain",
  },
  {
    code: "bd",
    pic: require("../assets/svg/flags/4x3/bd.svg").default,
    name: "Bangladesh",
  },
  {
    code: "bb",
    pic: require("../assets/svg/flags/4x3/bb.svg").default,
    name: "Barbados",
  },
  {
    code: "be",
    pic: require("../assets/svg/flags/4x3/be.svg").default,
    name: "Belgium",
  },
  {
    code: "bz",
    pic: require("../assets/svg/flags/4x3/bz.svg").default,
    name: "Belize",
  },
  {
    code: "bj",
    pic: require("../assets/svg/flags/4x3/bj.svg").default,
    name: "Benin",
  },
  {
    code: "bm",
    pic: require("../assets/svg/flags/4x3/bm.svg").default,
    name: "Bermuda",
  },
  {
    code: "bt",
    pic: require("../assets/svg/flags/4x3/bt.svg").default,
    name: "Bhutan",
  },
  {
    code: "bo",
    pic: require("../assets/svg/flags/4x3/bo.svg").default,
    name: "Bolivia",
  },
  {
    code: "bq",
    pic: require("../assets/svg/flags/4x3/bq.svg").default,
    name: "Bonaire, Sint Eustatius and Saba",
  },
  {
    code: "ba",
    pic: require("../assets/svg/flags/4x3/ba.svg").default,
    name: "Bosnia and Herzegovina",
  },
  {
    code: "bw",
    pic: require("../assets/svg/flags/4x3/bw.svg").default,
    name: "Botswana",
  },
  {
    code: "bv",
    pic: require("../assets/svg/flags/4x3/bv.svg").default,
    name: "Bouvet Island",
  },
  {
    code: "br",
    pic: require("../assets/svg/flags/4x3/br.svg").default,
    name: "Brazil",
  },
  {
    code: "io",
    pic: require("../assets/svg/flags/4x3/io.svg").default,
    name: "British Indian Ocean Territory",
  },
  {
    code: "bn",
    pic: require("../assets/svg/flags/4x3/bn.svg").default,
    name: "Brunei Darussalam",
  },
  {
    code: "bg",
    pic: require("../assets/svg/flags/4x3/bg.svg").default,
    name: "Bulgaria",
  },
  {
    code: "bf",
    pic: require("../assets/svg/flags/4x3/bf.svg").default,
    name: "Burkina Faso",
  },
  {
    code: "bi",
    pic: require("../assets/svg/flags/4x3/bi.svg").default,
    name: "Burundi",
  },
  {
    code: "cv",
    pic: require("../assets/svg/flags/4x3/cv.svg").default,
    name: "Cabo Verde",
  },
  {
    code: "kh",
    pic: require("../assets/svg/flags/4x3/kh.svg").default,
    name: "Cambodia",
  },
  {
    code: "cm",
    pic: require("../assets/svg/flags/4x3/cm.svg").default,
    name: "Cameroon",
  },
  {
    code: "ca",
    pic: require("../assets/svg/flags/4x3/ca.svg").default,
    name: "Canada",
  },
  {
    code: "ic",
    pic: require("../assets/svg/flags/4x3/ic.svg").default,
    name: "Canary Islands",
  },
  {
    code: "es-ct",
    pic: require("../assets/svg/flags/4x3/es-ct.svg").default,
    name: "Catalonia",
  },
  {
    code: "es-pv",
    pic: require("../assets/svg/flags/4x3/es-pv.svg").default,
    name: "Basque Country",
  },
  {
    code: "ky",
    pic: require("../assets/svg/flags/4x3/ky.svg").default,
    name: "Cayman Islands",
  },
  {
    code: "cf",
    pic: require("../assets/svg/flags/4x3/cf.svg").default,
    name: "Central African Republic",
  },
  {
    code: "cefta",
    pic: require("../assets/svg/flags/4x3/cefta.svg").default,
    name: "Central European Free Trade Agreement",
  },
  {
    code: "ea",
    pic: require("../assets/svg/flags/4x3/ea.svg").default,
    name: "Ceuta & Melilla",
  },
  {
    code: "td",
    pic: require("../assets/svg/flags/4x3/td.svg").default,
    name: "Chad",
  },
  {
    code: "cl",
    pic: require("../assets/svg/flags/4x3/cl.svg").default,
    name: "Chile",
  },
  {
    code: "cx",
    pic: require("../assets/svg/flags/4x3/cx.svg").default,
    name: "Christmas Island",
  },
  {
    code: "cc",
    pic: require("../assets/svg/flags/4x3/cc.svg").default,
    name: "Cocos (Keeling) Islands",
  },
  {
    code: "co",
    pic: require("../assets/svg/flags/4x3/co.svg").default,
    name: "Colombia",
  },
  {
    code: "km",
    pic: require("../assets/svg/flags/4x3/km.svg").default,
    name: "Comoros",
  },
  {
    code: "cd",
    pic: require("../assets/svg/flags/4x3/cd.svg").default,
    name: "Congo (Democratic Republic of the)",
  },
  {
    code: "cg",
    pic: require("../assets/svg/flags/4x3/cg.svg").default,
    name: "Congo",
  },
  {
    code: "eu",
    pic: require("../assets/svg/flags/4x3/eu.svg").default,
    name: "European Union",
  },
  {
    code: "ck",
    pic: require("../assets/svg/flags/4x3/ck.svg").default,
    name: "Cook Islands",
  },
  {
    code: "cr",
    pic: require("../assets/svg/flags/4x3/cr.svg").default,
    name: "Costa Rica",
  },
  {
    code: "hr",
    pic: require("../assets/svg/flags/4x3/hr.svg").default,
    name: "Croatia",
  },
  {
    code: "cu",
    pic: require("../assets/svg/flags/4x3/cu.svg").default,
    name: "Cuba",
  },
  {
    code: "cw",
    pic: require("../assets/svg/flags/4x3/cw.svg").default,
    name: "Curaçao",
  },
  {
    code: "cy",
    pic: require("../assets/svg/flags/4x3/cy.svg").default,
    name: "Cyprus",
  },
  {
    code: "cz",
    pic: require("../assets/svg/flags/4x3/cz.svg").default,
    name: "Czech Republic",
  },
  {
    code: "dk",
    pic: require("../assets/svg/flags/4x3/dk.svg").default,
    name: "Denmark",
  },
  {
    code: "dg",
    pic: require("../assets/svg/flags/4x3/dg.svg").default,
    name: "Diego Garcia",
  },
  {
    code: "dj",
    pic: require("../assets/svg/flags/4x3/dj.svg").default,
    name: "Djibouti",
  },
  {
    code: "dm",
    pic: require("../assets/svg/flags/4x3/dm.svg").default,
    name: "Dominica",
  },
  {
    code: "do",
    pic: require("../assets/svg/flags/4x3/do.svg").default,
    name: "Dominican Republic",
  },
  {
    code: "ec",
    pic: require("../assets/svg/flags/4x3/ec.svg").default,
    name: "Ecuador",
  },
  {
    code: "eg",
    pic: require("../assets/svg/flags/4x3/eg.svg").default,
    name: "Egypt",
  },
  {
    code: "sv",
    pic: require("../assets/svg/flags/4x3/sv.svg").default,
    name: "El Salvador",
  },
  {
    code: "gq",
    pic: require("../assets/svg/flags/4x3/gq.svg").default,
    name: "Equatorial Guinea",
  },
  {
    code: "er",
    pic: require("../assets/svg/flags/4x3/er.svg").default,
    name: "Eritrea",
  },
  {
    code: "ee",
    pic: require("../assets/svg/flags/4x3/ee.svg").default,
    name: "Estonia",
  },
  {
    code: "et",
    pic: require("../assets/svg/flags/4x3/et.svg").default,
    name: "Ethiopia",
  },
  {
    code: "fk",
    pic: require("../assets/svg/flags/4x3/fk.svg").default,
    name: "Falkland Islands",
  },
  {
    code: "fo",
    pic: require("../assets/svg/flags/4x3/fo.svg").default,
    name: "Faroe Islands",
  },
  {
    code: "fj",
    pic: require("../assets/svg/flags/4x3/fj.svg").default,
    name: "Fiji",
  },
  {
    code: "fi",
    pic: require("../assets/svg/flags/4x3/fi.svg").default,
    name: "Finland",
  },
  {
    code: "fr",
    pic: require("../assets/svg/flags/4x3/fr.svg").default,
    name: "France",
  },
  {
    code: "gf",
    pic: require("../assets/svg/flags/4x3/gf.svg").default,
    name: "French Guiana",
  },
  {
    code: "pf",
    pic: require("../assets/svg/flags/4x3/pf.svg").default,
    name: "French Polynesia",
  },
  {
    code: "tf",
    pic: require("../assets/svg/flags/4x3/tf.svg").default,
    name: "French Southern Territories",
  },
  {
    code: "ga",
    pic: require("../assets/svg/flags/4x3/ga.svg").default,
    name: "Gabon",
  },
  {
    code: "gm",
    pic: require("../assets/svg/flags/4x3/gm.svg").default,
    name: "Gambia",
  },
  {
    code: "ge",
    pic: require("../assets/svg/flags/4x3/ge.svg").default,
    name: "Georgia",
  },
  {
    code: "de",
    pic: require("../assets/svg/flags/4x3/de.svg").default,
    name: "Germany",
  },
  {
    code: "gh",
    pic: require("../assets/svg/flags/4x3/gh.svg").default,
    name: "Ghana",
  },
  {
    code: "gi",
    pic: require("../assets/svg/flags/4x3/gi.svg").default,
    name: "Gibraltar",
  },
  {
    code: "gr",
    pic: require("../assets/svg/flags/4x3/gr.svg").default,
    name: "Greece",
  },
  {
    code: "gl",
    pic: require("../assets/svg/flags/4x3/gl.svg").default,
    name: "Greenland",
  },
  {
    code: "gd",
    pic: require("../assets/svg/flags/4x3/gd.svg").default,
    name: "Grenada",
  },
  {
    code: "gp",
    pic: require("../assets/svg/flags/4x3/gp.svg").default,
    name: "Guadeloupe",
  },
  {
    code: "gu",
    pic: require("../assets/svg/flags/4x3/gu.svg").default,
    name: "Guam",
  },
  {
    code: "gt",
    pic: require("../assets/svg/flags/4x3/gt.svg").default,
    name: "Guatemala",
  },
  {
    code: "gg",
    pic: require("../assets/svg/flags/4x3/gg.svg").default,
    name: "Guernsey",
  },
  {
    code: "gn",
    pic: require("../assets/svg/flags/4x3/gn.svg").default,
    name: "Guinea",
  },
  {
    code: "gw",
    pic: require("../assets/svg/flags/4x3/gw.svg").default,
    name: "Guinea-Bissau",
  },
  {
    code: "gy",
    pic: require("../assets/svg/flags/4x3/gy.svg").default,
    name: "Guyana",
  },
  {
    code: "ht",
    pic: require("../assets/svg/flags/4x3/ht.svg").default,
    name: "Haiti",
  },
  {
    code: "hm",
    pic: require("../assets/svg/flags/4x3/hm.svg").default,
    name: "Heard Island and McDonald Islands",
  },
  {
    code: "hn",
    pic: require("../assets/svg/flags/4x3/hn.svg").default,
    name: "Honduras",
  },
  {
    code: "hk",
    pic: require("../assets/svg/flags/4x3/hk.svg").default,
    name: "Hong Kong",
  },
  {
    code: "hu",
    pic: require("../assets/svg/flags/4x3/hu.svg").default,
    name: "Hungary",
  },
  {
    code: "is",
    pic: require("../assets/svg/flags/4x3/is.svg").default,
    name: "Iceland",
  },
  {
    code: "in",
    pic: require("../assets/svg/flags/4x3/in.svg").default,
    name: "India",
  },
  {
    code: "id",
    pic: require("../assets/svg/flags/4x3/id.svg").default,
    name: "Indonesia",
  },
  {
    code: "ir",
    pic: require("../assets/svg/flags/4x3/ir.svg").default,
    name: "Iran",
  },
  {
    code: "iq",
    pic: require("../assets/svg/flags/4x3/iq.svg").default,
    name: "Iraq",
  },
  {
    code: "ie",
    pic: require("../assets/svg/flags/4x3/ie.svg").default,
    name: "Ireland",
  },
  {
    code: "im",
    pic: require("../assets/svg/flags/4x3/im.svg").default,
    name: "Isle of Man",
  },
  {
    code: "il",
    pic: require("../assets/svg/flags/4x3/il.svg").default,
    name: "Israel",
  },
  {
    code: "it",
    pic: require("../assets/svg/flags/4x3/it.svg").default,
    name: "Italy",
  },
  {
    code: "ci",
    pic: require("../assets/svg/flags/4x3/ci.svg").default,
    name: "Côte d'Ivoire",
  },
  {
    code: "jm",
    pic: require("../assets/svg/flags/4x3/jm.svg").default,
    name: "Jamaica",
  },
  {
    code: "jp",
    pic: require("../assets/svg/flags/4x3/jp.svg").default,
    name: "Japan",
  },
  {
    code: "je",
    pic: require("../assets/svg/flags/4x3/je.svg").default,
    name: "Jersey",
  },
  {
    code: "jo",
    pic: require("../assets/svg/flags/4x3/jo.svg").default,
    name: "Jordan",
  },
  {
    code: "kz",
    pic: require("../assets/svg/flags/4x3/kz.svg").default,
    name: "Kazakhstan",
  },
  {
    code: "ke",
    pic: require("../assets/svg/flags/4x3/ke.svg").default,
    name: "Kenya",
  },
  {
    code: "ki",
    pic: require("../assets/svg/flags/4x3/ki.svg").default,
    name: "Kiribati",
  },
  {
    code: "xk",
    pic: require("../assets/svg/flags/4x3/xk.svg").default,
    name: "Kosovo",
  },
  {
    code: "kw",
    pic: require("../assets/svg/flags/4x3/kw.svg").default,
    name: "Kuwait",
  },
  {
    code: "kg",
    pic: require("../assets/svg/flags/4x3/kg.svg").default,
    name: "Kyrgyzstan",
  },
  {
    code: "la",
    pic: require("../assets/svg/flags/4x3/la.svg").default,
    name: "Lao People's Democratic Republic",
  },
  {
    code: "lv",
    pic: require("../assets/svg/flags/4x3/lv.svg").default,
    name: "Latvia",
  },
  {
    code: "lb",
    pic: require("../assets/svg/flags/4x3/lb.svg").default,
    name: "Lebanon",
  },
  {
    code: "ls",
    pic: require("../assets/svg/flags/4x3/ls.svg").default,
    name: "Lesotho",
  },
  {
    code: "lr",
    pic: require("../assets/svg/flags/4x3/lr.svg").default,
    name: "Liberia",
  },
  {
    code: "ly",
    pic: require("../assets/svg/flags/4x3/ly.svg").default,
    name: "Libya",
  },
  {
    code: "li",
    pic: require("../assets/svg/flags/4x3/li.svg").default,
    name: "Liechtenstein",
  },
  {
    code: "lt",
    pic: require("../assets/svg/flags/4x3/lt.svg").default,
    name: "Lithuania",
  },
  {
    code: "lu",
    pic: require("../assets/svg/flags/4x3/lu.svg").default,
    name: "Luxembourg",
  },
  {
    code: "mo",
    pic: require("../assets/svg/flags/4x3/mo.svg").default,
    name: "Macao",
  },
  {
    code: "mg",
    pic: require("../assets/svg/flags/4x3/mg.svg").default,
    name: "Madagascar",
  },
  {
    code: "mw",
    pic: require("../assets/svg/flags/4x3/mw.svg").default,
    name: "Malawi",
  },
  {
    code: "my",
    pic: require("../assets/svg/flags/4x3/my.svg").default,
    name: "Malaysia",
  },
  {
    code: "mv",
    pic: require("../assets/svg/flags/4x3/mv.svg").default,
    name: "Maldives",
  },
  {
    code: "ml",
    pic: require("../assets/svg/flags/4x3/ml.svg").default,
    name: "Mali",
  },
  {
    code: "mt",
    pic: require("../assets/svg/flags/4x3/mt.svg").default,
    name: "Malta",
  },
  {
    code: "mh",
    pic: require("../assets/svg/flags/4x3/mh.svg").default,
    name: "Marshall Islands",
  },
  {
    code: "mq",
    pic: require("../assets/svg/flags/4x3/mq.svg").default,
    name: "Martinique",
  },
  {
    code: "mr",
    pic: require("../assets/svg/flags/4x3/mr.svg").default,
    name: "Mauritania",
  },
  {
    code: "mu",
    pic: require("../assets/svg/flags/4x3/mu.svg").default,
    name: "Mauritius",
  },
  {
    code: "yt",
    pic: require("../assets/svg/flags/4x3/yt.svg").default,
    name: "Mayotte",
  },
  {
    code: "mx",
    pic: require("../assets/svg/flags/4x3/mx.svg").default,
    name: "Mexico",
  },
  {
    code: "fm",
    pic: require("../assets/svg/flags/4x3/fm.svg").default,
    name: "Micronesia (Federated States of)",
  },
  {
    code: "md",
    pic: require("../assets/svg/flags/4x3/md.svg").default,
    name: "Moldova (Republic of)",
  },
  {
    code: "mc",
    pic: require("../assets/svg/flags/4x3/mc.svg").default,
    name: "Monaco",
  },
  {
    code: "mn",
    pic: require("../assets/svg/flags/4x3/mn.svg").default,
    name: "Mongolia",
  },
  {
    code: "me",
    pic: require("../assets/svg/flags/4x3/me.svg").default,
    name: "Montenegro",
  },
  {
    code: "ms",
    pic: require("../assets/svg/flags/4x3/ms.svg").default,
    name: "Montserrat",
  },
  {
    code: "ma",
    pic: require("../assets/svg/flags/4x3/ma.svg").default,
    name: "Morocco",
  },
  {
    code: "mz",
    pic: require("../assets/svg/flags/4x3/mz.svg").default,
    name: "Mozambique",
  },
  {
    code: "mm",
    pic: require("../assets/svg/flags/4x3/mm.svg").default,
    name: "Myanmar",
  },
  {
    code: "na",
    pic: require("../assets/svg/flags/4x3/na.svg").default,
    name: "Namibia",
  },
  {
    code: "nr",
    pic: require("../assets/svg/flags/4x3/nr.svg").default,
    name: "Nauru",
  },
  {
    code: "np",
    pic: require("../assets/svg/flags/4x3/np.svg").default,
    name: "Nepal",
  },
  {
    code: "nl",
    pic: require("../assets/svg/flags/4x3/nl.svg").default,
    name: "Netherlands",
  },
  {
    code: "nc",
    pic: require("../assets/svg/flags/4x3/nc.svg").default,
    name: "New Caledonia",
  },
  {
    code: "nz",
    pic: require("../assets/svg/flags/4x3/nz.svg").default,
    name: "New Zealand",
  },
  {
    code: "ni",
    pic: require("../assets/svg/flags/4x3/ni.svg").default,
    name: "Nicaragua",
  },
  {
    code: "ne",
    pic: require("../assets/svg/flags/4x3/ne.svg").default,
    name: "Niger",
  },
  {
    code: "ng",
    pic: require("../assets/svg/flags/4x3/ng.svg").default,
    name: "Nigeria",
  },
  {
    code: "nu",
    pic: require("../assets/svg/flags/4x3/nu.svg").default,
    name: "Niue",
  },
  {
    code: "nf",
    pic: require("../assets/svg/flags/4x3/nf.svg").default,
    name: "Norfolk Island",
  },
  {
    code: "kp",
    pic: require("../assets/svg/flags/4x3/kp.svg").default,
    name: "North Korea",
  },
  {
    code: "mk",
    pic: require("../assets/svg/flags/4x3/mk.svg").default,
    name: "North Macedonia",
  },
  {
    code: "mp",
    pic: require("../assets/svg/flags/4x3/mp.svg").default,
    name: "Northern Mariana Islands",
  },
  {
    code: "no",
    pic: require("../assets/svg/flags/4x3/no.svg").default,
    name: "Norway",
  },
  {
    code: "om",
    pic: require("../assets/svg/flags/4x3/om.svg").default,
    name: "Oman",
  },
  {
    code: "pk",
    pic: require("../assets/svg/flags/4x3/pk.svg").default,
    name: "Pakistan",
  },
  {
    code: "pw",
    pic: require("../assets/svg/flags/4x3/pw.svg").default,
    name: "Palau",
  },
  {
    code: "ps",
    pic: require("../assets/svg/flags/4x3/ps.svg").default,
    name: "Palestine, State of",
  },
  {
    code: "pa",
    pic: require("../assets/svg/flags/4x3/pa.svg").default,
    name: "Panama",
  },
  {
    code: "pg",
    pic: require("../assets/svg/flags/4x3/pg.svg").default,
    name: "Papua New Guinea",
  },
  {
    code: "py",
    pic: require("../assets/svg/flags/4x3/py.svg").default,
    name: "Paraguay",
  },
  {
    code: "pe",
    pic: require("../assets/svg/flags/4x3/pe.svg").default,
    name: "Peru",
  },
  {
    code: "ph",
    pic: require("../assets/svg/flags/4x3/ph.svg").default,
    name: "Philippines",
  },
  {
    code: "pn",
    pic: require("../assets/svg/flags/4x3/pn.svg").default,
    name: "Pitcairn",
  },
  {
    code: "pl",
    pic: require("../assets/svg/flags/4x3/pl.svg").default,
    name: "Poland",
  },
  {
    code: "pt",
    pic: require("../assets/svg/flags/4x3/pt.svg").default,
    name: "Portugal",
  },
  {
    code: "pr",
    pic: require("../assets/svg/flags/4x3/pr.svg").default,
    name: "Puerto Rico",
  },
  {
    code: "qa",
    pic: require("../assets/svg/flags/4x3/qa.svg").default,
    name: "Qatar",
  },
  {
    code: "re",
    pic: require("../assets/svg/flags/4x3/re.svg").default,
    name: "Réunion",
  },
  {
    code: "ro",
    pic: require("../assets/svg/flags/4x3/ro.svg").default,
    name: "Romania",
  },
  {
    code: "ru",
    pic: require("../assets/svg/flags/4x3/ru.svg").default,
    name: "Russian Federation",
  },
  {
    code: "rw",
    pic: require("../assets/svg/flags/4x3/rw.svg").default,
    name: "Rwanda",
  },
  {
    code: "sh",
    pic: require("../assets/svg/flags/4x3/sh.svg").default,
    name: "Saint Helena, Ascension and Tristan da Cunha",
  },
  {
    code: "kn",
    pic: require("../assets/svg/flags/4x3/kn.svg").default,
    name: "Saint Kitts and Nevis",
  },
  {
    code: "lc",
    pic: require("../assets/svg/flags/4x3/lc.svg").default,
    name: "Saint Lucia",
  },
  {
    code: "mf",
    pic: require("../assets/svg/flags/4x3/mf.svg").default,
    name: "Saint Martin (French part)",
  },
  {
    code: "pm",
    pic: require("../assets/svg/flags/4x3/pm.svg").default,
    name: "Saint Pierre and Miquelon",
  },
  {
    code: "vc",
    pic: require("../assets/svg/flags/4x3/vc.svg").default,
    name: "Saint Vincent and the Grenadines",
  },
  {
    code: "ws",
    pic: require("../assets/svg/flags/4x3/ws.svg").default,
    name: "Samoa",
  },
  {
    code: "sm",
    pic: require("../assets/svg/flags/4x3/sm.svg").default,
    name: "San Marino",
  },
  {
    code: "st",
    pic: require("../assets/svg/flags/4x3/st.svg").default,
    name: "Sao Tome and Principe",
  },
  {
    code: "sa",
    pic: require("../assets/svg/flags/4x3/sa.svg").default,
    name: "Saudi Arabia",
  },
  {
    code: "sn",
    pic: require("../assets/svg/flags/4x3/sn.svg").default,
    name: "Senegal",
  },
  {
    code: "rs",
    pic: require("../assets/svg/flags/4x3/rs.svg").default,
    name: "Serbia",
  },
  {
    code: "sc",
    pic: require("../assets/svg/flags/4x3/sc.svg").default,
    name: "Seychelles",
  },
  {
    code: "sl",
    pic: require("../assets/svg/flags/4x3/sl.svg").default,
    name: "Sierra Leone",
  },
  {
    code: "sg",
    pic: require("../assets/svg/flags/4x3/sg.svg").default,
    name: "Singapore",
  },
  {
    code: "sx",
    pic: require("../assets/svg/flags/4x3/sx.svg").default,
    name: "Sint Maarten (Dutch part)",
  },
  {
    code: "sk",
    pic: require("../assets/svg/flags/4x3/sk.svg").default,
    name: "Slovakia",
  },
  {
    code: "si",
    pic: require("../assets/svg/flags/4x3/si.svg").default,
    name: "Slovenia",
  },
  {
    code: "sb",
    pic: require("../assets/svg/flags/4x3/sb.svg").default,
    name: "Solomon Islands",
  },
  {
    code: "so",
    pic: require("../assets/svg/flags/4x3/so.svg").default,
    name: "Somalia",
  },
  {
    code: "za",
    pic: require("../assets/svg/flags/4x3/za.svg").default,
    name: "South Africa",
  },
  {
    code: "gs",
    pic: require("../assets/svg/flags/4x3/gs.svg").default,
    name: "South Georgia and the South Sandwich Islands",
  },
  {
    code: "ss",
    pic: require("../assets/svg/flags/4x3/ss.svg").default,
    name: "South Sudan",
  },
  {
    code: "es",
    pic: require("../assets/svg/flags/4x3/es.svg").default,
    name: "Spain",
  },
  {
    code: "lk",
    pic: require("../assets/svg/flags/4x3/lk.svg").default,
    name: "Sri Lanka",
  },
  {
    code: "sd",
    pic: require("../assets/svg/flags/4x3/sd.svg").default,
    name: "Sudan",
  },
  {
    code: "sr",
    pic: require("../assets/svg/flags/4x3/sr.svg").default,
    name: "Suriname",
  },
  {
    code: "sj",
    pic: require("../assets/svg/flags/4x3/sj.svg").default,
    name: "Svalbard and Jan Mayen",
  },
  {
    code: "sz",
    pic: require("../assets/svg/flags/4x3/sz.svg").default,
    name: "Swaziland",
  },
  {
    code: "se",
    pic: require("../assets/svg/flags/4x3/se.svg").default,
    name: "Sweden",
  },
  {
    code: "ch",
    pic: require("../assets/svg/flags/4x3/ch.svg").default,
    name: "Switzerland",
  },
  {
    code: "sy",
    pic: require("../assets/svg/flags/4x3/sy.svg").default,
    name: "Syrian Arab Republic",
  },
  {
    code: "tw",
    pic: require("../assets/svg/flags/4x3/tw.svg").default,
    name: "Taiwan",
  },
  {
    code: "tj",
    pic: require("../assets/svg/flags/4x3/tj.svg").default,
    name: "Tajikistan",
  },
  {
    code: "tz",
    pic: require("../assets/svg/flags/4x3/tz.svg").default,
    name: "Tanzania, United Republic of",
  },
  {
    code: "th",
    pic: require("../assets/svg/flags/4x3/th.svg").default,
    name: "Thailand",
  },
  {
    code: "tl",
    pic: require("../assets/svg/flags/4x3/tl.svg").default,
    name: "Timor-Leste",
  },
  {
    code: "tg",
    pic: require("../assets/svg/flags/4x3/tg.svg").default,
    name: "Togo",
  },
  {
    code: "tk",
    pic: require("../assets/svg/flags/4x3/tk.svg").default,
    name: "Tokelau",
  },
  {
    code: "to",
    pic: require("../assets/svg/flags/4x3/to.svg").default,
    name: "Tonga",
  },
  {
    code: "tt",
    pic: require("../assets/svg/flags/4x3/tt.svg").default,
    name: "Trinidad and Tobago",
  },
  {
    code: "tn",
    pic: require("../assets/svg/flags/4x3/tn.svg").default,
    name: "Tunisia",
  },
  {
    code: "tr",
    pic: require("../assets/svg/flags/4x3/tr.svg").default,
    name: "Turkey",
  },
  {
    code: "tm",
    pic: require("../assets/svg/flags/4x3/tm.svg").default,
    name: "Turkmenistan",
  },
  {
    code: "tc",
    pic: require("../assets/svg/flags/4x3/tc.svg").default,
    name: "Turks and Caicos Islands",
  },
  {
    code: "tv",
    pic: require("../assets/svg/flags/4x3/tv.svg").default,
    name: "Tuvalu",
  },
  {
    code: "ug",
    pic: require("../assets/svg/flags/4x3/ug.svg").default,
    name: "Uganda",
  },
  {
    code: "ua",
    pic: require("../assets/svg/flags/4x3/ua.svg").default,
    name: "Ukraine",
  },
  {
    code: "ae",
    pic: require("../assets/svg/flags/4x3/ae.svg").default,
    name: "United Arab Emirates",
  },
  {
    code: "gb",
    pic: require("../assets/svg/flags/4x3/gb.svg").default,
    name: "United Kingdom of Great Britain and Northern Ireland",
  },
  {
    code: "um",
    pic: require("../assets/svg/flags/4x3/um.svg").default,
    name: "United States Minor Outlying Islands",
  },
  {
    code: "us",
    pic: require("../assets/svg/flags/4x3/us.svg").default,
    name: "United States of America",
  },
  {
    code: "uy",
    pic: require("../assets/svg/flags/4x3/uy.svg").default,
    name: "Uruguay",
  },
  {
    code: "uz",
    pic: require("../assets/svg/flags/4x3/uz.svg").default,
    name: "Uzbekistan",
  },
  {
    code: "vu",
    pic: require("../assets/svg/flags/4x3/vu.svg").default,
    name: "Vanuatu",
  },
  {
    code: "ve",
    pic: require("../assets/svg/flags/4x3/ve.svg").default,
    name: "Venezuela (Bolivarian Republic of)",
  },
  {
    code: "vn",
    pic: require("../assets/svg/flags/4x3/vn.svg").default,
    name: "Viet Nam",
  },
  {
    code: "vg",
    pic: require("../assets/svg/flags/4x3/vg.svg").default,
    name: "Virgin Islands (British)",
  },
  {
    code: "vi",
    pic: require("../assets/svg/flags/4x3/vi.svg").default,
    name: "Virgin Islands (U.S.)",
  },
  {
    code: "eh",
    pic: require("../assets/svg/flags/4x3/eh.svg").default,
    name: "Western Sahara",
  },
  {
    code: "ye",
    pic: require("../assets/svg/flags/4x3/ye.svg).default,
    name: "Yemen",
  },
  {
    code: "zm",
    pic: require("../assets/svg/flags/4x3/zm.svg").default,
    name: "Zambia",
  },
  {
    code: "zw",
    pic: require("../assets/svg/flags/4x3/zw.svg").default,
    name: "Zimbabwe",
  },
];

export default flags;
