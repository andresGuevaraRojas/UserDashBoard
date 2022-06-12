const countryCodes = [
    {
      "Country Code": "AF",
      "Country Name": "Afghanistan"
    },
    {
      "Country Code": "AL",
      "Country Name": "Albania"
    },
    {
      "Country Code": "DZ",
      "Country Name": "Algeria"
    },
    {
      "Country Code": "AS",
      "Country Name": "American Samoa"
    },
    {
      "Country Code": "AD",
      "Country Name": "Andorra"
    },
    {
      "Country Code": "AO",
      "Country Name": "Angola"
    },
    {
      "Country Code": "AI",
      "Country Name": "Anguilla"
    },
    {
      "Country Code": "AQ",
      "Country Name": "Antarctica"
    },
    {
      "Country Code": "AG",
      "Country Name": "Antigua and Barbuda"
    },
    {
      "Country Code": "AR",
      "Country Name": "Argentina"
    },
    {
      "Country Code": "AM",
      "Country Name": "Armenia"
    },
    {
      "Country Code": "AW",
      "Country Name": "Aruba"
    },
    {
      "Country Code": "AU",
      "Country Name": "Australia"
    },
    {
      "Country Code": "AT",
      "Country Name": "Austria"
    },
    {
      "Country Code": "AZ",
      "Country Name": "Azerbaijan"
    },
    {
      "Country Code": "BS",
      "Country Name": "Bahamas"
    },
    {
      "Country Code": "BH",
      "Country Name": "Bahrain"
    },
    {
      "Country Code": "BD",
      "Country Name": "Bangladesh"
    },
    {
      "Country Code": "BB",
      "Country Name": "Barbados"
    },
    {
      "Country Code": "BY",
      "Country Name": "Belarus"
    },
    {
      "Country Code": "BE",
      "Country Name": "Belgium"
    },
    {
      "Country Code": "BZ",
      "Country Name": "Belize"
    },
    {
      "Country Code": "BJ",
      "Country Name": "Benin"
    },
    {
      "Country Code": "BM",
      "Country Name": "Bermuda"
    },
    {
      "Country Code": "BT",
      "Country Name": "Bhutan"
    },
    {
      "Country Code": "BO",
      "Country Name": "Bolivia, Plurinational State of"
    },
    {
      "Country Code": "BQ",
      "Country Name": "Bonaire, Sint Eustatius and Saba"
    },
    {
      "Country Code": "BA",
      "Country Name": "Bosnia and Herzegovina"
    },
    {
      "Country Code": "BW",
      "Country Name": "Botswana"
    },
    {
      "Country Code": "BV",
      "Country Name": "Bouvet Island"
    },
    {
      "Country Code": "BR",
      "Country Name": "Brazil"
    },
    {
      "Country Code": "IO",
      "Country Name": "British Indian Ocean Territory"
    },
    {
      "Country Code": "BN",
      "Country Name": "Brunei Darussalam"
    },
    {
      "Country Code": "BG",
      "Country Name": "Bulgaria"
    },
    {
      "Country Code": "BF",
      "Country Name": "Burkina Faso"
    },
    {
      "Country Code": "BI",
      "Country Name": "Burundi"
    },
    {
      "Country Code": "KH",
      "Country Name": "Cambodia"
    },
    {
      "Country Code": "CM",
      "Country Name": "Cameroon"
    },
    {
      "Country Code": "CA",
      "Country Name": "Canada"
    },
    {
      "Country Code": "CV",
      "Country Name": "Cape Verde"
    },
    {
      "Country Code": "KY",
      "Country Name": "Cayman Islands"
    },
    {
      "Country Code": "CF",
      "Country Name": "Central African Republic"
    },
    {
      "Country Code": "TD",
      "Country Name": "Chad"
    },
    {
      "Country Code": "CL",
      "Country Name": "Chile"
    },
    {
      "Country Code": "CN",
      "Country Name": "China"
    },
    {
      "Country Code": "CX",
      "Country Name": "Christmas Island"
    },
    {
      "Country Code": "CC",
      "Country Name": "Cocos (Keeling) Islands"
    },
    {
      "Country Code": "CO",
      "Country Name": "Colombia"
    },
    {
      "Country Code": "KM",
      "Country Name": "Comoros"
    },
    {
      "Country Code": "CG",
      "Country Name": "Congo"
    },
    {
      "Country Code": "CD",
      "Country Name": "Congo, the Democratic Republic of the"
    },
    {
      "Country Code": "CK",
      "Country Name": "Cook Islands"
    },
    {
      "Country Code": "CR",
      "Country Name": "Costa Rica"
    },
    {
      "Country Code": "HR",
      "Country Name": "Croatia"
    },
    {
      "Country Code": "CU",
      "Country Name": "Cuba"
    },
    {
      "Country Code": "CW",
      "Country Name": "Curaçao"
    },
    {
      "Country Code": "CY",
      "Country Name": "Cyprus"
    },
    {
      "Country Code": "CZ",
      "Country Name": "Czech Republic"
    },
    {
      "Country Code": "CI",
      "Country Name": "Côte d'Ivoire"
    },
    {
      "Country Code": "DK",
      "Country Name": "Denmark"
    },
    {
      "Country Code": "DJ",
      "Country Name": "Djibouti"
    },
    {
      "Country Code": "DM",
      "Country Name": "Dominica"
    },
    {
      "Country Code": "DO",
      "Country Name": "Dominican Republic"
    },
    {
      "Country Code": "EC",
      "Country Name": "Ecuador"
    },
    {
      "Country Code": "EG",
      "Country Name": "Egypt"
    },
    {
      "Country Code": "SV",
      "Country Name": "El Salvador"
    },
    {
      "Country Code": "GQ",
      "Country Name": "Equatorial Guinea"
    },
    {
      "Country Code": "ER",
      "Country Name": "Eritrea"
    },
    {
      "Country Code": "EE",
      "Country Name": "Estonia"
    },
    {
      "Country Code": "ET",
      "Country Name": "Ethiopia"
    },
    {
      "Country Code": "FK",
      "Country Name": "Falkland Islands (Malvinas)"
    },
    {
      "Country Code": "FO",
      "Country Name": "Faroe Islands"
    },
    {
      "Country Code": "FJ",
      "Country Name": "Fiji"
    },
    {
      "Country Code": "FI",
      "Country Name": "Finland"
    },
    {
      "Country Code": "FR",
      "Country Name": "France"
    },
    {
      "Country Code": "GF",
      "Country Name": "French Guiana"
    },
    {
      "Country Code": "PF",
      "Country Name": "French Polynesia"
    },
    {
      "Country Code": "TF",
      "Country Name": "French Southern Territories"
    },
    {
      "Country Code": "GA",
      "Country Name": "Gabon"
    },
    {
      "Country Code": "GM",
      "Country Name": "Gambia"
    },
    {
      "Country Code": "GE",
      "Country Name": "Georgia"
    },
    {
      "Country Code": "DE",
      "Country Name": "Germany"
    },
    {
      "Country Code": "GH",
      "Country Name": "Ghana"
    },
    {
      "Country Code": "GI",
      "Country Name": "Gibraltar"
    },
    {
      "Country Code": "GR",
      "Country Name": "Greece"
    },
    {
      "Country Code": "GL",
      "Country Name": "Greenland"
    },
    {
      "Country Code": "GD",
      "Country Name": "Grenada"
    },
    {
      "Country Code": "GP",
      "Country Name": "Guadeloupe"
    },
    {
      "Country Code": "GU",
      "Country Name": "Guam"
    },
    {
      "Country Code": "GT",
      "Country Name": "Guatemala"
    },
    {
      "Country Code": "GG",
      "Country Name": "Guernsey"
    },
    {
      "Country Code": "GN",
      "Country Name": "Guinea"
    },
    {
      "Country Code": "GW",
      "Country Name": "Guinea-Bissau"
    },
    {
      "Country Code": "GY",
      "Country Name": "Guyana"
    },
    {
      "Country Code": "HT",
      "Country Name": "Haiti"
    },
    {
      "Country Code": "HM",
      "Country Name": "Heard Island and McDonald Islands"
    },
    {
      "Country Code": "VA",
      "Country Name": "Holy See (Vatican City State)"
    },
    {
      "Country Code": "HN",
      "Country Name": "Honduras"
    },
    {
      "Country Code": "HK",
      "Country Name": "Hong Kong"
    },
    {
      "Country Code": "HU",
      "Country Name": "Hungary"
    },
    {
      "Country Code": "IS",
      "Country Name": "Iceland"
    },
    {
      "Country Code": "IN",
      "Country Name": "India"
    },
    {
      "Country Code": "ID",
      "Country Name": "Indonesia"
    },
    {
      "Country Code": "IR",
      "Country Name": "Iran, Islamic Republic of"
    },
    {
      "Country Code": "IQ",
      "Country Name": "Iraq"
    },
    {
      "Country Code": "IE",
      "Country Name": "Ireland"
    },
    {
      "Country Code": "IM",
      "Country Name": "Isle of Man"
    },
    {
      "Country Code": "IL",
      "Country Name": "Israel"
    },
    {
      "Country Code": "IT",
      "Country Name": "Italy"
    },
    {
      "Country Code": "JM",
      "Country Name": "Jamaica"
    },
    {
      "Country Code": "JP",
      "Country Name": "Japan"
    },
    {
      "Country Code": "JE",
      "Country Name": "Jersey"
    },
    {
      "Country Code": "JO",
      "Country Name": "Jordan"
    },
    {
      "Country Code": "KZ",
      "Country Name": "Kazakhstan"
    },
    {
      "Country Code": "KE",
      "Country Name": "Kenya"
    },
    {
      "Country Code": "KI",
      "Country Name": "Kiribati"
    },
    {
      "Country Code": "KP",
      "Country Name": "Korea, Democratic People's Republic of"
    },
    {
      "Country Code": "KR",
      "Country Name": "Korea, Republic of"
    },
    {
      "Country Code": "KW",
      "Country Name": "Kuwait"
    },
    {
      "Country Code": "KG",
      "Country Name": "Kyrgyzstan"
    },
    {
      "Country Code": "LA",
      "Country Name": "Lao People's Democratic Republic"
    },
    {
      "Country Code": "LV",
      "Country Name": "Latvia"
    },
    {
      "Country Code": "LB",
      "Country Name": "Lebanon"
    },
    {
      "Country Code": "LS",
      "Country Name": "Lesotho"
    },
    {
      "Country Code": "LR",
      "Country Name": "Liberia"
    },
    {
      "Country Code": "LY",
      "Country Name": "Libya"
    },
    {
      "Country Code": "LI",
      "Country Name": "Liechtenstein"
    },
    {
      "Country Code": "LT",
      "Country Name": "Lithuania"
    },
    {
      "Country Code": "LU",
      "Country Name": "Luxembourg"
    },
    {
      "Country Code": "MO",
      "Country Name": "Macao"
    },
    {
      "Country Code": "MK",
      "Country Name": "Macedonia, the Former Yugoslav Republic of"
    },
    {
      "Country Code": "MG",
      "Country Name": "Madagascar"
    },
    {
      "Country Code": "MW",
      "Country Name": "Malawi"
    },
    {
      "Country Code": "MY",
      "Country Name": "Malaysia"
    },
    {
      "Country Code": "MV",
      "Country Name": "Maldives"
    },
    {
      "Country Code": "ML",
      "Country Name": "Mali"
    },
    {
      "Country Code": "MT",
      "Country Name": "Malta"
    },
    {
      "Country Code": "MH",
      "Country Name": "Marshall Islands"
    },
    {
      "Country Code": "MQ",
      "Country Name": "Martinique"
    },
    {
      "Country Code": "MR",
      "Country Name": "Mauritania"
    },
    {
      "Country Code": "MU",
      "Country Name": "Mauritius"
    },
    {
      "Country Code": "YT",
      "Country Name": "Mayotte"
    },
    {
      "Country Code": "MX",
      "Country Name": "Mexico"
    },
    {
      "Country Code": "FM",
      "Country Name": "Micronesia, Federated States of"
    },
    {
      "Country Code": "MD",
      "Country Name": "Moldova, Republic of"
    },
    {
      "Country Code": "MC",
      "Country Name": "Monaco"
    },
    {
      "Country Code": "MN",
      "Country Name": "Mongolia"
    },
    {
      "Country Code": "ME",
      "Country Name": "Montenegro"
    },
    {
      "Country Code": "MS",
      "Country Name": "Montserrat"
    },
    {
      "Country Code": "MA",
      "Country Name": "Morocco"
    },
    {
      "Country Code": "MZ",
      "Country Name": "Mozambique"
    },
    {
      "Country Code": "MM",
      "Country Name": "Myanmar"
    },
    {
      "Country Code": "NA",
      "Country Name": "Namibia"
    },
    {
      "Country Code": "NR",
      "Country Name": "Nauru"
    },
    {
      "Country Code": "NP",
      "Country Name": "Nepal"
    },
    {
      "Country Code": "NL",
      "Country Name": "Netherlands"
    },
    {
      "Country Code": "NC",
      "Country Name": "New Caledonia"
    },
    {
      "Country Code": "NZ",
      "Country Name": "New Zealand"
    },
    {
      "Country Code": "NI",
      "Country Name": "Nicaragua"
    },
    {
      "Country Code": "NE",
      "Country Name": "Niger"
    },
    {
      "Country Code": "NG",
      "Country Name": "Nigeria"
    },
    {
      "Country Code": "NU",
      "Country Name": "Niue"
    },
    {
      "Country Code": "NF",
      "Country Name": "Norfolk Island"
    },
    {
      "Country Code": "MP",
      "Country Name": "Northern Mariana Islands"
    },
    {
      "Country Code": "NO",
      "Country Name": "Norway"
    },
    {
      "Country Code": "OM",
      "Country Name": "Oman"
    },
    {
      "Country Code": "PK",
      "Country Name": "Pakistan"
    },
    {
      "Country Code": "PW",
      "Country Name": "Palau"
    },
    {
      "Country Code": "PS",
      "Country Name": "Palestine, State of"
    },
    {
      "Country Code": "PA",
      "Country Name": "Panama"
    },
    {
      "Country Code": "PG",
      "Country Name": "Papua New Guinea"
    },
    {
      "Country Code": "PY",
      "Country Name": "Paraguay"
    },
    {
      "Country Code": "PE",
      "Country Name": "Peru"
    },
    {
      "Country Code": "PH",
      "Country Name": "Philippines"
    },
    {
      "Country Code": "PN",
      "Country Name": "Pitcairn"
    },
    {
      "Country Code": "PL",
      "Country Name": "Poland"
    },
    {
      "Country Code": "PT",
      "Country Name": "Portugal"
    },
    {
      "Country Code": "PR",
      "Country Name": "Puerto Rico"
    },
    {
      "Country Code": "QA",
      "Country Name": "Qatar"
    },
    {
      "Country Code": "RO",
      "Country Name": "Romania"
    },
    {
      "Country Code": "RU",
      "Country Name": "Russian Federation"
    },
    {
      "Country Code": "RW",
      "Country Name": "Rwanda"
    },
    {
      "Country Code": "RE",
      "Country Name": "Réunion"
    },
    {
      "Country Code": "BL",
      "Country Name": "Saint Barthélemy"
    },
    {
      "Country Code": "SH",
      "Country Name": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
      "Country Code": "KN",
      "Country Name": "Saint Kitts and Nevis"
    },
    {
      "Country Code": "LC",
      "Country Name": "Saint Lucia"
    },
    {
      "Country Code": "MF",
      "Country Name": "Saint Martin (French part)"
    },
    {
      "Country Code": "PM",
      "Country Name": "Saint Pierre and Miquelon"
    },
    {
      "Country Code": "VC",
      "Country Name": "Saint Vincent and the Grenadines"
    },
    {
      "Country Code": "WS",
      "Country Name": "Samoa"
    },
    {
      "Country Code": "SM",
      "Country Name": "San Marino"
    },
    {
      "Country Code": "ST",
      "Country Name": "Sao Tome and Principe"
    },
    {
      "Country Code": "SA",
      "Country Name": "Saudi Arabia"
    },
    {
      "Country Code": "SN",
      "Country Name": "Senegal"
    },
    {
      "Country Code": "RS",
      "Country Name": "Serbia"
    },
    {
      "Country Code": "SC",
      "Country Name": "Seychelles"
    },
    {
      "Country Code": "SL",
      "Country Name": "Sierra Leone"
    },
    {
      "Country Code": "SG",
      "Country Name": "Singapore"
    },
    {
      "Country Code": "SX",
      "Country Name": "Sint Maarten (Dutch part)"
    },
    {
      "Country Code": "SK",
      "Country Name": "Slovakia"
    },
    {
      "Country Code": "SI",
      "Country Name": "Slovenia"
    },
    {
      "Country Code": "SB",
      "Country Name": "Solomon Islands"
    },
    {
      "Country Code": "SO",
      "Country Name": "Somalia"
    },
    {
      "Country Code": "ZA",
      "Country Name": "South Africa"
    },
    {
      "Country Code": "GS",
      "Country Name": "South Georgia and the South Sandwich Islands"
    },
    {
      "Country Code": "SS",
      "Country Name": "South Sudan"
    },
    {
      "Country Code": "ES",
      "Country Name": "Spain"
    },
    {
      "Country Code": "LK",
      "Country Name": "Sri Lanka"
    },
    {
      "Country Code": "SD",
      "Country Name": "Sudan"
    },
    {
      "Country Code": "SR",
      "Country Name": "Suriname"
    },
    {
      "Country Code": "SJ",
      "Country Name": "Svalbard and Jan Mayen"
    },
    {
      "Country Code": "SZ",
      "Country Name": "Swaziland"
    },
    {
      "Country Code": "SE",
      "Country Name": "Sweden"
    },
    {
      "Country Code": "CH",
      "Country Name": "Switzerland"
    },
    {
      "Country Code": "SY",
      "Country Name": "Syrian Arab Republic"
    },
    {
      "Country Code": "TW",
      "Country Name": "Taiwan, Province of China"
    },
    {
      "Country Code": "TJ",
      "Country Name": "Tajikistan"
    },
    {
      "Country Code": "TZ",
      "Country Name": "Tanzania, United Republic of"
    },
    {
      "Country Code": "TH",
      "Country Name": "Thailand"
    },
    {
      "Country Code": "TL",
      "Country Name": "Timor-Leste"
    },
    {
      "Country Code": "TG",
      "Country Name": "Togo"
    },
    {
      "Country Code": "TK",
      "Country Name": "Tokelau"
    },
    {
      "Country Code": "TO",
      "Country Name": "Tonga"
    },
    {
      "Country Code": "TT",
      "Country Name": "Trinidad and Tobago"
    },
    {
      "Country Code": "TN",
      "Country Name": "Tunisia"
    },
    {
      "Country Code": "TR",
      "Country Name": "Turkey"
    },
    {
      "Country Code": "TM",
      "Country Name": "Turkmenistan"
    },
    {
      "Country Code": "TC",
      "Country Name": "Turks and Caicos Islands"
    },
    {
      "Country Code": "TV",
      "Country Name": "Tuvalu"
    },
    {
      "Country Code": "UG",
      "Country Name": "Uganda"
    },
    {
      "Country Code": "UA",
      "Country Name": "Ukraine"
    },
    {
      "Country Code": "AE",
      "Country Name": "United Arab Emirates"
    },
    {
      "Country Code": "GB",
      "Country Name": "United Kingdom"
    },
    {
      "Country Code": "US",
      "Country Name": "United States"
    },
    {
      "Country Code": "UM",
      "Country Name": "United States Minor Outlying Islands"
    },
    {
      "Country Code": "UY",
      "Country Name": "Uruguay"
    },
    {
      "Country Code": "UZ",
      "Country Name": "Uzbekistan"
    },
    {
      "Country Code": "VU",
      "Country Name": "Vanuatu"
    },
    {
      "Country Code": "VE",
      "Country Name": "Venezuela, Bolivarian Republic of"
    },
    {
      "Country Code": "VN",
      "Country Name": "Viet Nam"
    },
    {
      "Country Code": "VG",
      "Country Name": "Virgin Islands, British"
    },
    {
      "Country Code": "VI",
      "Country Name": "Virgin Islands, U.S."
    },
    {
      "Country Code": "WF",
      "Country Name": "Wallis and Futuna"
    },
    {
      "Country Code": "EH",
      "Country Name": "Western Sahara"
    },
    {
      "Country Code": "YE",
      "Country Name": "Yemen"
    },
    {
      "Country Code": "ZM",
      "Country Name": "Zambia"
    },
    {
      "Country Code": "ZW",
      "Country Name": "Zimbabwe"
    },
    {
      "Country Code": "AX",
      "Country Name": "Åland Islands"
    }
];
export default countryCodes;