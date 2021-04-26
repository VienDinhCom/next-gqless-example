/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash, SchemaUnionsKey } from "gqless";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO-8601 encoded UTC date time string. Example value: `"2019-07-03T20:47:55Z"`. */
  DateTime: string;
  /** A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: `"29.99"`. */
  Decimal: any;
  /** A string containing HTML code. Example value: `"<p>Grey cotton knit sweater.</p>"`. */
  HTML: any;
  /** A monetary value string. Example value: `"100.57"`. */
  Money: any;
  /**
   * An RFC 3986 and RFC 3987 compliant URI string.
   *
   * Example value: `"https://johns-apparel.myshopify.com"`.
   */
  URL: any;
}

/** The set of valid sort keys for the Article query. */
export enum ArticleSortKeys {
  /** Sort by the `title` value. */
  TITLE = "TITLE",
  /** Sort by the `blog_title` value. */
  BLOG_TITLE = "BLOG_TITLE",
  /** Sort by the `author` value. */
  AUTHOR = "AUTHOR",
  /** Sort by the `updated_at` value. */
  UPDATED_AT = "UPDATED_AT",
  /** Sort by the `published_at` value. */
  PUBLISHED_AT = "PUBLISHED_AT",
  /** Sort by the `id` value. */
  ID = "ID",
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = "RELEVANCE",
}

/** Specifies the input fields required for an attribute. */
export interface AttributeInput {
  /** Key or name of the attribute. */
  key: Scalars["String"];
  /** Value of the attribute. */
  value: Scalars["String"];
}

/** The set of valid sort keys for the Blog query. */
export enum BlogSortKeys {
  /** Sort by the `handle` value. */
  HANDLE = "HANDLE",
  /** Sort by the `title` value. */
  TITLE = "TITLE",
  /** Sort by the `id` value. */
  ID = "ID",
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = "RELEVANCE",
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum CardBrand {
  /** Visa. */
  VISA = "VISA",
  /** Mastercard. */
  MASTERCARD = "MASTERCARD",
  /** Discover. */
  DISCOVER = "DISCOVER",
  /** American Express. */
  AMERICAN_EXPRESS = "AMERICAN_EXPRESS",
  /** Diners Club. */
  DINERS_CLUB = "DINERS_CLUB",
  /** JCB. */
  JCB = "JCB",
}

/** Specifies the fields required to update a checkout's attributes. */
export interface CheckoutAttributesUpdateInput {
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars["String"]>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at complete time.
   */
  allowPartialAddresses?: Maybe<Scalars["Boolean"]>;
}

/** Specifies the fields required to update a checkout's attributes. */
export interface CheckoutAttributesUpdateV2Input {
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars["String"]>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at complete time.
   */
  allowPartialAddresses?: Maybe<Scalars["Boolean"]>;
}

/** Specifies the fields required to create a checkout. */
export interface CheckoutCreateInput {
  /** The email with which the customer wants to checkout. */
  email?: Maybe<Scalars["String"]>;
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: Maybe<Array<CheckoutLineItemInput>>;
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<MailingAddressInput>;
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars["String"]>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at complete time.
   */
  allowPartialAddresses?: Maybe<Scalars["Boolean"]>;
  /**
   * The three-letter currency code of one of the shop's enabled presentment currencies.
   * Including this field creates a checkout in the specified currency. By default, new
   * checkouts are created in the shop's primary currency.
   */
  presentmentCurrencyCode?: Maybe<CurrencyCode>;
}

/** Possible error codes that could be returned by CheckoutUserError. */
export enum CheckoutErrorCode {
  /** Input value is blank. */
  BLANK = "BLANK",
  /** Input value is invalid. */
  INVALID = "INVALID",
  /** Input value is too long. */
  TOO_LONG = "TOO_LONG",
  /** Input value is not present. */
  PRESENT = "PRESENT",
  /** Input value should be less than maximum allowed value. */
  LESS_THAN = "LESS_THAN",
  /** Input value should be greater than or equal to minimum allowed value. */
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  /** Input value should be less or equal to maximum allowed value. */
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  /** Checkout is already completed. */
  ALREADY_COMPLETED = "ALREADY_COMPLETED",
  /** Checkout is locked. */
  LOCKED = "LOCKED",
  /** Input value is not supported. */
  NOT_SUPPORTED = "NOT_SUPPORTED",
  /** Input email contains an invalid domain name. */
  BAD_DOMAIN = "BAD_DOMAIN",
  /** Input Zip is invalid for country provided. */
  INVALID_FOR_COUNTRY = "INVALID_FOR_COUNTRY",
  /** Input Zip is invalid for country and province provided. */
  INVALID_FOR_COUNTRY_AND_PROVINCE = "INVALID_FOR_COUNTRY_AND_PROVINCE",
  /** Invalid state in country. */
  INVALID_STATE_IN_COUNTRY = "INVALID_STATE_IN_COUNTRY",
  /** Invalid province in country. */
  INVALID_PROVINCE_IN_COUNTRY = "INVALID_PROVINCE_IN_COUNTRY",
  /** Invalid region in country. */
  INVALID_REGION_IN_COUNTRY = "INVALID_REGION_IN_COUNTRY",
  /** Shipping rate expired. */
  SHIPPING_RATE_EXPIRED = "SHIPPING_RATE_EXPIRED",
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GIFT_CARD_UNUSABLE = "GIFT_CARD_UNUSABLE",
  /** Gift card is disabled. */
  GIFT_CARD_DISABLED = "GIFT_CARD_DISABLED",
  /** Gift card code is invalid. */
  GIFT_CARD_CODE_INVALID = "GIFT_CARD_CODE_INVALID",
  /** Gift card has already been applied. */
  GIFT_CARD_ALREADY_APPLIED = "GIFT_CARD_ALREADY_APPLIED",
  /** Gift card currency does not match checkout currency. */
  GIFT_CARD_CURRENCY_MISMATCH = "GIFT_CARD_CURRENCY_MISMATCH",
  /** Gift card is expired. */
  GIFT_CARD_EXPIRED = "GIFT_CARD_EXPIRED",
  /** Gift card has no funds left. */
  GIFT_CARD_DEPLETED = "GIFT_CARD_DEPLETED",
  /** Gift card was not found. */
  GIFT_CARD_NOT_FOUND = "GIFT_CARD_NOT_FOUND",
  /** Cart does not meet discount requirements notice. */
  CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE = "CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE",
  /** Discount expired. */
  DISCOUNT_EXPIRED = "DISCOUNT_EXPIRED",
  /** Discount disabled. */
  DISCOUNT_DISABLED = "DISCOUNT_DISABLED",
  /** Discount limit reached. */
  DISCOUNT_LIMIT_REACHED = "DISCOUNT_LIMIT_REACHED",
  /** Discount not found. */
  DISCOUNT_NOT_FOUND = "DISCOUNT_NOT_FOUND",
  /** Customer already used once per customer discount notice. */
  CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE = "CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE",
  /** Checkout is already completed. */
  EMPTY = "EMPTY",
  /** Not enough in stock. */
  NOT_ENOUGH_IN_STOCK = "NOT_ENOUGH_IN_STOCK",
  /** Missing payment input. */
  MISSING_PAYMENT_INPUT = "MISSING_PAYMENT_INPUT",
  /** The amount of the payment does not match the value to be paid. */
  TOTAL_PRICE_MISMATCH = "TOTAL_PRICE_MISMATCH",
  /** Line item was not found in checkout. */
  LINE_ITEM_NOT_FOUND = "LINE_ITEM_NOT_FOUND",
  /** Unable to apply discount. */
  UNABLE_TO_APPLY = "UNABLE_TO_APPLY",
}

/** Specifies the input fields to create a line item on a checkout. */
export interface CheckoutLineItemInput {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /** The quantity of the line item. */
  quantity: Scalars["Int"];
  /** The identifier of the product variant for the line item. */
  variantId: Scalars["ID"];
}

/** Specifies the input fields to update a line item on the checkout. */
export interface CheckoutLineItemUpdateInput {
  /** The identifier of the line item. */
  id?: Maybe<Scalars["ID"]>;
  /** The variant identifier of the line item. */
  variantId?: Maybe<Scalars["ID"]>;
  /** The quantity of the line item. */
  quantity?: Maybe<Scalars["Int"]>;
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: Maybe<Array<AttributeInput>>;
}

/** The set of valid sort keys for the Collection query. */
export enum CollectionSortKeys {
  /** Sort by the `title` value. */
  TITLE = "TITLE",
  /** Sort by the `updated_at` value. */
  UPDATED_AT = "UPDATED_AT",
  /** Sort by the `id` value. */
  ID = "ID",
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = "RELEVANCE",
}

/** ISO 3166-1 alpha-2 country codes with some differences. */
export enum CountryCode {
  /** Afghanistan. */
  AF = "AF",
  /** Åland Islands. */
  AX = "AX",
  /** Albania. */
  AL = "AL",
  /** Algeria. */
  DZ = "DZ",
  /** Andorra. */
  AD = "AD",
  /** Angola. */
  AO = "AO",
  /** Anguilla. */
  AI = "AI",
  /** Antigua & Barbuda. */
  AG = "AG",
  /** Argentina. */
  AR = "AR",
  /** Armenia. */
  AM = "AM",
  /** Aruba. */
  AW = "AW",
  /** Ascension Island. */
  AC = "AC",
  /** Australia. */
  AU = "AU",
  /** Austria. */
  AT = "AT",
  /** Azerbaijan. */
  AZ = "AZ",
  /** Bahamas. */
  BS = "BS",
  /** Bahrain. */
  BH = "BH",
  /** Bangladesh. */
  BD = "BD",
  /** Barbados. */
  BB = "BB",
  /** Belarus. */
  BY = "BY",
  /** Belgium. */
  BE = "BE",
  /** Belize. */
  BZ = "BZ",
  /** Benin. */
  BJ = "BJ",
  /** Bermuda. */
  BM = "BM",
  /** Bhutan. */
  BT = "BT",
  /** Bolivia. */
  BO = "BO",
  /** Bosnia & Herzegovina. */
  BA = "BA",
  /** Botswana. */
  BW = "BW",
  /** Bouvet Island. */
  BV = "BV",
  /** Brazil. */
  BR = "BR",
  /** British Indian Ocean Territory. */
  IO = "IO",
  /** Brunei. */
  BN = "BN",
  /** Bulgaria. */
  BG = "BG",
  /** Burkina Faso. */
  BF = "BF",
  /** Burundi. */
  BI = "BI",
  /** Cambodia. */
  KH = "KH",
  /** Canada. */
  CA = "CA",
  /** Cape Verde. */
  CV = "CV",
  /** Caribbean Netherlands. */
  BQ = "BQ",
  /** Cayman Islands. */
  KY = "KY",
  /** Central African Republic. */
  CF = "CF",
  /** Chad. */
  TD = "TD",
  /** Chile. */
  CL = "CL",
  /** China. */
  CN = "CN",
  /** Christmas Island. */
  CX = "CX",
  /** Cocos (Keeling) Islands. */
  CC = "CC",
  /** Colombia. */
  CO = "CO",
  /** Comoros. */
  KM = "KM",
  /** Congo - Brazzaville. */
  CG = "CG",
  /** Congo - Kinshasa. */
  CD = "CD",
  /** Cook Islands. */
  CK = "CK",
  /** Costa Rica. */
  CR = "CR",
  /** Croatia. */
  HR = "HR",
  /** Cuba. */
  CU = "CU",
  /** Curaçao. */
  CW = "CW",
  /** Cyprus. */
  CY = "CY",
  /** Czechia. */
  CZ = "CZ",
  /** Côte d’Ivoire. */
  CI = "CI",
  /** Denmark. */
  DK = "DK",
  /** Djibouti. */
  DJ = "DJ",
  /** Dominica. */
  DM = "DM",
  /** Dominican Republic. */
  DO = "DO",
  /** Ecuador. */
  EC = "EC",
  /** Egypt. */
  EG = "EG",
  /** El Salvador. */
  SV = "SV",
  /** Equatorial Guinea. */
  GQ = "GQ",
  /** Eritrea. */
  ER = "ER",
  /** Estonia. */
  EE = "EE",
  /** Eswatini. */
  SZ = "SZ",
  /** Ethiopia. */
  ET = "ET",
  /** Falkland Islands. */
  FK = "FK",
  /** Faroe Islands. */
  FO = "FO",
  /** Fiji. */
  FJ = "FJ",
  /** Finland. */
  FI = "FI",
  /** France. */
  FR = "FR",
  /** French Guiana. */
  GF = "GF",
  /** French Polynesia. */
  PF = "PF",
  /** French Southern Territories. */
  TF = "TF",
  /** Gabon. */
  GA = "GA",
  /** Gambia. */
  GM = "GM",
  /** Georgia. */
  GE = "GE",
  /** Germany. */
  DE = "DE",
  /** Ghana. */
  GH = "GH",
  /** Gibraltar. */
  GI = "GI",
  /** Greece. */
  GR = "GR",
  /** Greenland. */
  GL = "GL",
  /** Grenada. */
  GD = "GD",
  /** Guadeloupe. */
  GP = "GP",
  /** Guatemala. */
  GT = "GT",
  /** Guernsey. */
  GG = "GG",
  /** Guinea. */
  GN = "GN",
  /** Guinea-Bissau. */
  GW = "GW",
  /** Guyana. */
  GY = "GY",
  /** Haiti. */
  HT = "HT",
  /** Heard & McDonald Islands. */
  HM = "HM",
  /** Vatican City. */
  VA = "VA",
  /** Honduras. */
  HN = "HN",
  /** Hong Kong SAR. */
  HK = "HK",
  /** Hungary. */
  HU = "HU",
  /** Iceland. */
  IS = "IS",
  /** India. */
  IN = "IN",
  /** Indonesia. */
  ID = "ID",
  /** Iran. */
  IR = "IR",
  /** Iraq. */
  IQ = "IQ",
  /** Ireland. */
  IE = "IE",
  /** Isle of Man. */
  IM = "IM",
  /** Israel. */
  IL = "IL",
  /** Italy. */
  IT = "IT",
  /** Jamaica. */
  JM = "JM",
  /** Japan. */
  JP = "JP",
  /** Jersey. */
  JE = "JE",
  /** Jordan. */
  JO = "JO",
  /** Kazakhstan. */
  KZ = "KZ",
  /** Kenya. */
  KE = "KE",
  /** Kiribati. */
  KI = "KI",
  /** North Korea. */
  KP = "KP",
  /** Kosovo. */
  XK = "XK",
  /** Kuwait. */
  KW = "KW",
  /** Kyrgyzstan. */
  KG = "KG",
  /** Laos. */
  LA = "LA",
  /** Latvia. */
  LV = "LV",
  /** Lebanon. */
  LB = "LB",
  /** Lesotho. */
  LS = "LS",
  /** Liberia. */
  LR = "LR",
  /** Libya. */
  LY = "LY",
  /** Liechtenstein. */
  LI = "LI",
  /** Lithuania. */
  LT = "LT",
  /** Luxembourg. */
  LU = "LU",
  /** Macao SAR. */
  MO = "MO",
  /** Madagascar. */
  MG = "MG",
  /** Malawi. */
  MW = "MW",
  /** Malaysia. */
  MY = "MY",
  /** Maldives. */
  MV = "MV",
  /** Mali. */
  ML = "ML",
  /** Malta. */
  MT = "MT",
  /** Martinique. */
  MQ = "MQ",
  /** Mauritania. */
  MR = "MR",
  /** Mauritius. */
  MU = "MU",
  /** Mayotte. */
  YT = "YT",
  /** Mexico. */
  MX = "MX",
  /** Moldova. */
  MD = "MD",
  /** Monaco. */
  MC = "MC",
  /** Mongolia. */
  MN = "MN",
  /** Montenegro. */
  ME = "ME",
  /** Montserrat. */
  MS = "MS",
  /** Morocco. */
  MA = "MA",
  /** Mozambique. */
  MZ = "MZ",
  /** Myanmar (Burma). */
  MM = "MM",
  /** Namibia. */
  NA = "NA",
  /** Nauru. */
  NR = "NR",
  /** Nepal. */
  NP = "NP",
  /** Netherlands. */
  NL = "NL",
  /** Netherlands Antilles. */
  AN = "AN",
  /** New Caledonia. */
  NC = "NC",
  /** New Zealand. */
  NZ = "NZ",
  /** Nicaragua. */
  NI = "NI",
  /** Niger. */
  NE = "NE",
  /** Nigeria. */
  NG = "NG",
  /** Niue. */
  NU = "NU",
  /** Norfolk Island. */
  NF = "NF",
  /** North Macedonia. */
  MK = "MK",
  /** Norway. */
  NO = "NO",
  /** Oman. */
  OM = "OM",
  /** Pakistan. */
  PK = "PK",
  /** Palestinian Territories. */
  PS = "PS",
  /** Panama. */
  PA = "PA",
  /** Papua New Guinea. */
  PG = "PG",
  /** Paraguay. */
  PY = "PY",
  /** Peru. */
  PE = "PE",
  /** Philippines. */
  PH = "PH",
  /** Pitcairn Islands. */
  PN = "PN",
  /** Poland. */
  PL = "PL",
  /** Portugal. */
  PT = "PT",
  /** Qatar. */
  QA = "QA",
  /** Cameroon. */
  CM = "CM",
  /** Réunion. */
  RE = "RE",
  /** Romania. */
  RO = "RO",
  /** Russia. */
  RU = "RU",
  /** Rwanda. */
  RW = "RW",
  /** St. Barthélemy. */
  BL = "BL",
  /** St. Helena. */
  SH = "SH",
  /** St. Kitts & Nevis. */
  KN = "KN",
  /** St. Lucia. */
  LC = "LC",
  /** St. Martin. */
  MF = "MF",
  /** St. Pierre & Miquelon. */
  PM = "PM",
  /** Samoa. */
  WS = "WS",
  /** San Marino. */
  SM = "SM",
  /** São Tomé & Príncipe. */
  ST = "ST",
  /** Saudi Arabia. */
  SA = "SA",
  /** Senegal. */
  SN = "SN",
  /** Serbia. */
  RS = "RS",
  /** Seychelles. */
  SC = "SC",
  /** Sierra Leone. */
  SL = "SL",
  /** Singapore. */
  SG = "SG",
  /** Sint Maarten. */
  SX = "SX",
  /** Slovakia. */
  SK = "SK",
  /** Slovenia. */
  SI = "SI",
  /** Solomon Islands. */
  SB = "SB",
  /** Somalia. */
  SO = "SO",
  /** South Africa. */
  ZA = "ZA",
  /** South Georgia & South Sandwich Islands. */
  GS = "GS",
  /** South Korea. */
  KR = "KR",
  /** South Sudan. */
  SS = "SS",
  /** Spain. */
  ES = "ES",
  /** Sri Lanka. */
  LK = "LK",
  /** St. Vincent & Grenadines. */
  VC = "VC",
  /** Sudan. */
  SD = "SD",
  /** Suriname. */
  SR = "SR",
  /** Svalbard & Jan Mayen. */
  SJ = "SJ",
  /** Sweden. */
  SE = "SE",
  /** Switzerland. */
  CH = "CH",
  /** Syria. */
  SY = "SY",
  /** Taiwan. */
  TW = "TW",
  /** Tajikistan. */
  TJ = "TJ",
  /** Tanzania. */
  TZ = "TZ",
  /** Thailand. */
  TH = "TH",
  /** Timor-Leste. */
  TL = "TL",
  /** Togo. */
  TG = "TG",
  /** Tokelau. */
  TK = "TK",
  /** Tonga. */
  TO = "TO",
  /** Trinidad & Tobago. */
  TT = "TT",
  /** Tristan da Cunha. */
  TA = "TA",
  /** Tunisia. */
  TN = "TN",
  /** Turkey. */
  TR = "TR",
  /** Turkmenistan. */
  TM = "TM",
  /** Turks & Caicos Islands. */
  TC = "TC",
  /** Tuvalu. */
  TV = "TV",
  /** Uganda. */
  UG = "UG",
  /** Ukraine. */
  UA = "UA",
  /** United Arab Emirates. */
  AE = "AE",
  /** United Kingdom. */
  GB = "GB",
  /** United States. */
  US = "US",
  /** U.S. Outlying Islands. */
  UM = "UM",
  /** Uruguay. */
  UY = "UY",
  /** Uzbekistan. */
  UZ = "UZ",
  /** Vanuatu. */
  VU = "VU",
  /** Venezuela. */
  VE = "VE",
  /** Vietnam. */
  VN = "VN",
  /** British Virgin Islands. */
  VG = "VG",
  /** Wallis & Futuna. */
  WF = "WF",
  /** Western Sahara. */
  EH = "EH",
  /** Yemen. */
  YE = "YE",
  /** Zambia. */
  ZM = "ZM",
  /** Zimbabwe. */
  ZW = "ZW",
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 */
export interface CreditCardPaymentInput {
  /** The amount of the payment. */
  amount: Scalars["Money"];
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars["String"];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars["String"];
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars["Boolean"]>;
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 */
export interface CreditCardPaymentInputV2 {
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars["String"];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars["String"];
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars["Boolean"]>;
}

/** The part of the image that should remain after cropping. */
export enum CropRegion {
  /** Keep the center of the image. */
  CENTER = "CENTER",
  /** Keep the top of the image. */
  TOP = "TOP",
  /** Keep the bottom of the image. */
  BOTTOM = "BOTTOM",
  /** Keep the left of the image. */
  LEFT = "LEFT",
  /** Keep the right of the image. */
  RIGHT = "RIGHT",
}

/** Currency codes. */
export enum CurrencyCode {
  /** United States Dollars (USD). */
  USD = "USD",
  /** Euro (EUR). */
  EUR = "EUR",
  /** United Kingdom Pounds (GBP). */
  GBP = "GBP",
  /** Canadian Dollars (CAD). */
  CAD = "CAD",
  /** Afghan Afghani (AFN). */
  AFN = "AFN",
  /** Albanian Lek (ALL). */
  ALL = "ALL",
  /** Algerian Dinar (DZD). */
  DZD = "DZD",
  /** Angolan Kwanza (AOA). */
  AOA = "AOA",
  /** Argentine Pesos (ARS). */
  ARS = "ARS",
  /** Armenian Dram (AMD). */
  AMD = "AMD",
  /** Aruban Florin (AWG). */
  AWG = "AWG",
  /** Australian Dollars (AUD). */
  AUD = "AUD",
  /** Barbadian Dollar (BBD). */
  BBD = "BBD",
  /** Azerbaijani Manat (AZN). */
  AZN = "AZN",
  /** Bangladesh Taka (BDT). */
  BDT = "BDT",
  /** Bahamian Dollar (BSD). */
  BSD = "BSD",
  /** Bahraini Dinar (BHD). */
  BHD = "BHD",
  /** Burundian Franc (BIF). */
  BIF = "BIF",
  /** Belize Dollar (BZD). */
  BZD = "BZD",
  /** Bermudian Dollar (BMD). */
  BMD = "BMD",
  /** Bhutanese Ngultrum (BTN). */
  BTN = "BTN",
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  BAM = "BAM",
  /** Brazilian Real (BRL). */
  BRL = "BRL",
  /** Bolivian Boliviano (BOB). */
  BOB = "BOB",
  /** Botswana Pula (BWP). */
  BWP = "BWP",
  /** Brunei Dollar (BND). */
  BND = "BND",
  /** Bulgarian Lev (BGN). */
  BGN = "BGN",
  /** Burmese Kyat (MMK). */
  MMK = "MMK",
  /** Cambodian Riel. */
  KHR = "KHR",
  /** Cape Verdean escudo (CVE). */
  CVE = "CVE",
  /** Cayman Dollars (KYD). */
  KYD = "KYD",
  /** Central African CFA Franc (XAF). */
  XAF = "XAF",
  /** Chilean Peso (CLP). */
  CLP = "CLP",
  /** Chinese Yuan Renminbi (CNY). */
  CNY = "CNY",
  /** Colombian Peso (COP). */
  COP = "COP",
  /** Comorian Franc (KMF). */
  KMF = "KMF",
  /** Congolese franc (CDF). */
  CDF = "CDF",
  /** Costa Rican Colones (CRC). */
  CRC = "CRC",
  /** Croatian Kuna (HRK). */
  HRK = "HRK",
  /** Czech Koruny (CZK). */
  CZK = "CZK",
  /** Danish Kroner (DKK). */
  DKK = "DKK",
  /** Dominican Peso (DOP). */
  DOP = "DOP",
  /** East Caribbean Dollar (XCD). */
  XCD = "XCD",
  /** Egyptian Pound (EGP). */
  EGP = "EGP",
  /** Ethiopian Birr (ETB). */
  ETB = "ETB",
  /** CFP Franc (XPF). */
  XPF = "XPF",
  /** Fijian Dollars (FJD). */
  FJD = "FJD",
  /** Gambian Dalasi (GMD). */
  GMD = "GMD",
  /** Ghanaian Cedi (GHS). */
  GHS = "GHS",
  /** Guatemalan Quetzal (GTQ). */
  GTQ = "GTQ",
  /** Guyanese Dollar (GYD). */
  GYD = "GYD",
  /** Georgian Lari (GEL). */
  GEL = "GEL",
  /** Haitian Gourde (HTG). */
  HTG = "HTG",
  /** Honduran Lempira (HNL). */
  HNL = "HNL",
  /** Hong Kong Dollars (HKD). */
  HKD = "HKD",
  /** Hungarian Forint (HUF). */
  HUF = "HUF",
  /** Icelandic Kronur (ISK). */
  ISK = "ISK",
  /** Indian Rupees (INR). */
  INR = "INR",
  /** Indonesian Rupiah (IDR). */
  IDR = "IDR",
  /** Israeli New Shekel (NIS). */
  ILS = "ILS",
  /** Iraqi Dinar (IQD). */
  IQD = "IQD",
  /** Jamaican Dollars (JMD). */
  JMD = "JMD",
  /** Japanese Yen (JPY). */
  JPY = "JPY",
  /** Jersey Pound. */
  JEP = "JEP",
  /** Jordanian Dinar (JOD). */
  JOD = "JOD",
  /** Kazakhstani Tenge (KZT). */
  KZT = "KZT",
  /** Kenyan Shilling (KES). */
  KES = "KES",
  /** Kuwaiti Dinar (KWD). */
  KWD = "KWD",
  /** Kyrgyzstani Som (KGS). */
  KGS = "KGS",
  /** Laotian Kip (LAK). */
  LAK = "LAK",
  /** Latvian Lati (LVL). */
  LVL = "LVL",
  /** Lebanese Pounds (LBP). */
  LBP = "LBP",
  /** Lesotho Loti (LSL). */
  LSL = "LSL",
  /** Liberian Dollar (LRD). */
  LRD = "LRD",
  /** Lithuanian Litai (LTL). */
  LTL = "LTL",
  /** Malagasy Ariary (MGA). */
  MGA = "MGA",
  /** Macedonia Denar (MKD). */
  MKD = "MKD",
  /** Macanese Pataca (MOP). */
  MOP = "MOP",
  /** Malawian Kwacha (MWK). */
  MWK = "MWK",
  /** Maldivian Rufiyaa (MVR). */
  MVR = "MVR",
  /** Mexican Pesos (MXN). */
  MXN = "MXN",
  /** Malaysian Ringgits (MYR). */
  MYR = "MYR",
  /** Mauritian Rupee (MUR). */
  MUR = "MUR",
  /** Moldovan Leu (MDL). */
  MDL = "MDL",
  /** Moroccan Dirham. */
  MAD = "MAD",
  /** Mongolian Tugrik. */
  MNT = "MNT",
  /** Mozambican Metical. */
  MZN = "MZN",
  /** Namibian Dollar. */
  NAD = "NAD",
  /** Nepalese Rupee (NPR). */
  NPR = "NPR",
  /** Netherlands Antillean Guilder. */
  ANG = "ANG",
  /** New Zealand Dollars (NZD). */
  NZD = "NZD",
  /** Nicaraguan Córdoba (NIO). */
  NIO = "NIO",
  /** Nigerian Naira (NGN). */
  NGN = "NGN",
  /** Norwegian Kroner (NOK). */
  NOK = "NOK",
  /** Omani Rial (OMR). */
  OMR = "OMR",
  /** Panamian Balboa (PAB). */
  PAB = "PAB",
  /** Pakistani Rupee (PKR). */
  PKR = "PKR",
  /** Papua New Guinean Kina (PGK). */
  PGK = "PGK",
  /** Paraguayan Guarani (PYG). */
  PYG = "PYG",
  /** Peruvian Nuevo Sol (PEN). */
  PEN = "PEN",
  /** Philippine Peso (PHP). */
  PHP = "PHP",
  /** Polish Zlotych (PLN). */
  PLN = "PLN",
  /** Qatari Rial (QAR). */
  QAR = "QAR",
  /** Romanian Lei (RON). */
  RON = "RON",
  /** Russian Rubles (RUB). */
  RUB = "RUB",
  /** Rwandan Franc (RWF). */
  RWF = "RWF",
  /** Samoan Tala (WST). */
  WST = "WST",
  /** Saudi Riyal (SAR). */
  SAR = "SAR",
  /** Sao Tome And Principe Dobra (STD). */
  STD = "STD",
  /** Serbian dinar (RSD). */
  RSD = "RSD",
  /** Seychellois Rupee (SCR). */
  SCR = "SCR",
  /** Singapore Dollars (SGD). */
  SGD = "SGD",
  /** Sudanese Pound (SDG). */
  SDG = "SDG",
  /** Syrian Pound (SYP). */
  SYP = "SYP",
  /** South African Rand (ZAR). */
  ZAR = "ZAR",
  /** South Korean Won (KRW). */
  KRW = "KRW",
  /** South Sudanese Pound (SSP). */
  SSP = "SSP",
  /** Solomon Islands Dollar (SBD). */
  SBD = "SBD",
  /** Sri Lankan Rupees (LKR). */
  LKR = "LKR",
  /** Surinamese Dollar (SRD). */
  SRD = "SRD",
  /** Swazi Lilangeni (SZL). */
  SZL = "SZL",
  /** Swedish Kronor (SEK). */
  SEK = "SEK",
  /** Swiss Francs (CHF). */
  CHF = "CHF",
  /** Taiwan Dollars (TWD). */
  TWD = "TWD",
  /** Thai baht (THB). */
  THB = "THB",
  /** Tanzanian Shilling (TZS). */
  TZS = "TZS",
  /** Trinidad and Tobago Dollars (TTD). */
  TTD = "TTD",
  /** Tunisian Dinar (TND). */
  TND = "TND",
  /** Turkish Lira (TRY). */
  TRY = "TRY",
  /** Turkmenistani Manat (TMT). */
  TMT = "TMT",
  /** Ugandan Shilling (UGX). */
  UGX = "UGX",
  /** Ukrainian Hryvnia (UAH). */
  UAH = "UAH",
  /** United Arab Emirates Dirham (AED). */
  AED = "AED",
  /** Uruguayan Pesos (UYU). */
  UYU = "UYU",
  /** Uzbekistan som (UZS). */
  UZS = "UZS",
  /** Vanuatu Vatu (VUV). */
  VUV = "VUV",
  /** Vietnamese đồng (VND). */
  VND = "VND",
  /** West African CFA franc (XOF). */
  XOF = "XOF",
  /** Yemeni Rial (YER). */
  YER = "YER",
  /** Zambian Kwacha (ZMW). */
  ZMW = "ZMW",
  /** Belarusian Ruble (BYR). */
  BYR = "BYR",
  /** Djiboutian Franc (DJF). */
  DJF = "DJF",
  /** Falkland Islands Pounds (FKP). */
  FKP = "FKP",
  /** Gibraltar Pounds (GIP). */
  GIP = "GIP",
  /** Guinean Franc (GNF). */
  GNF = "GNF",
  /** Iranian Rial (IRR). */
  IRR = "IRR",
  /** Libyan Dinar (LYD). */
  LYD = "LYD",
  /** Sierra Leonean Leone (SLL). */
  SLL = "SLL",
  /** Saint Helena Pounds (SHP). */
  SHP = "SHP",
  /** Tajikistani Somoni (TJS). */
  TJS = "TJS",
  /** Tongan Pa'anga (TOP). */
  TOP = "TOP",
  /** Venezuelan Bolivares (VEF). */
  VEF = "VEF",
}

/** Specifies the input fields required to create a customer access token. */
export interface CustomerAccessTokenCreateInput {
  /** The email associated to the customer. */
  email: Scalars["String"];
  /** The login password to be used by the customer. */
  password: Scalars["String"];
}

/** Specifies the input fields required to activate a customer. */
export interface CustomerActivateInput {
  /** The activation token required to activate the customer. */
  activationToken: Scalars["String"];
  /** New password that will be set during activation. */
  password: Scalars["String"];
}

/** Specifies the fields required to create a new customer. */
export interface CustomerCreateInput {
  /** The customer’s first name. */
  firstName?: Maybe<Scalars["String"]>;
  /** The customer’s last name. */
  lastName?: Maybe<Scalars["String"]>;
  /** The customer’s email. */
  email: Scalars["String"];
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars["String"]>;
  /** The login password used by the customer. */
  password: Scalars["String"];
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: Maybe<Scalars["Boolean"]>;
}

/** Possible error codes that could be returned by CustomerUserError. */
export enum CustomerErrorCode {
  /** Input value is blank. */
  BLANK = "BLANK",
  /** Input value is invalid. */
  INVALID = "INVALID",
  /** Input value is already taken. */
  TAKEN = "TAKEN",
  /** Input value is too long. */
  TOO_LONG = "TOO_LONG",
  /** Input value is too short. */
  TOO_SHORT = "TOO_SHORT",
  /** Unidentified customer. */
  UNIDENTIFIED_CUSTOMER = "UNIDENTIFIED_CUSTOMER",
  /** Customer is disabled. */
  CUSTOMER_DISABLED = "CUSTOMER_DISABLED",
  /** Input password starts or ends with whitespace. */
  PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE = "PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE",
  /** Input contains HTML tags. */
  CONTAINS_HTML_TAGS = "CONTAINS_HTML_TAGS",
  /** Input contains URL. */
  CONTAINS_URL = "CONTAINS_URL",
  /** Invalid activation token. */
  TOKEN_INVALID = "TOKEN_INVALID",
  /** Customer already enabled. */
  ALREADY_ENABLED = "ALREADY_ENABLED",
  /** Address does not exist. */
  NOT_FOUND = "NOT_FOUND",
  /** Input email contains an invalid domain name. */
  BAD_DOMAIN = "BAD_DOMAIN",
  /** Multipass token is not valid. */
  INVALID_MULTIPASS_REQUEST = "INVALID_MULTIPASS_REQUEST",
}

/** Specifies the fields required to reset a customer’s password. */
export interface CustomerResetInput {
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars["String"];
  /** New password that will be set as part of the reset password process. */
  password: Scalars["String"];
}

/** Specifies the fields required to update the Customer information. */
export interface CustomerUpdateInput {
  /** The customer’s first name. */
  firstName?: Maybe<Scalars["String"]>;
  /** The customer’s last name. */
  lastName?: Maybe<Scalars["String"]>;
  /** The customer’s email. */
  email?: Maybe<Scalars["String"]>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   */
  phone?: Maybe<Scalars["String"]>;
  /** The login password used by the customer. */
  password?: Maybe<Scalars["String"]>;
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: Maybe<Scalars["Boolean"]>;
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum DigitalWallet {
  /** Apple Pay. */
  APPLE_PAY = "APPLE_PAY",
  /** Android Pay. */
  ANDROID_PAY = "ANDROID_PAY",
  /** Google Pay. */
  GOOGLE_PAY = "GOOGLE_PAY",
  /** Shopify Pay. */
  SHOPIFY_PAY = "SHOPIFY_PAY",
}

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  ACROSS = "ACROSS",
  /** The value is applied onto every entitled line. */
  EACH = "EACH",
  /** The value is specifically applied onto a particular line. */
  ONE = "ONE",
}

/**
 * Which lines on the order that the discount is allocated over, of the type
 * defined by the Discount Application's target_type.
 */
export enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  ALL = "ALL",
  /** The discount is allocated onto only the lines it is entitled for. */
  ENTITLED = "ENTITLED",
  /** The discount is allocated onto explicitly chosen lines. */
  EXPLICIT = "EXPLICIT",
}

/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
export enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LINE_ITEM = "LINE_ITEM",
  /** The discount applies onto shipping lines. */
  SHIPPING_LINE = "SHIPPING_LINE",
}

/** List of supported image content types. */
export enum ImageContentType {
  /** A PNG image. */
  PNG = "PNG",
  /** A JPG image. */
  JPG = "JPG",
  /** A WEBP image. */
  WEBP = "WEBP",
}

/** Specifies the fields accepted to create or update a mailing address. */
export interface MailingAddressInput {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars["String"]>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars["String"]>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars["String"]>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars["String"]>;
  /** The name of the country. */
  country?: Maybe<Scalars["String"]>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars["String"]>;
  /** The last name of the customer. */
  lastName?: Maybe<Scalars["String"]>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars["String"]>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars["String"]>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars["String"]>;
}

/** The possible content types for a media object. */
export enum MediaContentType {
  /** An externally hosted video. */
  EXTERNAL_VIDEO = "EXTERNAL_VIDEO",
  /** A Shopify hosted image. */
  IMAGE = "IMAGE",
  /** A 3d model. */
  MODEL_3D = "MODEL_3D",
  /** A Shopify hosted video. */
  VIDEO = "VIDEO",
}

/** Metafield value types. */
export enum MetafieldValueType {
  /** A string metafield. */
  STRING = "STRING",
  /** An integer metafield. */
  INTEGER = "INTEGER",
  /** A json string metafield. */
  JSON_STRING = "JSON_STRING",
}

/** Specifies the fields for a monetary value with currency. */
export interface MoneyInput {
  /** Decimal money amount. */
  amount: Scalars["Decimal"];
  /** Currency of the money. */
  currencyCode: CurrencyCode;
}

/** Represents the reason for the order's cancellation. */
export enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  CUSTOMER = "CUSTOMER",
  /** The order was fraudulent. */
  FRAUD = "FRAUD",
  /** There was insufficient inventory. */
  INVENTORY = "INVENTORY",
  /** Payment was declined. */
  DECLINED = "DECLINED",
  /** The order was canceled for an unlisted reason. */
  OTHER = "OTHER",
}

/** Represents the order's current financial status. */
export enum OrderFinancialStatus {
  /** Displayed as **Pending**. */
  PENDING = "PENDING",
  /** Displayed as **Authorized**. */
  AUTHORIZED = "AUTHORIZED",
  /** Displayed as **Partially paid**. */
  PARTIALLY_PAID = "PARTIALLY_PAID",
  /** Displayed as **Partially refunded**. */
  PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
  /** Displayed as **Voided**. */
  VOIDED = "VOIDED",
  /** Displayed as **Paid**. */
  PAID = "PAID",
  /** Displayed as **Refunded**. */
  REFUNDED = "REFUNDED",
}

/** Represents the order's current fulfillment status. */
export enum OrderFulfillmentStatus {
  /** Displayed as **Unfulfilled**. */
  UNFULFILLED = "UNFULFILLED",
  /** Displayed as **Partially fulfilled**. */
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
  /** Displayed as **Fulfilled**. */
  FULFILLED = "FULFILLED",
  /** Displayed as **Restocked**. */
  RESTOCKED = "RESTOCKED",
  /** Displayed as **Pending fulfillment**. */
  PENDING_FULFILLMENT = "PENDING_FULFILLMENT",
  /** Displayed as **Open**. */
  OPEN = "OPEN",
  /** Displayed as **In progress**. */
  IN_PROGRESS = "IN_PROGRESS",
}

/** The set of valid sort keys for the Order query. */
export enum OrderSortKeys {
  /** Sort by the `processed_at` value. */
  PROCESSED_AT = "PROCESSED_AT",
  /** Sort by the `total_price` value. */
  TOTAL_PRICE = "TOTAL_PRICE",
  /** Sort by the `id` value. */
  ID = "ID",
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = "RELEVANCE",
}

/** The set of valid sort keys for the Page query. */
export enum PageSortKeys {
  /** Sort by the `title` value. */
  TITLE = "TITLE",
  /** Sort by the `updated_at` value. */
  UPDATED_AT = "UPDATED_AT",
  /** Sort by the `id` value. */
  ID = "ID",
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = "RELEVANCE",
}

/** The valid values for the types of payment token. */
export enum PaymentTokenType {
  /** Apple Pay token type. */
  APPLE_PAY = "APPLE_PAY",
  /** Vault payment token type. */
  VAULT = "VAULT",
  /** Shopify Pay token type. */
  SHOPIFY_PAY = "SHOPIFY_PAY",
  /** Google Pay token type. */
  GOOGLE_PAY = "GOOGLE_PAY",
}

/** The set of valid sort keys for the ProductCollection query. */
export enum ProductCollectionSortKeys {
  /** Sort by the `title` value. */
  TITLE = "TITLE",
  /** Sort by the `price` value. */
  PRICE = "PRICE",
  /** Sort by the `best-selling` value. */
  BEST_SELLING = "BEST_SELLING",
  /** Sort by the `created` value. */
  CREATED = "CREATED",
  /** Sort by the `id` value. */
  ID = "ID",
  /** Sort by the `manual` value. */
  MANUAL = "MANUAL",
  /** Sort by the `collection-default` value. */
  COLLECTION_DEFAULT = "COLLECTION_DEFAULT",
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = "RELEVANCE",
}

/** The set of valid sort keys for the ProductImage query. */
export enum ProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = "CREATED_AT",
  /** Sort by the `position` value. */
  POSITION = "POSITION",
  /** Sort by the `id` value. */
  ID = "ID",
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = "RELEVANCE",
}

/** The set of valid sort keys for the Product query. */
export enum ProductSortKeys {
  /** Sort by the `title` value. */
  TITLE = "TITLE",
  /** Sort by the `product_type` value. */
  PRODUCT_TYPE = "PRODUCT_TYPE",
  /** Sort by the `vendor` value. */
  VENDOR = "VENDOR",
  /** Sort by the `updated_at` value. */
  UPDATED_AT = "UPDATED_AT",
  /** Sort by the `created_at` value. */
  CREATED_AT = "CREATED_AT",
  /** Sort by the `best_selling` value. */
  BEST_SELLING = "BEST_SELLING",
  /** Sort by the `price` value. */
  PRICE = "PRICE",
  /** Sort by the `id` value. */
  ID = "ID",
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = "RELEVANCE",
}

/** The set of valid sort keys for the ProductVariant query. */
export enum ProductVariantSortKeys {
  /** Sort by the `title` value. */
  TITLE = "TITLE",
  /** Sort by the `sku` value. */
  SKU = "SKU",
  /** Sort by the `position` value. */
  POSITION = "POSITION",
  /** Sort by the `id` value. */
  ID = "ID",
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = "RELEVANCE",
}

/** Specifies the input fields required for a selected option. */
export interface SelectedOptionInput {
  /** The product option’s name. */
  name: Scalars["String"];
  /** The product option’s value. */
  value: Scalars["String"];
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export interface TokenizedPaymentInput {
  /** The amount of the payment. */
  amount: Scalars["Money"];
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars["String"];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** The type of payment token. */
  type: Scalars["String"];
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars["String"];
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars["Boolean"]>;
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars["String"]>;
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export interface TokenizedPaymentInputV2 {
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars["String"];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars["String"];
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: Maybe<Scalars["Boolean"]>;
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars["String"]>;
  /** The type of payment token. */
  type: Scalars["String"];
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export interface TokenizedPaymentInputV3 {
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars["String"];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars["String"];
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: Maybe<Scalars["Boolean"]>;
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars["String"]>;
  /** The type of payment token. */
  type: PaymentTokenType;
}

/** The different kinds of order transactions. */
export enum TransactionKind {
  /** An authorization and capture performed together in a single step. */
  SALE = "SALE",
  /** A transfer of the money that was reserved during the authorization stage. */
  CAPTURE = "CAPTURE",
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   */
  AUTHORIZATION = "AUTHORIZATION",
  /** An authorization for a payment taken with an EMV credit card reader. */
  EMV_AUTHORIZATION = "EMV_AUTHORIZATION",
  /** Money returned to the customer when they have paid too much. */
  CHANGE = "CHANGE",
}

/** Transaction statuses describe the status of a transaction. */
export enum TransactionStatus {
  /** The transaction is pending. */
  PENDING = "PENDING",
  /** The transaction succeeded. */
  SUCCESS = "SUCCESS",
  /** The transaction failed. */
  FAILURE = "FAILURE",
  /** There was an error while processing the transaction. */
  ERROR = "ERROR",
}

/** The accepted types of unit of measurement. */
export enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing volumes. */
  VOLUME = "VOLUME",
  /** Unit of measurements representing weights. */
  WEIGHT = "WEIGHT",
  /** Unit of measurements representing lengths. */
  LENGTH = "LENGTH",
  /** Unit of measurements representing areas. */
  AREA = "AREA",
}

/** The valid units of measurement for a unit price measurement. */
export enum UnitPriceMeasurementMeasuredUnit {
  /** 1000 milliliters equals 1 liter. */
  ML = "ML",
  /** 100 centiliters equals 1 liter. */
  CL = "CL",
  /** Metric system unit of volume. */
  L = "L",
  /** 1 cubic meter equals 1000 liters. */
  M3 = "M3",
  /** 1000 milligrams equals 1 gram. */
  MG = "MG",
  /** Metric system unit of weight. */
  G = "G",
  /** 1 kilogram equals 1000 grams. */
  KG = "KG",
  /** 1000 millimeters equals 1 meter. */
  MM = "MM",
  /** 100 centimeters equals 1 meter. */
  CM = "CM",
  /** Metric system unit of length. */
  M = "M",
  /** Metric system unit of area. */
  M2 = "M2",
}

/** Units of measurement for weight. */
export enum WeightUnit {
  /** 1 kilogram equals 1000 grams. */
  KILOGRAMS = "KILOGRAMS",
  /** Metric system unit of mass. */
  GRAMS = "GRAMS",
  /** 1 pound equals 16 ounces. */
  POUNDS = "POUNDS",
  /** Imperial system unit of mass. */
  OUNCES = "OUNCES",
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  ArticleSortKeys: true,
  BlogSortKeys: true,
  Boolean: true,
  CardBrand: true,
  CheckoutErrorCode: true,
  CollectionSortKeys: true,
  CountryCode: true,
  CropRegion: true,
  CurrencyCode: true,
  CustomerErrorCode: true,
  DateTime: true,
  Decimal: true,
  DigitalWallet: true,
  DiscountApplicationAllocationMethod: true,
  DiscountApplicationTargetSelection: true,
  DiscountApplicationTargetType: true,
  Float: true,
  HTML: true,
  ID: true,
  ImageContentType: true,
  Int: true,
  MediaContentType: true,
  MetafieldValueType: true,
  Money: true,
  OrderCancelReason: true,
  OrderFinancialStatus: true,
  OrderFulfillmentStatus: true,
  OrderSortKeys: true,
  PageSortKeys: true,
  PaymentTokenType: true,
  ProductCollectionSortKeys: true,
  ProductImageSortKeys: true,
  ProductSortKeys: true,
  ProductVariantSortKeys: true,
  String: true,
  TransactionKind: true,
  TransactionStatus: true,
  URL: true,
  UnitPriceMeasurementMeasuredType: true,
  UnitPriceMeasurementMeasuredUnit: true,
  WeightUnit: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    articles: {
      __type: "ArticleConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "ArticleSortKeys",
        query: "String",
      },
    },
    blogByHandle: { __type: "Blog", __args: { handle: "String!" } },
    blogs: {
      __type: "BlogConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "BlogSortKeys",
        query: "String",
      },
    },
    collectionByHandle: { __type: "Collection", __args: { handle: "String!" } },
    collections: {
      __type: "CollectionConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "CollectionSortKeys",
        query: "String",
      },
    },
    customer: {
      __type: "Customer",
      __args: { customerAccessToken: "String!" },
    },
    node: { __type: "Node", __args: { id: "ID!" } },
    nodes: { __type: "[Node]!", __args: { ids: "[ID!]!" } },
    pageByHandle: { __type: "Page", __args: { handle: "String!" } },
    pages: {
      __type: "PageConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "PageSortKeys",
        query: "String",
      },
    },
    productByHandle: { __type: "Product", __args: { handle: "String!" } },
    productRecommendations: {
      __type: "[Product!]",
      __args: { productId: "ID!" },
    },
    productTags: { __type: "StringConnection!", __args: { first: "Int!" } },
    productTypes: { __type: "StringConnection!", __args: { first: "Int!" } },
    products: {
      __type: "ProductConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "ProductSortKeys",
        query: "String",
      },
    },
    publicApiVersions: { __type: "[ApiVersion!]!" },
    shop: { __type: "Shop!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    checkoutAttributesUpdate: {
      __type: "CheckoutAttributesUpdatePayload",
      __args: { checkoutId: "ID!", input: "CheckoutAttributesUpdateInput!" },
    },
    checkoutAttributesUpdateV2: {
      __type: "CheckoutAttributesUpdateV2Payload",
      __args: { checkoutId: "ID!", input: "CheckoutAttributesUpdateV2Input!" },
    },
    checkoutCompleteFree: {
      __type: "CheckoutCompleteFreePayload",
      __args: { checkoutId: "ID!" },
    },
    checkoutCompleteWithCreditCard: {
      __type: "CheckoutCompleteWithCreditCardPayload",
      __args: { checkoutId: "ID!", payment: "CreditCardPaymentInput!" },
    },
    checkoutCompleteWithCreditCardV2: {
      __type: "CheckoutCompleteWithCreditCardV2Payload",
      __args: { checkoutId: "ID!", payment: "CreditCardPaymentInputV2!" },
    },
    checkoutCompleteWithTokenizedPayment: {
      __type: "CheckoutCompleteWithTokenizedPaymentPayload",
      __args: { checkoutId: "ID!", payment: "TokenizedPaymentInput!" },
    },
    checkoutCompleteWithTokenizedPaymentV2: {
      __type: "CheckoutCompleteWithTokenizedPaymentV2Payload",
      __args: { checkoutId: "ID!", payment: "TokenizedPaymentInputV2!" },
    },
    checkoutCompleteWithTokenizedPaymentV3: {
      __type: "CheckoutCompleteWithTokenizedPaymentV3Payload",
      __args: { checkoutId: "ID!", payment: "TokenizedPaymentInputV3!" },
    },
    checkoutCreate: {
      __type: "CheckoutCreatePayload",
      __args: { input: "CheckoutCreateInput!" },
    },
    checkoutCustomerAssociate: {
      __type: "CheckoutCustomerAssociatePayload",
      __args: { checkoutId: "ID!", customerAccessToken: "String!" },
    },
    checkoutCustomerAssociateV2: {
      __type: "CheckoutCustomerAssociateV2Payload",
      __args: { checkoutId: "ID!", customerAccessToken: "String!" },
    },
    checkoutCustomerDisassociate: {
      __type: "CheckoutCustomerDisassociatePayload",
      __args: { checkoutId: "ID!" },
    },
    checkoutCustomerDisassociateV2: {
      __type: "CheckoutCustomerDisassociateV2Payload",
      __args: { checkoutId: "ID!" },
    },
    checkoutDiscountCodeApply: {
      __type: "CheckoutDiscountCodeApplyPayload",
      __args: { discountCode: "String!", checkoutId: "ID!" },
    },
    checkoutDiscountCodeApplyV2: {
      __type: "CheckoutDiscountCodeApplyV2Payload",
      __args: { discountCode: "String!", checkoutId: "ID!" },
    },
    checkoutDiscountCodeRemove: {
      __type: "CheckoutDiscountCodeRemovePayload",
      __args: { checkoutId: "ID!" },
    },
    checkoutEmailUpdate: {
      __type: "CheckoutEmailUpdatePayload",
      __args: { checkoutId: "ID!", email: "String!" },
    },
    checkoutEmailUpdateV2: {
      __type: "CheckoutEmailUpdateV2Payload",
      __args: { checkoutId: "ID!", email: "String!" },
    },
    checkoutGiftCardApply: {
      __type: "CheckoutGiftCardApplyPayload",
      __args: { giftCardCode: "String!", checkoutId: "ID!" },
    },
    checkoutGiftCardRemove: {
      __type: "CheckoutGiftCardRemovePayload",
      __args: { appliedGiftCardId: "ID!", checkoutId: "ID!" },
    },
    checkoutGiftCardRemoveV2: {
      __type: "CheckoutGiftCardRemoveV2Payload",
      __args: { appliedGiftCardId: "ID!", checkoutId: "ID!" },
    },
    checkoutGiftCardsAppend: {
      __type: "CheckoutGiftCardsAppendPayload",
      __args: { giftCardCodes: "[String!]!", checkoutId: "ID!" },
    },
    checkoutLineItemsAdd: {
      __type: "CheckoutLineItemsAddPayload",
      __args: { lineItems: "[CheckoutLineItemInput!]!", checkoutId: "ID!" },
    },
    checkoutLineItemsRemove: {
      __type: "CheckoutLineItemsRemovePayload",
      __args: { checkoutId: "ID!", lineItemIds: "[ID!]!" },
    },
    checkoutLineItemsReplace: {
      __type: "CheckoutLineItemsReplacePayload",
      __args: { lineItems: "[CheckoutLineItemInput!]!", checkoutId: "ID!" },
    },
    checkoutLineItemsUpdate: {
      __type: "CheckoutLineItemsUpdatePayload",
      __args: {
        checkoutId: "ID!",
        lineItems: "[CheckoutLineItemUpdateInput!]!",
      },
    },
    checkoutShippingAddressUpdate: {
      __type: "CheckoutShippingAddressUpdatePayload",
      __args: { shippingAddress: "MailingAddressInput!", checkoutId: "ID!" },
    },
    checkoutShippingAddressUpdateV2: {
      __type: "CheckoutShippingAddressUpdateV2Payload",
      __args: { shippingAddress: "MailingAddressInput!", checkoutId: "ID!" },
    },
    checkoutShippingLineUpdate: {
      __type: "CheckoutShippingLineUpdatePayload",
      __args: { checkoutId: "ID!", shippingRateHandle: "String!" },
    },
    customerAccessTokenCreate: {
      __type: "CustomerAccessTokenCreatePayload",
      __args: { input: "CustomerAccessTokenCreateInput!" },
    },
    customerAccessTokenCreateWithMultipass: {
      __type: "CustomerAccessTokenCreateWithMultipassPayload",
      __args: { multipassToken: "String!" },
    },
    customerAccessTokenDelete: {
      __type: "CustomerAccessTokenDeletePayload",
      __args: { customerAccessToken: "String!" },
    },
    customerAccessTokenRenew: {
      __type: "CustomerAccessTokenRenewPayload",
      __args: { customerAccessToken: "String!" },
    },
    customerActivate: {
      __type: "CustomerActivatePayload",
      __args: { id: "ID!", input: "CustomerActivateInput!" },
    },
    customerActivateByUrl: {
      __type: "CustomerActivateByUrlPayload",
      __args: { activationUrl: "URL!", password: "String!" },
    },
    customerAddressCreate: {
      __type: "CustomerAddressCreatePayload",
      __args: {
        customerAccessToken: "String!",
        address: "MailingAddressInput!",
      },
    },
    customerAddressDelete: {
      __type: "CustomerAddressDeletePayload",
      __args: { id: "ID!", customerAccessToken: "String!" },
    },
    customerAddressUpdate: {
      __type: "CustomerAddressUpdatePayload",
      __args: {
        customerAccessToken: "String!",
        id: "ID!",
        address: "MailingAddressInput!",
      },
    },
    customerCreate: {
      __type: "CustomerCreatePayload",
      __args: { input: "CustomerCreateInput!" },
    },
    customerDefaultAddressUpdate: {
      __type: "CustomerDefaultAddressUpdatePayload",
      __args: { customerAccessToken: "String!", addressId: "ID!" },
    },
    customerRecover: {
      __type: "CustomerRecoverPayload",
      __args: { email: "String!" },
    },
    customerReset: {
      __type: "CustomerResetPayload",
      __args: { id: "ID!", input: "CustomerResetInput!" },
    },
    customerResetByUrl: {
      __type: "CustomerResetByUrlPayload",
      __args: { resetUrl: "URL!", password: "String!" },
    },
    customerUpdate: {
      __type: "CustomerUpdatePayload",
      __args: {
        customerAccessToken: "String!",
        customer: "CustomerUpdateInput!",
      },
    },
  },
  subscription: {},
  ApiVersion: {
    __typename: { __type: "String!" },
    displayName: { __type: "String!" },
    handle: { __type: "String!" },
    supported: { __type: "Boolean!" },
  },
  AppliedGiftCard: {
    __typename: { __type: "String!" },
    amountUsed: { __type: "Money!" },
    amountUsedV2: { __type: "MoneyV2!" },
    balance: { __type: "Money!" },
    balanceV2: { __type: "MoneyV2!" },
    id: { __type: "ID!" },
    lastCharacters: { __type: "String!" },
    presentmentAmountUsed: { __type: "MoneyV2!" },
  },
  Article: {
    __typename: { __type: "String!" },
    author: { __type: "ArticleAuthor!" },
    authorV2: { __type: "ArticleAuthor" },
    blog: { __type: "Blog!" },
    comments: {
      __type: "CommentConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    content: { __type: "String!", __args: { truncateAt: "Int" } },
    contentHtml: { __type: "HTML!" },
    excerpt: { __type: "String", __args: { truncateAt: "Int" } },
    excerptHtml: { __type: "HTML" },
    handle: { __type: "String!" },
    id: { __type: "ID!" },
    image: {
      __type: "Image",
      __args: {
        maxWidth: "Int",
        maxHeight: "Int",
        crop: "CropRegion",
        scale: "Int",
      },
    },
    publishedAt: { __type: "DateTime!" },
    seo: { __type: "SEO" },
    tags: { __type: "[String!]!" },
    title: { __type: "String!" },
    url: { __type: "URL!" },
  },
  ArticleAuthor: {
    __typename: { __type: "String!" },
    bio: { __type: "String" },
    email: { __type: "String!" },
    firstName: { __type: "String!" },
    lastName: { __type: "String!" },
    name: { __type: "String!" },
  },
  ArticleConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ArticleEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ArticleEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Article!" },
  },
  Attribute: {
    __typename: { __type: "String!" },
    key: { __type: "String!" },
    value: { __type: "String" },
  },
  AttributeInput: { key: { __type: "String!" }, value: { __type: "String!" } },
  AutomaticDiscountApplication: {
    __typename: { __type: "String!" },
    allocationMethod: { __type: "DiscountApplicationAllocationMethod!" },
    targetSelection: { __type: "DiscountApplicationTargetSelection!" },
    targetType: { __type: "DiscountApplicationTargetType!" },
    title: { __type: "String!" },
    value: { __type: "PricingValue!" },
  },
  AvailableShippingRates: {
    __typename: { __type: "String!" },
    ready: { __type: "Boolean!" },
    shippingRates: { __type: "[ShippingRate!]" },
  },
  Blog: {
    __typename: { __type: "String!" },
    articleByHandle: { __type: "Article", __args: { handle: "String!" } },
    articles: {
      __type: "ArticleConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "ArticleSortKeys",
        query: "String",
      },
    },
    authors: { __type: "[ArticleAuthor!]!" },
    handle: { __type: "String!" },
    id: { __type: "ID!" },
    title: { __type: "String!" },
    url: { __type: "URL!" },
  },
  BlogConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[BlogEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  BlogEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Blog!" },
  },
  Checkout: {
    __typename: { __type: "String!" },
    appliedGiftCards: { __type: "[AppliedGiftCard!]!" },
    availableShippingRates: { __type: "AvailableShippingRates" },
    completedAt: { __type: "DateTime" },
    createdAt: { __type: "DateTime!" },
    currencyCode: { __type: "CurrencyCode!" },
    customAttributes: { __type: "[Attribute!]!" },
    customer: { __type: "Customer" },
    discountApplications: {
      __type: "DiscountApplicationConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    email: { __type: "String" },
    id: { __type: "ID!" },
    lineItems: {
      __type: "CheckoutLineItemConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    lineItemsSubtotalPrice: { __type: "MoneyV2!" },
    note: { __type: "String" },
    order: { __type: "Order" },
    orderStatusUrl: { __type: "URL" },
    paymentDue: { __type: "Money!" },
    paymentDueV2: { __type: "MoneyV2!" },
    ready: { __type: "Boolean!" },
    requiresShipping: { __type: "Boolean!" },
    shippingAddress: { __type: "MailingAddress" },
    shippingDiscountAllocations: { __type: "[DiscountAllocation!]!" },
    shippingLine: { __type: "ShippingRate" },
    subtotalPrice: { __type: "Money!" },
    subtotalPriceV2: { __type: "MoneyV2!" },
    taxExempt: { __type: "Boolean!" },
    taxesIncluded: { __type: "Boolean!" },
    totalPrice: { __type: "Money!" },
    totalPriceV2: { __type: "MoneyV2!" },
    totalTax: { __type: "Money!" },
    totalTaxV2: { __type: "MoneyV2!" },
    updatedAt: { __type: "DateTime!" },
    webUrl: { __type: "URL!" },
  },
  CheckoutAttributesUpdateInput: {
    note: { __type: "String" },
    customAttributes: { __type: "[AttributeInput!]" },
    allowPartialAddresses: { __type: "Boolean" },
  },
  CheckoutAttributesUpdatePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutAttributesUpdateV2Input: {
    note: { __type: "String" },
    customAttributes: { __type: "[AttributeInput!]" },
    allowPartialAddresses: { __type: "Boolean" },
  },
  CheckoutAttributesUpdateV2Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCompleteFreePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCompleteWithCreditCardPayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    payment: { __type: "Payment" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCompleteWithCreditCardV2Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    payment: { __type: "Payment" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCompleteWithTokenizedPaymentPayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    payment: { __type: "Payment" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCompleteWithTokenizedPaymentV2Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    payment: { __type: "Payment" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCompleteWithTokenizedPaymentV3Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    payment: { __type: "Payment" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCreateInput: {
    email: { __type: "String" },
    lineItems: { __type: "[CheckoutLineItemInput!]" },
    shippingAddress: { __type: "MailingAddressInput" },
    note: { __type: "String" },
    customAttributes: { __type: "[AttributeInput!]" },
    allowPartialAddresses: { __type: "Boolean" },
    presentmentCurrencyCode: { __type: "CurrencyCode" },
  },
  CheckoutCreatePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCustomerAssociatePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    customer: { __type: "Customer" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCustomerAssociateV2Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    customer: { __type: "Customer" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCustomerDisassociatePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutCustomerDisassociateV2Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutDiscountCodeApplyPayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutDiscountCodeApplyV2Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutDiscountCodeRemovePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutEmailUpdatePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutEmailUpdateV2Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutGiftCardApplyPayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutGiftCardRemovePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutGiftCardRemoveV2Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutGiftCardsAppendPayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutLineItem: {
    __typename: { __type: "String!" },
    customAttributes: { __type: "[Attribute!]!" },
    discountAllocations: { __type: "[DiscountAllocation!]!" },
    id: { __type: "ID!" },
    quantity: { __type: "Int!" },
    title: { __type: "String!" },
    unitPrice: { __type: "MoneyV2" },
    variant: { __type: "ProductVariant" },
  },
  CheckoutLineItemConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[CheckoutLineItemEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  CheckoutLineItemEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "CheckoutLineItem!" },
  },
  CheckoutLineItemInput: {
    customAttributes: { __type: "[AttributeInput!]" },
    quantity: { __type: "Int!" },
    variantId: { __type: "ID!" },
  },
  CheckoutLineItemUpdateInput: {
    id: { __type: "ID" },
    variantId: { __type: "ID" },
    quantity: { __type: "Int" },
    customAttributes: { __type: "[AttributeInput!]" },
  },
  CheckoutLineItemsAddPayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutLineItemsRemovePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutLineItemsReplacePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    userErrors: { __type: "[CheckoutUserError!]!" },
  },
  CheckoutLineItemsUpdatePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutShippingAddressUpdatePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout!" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutShippingAddressUpdateV2Payload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutShippingLineUpdatePayload: {
    __typename: { __type: "String!" },
    checkout: { __type: "Checkout" },
    checkoutUserErrors: { __type: "[CheckoutUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CheckoutUserError: {
    __typename: { __type: "String!" },
    code: { __type: "CheckoutErrorCode" },
    field: { __type: "[String!]" },
    message: { __type: "String!" },
  },
  Collection: {
    __typename: { __type: "String!" },
    description: { __type: "String!", __args: { truncateAt: "Int" } },
    descriptionHtml: { __type: "HTML!" },
    handle: { __type: "String!" },
    id: { __type: "ID!" },
    image: {
      __type: "Image",
      __args: {
        maxWidth: "Int",
        maxHeight: "Int",
        crop: "CropRegion",
        scale: "Int",
      },
    },
    products: {
      __type: "ProductConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "ProductCollectionSortKeys",
      },
    },
    title: { __type: "String!" },
    updatedAt: { __type: "DateTime!" },
  },
  CollectionConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[CollectionEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  CollectionEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Collection!" },
  },
  Comment: {
    __typename: { __type: "String!" },
    author: { __type: "CommentAuthor!" },
    content: { __type: "String!", __args: { truncateAt: "Int" } },
    contentHtml: { __type: "HTML!" },
    id: { __type: "ID!" },
  },
  CommentAuthor: {
    __typename: { __type: "String!" },
    email: { __type: "String!" },
    name: { __type: "String!" },
  },
  CommentConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[CommentEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  CommentEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Comment!" },
  },
  CreditCard: {
    __typename: { __type: "String!" },
    brand: { __type: "String" },
    expiryMonth: { __type: "Int" },
    expiryYear: { __type: "Int" },
    firstDigits: { __type: "String" },
    firstName: { __type: "String" },
    lastDigits: { __type: "String" },
    lastName: { __type: "String" },
    maskedNumber: { __type: "String" },
  },
  CreditCardPaymentInput: {
    amount: { __type: "Money!" },
    idempotencyKey: { __type: "String!" },
    billingAddress: { __type: "MailingAddressInput!" },
    vaultId: { __type: "String!" },
    test: { __type: "Boolean" },
  },
  CreditCardPaymentInputV2: {
    paymentAmount: { __type: "MoneyInput!" },
    idempotencyKey: { __type: "String!" },
    billingAddress: { __type: "MailingAddressInput!" },
    vaultId: { __type: "String!" },
    test: { __type: "Boolean" },
  },
  Customer: {
    __typename: { __type: "String!" },
    acceptsMarketing: { __type: "Boolean!" },
    addresses: {
      __type: "MailingAddressConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    createdAt: { __type: "DateTime!" },
    defaultAddress: { __type: "MailingAddress" },
    displayName: { __type: "String!" },
    email: { __type: "String" },
    firstName: { __type: "String" },
    id: { __type: "ID!" },
    lastIncompleteCheckout: { __type: "Checkout" },
    lastName: { __type: "String" },
    orders: {
      __type: "OrderConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "OrderSortKeys",
        query: "String",
      },
    },
    phone: { __type: "String" },
    tags: { __type: "[String!]!" },
    updatedAt: { __type: "DateTime!" },
  },
  CustomerAccessToken: {
    __typename: { __type: "String!" },
    accessToken: { __type: "String!" },
    expiresAt: { __type: "DateTime!" },
  },
  CustomerAccessTokenCreateInput: {
    email: { __type: "String!" },
    password: { __type: "String!" },
  },
  CustomerAccessTokenCreatePayload: {
    __typename: { __type: "String!" },
    customerAccessToken: { __type: "CustomerAccessToken" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerAccessTokenCreateWithMultipassPayload: {
    __typename: { __type: "String!" },
    customerAccessToken: { __type: "CustomerAccessToken" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
  },
  CustomerAccessTokenDeletePayload: {
    __typename: { __type: "String!" },
    deletedAccessToken: { __type: "String" },
    deletedCustomerAccessTokenId: { __type: "String" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerAccessTokenRenewPayload: {
    __typename: { __type: "String!" },
    customerAccessToken: { __type: "CustomerAccessToken" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerActivateByUrlPayload: {
    __typename: { __type: "String!" },
    customer: { __type: "Customer" },
    customerAccessToken: { __type: "CustomerAccessToken" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
  },
  CustomerActivateInput: {
    activationToken: { __type: "String!" },
    password: { __type: "String!" },
  },
  CustomerActivatePayload: {
    __typename: { __type: "String!" },
    customer: { __type: "Customer" },
    customerAccessToken: { __type: "CustomerAccessToken" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerAddressCreatePayload: {
    __typename: { __type: "String!" },
    customerAddress: { __type: "MailingAddress" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerAddressDeletePayload: {
    __typename: { __type: "String!" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    deletedCustomerAddressId: { __type: "String" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerAddressUpdatePayload: {
    __typename: { __type: "String!" },
    customerAddress: { __type: "MailingAddress" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerCreateInput: {
    firstName: { __type: "String" },
    lastName: { __type: "String" },
    email: { __type: "String!" },
    phone: { __type: "String" },
    password: { __type: "String!" },
    acceptsMarketing: { __type: "Boolean" },
  },
  CustomerCreatePayload: {
    __typename: { __type: "String!" },
    customer: { __type: "Customer" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerDefaultAddressUpdatePayload: {
    __typename: { __type: "String!" },
    customer: { __type: "Customer" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerRecoverPayload: {
    __typename: { __type: "String!" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerResetByUrlPayload: {
    __typename: { __type: "String!" },
    customer: { __type: "Customer" },
    customerAccessToken: { __type: "CustomerAccessToken" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerResetInput: {
    resetToken: { __type: "String!" },
    password: { __type: "String!" },
  },
  CustomerResetPayload: {
    __typename: { __type: "String!" },
    customer: { __type: "Customer" },
    customerAccessToken: { __type: "CustomerAccessToken" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerUpdateInput: {
    firstName: { __type: "String" },
    lastName: { __type: "String" },
    email: { __type: "String" },
    phone: { __type: "String" },
    password: { __type: "String" },
    acceptsMarketing: { __type: "Boolean" },
  },
  CustomerUpdatePayload: {
    __typename: { __type: "String!" },
    customer: { __type: "Customer" },
    customerAccessToken: { __type: "CustomerAccessToken" },
    customerUserErrors: { __type: "[CustomerUserError!]!" },
    userErrors: { __type: "[UserError!]!" },
  },
  CustomerUserError: {
    __typename: { __type: "String!" },
    code: { __type: "CustomerErrorCode" },
    field: { __type: "[String!]" },
    message: { __type: "String!" },
  },
  DiscountAllocation: {
    __typename: { __type: "String!" },
    allocatedAmount: { __type: "MoneyV2!" },
    discountApplication: { __type: "DiscountApplication!" },
  },
  DiscountApplication: {
    __typename: { __type: "String!" },
    allocationMethod: { __type: "DiscountApplicationAllocationMethod!" },
    targetSelection: { __type: "DiscountApplicationTargetSelection!" },
    targetType: { __type: "DiscountApplicationTargetType!" },
    value: { __type: "PricingValue!" },
  },
  DiscountApplicationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[DiscountApplicationEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  DiscountApplicationEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "DiscountApplication!" },
  },
  DiscountCodeApplication: {
    __typename: { __type: "String!" },
    allocationMethod: { __type: "DiscountApplicationAllocationMethod!" },
    applicable: { __type: "Boolean!" },
    code: { __type: "String!" },
    targetSelection: { __type: "DiscountApplicationTargetSelection!" },
    targetType: { __type: "DiscountApplicationTargetType!" },
    value: { __type: "PricingValue!" },
  },
  DisplayableError: {
    __typename: { __type: "String!" },
    field: { __type: "[String!]" },
    message: { __type: "String!" },
  },
  Domain: {
    __typename: { __type: "String!" },
    host: { __type: "String!" },
    sslEnabled: { __type: "Boolean!" },
    url: { __type: "URL!" },
  },
  ExternalVideo: {
    __typename: { __type: "String!" },
    alt: { __type: "String" },
    embeddedUrl: { __type: "URL!" },
    id: { __type: "ID!" },
    mediaContentType: { __type: "MediaContentType!" },
    previewImage: { __type: "Image" },
  },
  Fulfillment: {
    __typename: { __type: "String!" },
    fulfillmentLineItems: {
      __type: "FulfillmentLineItemConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    trackingCompany: { __type: "String" },
    trackingInfo: {
      __type: "[FulfillmentTrackingInfo!]!",
      __args: { first: "Int" },
    },
  },
  FulfillmentLineItem: {
    __typename: { __type: "String!" },
    lineItem: { __type: "OrderLineItem!" },
    quantity: { __type: "Int!" },
  },
  FulfillmentLineItemConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FulfillmentLineItemEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  FulfillmentLineItemEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "FulfillmentLineItem!" },
  },
  FulfillmentTrackingInfo: {
    __typename: { __type: "String!" },
    number: { __type: "String" },
    url: { __type: "URL" },
  },
  HasMetafields: {
    __typename: { __type: "String!" },
    metafield: {
      __type: "Metafield",
      __args: { namespace: "String!", key: "String!" },
    },
    metafields: {
      __type: "MetafieldConnection!",
      __args: {
        namespace: "String",
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
  },
  Image: {
    __typename: { __type: "String!" },
    altText: { __type: "String" },
    id: { __type: "ID" },
    originalSrc: { __type: "URL!" },
    src: { __type: "URL!" },
    transformedSrc: {
      __type: "URL!",
      __args: {
        maxWidth: "Int",
        maxHeight: "Int",
        crop: "CropRegion",
        scale: "Int",
        preferredContentType: "ImageContentType",
      },
    },
  },
  ImageConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ImageEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ImageEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Image!" },
  },
  MailingAddress: {
    __typename: { __type: "String!" },
    address1: { __type: "String" },
    address2: { __type: "String" },
    city: { __type: "String" },
    company: { __type: "String" },
    country: { __type: "String" },
    countryCode: { __type: "String" },
    countryCodeV2: { __type: "CountryCode" },
    firstName: { __type: "String" },
    formatted: {
      __type: "[String!]!",
      __args: { withName: "Boolean", withCompany: "Boolean" },
    },
    formattedArea: { __type: "String" },
    id: { __type: "ID!" },
    lastName: { __type: "String" },
    latitude: { __type: "Float" },
    longitude: { __type: "Float" },
    name: { __type: "String" },
    phone: { __type: "String" },
    province: { __type: "String" },
    provinceCode: { __type: "String" },
    zip: { __type: "String" },
  },
  MailingAddressConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MailingAddressEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  MailingAddressEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "MailingAddress!" },
  },
  MailingAddressInput: {
    address1: { __type: "String" },
    address2: { __type: "String" },
    city: { __type: "String" },
    company: { __type: "String" },
    country: { __type: "String" },
    firstName: { __type: "String" },
    lastName: { __type: "String" },
    phone: { __type: "String" },
    province: { __type: "String" },
    zip: { __type: "String" },
  },
  ManualDiscountApplication: {
    __typename: { __type: "String!" },
    allocationMethod: { __type: "DiscountApplicationAllocationMethod!" },
    description: { __type: "String" },
    targetSelection: { __type: "DiscountApplicationTargetSelection!" },
    targetType: { __type: "DiscountApplicationTargetType!" },
    title: { __type: "String!" },
    value: { __type: "PricingValue!" },
  },
  Media: {
    __typename: { __type: "String!" },
    alt: { __type: "String" },
    mediaContentType: { __type: "MediaContentType!" },
    previewImage: { __type: "Image" },
  },
  MediaConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MediaEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  MediaEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Media!" },
  },
  MediaImage: {
    __typename: { __type: "String!" },
    alt: { __type: "String" },
    id: { __type: "ID!" },
    image: { __type: "Image" },
    mediaContentType: { __type: "MediaContentType!" },
    previewImage: { __type: "Image" },
  },
  Metafield: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    key: { __type: "String!" },
    namespace: { __type: "String!" },
    parentResource: { __type: "MetafieldParentResource!" },
    updatedAt: { __type: "DateTime!" },
    value: { __type: "String!" },
    valueType: { __type: "MetafieldValueType!" },
  },
  MetafieldConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MetafieldEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  MetafieldEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Metafield!" },
  },
  Model3d: {
    __typename: { __type: "String!" },
    alt: { __type: "String" },
    id: { __type: "ID!" },
    mediaContentType: { __type: "MediaContentType!" },
    previewImage: { __type: "Image" },
    sources: { __type: "[Model3dSource!]!" },
  },
  Model3dSource: {
    __typename: { __type: "String!" },
    filesize: { __type: "Int!" },
    format: { __type: "String!" },
    mimeType: { __type: "String!" },
    url: { __type: "String!" },
  },
  MoneyInput: {
    amount: { __type: "Decimal!" },
    currencyCode: { __type: "CurrencyCode!" },
  },
  MoneyV2: {
    __typename: { __type: "String!" },
    amount: { __type: "Decimal!" },
    currencyCode: { __type: "CurrencyCode!" },
  },
  MoneyV2Connection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MoneyV2Edge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  MoneyV2Edge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "MoneyV2!" },
  },
  Node: { __typename: { __type: "String!" }, id: { __type: "ID!" } },
  Order: {
    __typename: { __type: "String!" },
    cancelReason: { __type: "OrderCancelReason" },
    canceledAt: { __type: "DateTime" },
    currencyCode: { __type: "CurrencyCode!" },
    currentSubtotalPrice: { __type: "MoneyV2!" },
    currentTotalPrice: { __type: "MoneyV2!" },
    currentTotalTax: { __type: "MoneyV2!" },
    customerLocale: { __type: "String" },
    customerUrl: { __type: "URL" },
    discountApplications: {
      __type: "DiscountApplicationConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    edited: { __type: "Boolean!" },
    email: { __type: "String" },
    financialStatus: { __type: "OrderFinancialStatus" },
    fulfillmentStatus: { __type: "OrderFulfillmentStatus!" },
    id: { __type: "ID!" },
    lineItems: {
      __type: "OrderLineItemConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    name: { __type: "String!" },
    orderNumber: { __type: "Int!" },
    originalTotalPrice: { __type: "MoneyV2!" },
    phone: { __type: "String" },
    processedAt: { __type: "DateTime!" },
    shippingAddress: { __type: "MailingAddress" },
    shippingDiscountAllocations: { __type: "[DiscountAllocation!]!" },
    statusUrl: { __type: "URL!" },
    subtotalPrice: { __type: "Money" },
    subtotalPriceV2: { __type: "MoneyV2" },
    successfulFulfillments: {
      __type: "[Fulfillment!]",
      __args: { first: "Int" },
    },
    totalPrice: { __type: "Money!" },
    totalPriceV2: { __type: "MoneyV2!" },
    totalRefunded: { __type: "Money!" },
    totalRefundedV2: { __type: "MoneyV2!" },
    totalShippingPrice: { __type: "Money!" },
    totalShippingPriceV2: { __type: "MoneyV2!" },
    totalTax: { __type: "Money" },
    totalTaxV2: { __type: "MoneyV2" },
  },
  OrderConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[OrderEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  OrderEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Order!" },
  },
  OrderLineItem: {
    __typename: { __type: "String!" },
    currentQuantity: { __type: "Int!" },
    customAttributes: { __type: "[Attribute!]!" },
    discountAllocations: { __type: "[DiscountAllocation!]!" },
    discountedTotalPrice: { __type: "MoneyV2!" },
    originalTotalPrice: { __type: "MoneyV2!" },
    quantity: { __type: "Int!" },
    title: { __type: "String!" },
    variant: { __type: "ProductVariant" },
  },
  OrderLineItemConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[OrderLineItemEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  OrderLineItemEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "OrderLineItem!" },
  },
  Page: {
    __typename: { __type: "String!" },
    body: { __type: "HTML!" },
    bodySummary: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    handle: { __type: "String!" },
    id: { __type: "ID!" },
    title: { __type: "String!" },
    updatedAt: { __type: "DateTime!" },
    url: { __type: "URL!" },
  },
  PageConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PageEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  PageEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Page!" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
  },
  Payment: {
    __typename: { __type: "String!" },
    amount: { __type: "Money!" },
    amountV2: { __type: "MoneyV2!" },
    billingAddress: { __type: "MailingAddress" },
    checkout: { __type: "Checkout!" },
    creditCard: { __type: "CreditCard" },
    errorMessage: { __type: "String" },
    id: { __type: "ID!" },
    idempotencyKey: { __type: "String" },
    nextActionUrl: { __type: "URL" },
    ready: { __type: "Boolean!" },
    test: { __type: "Boolean!" },
    transaction: { __type: "Transaction" },
  },
  PaymentSettings: {
    __typename: { __type: "String!" },
    acceptedCardBrands: { __type: "[CardBrand!]!" },
    cardVaultUrl: { __type: "URL!" },
    countryCode: { __type: "CountryCode!" },
    currencyCode: { __type: "CurrencyCode!" },
    enabledPresentmentCurrencies: { __type: "[CurrencyCode!]!" },
    shopifyPaymentsAccountId: { __type: "String" },
    supportedDigitalWallets: { __type: "[DigitalWallet!]!" },
  },
  PricingPercentageValue: {
    __typename: { __type: "String!" },
    percentage: { __type: "Float!" },
  },
  Product: {
    __typename: { __type: "String!" },
    availableForSale: { __type: "Boolean!" },
    collections: {
      __type: "CollectionConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    compareAtPriceRange: { __type: "ProductPriceRange!" },
    createdAt: { __type: "DateTime!" },
    description: { __type: "String!", __args: { truncateAt: "Int" } },
    descriptionHtml: { __type: "HTML!" },
    handle: { __type: "String!" },
    id: { __type: "ID!" },
    images: {
      __type: "ImageConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "ProductImageSortKeys",
        maxWidth: "Int",
        maxHeight: "Int",
        crop: "CropRegion",
        scale: "Int",
      },
    },
    media: {
      __type: "MediaConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    metafield: {
      __type: "Metafield",
      __args: { namespace: "String!", key: "String!" },
    },
    metafields: {
      __type: "MetafieldConnection!",
      __args: {
        namespace: "String",
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    onlineStoreUrl: { __type: "URL" },
    options: { __type: "[ProductOption!]!", __args: { first: "Int" } },
    presentmentPriceRanges: {
      __type: "ProductPriceRangeConnection!",
      __args: {
        presentmentCurrencies: "[CurrencyCode!]",
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    priceRange: { __type: "ProductPriceRange!" },
    productType: { __type: "String!" },
    publishedAt: { __type: "DateTime!" },
    tags: { __type: "[String!]!" },
    title: { __type: "String!" },
    totalInventory: { __type: "Int" },
    updatedAt: { __type: "DateTime!" },
    variantBySelectedOptions: {
      __type: "ProductVariant",
      __args: { selectedOptions: "[SelectedOptionInput!]!" },
    },
    variants: {
      __type: "ProductVariantConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "ProductVariantSortKeys",
      },
    },
    vendor: { __type: "String!" },
  },
  ProductConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ProductEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ProductEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Product!" },
  },
  ProductOption: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    values: { __type: "[String!]!" },
  },
  ProductPriceRange: {
    __typename: { __type: "String!" },
    maxVariantPrice: { __type: "MoneyV2!" },
    minVariantPrice: { __type: "MoneyV2!" },
  },
  ProductPriceRangeConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ProductPriceRangeEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ProductPriceRangeEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ProductPriceRange!" },
  },
  ProductVariant: {
    __typename: { __type: "String!" },
    available: { __type: "Boolean" },
    availableForSale: { __type: "Boolean!" },
    compareAtPrice: { __type: "Money" },
    compareAtPriceV2: { __type: "MoneyV2" },
    currentlyNotInStock: { __type: "Boolean!" },
    id: { __type: "ID!" },
    image: {
      __type: "Image",
      __args: {
        maxWidth: "Int",
        maxHeight: "Int",
        crop: "CropRegion",
        scale: "Int",
      },
    },
    metafield: {
      __type: "Metafield",
      __args: { namespace: "String!", key: "String!" },
    },
    metafields: {
      __type: "MetafieldConnection!",
      __args: {
        namespace: "String",
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    presentmentPrices: {
      __type: "ProductVariantPricePairConnection!",
      __args: {
        presentmentCurrencies: "[CurrencyCode!]",
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    presentmentUnitPrices: {
      __type: "MoneyV2Connection!",
      __args: {
        presentmentCurrencies: "[CurrencyCode!]",
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
      },
    },
    price: { __type: "Money!" },
    priceV2: { __type: "MoneyV2!" },
    product: { __type: "Product!" },
    quantityAvailable: { __type: "Int" },
    requiresShipping: { __type: "Boolean!" },
    selectedOptions: { __type: "[SelectedOption!]!" },
    sku: { __type: "String" },
    title: { __type: "String!" },
    unitPrice: { __type: "MoneyV2" },
    unitPriceMeasurement: { __type: "UnitPriceMeasurement" },
    weight: { __type: "Float" },
    weightUnit: { __type: "WeightUnit!" },
  },
  ProductVariantConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ProductVariantEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ProductVariantEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ProductVariant!" },
  },
  ProductVariantPricePair: {
    __typename: { __type: "String!" },
    compareAtPrice: { __type: "MoneyV2" },
    price: { __type: "MoneyV2!" },
  },
  ProductVariantPricePairConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ProductVariantPricePairEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ProductVariantPricePairEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ProductVariantPricePair!" },
  },
  SEO: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    title: { __type: "String" },
  },
  ScriptDiscountApplication: {
    __typename: { __type: "String!" },
    allocationMethod: { __type: "DiscountApplicationAllocationMethod!" },
    description: { __type: "String!" },
    targetSelection: { __type: "DiscountApplicationTargetSelection!" },
    targetType: { __type: "DiscountApplicationTargetType!" },
    title: { __type: "String!" },
    value: { __type: "PricingValue!" },
  },
  SelectedOption: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    value: { __type: "String!" },
  },
  SelectedOptionInput: {
    name: { __type: "String!" },
    value: { __type: "String!" },
  },
  ShippingRate: {
    __typename: { __type: "String!" },
    handle: { __type: "String!" },
    price: { __type: "Money!" },
    priceV2: { __type: "MoneyV2!" },
    title: { __type: "String!" },
  },
  Shop: {
    __typename: { __type: "String!" },
    articles: {
      __type: "ArticleConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "ArticleSortKeys",
        query: "String",
      },
    },
    blogs: {
      __type: "BlogConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "BlogSortKeys",
        query: "String",
      },
    },
    collectionByHandle: { __type: "Collection", __args: { handle: "String!" } },
    collections: {
      __type: "CollectionConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "CollectionSortKeys",
        query: "String",
      },
    },
    currencyCode: { __type: "CurrencyCode!" },
    description: { __type: "String" },
    moneyFormat: { __type: "String!" },
    name: { __type: "String!" },
    paymentSettings: { __type: "PaymentSettings!" },
    primaryDomain: { __type: "Domain!" },
    privacyPolicy: { __type: "ShopPolicy" },
    productByHandle: { __type: "Product", __args: { handle: "String!" } },
    productTags: { __type: "StringConnection!", __args: { first: "Int!" } },
    productTypes: { __type: "StringConnection!", __args: { first: "Int!" } },
    products: {
      __type: "ProductConnection!",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        reverse: "Boolean",
        sortKey: "ProductSortKeys",
        query: "String",
      },
    },
    refundPolicy: { __type: "ShopPolicy" },
    shipsToCountries: { __type: "[CountryCode!]!" },
    shopifyPaymentsAccountId: { __type: "String" },
    termsOfService: { __type: "ShopPolicy" },
  },
  ShopPolicy: {
    __typename: { __type: "String!" },
    body: { __type: "String!" },
    handle: { __type: "String!" },
    id: { __type: "ID!" },
    title: { __type: "String!" },
    url: { __type: "URL!" },
  },
  StringConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[StringEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  StringEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "String!" },
  },
  TokenizedPaymentInput: {
    amount: { __type: "Money!" },
    idempotencyKey: { __type: "String!" },
    billingAddress: { __type: "MailingAddressInput!" },
    type: { __type: "String!" },
    paymentData: { __type: "String!" },
    test: { __type: "Boolean" },
    identifier: { __type: "String" },
  },
  TokenizedPaymentInputV2: {
    paymentAmount: { __type: "MoneyInput!" },
    idempotencyKey: { __type: "String!" },
    billingAddress: { __type: "MailingAddressInput!" },
    paymentData: { __type: "String!" },
    test: { __type: "Boolean" },
    identifier: { __type: "String" },
    type: { __type: "String!" },
  },
  TokenizedPaymentInputV3: {
    paymentAmount: { __type: "MoneyInput!" },
    idempotencyKey: { __type: "String!" },
    billingAddress: { __type: "MailingAddressInput!" },
    paymentData: { __type: "String!" },
    test: { __type: "Boolean" },
    identifier: { __type: "String" },
    type: { __type: "PaymentTokenType!" },
  },
  Transaction: {
    __typename: { __type: "String!" },
    amount: { __type: "Money!" },
    amountV2: { __type: "MoneyV2!" },
    kind: { __type: "TransactionKind!" },
    status: { __type: "TransactionStatus!" },
    statusV2: { __type: "TransactionStatus" },
    test: { __type: "Boolean!" },
  },
  UnitPriceMeasurement: {
    __typename: { __type: "String!" },
    measuredType: { __type: "UnitPriceMeasurementMeasuredType" },
    quantityUnit: { __type: "UnitPriceMeasurementMeasuredUnit" },
    quantityValue: { __type: "Float!" },
    referenceUnit: { __type: "UnitPriceMeasurementMeasuredUnit" },
    referenceValue: { __type: "Int!" },
  },
  UserError: {
    __typename: { __type: "String!" },
    field: { __type: "[String!]" },
    message: { __type: "String!" },
  },
  Video: {
    __typename: { __type: "String!" },
    alt: { __type: "String" },
    id: { __type: "ID!" },
    mediaContentType: { __type: "MediaContentType!" },
    previewImage: { __type: "Image" },
    sources: { __type: "[VideoSource!]!" },
  },
  VideoSource: {
    __typename: { __type: "String!" },
    format: { __type: "String!" },
    height: { __type: "Int!" },
    mimeType: { __type: "String!" },
    url: { __type: "String!" },
    width: { __type: "Int!" },
  },
  [SchemaUnionsKey]: {
    MetafieldParentResource: ["Product", "ProductVariant"],
    PricingValue: ["MoneyV2", "PricingPercentageValue"],
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  articles: (args?: {
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    reverse?: Maybe<Scalars["Boolean"]>;
    sortKey?: Maybe<ArticleSortKeys>;
    query?: Maybe<Scalars["String"]>;
  }) => ArticleConnection;
  blogByHandle: (args: { handle: Scalars["String"] }) => Maybe<Blog>;
  blogs: (args?: {
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    reverse?: Maybe<Scalars["Boolean"]>;
    sortKey?: Maybe<BlogSortKeys>;
    query?: Maybe<Scalars["String"]>;
  }) => BlogConnection;
  collectionByHandle: (args: {
    handle: Scalars["String"];
  }) => Maybe<Collection>;
  collections: (args?: {
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    reverse?: Maybe<Scalars["Boolean"]>;
    sortKey?: Maybe<CollectionSortKeys>;
    query?: Maybe<Scalars["String"]>;
  }) => CollectionConnection;
  customer: (args: {
    customerAccessToken: Scalars["String"];
  }) => Maybe<Customer>;
  node: (args: { id: Scalars["ID"] }) => Maybe<Node>;
  nodes: (args: { ids: Array<Scalars["ID"]> }) => Array<Maybe<Node>>;
  pageByHandle: (args: { handle: Scalars["String"] }) => Maybe<Page>;
  pages: (args?: {
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    reverse?: Maybe<Scalars["Boolean"]>;
    sortKey?: Maybe<PageSortKeys>;
    query?: Maybe<Scalars["String"]>;
  }) => PageConnection;
  productByHandle: (args: { handle: Scalars["String"] }) => Maybe<Product>;
  productRecommendations: (args: {
    productId: Scalars["ID"];
  }) => Maybe<Array<Product>>;
  productTags: (args: { first: Scalars["Int"] }) => StringConnection;
  productTypes: (args: { first: Scalars["Int"] }) => StringConnection;
  products: (args?: {
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    last?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    reverse?: Maybe<Scalars["Boolean"]>;
    sortKey?: Maybe<ProductSortKeys>;
    query?: Maybe<Scalars["String"]>;
  }) => ProductConnection;
  publicApiVersions: Array<ApiVersion>;
  shop: Shop;
}

/**
 * The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start.
 */
export interface Mutation {
  __typename: "Mutation" | undefined;
  /**
   * Updates the attributes of a checkout.
   * @deprecated Use `checkoutAttributesUpdateV2` instead
   */
  checkoutAttributesUpdate: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The fields used to update a checkout's attributes.
     */;
    input: CheckoutAttributesUpdateInput;
  }) => Maybe<CheckoutAttributesUpdatePayload>;
  /**
   * Updates the attributes of a checkout.
   */
  checkoutAttributesUpdateV2: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The checkout attributes to update.
     */;
    input: CheckoutAttributesUpdateV2Input;
  }) => Maybe<CheckoutAttributesUpdateV2Payload>;
  /**
   * Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card.
   */
  checkoutCompleteFree: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutCompleteFreePayload>;
  /**
   * Completes a checkout using a credit card token from Shopify's Vault.
   * @deprecated Use `checkoutCompleteWithCreditCardV2` instead
   */
  checkoutCompleteWithCreditCard: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The credit card info to apply as a payment.
     */;
    payment: CreditCardPaymentInput;
  }) => Maybe<CheckoutCompleteWithCreditCardPayload>;
  /**
   * Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://help.shopify.com/api/guides/sales-channel-sdk/getting-started#request-payment-processing).
   */
  checkoutCompleteWithCreditCardV2: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The credit card info to apply as a payment.
     */;
    payment: CreditCardPaymentInputV2;
  }) => Maybe<CheckoutCompleteWithCreditCardV2Payload>;
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV2` instead
   */
  checkoutCompleteWithTokenizedPayment: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The info to apply as a tokenized payment.
     */;
    payment: TokenizedPaymentInput;
  }) => Maybe<CheckoutCompleteWithTokenizedPaymentPayload>;
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV3` instead
   */
  checkoutCompleteWithTokenizedPaymentV2: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The info to apply as a tokenized payment.
     */;
    payment: TokenizedPaymentInputV2;
  }) => Maybe<CheckoutCompleteWithTokenizedPaymentV2Payload>;
  /**
   * Completes a checkout with a tokenized payment.
   */
  checkoutCompleteWithTokenizedPaymentV3: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The info to apply as a tokenized payment.
     */;
    payment: TokenizedPaymentInputV3;
  }) => Maybe<CheckoutCompleteWithTokenizedPaymentV3Payload>;
  /**
   * Creates a new checkout.
   */
  checkoutCreate: (args: {
    /**
     * The fields used to create a checkout.
     */
    input: CheckoutCreateInput;
  }) => Maybe<CheckoutCreatePayload>;
  /**
   * Associates a customer to the checkout.
   * @deprecated Use `checkoutCustomerAssociateV2` instead
   */
  checkoutCustomerAssociate: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The customer access token of the customer to associate.
     */;
    customerAccessToken: Scalars["String"];
  }) => Maybe<CheckoutCustomerAssociatePayload>;
  /**
   * Associates a customer to the checkout.
   */
  checkoutCustomerAssociateV2: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The customer access token of the customer to associate.
     */;
    customerAccessToken: Scalars["String"];
  }) => Maybe<CheckoutCustomerAssociateV2Payload>;
  /**
   * Disassociates the current checkout customer from the checkout.
   * @deprecated Use `checkoutCustomerDisassociateV2` instead
   */
  checkoutCustomerDisassociate: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutCustomerDisassociatePayload>;
  /**
   * Disassociates the current checkout customer from the checkout.
   */
  checkoutCustomerDisassociateV2: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutCustomerDisassociateV2Payload>;
  /**
   * Applies a discount to an existing checkout using a discount code.
   * @deprecated Use `checkoutDiscountCodeApplyV2` instead
   */
  checkoutDiscountCodeApply: (args: {
    /**
     * The discount code to apply to the checkout.
     */
    discountCode: Scalars["String"]
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutDiscountCodeApplyPayload>;
  /**
   * Applies a discount to an existing checkout using a discount code.
   */
  checkoutDiscountCodeApplyV2: (args: {
    /**
     * The discount code to apply to the checkout.
     */
    discountCode: Scalars["String"]
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutDiscountCodeApplyV2Payload>;
  /**
   * Removes the applied discount from an existing checkout.
   */
  checkoutDiscountCodeRemove: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutDiscountCodeRemovePayload>;
  /**
   * Updates the email on an existing checkout.
   * @deprecated Use `checkoutEmailUpdateV2` instead
   */
  checkoutEmailUpdate: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The email to update the checkout with.
     */;
    email: Scalars["String"];
  }) => Maybe<CheckoutEmailUpdatePayload>;
  /**
   * Updates the email on an existing checkout.
   */
  checkoutEmailUpdateV2: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * The email to update the checkout with.
     */;
    email: Scalars["String"];
  }) => Maybe<CheckoutEmailUpdateV2Payload>;
  /**
   * Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
   * @deprecated Use `checkoutGiftCardsAppend` instead
   */
  checkoutGiftCardApply: (args: {
    /**
     * The code of the gift card to apply on the checkout.
     */
    giftCardCode: Scalars["String"]
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutGiftCardApplyPayload>;
  /**
   * Removes an applied gift card from the checkout.
   * @deprecated Use `checkoutGiftCardRemoveV2` instead
   */
  checkoutGiftCardRemove: (args: {
    /**
     * The ID of the Applied Gift Card to remove from the Checkout.
     */
    appliedGiftCardId: Scalars["ID"]
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutGiftCardRemovePayload>;
  /**
   * Removes an applied gift card from the checkout.
   */
  checkoutGiftCardRemoveV2: (args: {
    /**
     * The ID of the Applied Gift Card to remove from the Checkout.
     */
    appliedGiftCardId: Scalars["ID"]
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutGiftCardRemoveV2Payload>;
  /**
   * Appends gift cards to an existing checkout.
   */
  checkoutGiftCardsAppend: (args: {
    /**
     * A list of gift card codes to append to the checkout.
     */
    giftCardCodes: Array<Scalars["String"]>
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutGiftCardsAppendPayload>;
  /**
   * Adds a list of line items to a checkout.
   */
  checkoutLineItemsAdd: (args: {
    /**
     * A list of line item objects to add to the checkout.
     */
    lineItems: Array<CheckoutLineItemInput>
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutLineItemsAddPayload>;
  /**
   * Removes line items from an existing checkout.
   */
  checkoutLineItemsRemove: (args: {
    /**
     * The checkout on which to remove line items.
     */
    checkoutId: Scalars["ID"]
    /**
     * Line item ids to remove.
     */;
    lineItemIds: Array<Scalars["ID"]>;
  }) => Maybe<CheckoutLineItemsRemovePayload>;
  /**
   * Sets a list of line items to a checkout.
   */
  checkoutLineItemsReplace: (args: {
    /**
     * A list of line item objects to set on the checkout.
     */
    lineItems: Array<CheckoutLineItemInput>
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutLineItemsReplacePayload>;
  /**
   * Updates line items on a checkout.
   */
  checkoutLineItemsUpdate: (args: {
    /**
     * The checkout on which to update line items.
     */
    checkoutId: Scalars["ID"]
    /**
     * Line items to update.
     */;
    lineItems: Array<CheckoutLineItemUpdateInput>;
  }) => Maybe<CheckoutLineItemsUpdatePayload>;
  /**
   * Updates the shipping address of an existing checkout.
   * @deprecated Use `checkoutShippingAddressUpdateV2` instead
   */
  checkoutShippingAddressUpdate: (args: {
    /**
     * The shipping address to where the line items will be shipped.
     */
    shippingAddress: MailingAddressInput
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutShippingAddressUpdatePayload>;
  /**
   * Updates the shipping address of an existing checkout.
   */
  checkoutShippingAddressUpdateV2: (args: {
    /**
     * The shipping address to where the line items will be shipped.
     */
    shippingAddress: MailingAddressInput
    /**
     * The ID of the checkout.
     */;
    checkoutId: Scalars["ID"];
  }) => Maybe<CheckoutShippingAddressUpdateV2Payload>;
  /**
   * Updates the shipping lines on an existing checkout.
   */
  checkoutShippingLineUpdate: (args: {
    /**
     * The ID of the checkout.
     */
    checkoutId: Scalars["ID"]
    /**
     * A unique identifier to a Checkout’s shipping provider, price, and title combination, enabling the customer to select the availableShippingRates.
     */;
    shippingRateHandle: Scalars["String"];
  }) => Maybe<CheckoutShippingLineUpdatePayload>;
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   */
  customerAccessTokenCreate: (args: {
    /**
     * The fields used to create a customer access token.
     */
    input: CustomerAccessTokenCreateInput;
  }) => Maybe<CustomerAccessTokenCreatePayload>;
  /**
   * Creates a customer access token using a multipass token instead of email and password.
   * A customer record is created if customer does not exist. If a customer record already
   * exists but the record is disabled, then it's enabled.
   */
  customerAccessTokenCreateWithMultipass: (args: {
    /**
     * A valid multipass token to be authenticated.
     */
    multipassToken: Scalars["String"];
  }) => Maybe<CustomerAccessTokenCreateWithMultipassPayload>;
  /**
   * Permanently destroys a customer access token.
   */
  customerAccessTokenDelete: (args: {
    /**
     * The access token used to identify the customer.
     */
    customerAccessToken: Scalars["String"];
  }) => Maybe<CustomerAccessTokenDeletePayload>;
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   */
  customerAccessTokenRenew: (args: {
    /**
     * The access token used to identify the customer.
     */
    customerAccessToken: Scalars["String"];
  }) => Maybe<CustomerAccessTokenRenewPayload>;
  /**
   * Activates a customer.
   */
  customerActivate: (args: {
    /**
     * Specifies the customer to activate.
     */
    id: Scalars["ID"]
    /**
     * The fields used to activate a customer.
     */;
    input: CustomerActivateInput;
  }) => Maybe<CustomerActivatePayload>;
  /**
   * Activates a customer with the activation url received from `customerCreate`.
   */
  customerActivateByUrl: (args: {
    /**
     * The customer activation URL.
     */
    activationUrl: Scalars["URL"]
    /**
     * A new password set during activation.
     */;
    password: Scalars["String"];
  }) => Maybe<CustomerActivateByUrlPayload>;
  /**
   * Creates a new address for a customer.
   */
  customerAddressCreate: (args: {
    /**
     * The access token used to identify the customer.
     */
    customerAccessToken: Scalars["String"]
    /**
     * The customer mailing address to create.
     */;
    address: MailingAddressInput;
  }) => Maybe<CustomerAddressCreatePayload>;
  /**
   * Permanently deletes the address of an existing customer.
   */
  customerAddressDelete: (args: {
    /**
     * Specifies the address to delete.
     */
    id: Scalars["ID"]
    /**
     * The access token used to identify the customer.
     */;
    customerAccessToken: Scalars["String"];
  }) => Maybe<CustomerAddressDeletePayload>;
  /**
   * Updates the address of an existing customer.
   */
  customerAddressUpdate: (args: {
    /**
     * The access token used to identify the customer.
     */
    customerAccessToken: Scalars["String"]
    /**
     * Specifies the customer address to update.
     */;
    id: Scalars["ID"]
    /**
     * The customer’s mailing address.
     */;
    address: MailingAddressInput;
  }) => Maybe<CustomerAddressUpdatePayload>;
  /**
   * Creates a new customer.
   */
  customerCreate: (args: {
    /**
     * The fields used to create a new customer.
     */
    input: CustomerCreateInput;
  }) => Maybe<CustomerCreatePayload>;
  /**
   * Updates the default address of an existing customer.
   */
  customerDefaultAddressUpdate: (args: {
    /**
     * The access token used to identify the customer.
     */
    customerAccessToken: Scalars["String"]
    /**
     * ID of the address to set as the new default for the customer.
     */;
    addressId: Scalars["ID"];
  }) => Maybe<CustomerDefaultAddressUpdatePayload>;
  /**
   * Sends a reset password email to the customer, as the first step in the reset password process.
   */
  customerRecover: (args: {
    /**
     * The email address of the customer to recover.
     */
    email: Scalars["String"];
  }) => Maybe<CustomerRecoverPayload>;
  /**
   * Resets a customer’s password with a token received from `CustomerRecover`.
   */
  customerReset: (args: {
    /**
     * Specifies the customer to reset.
     */
    id: Scalars["ID"]
    /**
     * The fields used to reset a customer’s password.
     */;
    input: CustomerResetInput;
  }) => Maybe<CustomerResetPayload>;
  /**
   * Resets a customer’s password with the reset password url received from `CustomerRecover`.
   */
  customerResetByUrl: (args: {
    /**
     * The customer's reset password url.
     */
    resetUrl: Scalars["URL"]
    /**
     * New password that will be set as part of the reset password process.
     */;
    password: Scalars["String"];
  }) => Maybe<CustomerResetByUrlPayload>;
  /**
   * Updates an existing customer.
   */
  customerUpdate: (args: {
    /**
     * The access token used to identify the customer.
     */
    customerAccessToken: Scalars["String"]
    /**
     * The customer object input.
     */;
    customer: CustomerUpdateInput;
  }) => Maybe<CustomerUpdatePayload>;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

/**
 * A version of the API.
 */
export interface ApiVersion {
  __typename: "ApiVersion" | undefined;
  /**
   * The human-readable name of the version.
   */
  displayName: ScalarsEnums["String"];
  /**
   * The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.
   */
  handle: ScalarsEnums["String"];
  /**
   * Whether the version is supported by Shopify.
   */
  supported: ScalarsEnums["Boolean"];
}

/**
 * Details about the gift card used on the checkout.
 */
export interface AppliedGiftCard extends Omit<Node, "__typename"> {
  __typename: "AppliedGiftCard" | undefined;
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsedV2` instead
   */
  amountUsed: ScalarsEnums["Money"];
  /**
   * The amount that was taken from the gift card by applying it.
   */
  amountUsedV2: MoneyV2;
  /**
   * The amount left on the gift card.
   * @deprecated Use `balanceV2` instead
   */
  balance: ScalarsEnums["Money"];
  /**
   * The amount left on the gift card.
   */
  balanceV2: MoneyV2;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The last characters of the gift card.
   */
  lastCharacters: ScalarsEnums["String"];
  /**
   * The amount that was applied to the checkout in its currency.
   */
  presentmentAmountUsed: MoneyV2;
}

/**
 * An article in an online store blog.
 */
export interface Article extends Omit<Node, "__typename"> {
  __typename: "Article" | undefined;
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead
   */
  author: ArticleAuthor;
  /**
   * The article's author.
   */
  authorV2?: Maybe<ArticleAuthor>;
  /**
   * The blog that the article belongs to.
   */
  blog: Blog;
  /**
   * List of comments posted on the article.
   */
  comments: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => CommentConnection;
  /**
   * Stripped content of the article, single line with HTML tags removed.
   */
  content: (args?: {
    /**
     * Truncates string after the given length.
     */
    truncateAt?: Maybe<Scalars["Int"]>;
  }) => ScalarsEnums["String"];
  /**
   * The content of the article, complete with HTML formatting.
   */
  contentHtml: ScalarsEnums["HTML"];
  /**
   * Stripped excerpt of the article, single line with HTML tags removed.
   */
  excerpt: (args?: {
    /**
     * Truncates string after the given length.
     */
    truncateAt?: Maybe<Scalars["Int"]>;
  }) => Maybe<ScalarsEnums["String"]>;
  /**
   * The excerpt of the article, complete with HTML formatting.
   */
  excerptHtml?: Maybe<ScalarsEnums["HTML"]>;
  /**
   * A human-friendly unique string for the Article automatically generated from its title.
   */
  handle: ScalarsEnums["String"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The image associated with the article.
   */
  image: (args?: {
    /**
     * Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.
     */
    maxWidth?: Maybe<Scalars["Int"]>
    /**
     * Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.
     */;
    maxHeight?: Maybe<Scalars["Int"]>
    /**
     * Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.
     */;
    crop?: Maybe<CropRegion>
    /**
     * Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.
     * @defaultValue `1`
     */;
    scale?: Maybe<Scalars["Int"]>;
  }) => Maybe<Image>;
  /**
   * The date and time when the article was published.
   */
  publishedAt: ScalarsEnums["DateTime"];
  /**
   * The article’s SEO information.
   */
  seo?: Maybe<SEO>;
  /**
   * A categorization that a article can be tagged with.
   */
  tags: Array<ScalarsEnums["String"]>;
  /**
   * The article’s name.
   */
  title: ScalarsEnums["String"];
  /**
   * The url pointing to the article accessible from the web.
   */
  url: ScalarsEnums["URL"];
}

/**
 * The author of an article.
 */
export interface ArticleAuthor {
  __typename: "ArticleAuthor" | undefined;
  /**
   * The author's bio.
   */
  bio?: Maybe<ScalarsEnums["String"]>;
  /**
   * The author’s email.
   */
  email: ScalarsEnums["String"];
  /**
   * The author's first name.
   */
  firstName: ScalarsEnums["String"];
  /**
   * The author's last name.
   */
  lastName: ScalarsEnums["String"];
  /**
   * The author's full name.
   */
  name: ScalarsEnums["String"];
}

/**
 * An auto-generated type for paginating through multiple Articles.
 */
export interface ArticleConnection {
  __typename: "ArticleConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<ArticleEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 */
export interface ArticleEdge {
  __typename: "ArticleEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of ArticleEdge.
   */
  node: Article;
}

/**
 * Represents a generic custom attribute.
 */
export interface Attribute {
  __typename: "Attribute" | undefined;
  /**
   * Key or name of the attribute.
   */
  key: ScalarsEnums["String"];
  /**
   * Value of the attribute.
   */
  value?: Maybe<ScalarsEnums["String"]>;
}

/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 */
export interface AutomaticDiscountApplication
  extends Omit<DiscountApplication, "__typename"> {
  __typename: "AutomaticDiscountApplication" | undefined;
  /**
   * The method by which the discount's value is allocated to its entitled items.
   */
  allocationMethod: ScalarsEnums["DiscountApplicationAllocationMethod"];
  /**
   * Which lines of targetType that the discount is allocated over.
   */
  targetSelection: ScalarsEnums["DiscountApplicationTargetSelection"];
  /**
   * The type of line that the discount is applicable towards.
   */
  targetType: ScalarsEnums["DiscountApplicationTargetType"];
  /**
   * The title of the application.
   */
  title: ScalarsEnums["String"];
  /**
   * The value of the discount application.
   */
  value: PricingValue;
}

/**
 * A collection of available shipping rates for a checkout.
 */
export interface AvailableShippingRates {
  __typename: "AvailableShippingRates" | undefined;
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   */
  ready: ScalarsEnums["Boolean"];
  /**
   * The fetched shipping rates. `null` until the `ready` field is `true`.
   */
  shippingRates?: Maybe<Array<ShippingRate>>;
}

/**
 * An online store blog.
 */
export interface Blog extends Omit<Node, "__typename"> {
  __typename: "Blog" | undefined;
  /**
   * Find an article by its handle.
   */
  articleByHandle: (args: {
    /**
     * The handle of the article.
     */
    handle: Scalars["String"];
  }) => Maybe<Article>;
  /**
   * List of the blog's articles.
   */
  articles: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>
    /**
     * Sort the underlying list by the given key.
     * @defaultValue `"ID"`
     */;
    sortKey?: Maybe<ArticleSortKeys>
    /**
     * Supported filter parameters:
     *  - `author`
     *  - `blog_title`
     *  - `created_at`
     *  - `tag`
     *  - `updated_at`
     *
     * See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax)
     * for more information about using filters.
     */;
    query?: Maybe<Scalars["String"]>;
  }) => ArticleConnection;
  /**
   * The authors who have contributed to the blog.
   */
  authors: Array<ArticleAuthor>;
  /**
   * A human-friendly unique string for the Blog automatically generated from its title.
   */
  handle: ScalarsEnums["String"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The blogs’s title.
   */
  title: ScalarsEnums["String"];
  /**
   * The url pointing to the blog accessible from the web.
   */
  url: ScalarsEnums["URL"];
}

/**
 * An auto-generated type for paginating through multiple Blogs.
 */
export interface BlogConnection {
  __typename: "BlogConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<BlogEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 */
export interface BlogEdge {
  __typename: "BlogEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of BlogEdge.
   */
  node: Blog;
}

/**
 * A container for all the information required to checkout items and pay.
 */
export interface Checkout extends Omit<Node, "__typename"> {
  __typename: "Checkout" | undefined;
  /**
   * The gift cards used on the checkout.
   */
  appliedGiftCards: Array<AppliedGiftCard>;
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   */
  availableShippingRates?: Maybe<AvailableShippingRates>;
  /**
   * The date and time when the checkout was completed.
   */
  completedAt?: Maybe<ScalarsEnums["DateTime"]>;
  /**
   * The date and time when the checkout was created.
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * The currency code for the Checkout.
   */
  currencyCode: ScalarsEnums["CurrencyCode"];
  /**
   * A list of extra information that is added to the checkout.
   */
  customAttributes: Array<Attribute>;
  /**
   * The customer associated with the checkout.
   * @deprecated This field will always return null. If you have an authentication token for the customer, you can use the `customer` field on the query root to retrieve it.
   */
  customer?: Maybe<Customer>;
  /**
   * Discounts that have been applied on the checkout.
   */
  discountApplications: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => DiscountApplicationConnection;
  /**
   * The email attached to this checkout.
   */
  email?: Maybe<ScalarsEnums["String"]>;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * A list of line item objects, each one containing information about an item in the checkout.
   */
  lineItems: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => CheckoutLineItemConnection;
  /**
   * The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded.
   */
  lineItemsSubtotalPrice: MoneyV2;
  /**
   * The note associated with the checkout.
   */
  note?: Maybe<ScalarsEnums["String"]>;
  /**
   * The resulting order from a paid checkout.
   */
  order?: Maybe<Order>;
  /**
   * The Order Status Page for this Checkout, null when checkout is not completed.
   */
  orderStatusUrl?: Maybe<ScalarsEnums["URL"]>;
  /**
   * The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.
   * @deprecated Use `paymentDueV2` instead
   */
  paymentDue: ScalarsEnums["Money"];
  /**
   * The amount left to be paid. This is equal to the cost of the line items, duties, taxes and shipping minus discounts and gift cards.
   */
  paymentDueV2: MoneyV2;
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   */
  ready: ScalarsEnums["Boolean"];
  /**
   * States whether or not the fulfillment requires shipping.
   */
  requiresShipping: ScalarsEnums["Boolean"];
  /**
   * The shipping address to where the line items will be shipped.
   */
  shippingAddress?: Maybe<MailingAddress>;
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   */
  shippingDiscountAllocations: Array<DiscountAllocation>;
  /**
   * Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object.
   */
  shippingLine?: Maybe<ShippingRate>;
  /**
   * Price of the checkout before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice: ScalarsEnums["Money"];
  /**
   * Price of the checkout before duties, shipping and taxes.
   */
  subtotalPriceV2: MoneyV2;
  /**
   * Specifies if the Checkout is tax exempt.
   */
  taxExempt: ScalarsEnums["Boolean"];
  /**
   * Specifies if taxes are included in the line item and shipping line prices.
   */
  taxesIncluded: ScalarsEnums["Boolean"];
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: ScalarsEnums["Money"];
  /**
   * The sum of all the prices of all the items in the checkout, duties, taxes and discounts included.
   */
  totalPriceV2: MoneyV2;
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax: ScalarsEnums["Money"];
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   */
  totalTaxV2: MoneyV2;
  /**
   * The date and time when the checkout was last updated.
   */
  updatedAt: ScalarsEnums["DateTime"];
  /**
   * The url pointing to the checkout accessible from the web.
   */
  webUrl: ScalarsEnums["URL"];
}

/**
 * Return type for `checkoutAttributesUpdate` mutation.
 */
export interface CheckoutAttributesUpdatePayload {
  __typename: "CheckoutAttributesUpdatePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout: Checkout;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutAttributesUpdateV2` mutation.
 */
export interface CheckoutAttributesUpdateV2Payload {
  __typename: "CheckoutAttributesUpdateV2Payload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCompleteFree` mutation.
 */
export interface CheckoutCompleteFreePayload {
  __typename: "CheckoutCompleteFreePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCompleteWithCreditCard` mutation.
 */
export interface CheckoutCompleteWithCreditCardPayload {
  __typename: "CheckoutCompleteWithCreditCardPayload" | undefined;
  /**
   * The checkout on which the payment was applied.
   */
  checkout: Checkout;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * A representation of the attempted payment.
   */
  payment?: Maybe<Payment>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCompleteWithCreditCardV2` mutation.
 */
export interface CheckoutCompleteWithCreditCardV2Payload {
  __typename: "CheckoutCompleteWithCreditCardV2Payload" | undefined;
  /**
   * The checkout on which the payment was applied.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * A representation of the attempted payment.
   */
  payment?: Maybe<Payment>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCompleteWithTokenizedPayment` mutation.
 */
export interface CheckoutCompleteWithTokenizedPaymentPayload {
  __typename: "CheckoutCompleteWithTokenizedPaymentPayload" | undefined;
  /**
   * The checkout on which the payment was applied.
   */
  checkout: Checkout;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * A representation of the attempted payment.
   */
  payment?: Maybe<Payment>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation.
 */
export interface CheckoutCompleteWithTokenizedPaymentV2Payload {
  __typename: "CheckoutCompleteWithTokenizedPaymentV2Payload" | undefined;
  /**
   * The checkout on which the payment was applied.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * A representation of the attempted payment.
   */
  payment?: Maybe<Payment>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation.
 */
export interface CheckoutCompleteWithTokenizedPaymentV3Payload {
  __typename: "CheckoutCompleteWithTokenizedPaymentV3Payload" | undefined;
  /**
   * The checkout on which the payment was applied.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * A representation of the attempted payment.
   */
  payment?: Maybe<Payment>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCreate` mutation.
 */
export interface CheckoutCreatePayload {
  __typename: "CheckoutCreatePayload" | undefined;
  /**
   * The new checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCustomerAssociate` mutation.
 */
export interface CheckoutCustomerAssociatePayload {
  __typename: "CheckoutCustomerAssociatePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout: Checkout;
  /**
   * The associated customer object.
   */
  customer?: Maybe<Customer>;
  /**
   * List of errors that occurred executing the mutation.
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCustomerAssociateV2` mutation.
 */
export interface CheckoutCustomerAssociateV2Payload {
  __typename: "CheckoutCustomerAssociateV2Payload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The associated customer object.
   */
  customer?: Maybe<Customer>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCustomerDisassociate` mutation.
 */
export interface CheckoutCustomerDisassociatePayload {
  __typename: "CheckoutCustomerDisassociatePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout: Checkout;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutCustomerDisassociateV2` mutation.
 */
export interface CheckoutCustomerDisassociateV2Payload {
  __typename: "CheckoutCustomerDisassociateV2Payload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutDiscountCodeApply` mutation.
 */
export interface CheckoutDiscountCodeApplyPayload {
  __typename: "CheckoutDiscountCodeApplyPayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout: Checkout;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutDiscountCodeApplyV2` mutation.
 */
export interface CheckoutDiscountCodeApplyV2Payload {
  __typename: "CheckoutDiscountCodeApplyV2Payload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutDiscountCodeRemove` mutation.
 */
export interface CheckoutDiscountCodeRemovePayload {
  __typename: "CheckoutDiscountCodeRemovePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutEmailUpdate` mutation.
 */
export interface CheckoutEmailUpdatePayload {
  __typename: "CheckoutEmailUpdatePayload" | undefined;
  /**
   * The checkout object with the updated email.
   */
  checkout: Checkout;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutEmailUpdateV2` mutation.
 */
export interface CheckoutEmailUpdateV2Payload {
  __typename: "CheckoutEmailUpdateV2Payload" | undefined;
  /**
   * The checkout object with the updated email.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutGiftCardApply` mutation.
 */
export interface CheckoutGiftCardApplyPayload {
  __typename: "CheckoutGiftCardApplyPayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout: Checkout;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutGiftCardRemove` mutation.
 */
export interface CheckoutGiftCardRemovePayload {
  __typename: "CheckoutGiftCardRemovePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout: Checkout;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutGiftCardRemoveV2` mutation.
 */
export interface CheckoutGiftCardRemoveV2Payload {
  __typename: "CheckoutGiftCardRemoveV2Payload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutGiftCardsAppend` mutation.
 */
export interface CheckoutGiftCardsAppendPayload {
  __typename: "CheckoutGiftCardsAppendPayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * A single line item in the checkout, grouped by variant and attributes.
 */
export interface CheckoutLineItem extends Omit<Node, "__typename"> {
  __typename: "CheckoutLineItem" | undefined;
  /**
   * Extra information in the form of an array of Key-Value pairs about the line item.
   */
  customAttributes: Array<Attribute>;
  /**
   * The discounts that have been allocated onto the checkout line item by discount applications.
   */
  discountAllocations: Array<DiscountAllocation>;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The quantity of the line item.
   */
  quantity: ScalarsEnums["Int"];
  /**
   * Title of the line item. Defaults to the product's title.
   */
  title: ScalarsEnums["String"];
  /**
   * Unit price of the line item.
   */
  unitPrice?: Maybe<MoneyV2>;
  /**
   * Product variant of the line item.
   */
  variant?: Maybe<ProductVariant>;
}

/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 */
export interface CheckoutLineItemConnection {
  __typename: "CheckoutLineItemConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<CheckoutLineItemEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 */
export interface CheckoutLineItemEdge {
  __typename: "CheckoutLineItemEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of CheckoutLineItemEdge.
   */
  node: CheckoutLineItem;
}

/**
 * Return type for `checkoutLineItemsAdd` mutation.
 */
export interface CheckoutLineItemsAddPayload {
  __typename: "CheckoutLineItemsAddPayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutLineItemsRemove` mutation.
 */
export interface CheckoutLineItemsRemovePayload {
  __typename: "CheckoutLineItemsRemovePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutLineItemsReplace` mutation.
 */
export interface CheckoutLineItemsReplacePayload {
  __typename: "CheckoutLineItemsReplacePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  userErrors: Array<CheckoutUserError>;
}

/**
 * Return type for `checkoutLineItemsUpdate` mutation.
 */
export interface CheckoutLineItemsUpdatePayload {
  __typename: "CheckoutLineItemsUpdatePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutShippingAddressUpdate` mutation.
 */
export interface CheckoutShippingAddressUpdatePayload {
  __typename: "CheckoutShippingAddressUpdatePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout: Checkout;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutShippingAddressUpdateV2` mutation.
 */
export interface CheckoutShippingAddressUpdateV2Payload {
  __typename: "CheckoutShippingAddressUpdateV2Payload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `checkoutShippingLineUpdate` mutation.
 */
export interface CheckoutShippingLineUpdatePayload {
  __typename: "CheckoutShippingLineUpdatePayload" | undefined;
  /**
   * The updated checkout object.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Represents an error that happens during execution of a checkout mutation.
 */
export interface CheckoutUserError
  extends Omit<DisplayableError, "__typename"> {
  __typename: "CheckoutUserError" | undefined;
  /**
   * Error code to uniquely identify the error.
   */
  code?: Maybe<ScalarsEnums["CheckoutErrorCode"]>;
  /**
   * Path to the input field which caused the error.
   */
  field?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * The error message.
   */
  message: ScalarsEnums["String"];
}

/**
 * A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse.
 */
export interface Collection extends Omit<Node, "__typename"> {
  __typename: "Collection" | undefined;
  /**
   * Stripped description of the collection, single line with HTML tags removed.
   */
  description: (args?: {
    /**
     * Truncates string after the given length.
     */
    truncateAt?: Maybe<Scalars["Int"]>;
  }) => ScalarsEnums["String"];
  /**
   * The description of the collection, complete with HTML formatting.
   */
  descriptionHtml: ScalarsEnums["HTML"];
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   */
  handle: ScalarsEnums["String"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * Image associated with the collection.
   */
  image: (args?: {
    /**
     * Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.
     */
    maxWidth?: Maybe<Scalars["Int"]>
    /**
     * Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.
     */;
    maxHeight?: Maybe<Scalars["Int"]>
    /**
     * Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.
     */;
    crop?: Maybe<CropRegion>
    /**
     * Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.
     * @defaultValue `1`
     */;
    scale?: Maybe<Scalars["Int"]>;
  }) => Maybe<Image>;
  /**
   * List of products in the collection.
   */
  products: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>
    /**
     * Sort the underlying list by the given key.
     * @defaultValue `"COLLECTION_DEFAULT"`
     */;
    sortKey?: Maybe<ProductCollectionSortKeys>;
  }) => ProductConnection;
  /**
   * The collection’s name. Limit of 255 characters.
   */
  title: ScalarsEnums["String"];
  /**
   * The date and time when the collection was last modified.
   */
  updatedAt: ScalarsEnums["DateTime"];
}

/**
 * An auto-generated type for paginating through multiple Collections.
 */
export interface CollectionConnection {
  __typename: "CollectionConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<CollectionEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 */
export interface CollectionEdge {
  __typename: "CollectionEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of CollectionEdge.
   */
  node: Collection;
}

/**
 * A comment on an article.
 */
export interface Comment extends Omit<Node, "__typename"> {
  __typename: "Comment" | undefined;
  /**
   * The comment’s author.
   */
  author: CommentAuthor;
  /**
   * Stripped content of the comment, single line with HTML tags removed.
   */
  content: (args?: {
    /**
     * Truncates string after the given length.
     */
    truncateAt?: Maybe<Scalars["Int"]>;
  }) => ScalarsEnums["String"];
  /**
   * The content of the comment, complete with HTML formatting.
   */
  contentHtml: ScalarsEnums["HTML"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
}

/**
 * The author of a comment.
 */
export interface CommentAuthor {
  __typename: "CommentAuthor" | undefined;
  /**
   * The author's email.
   */
  email: ScalarsEnums["String"];
  /**
   * The author’s name.
   */
  name: ScalarsEnums["String"];
}

/**
 * An auto-generated type for paginating through multiple Comments.
 */
export interface CommentConnection {
  __typename: "CommentConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<CommentEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 */
export interface CommentEdge {
  __typename: "CommentEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of CommentEdge.
   */
  node: Comment;
}

/**
 * Credit card information used for a payment.
 */
export interface CreditCard {
  __typename: "CreditCard" | undefined;
  /**
   * The brand of the credit card.
   */
  brand?: Maybe<ScalarsEnums["String"]>;
  /**
   * The expiry month of the credit card.
   */
  expiryMonth?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The expiry year of the credit card.
   */
  expiryYear?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The credit card's BIN number.
   */
  firstDigits?: Maybe<ScalarsEnums["String"]>;
  /**
   * The first name of the card holder.
   */
  firstName?: Maybe<ScalarsEnums["String"]>;
  /**
   * The last 4 digits of the credit card.
   */
  lastDigits?: Maybe<ScalarsEnums["String"]>;
  /**
   * The last name of the card holder.
   */
  lastName?: Maybe<ScalarsEnums["String"]>;
  /**
   * The masked credit card number with only the last 4 digits displayed.
   */
  maskedNumber?: Maybe<ScalarsEnums["String"]>;
}

/**
 * A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout.
 */
export interface Customer {
  __typename: "Customer" | undefined;
  /**
   * Indicates whether the customer has consented to be sent marketing material via email.
   */
  acceptsMarketing: ScalarsEnums["Boolean"];
  /**
   * A list of addresses for the customer.
   */
  addresses: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => MailingAddressConnection;
  /**
   * The date and time when the customer was created.
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * The customer’s default address.
   */
  defaultAddress?: Maybe<MailingAddress>;
  /**
   * The customer’s name, email or phone number.
   */
  displayName: ScalarsEnums["String"];
  /**
   * The customer’s email address.
   */
  email?: Maybe<ScalarsEnums["String"]>;
  /**
   * The customer’s first name.
   */
  firstName?: Maybe<ScalarsEnums["String"]>;
  /**
   * A unique identifier for the customer.
   */
  id: ScalarsEnums["ID"];
  /**
   * The customer's most recently updated, incomplete checkout.
   */
  lastIncompleteCheckout?: Maybe<Checkout>;
  /**
   * The customer’s last name.
   */
  lastName?: Maybe<ScalarsEnums["String"]>;
  /**
   * The orders associated with the customer.
   */
  orders: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>
    /**
     * Sort the underlying list by the given key.
     * @defaultValue `"ID"`
     */;
    sortKey?: Maybe<OrderSortKeys>
    /**
     * Supported filter parameters:
     *  - `processed_at`
     *
     * See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax)
     * for more information about using filters.
     */;
    query?: Maybe<Scalars["String"]>;
  }) => OrderConnection;
  /**
   * The customer’s phone number.
   */
  phone?: Maybe<ScalarsEnums["String"]>;
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   */
  tags: Array<ScalarsEnums["String"]>;
  /**
   * The date and time when the customer information was updated.
   */
  updatedAt: ScalarsEnums["DateTime"];
}

/**
 * A CustomerAccessToken represents the unique token required to make modifications to the customer object.
 */
export interface CustomerAccessToken {
  __typename: "CustomerAccessToken" | undefined;
  /**
   * The customer’s access token.
   */
  accessToken: ScalarsEnums["String"];
  /**
   * The date and time when the customer access token expires.
   */
  expiresAt: ScalarsEnums["DateTime"];
}

/**
 * Return type for `customerAccessTokenCreate` mutation.
 */
export interface CustomerAccessTokenCreatePayload {
  __typename: "CustomerAccessTokenCreatePayload" | undefined;
  /**
   * The newly created customer access token object.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerAccessTokenCreateWithMultipass` mutation.
 */
export interface CustomerAccessTokenCreateWithMultipassPayload {
  __typename: "CustomerAccessTokenCreateWithMultipassPayload" | undefined;
  /**
   * An access token object associated with the customer.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
}

/**
 * Return type for `customerAccessTokenDelete` mutation.
 */
export interface CustomerAccessTokenDeletePayload {
  __typename: "CustomerAccessTokenDeletePayload" | undefined;
  /**
   * The destroyed access token.
   */
  deletedAccessToken?: Maybe<ScalarsEnums["String"]>;
  /**
   * ID of the destroyed customer access token.
   */
  deletedCustomerAccessTokenId?: Maybe<ScalarsEnums["String"]>;
  /**
   * List of errors that occurred executing the mutation.
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerAccessTokenRenew` mutation.
 */
export interface CustomerAccessTokenRenewPayload {
  __typename: "CustomerAccessTokenRenewPayload" | undefined;
  /**
   * The renewed customer access token object.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /**
   * List of errors that occurred executing the mutation.
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerActivateByUrl` mutation.
 */
export interface CustomerActivateByUrlPayload {
  __typename: "CustomerActivateByUrlPayload" | undefined;
  /**
   * The customer that was activated.
   */
  customer?: Maybe<Customer>;
  /**
   * A new customer access token for the customer.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
}

/**
 * Return type for `customerActivate` mutation.
 */
export interface CustomerActivatePayload {
  __typename: "CustomerActivatePayload" | undefined;
  /**
   * The customer object.
   */
  customer?: Maybe<Customer>;
  /**
   * A newly created customer access token object for the customer.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerAddressCreate` mutation.
 */
export interface CustomerAddressCreatePayload {
  __typename: "CustomerAddressCreatePayload" | undefined;
  /**
   * The new customer address object.
   */
  customerAddress?: Maybe<MailingAddress>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerAddressDelete` mutation.
 */
export interface CustomerAddressDeletePayload {
  __typename: "CustomerAddressDeletePayload" | undefined;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * ID of the deleted customer address.
   */
  deletedCustomerAddressId?: Maybe<ScalarsEnums["String"]>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerAddressUpdate` mutation.
 */
export interface CustomerAddressUpdatePayload {
  __typename: "CustomerAddressUpdatePayload" | undefined;
  /**
   * The customer’s updated mailing address.
   */
  customerAddress?: Maybe<MailingAddress>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerCreate` mutation.
 */
export interface CustomerCreatePayload {
  __typename: "CustomerCreatePayload" | undefined;
  /**
   * The created customer object.
   */
  customer?: Maybe<Customer>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerDefaultAddressUpdate` mutation.
 */
export interface CustomerDefaultAddressUpdatePayload {
  __typename: "CustomerDefaultAddressUpdatePayload" | undefined;
  /**
   * The updated customer object.
   */
  customer?: Maybe<Customer>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerRecover` mutation.
 */
export interface CustomerRecoverPayload {
  __typename: "CustomerRecoverPayload" | undefined;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerResetByUrl` mutation.
 */
export interface CustomerResetByUrlPayload {
  __typename: "CustomerResetByUrlPayload" | undefined;
  /**
   * The customer object which was reset.
   */
  customer?: Maybe<Customer>;
  /**
   * A newly created customer access token object for the customer.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerReset` mutation.
 */
export interface CustomerResetPayload {
  __typename: "CustomerResetPayload" | undefined;
  /**
   * The customer object which was reset.
   */
  customer?: Maybe<Customer>;
  /**
   * A newly created customer access token object for the customer.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Return type for `customerUpdate` mutation.
 */
export interface CustomerUpdatePayload {
  __typename: "CustomerUpdatePayload" | undefined;
  /**
   * The updated customer object.
   */
  customer?: Maybe<Customer>;
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /**
   * List of errors that occurred executing the mutation.
   */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
}

/**
 * Represents an error that happens during execution of a customer mutation.
 */
export interface CustomerUserError
  extends Omit<DisplayableError, "__typename"> {
  __typename: "CustomerUserError" | undefined;
  /**
   * Error code to uniquely identify the error.
   */
  code?: Maybe<ScalarsEnums["CustomerErrorCode"]>;
  /**
   * Path to the input field which caused the error.
   */
  field?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * The error message.
   */
  message: ScalarsEnums["String"];
}

/**
 * An amount discounting the line that has been allocated by a discount.
 */
export interface DiscountAllocation {
  __typename: "DiscountAllocation" | undefined;
  /**
   * Amount of discount allocated.
   */
  allocatedAmount: MoneyV2;
  /**
   * The discount this allocated amount originated from.
   */
  discountApplication: DiscountApplication;
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 */
export interface DiscountApplication {
  __typename: "DiscountApplication" | undefined;
  /**
   * The method by which the discount's value is allocated to its entitled items.
   */
  allocationMethod: ScalarsEnums["DiscountApplicationAllocationMethod"];
  /**
   * Which lines of targetType that the discount is allocated over.
   */
  targetSelection: ScalarsEnums["DiscountApplicationTargetSelection"];
  /**
   * The type of line that the discount is applicable towards.
   */
  targetType: ScalarsEnums["DiscountApplicationTargetType"];
  /**
   * The value of the discount application.
   */
  value: PricingValue;
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 */
export interface DiscountApplicationConnection {
  __typename: "DiscountApplicationConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<DiscountApplicationEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 */
export interface DiscountApplicationEdge {
  __typename: "DiscountApplicationEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of DiscountApplicationEdge.
   */
  node: DiscountApplication;
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 */
export interface DiscountCodeApplication
  extends Omit<DiscountApplication, "__typename"> {
  __typename: "DiscountCodeApplication" | undefined;
  /**
   * The method by which the discount's value is allocated to its entitled items.
   */
  allocationMethod: ScalarsEnums["DiscountApplicationAllocationMethod"];
  /**
   * Specifies whether the discount code was applied successfully.
   */
  applicable: ScalarsEnums["Boolean"];
  /**
   * The string identifying the discount code that was used at the time of application.
   */
  code: ScalarsEnums["String"];
  /**
   * Which lines of targetType that the discount is allocated over.
   */
  targetSelection: ScalarsEnums["DiscountApplicationTargetSelection"];
  /**
   * The type of line that the discount is applicable towards.
   */
  targetType: ScalarsEnums["DiscountApplicationTargetType"];
  /**
   * The value of the discount application.
   */
  value: PricingValue;
}

/**
 * Represents an error in the input of a mutation.
 */
export interface DisplayableError {
  __typename: "DisplayableError" | undefined;
  /**
   * Path to the input field which caused the error.
   */
  field?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * The error message.
   */
  message: ScalarsEnums["String"];
}

/**
 * Represents a web address.
 */
export interface Domain {
  __typename: "Domain" | undefined;
  /**
   * The host name of the domain (eg: `example.com`).
   */
  host: ScalarsEnums["String"];
  /**
   * Whether SSL is enabled or not.
   */
  sslEnabled: ScalarsEnums["Boolean"];
  /**
   * The URL of the domain (eg: `https://example.com`).
   */
  url: ScalarsEnums["URL"];
}

/**
 * Represents a video hosted outside of Shopify.
 */
export interface ExternalVideo
  extends Omit<Node, "__typename">,
    Omit<Media, "__typename"> {
  __typename: "ExternalVideo" | undefined;
  /**
   * A word or phrase to share the nature or contents of a media.
   */
  alt?: Maybe<ScalarsEnums["String"]>;
  /**
   * The URL.
   */
  embeddedUrl: ScalarsEnums["URL"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The media content type.
   */
  mediaContentType: ScalarsEnums["MediaContentType"];
  /**
   * The preview image for the media.
   */
  previewImage?: Maybe<Image>;
}

/**
 * Represents a single fulfillment in an order.
 */
export interface Fulfillment {
  __typename: "Fulfillment" | undefined;
  /**
   * List of the fulfillment's line items.
   */
  fulfillmentLineItems: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => FulfillmentLineItemConnection;
  /**
   * The name of the tracking company.
   */
  trackingCompany?: Maybe<ScalarsEnums["String"]>;
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   */
  trackingInfo: (args?: {
    /**
     * Truncate the array result to this size.
     */
    first?: Maybe<Scalars["Int"]>;
  }) => Array<FulfillmentTrackingInfo>;
}

/**
 * Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item.
 */
export interface FulfillmentLineItem {
  __typename: "FulfillmentLineItem" | undefined;
  /**
   * The associated order's line item.
   */
  lineItem: OrderLineItem;
  /**
   * The amount fulfilled in this fulfillment.
   */
  quantity: ScalarsEnums["Int"];
}

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 */
export interface FulfillmentLineItemConnection {
  __typename: "FulfillmentLineItemConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<FulfillmentLineItemEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 */
export interface FulfillmentLineItemEdge {
  __typename: "FulfillmentLineItemEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of FulfillmentLineItemEdge.
   */
  node: FulfillmentLineItem;
}

/**
 * Tracking information associated with the fulfillment.
 */
export interface FulfillmentTrackingInfo {
  __typename: "FulfillmentTrackingInfo" | undefined;
  /**
   * The tracking number of the fulfillment.
   */
  number?: Maybe<ScalarsEnums["String"]>;
  /**
   * The URL to track the fulfillment.
   */
  url?: Maybe<ScalarsEnums["URL"]>;
}

/**
 * Represents information about the metafields associated to the specified resource.
 */
export interface HasMetafields {
  __typename: "HasMetafields" | undefined;
  /**
   * The metafield associated with the resource.
   */
  metafield: (args: {
    /**
     * Container for a set of metafields (maximum of 20 characters).
     */
    namespace: Scalars["String"]
    /**
     * Identifier for the metafield (maximum of 30 characters).
     */;
    key: Scalars["String"];
  }) => Maybe<Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   */
  metafields: (args?: {
    /**
     * Container for a set of metafields (maximum of 20 characters).
     */
    namespace?: Maybe<Scalars["String"]>
    /**
     * Returns up to the first `n` elements from the list.
     */;
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => MetafieldConnection;
}

/**
 * Represents an image resource.
 */
export interface Image {
  __typename: "Image" | undefined;
  /**
   * A word or phrase to share the nature or contents of an image.
   */
  altText?: Maybe<ScalarsEnums["String"]>;
  /**
   * A unique identifier for the image.
   */
  id?: Maybe<ScalarsEnums["ID"]>;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  originalSrc: ScalarsEnums["URL"];
  /**
   * The location of the image as a URL.
   * @deprecated Previously an image had a single `src` field. This could either return the original image. location or a URL that contained transformations such as sizing or scale.. . These transformations were specified by arguments on the parent field.. . Now an image has two distinct URL fields: `originalSrc` and `transformedSrc`.. . * `originalSrc` - the original unmodified image URL. * `transformedSrc` - the image URL with the specified transformations included. . To migrate to the new fields, image transformations should be moved from the parent field to `transformedSrc`.. . Before:. ```graphql. {.   shop {.     productImages(maxWidth: 200, scale: 2) {.       edges {.         node {.           src.         }.       }.     }.   }. }. ```. . After:. ```graphql. {.   shop {.     productImages {.       edges {.         node {.           transformedSrc(maxWidth: 200, scale: 2).         }.       }.     }.   }. }. ```
   */
  src: ScalarsEnums["URL"];
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: (args?: {
    /**
     * Image width in pixels between 1 and 5760.
     */
    maxWidth?: Maybe<Scalars["Int"]>
    /**
     * Image height in pixels between 1 and 5760.
     */;
    maxHeight?: Maybe<Scalars["Int"]>
    /**
     * Crops the image according to the specified region.
     */;
    crop?: Maybe<CropRegion>
    /**
     * Image size multiplier for high-resolution retina displays. Must be between 1 and 3.
     * @defaultValue `1`
     */;
    scale?: Maybe<Scalars["Int"]>
    /**
     * Best effort conversion of image into content type (SVG -> PNG, Anything -> JGP, Anything -> WEBP are supported).
     */;
    preferredContentType?: Maybe<ImageContentType>;
  }) => ScalarsEnums["URL"];
}

/**
 * An auto-generated type for paginating through multiple Images.
 */
export interface ImageConnection {
  __typename: "ImageConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<ImageEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 */
export interface ImageEdge {
  __typename: "ImageEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of ImageEdge.
   */
  node: Image;
}

/**
 * Represents a mailing address for customers and shipping.
 */
export interface MailingAddress extends Omit<Node, "__typename"> {
  __typename: "MailingAddress" | undefined;
  /**
   * The first line of the address. Typically the street address or PO Box number.
   */
  address1?: Maybe<ScalarsEnums["String"]>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   */
  address2?: Maybe<ScalarsEnums["String"]>;
  /**
   * The name of the city, district, village, or town.
   */
  city?: Maybe<ScalarsEnums["String"]>;
  /**
   * The name of the customer's company or organization.
   */
  company?: Maybe<ScalarsEnums["String"]>;
  /**
   * The name of the country.
   */
  country?: Maybe<ScalarsEnums["String"]>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<ScalarsEnums["String"]>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<ScalarsEnums["CountryCode"]>;
  /**
   * The first name of the customer.
   */
  firstName?: Maybe<ScalarsEnums["String"]>;
  /**
   * A formatted version of the address, customized by the provided arguments.
   */
  formatted: (args?: {
    /**
     * Whether to include the customer's name in the formatted address.
     * @defaultValue `false`
     */
    withName?: Maybe<Scalars["Boolean"]>
    /**
     * Whether to include the customer's company in the formatted address.
     * @defaultValue `true`
     */;
    withCompany?: Maybe<Scalars["Boolean"]>;
  }) => Array<ScalarsEnums["String"]>;
  /**
   * A comma-separated list of the values for city, province, and country.
   */
  formattedArea?: Maybe<ScalarsEnums["String"]>;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The last name of the customer.
   */
  lastName?: Maybe<ScalarsEnums["String"]>;
  /**
   * The latitude coordinate of the customer address.
   */
  latitude?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The longitude coordinate of the customer address.
   */
  longitude?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The full name of the customer, based on firstName and lastName.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<ScalarsEnums["String"]>;
  /**
   * The region of the address, such as the province, state, or district.
   */
  province?: Maybe<ScalarsEnums["String"]>;
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<ScalarsEnums["String"]>;
  /**
   * The zip or postal code of the address.
   */
  zip?: Maybe<ScalarsEnums["String"]>;
}

/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 */
export interface MailingAddressConnection {
  __typename: "MailingAddressConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<MailingAddressEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 */
export interface MailingAddressEdge {
  __typename: "MailingAddressEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of MailingAddressEdge.
   */
  node: MailingAddress;
}

/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 */
export interface ManualDiscountApplication
  extends Omit<DiscountApplication, "__typename"> {
  __typename: "ManualDiscountApplication" | undefined;
  /**
   * The method by which the discount's value is allocated to its entitled items.
   */
  allocationMethod: ScalarsEnums["DiscountApplicationAllocationMethod"];
  /**
   * The description of the application.
   */
  description?: Maybe<ScalarsEnums["String"]>;
  /**
   * Which lines of targetType that the discount is allocated over.
   */
  targetSelection: ScalarsEnums["DiscountApplicationTargetSelection"];
  /**
   * The type of line that the discount is applicable towards.
   */
  targetType: ScalarsEnums["DiscountApplicationTargetType"];
  /**
   * The title of the application.
   */
  title: ScalarsEnums["String"];
  /**
   * The value of the discount application.
   */
  value: PricingValue;
}

/**
 * Represents a media interface.
 */
export interface Media {
  __typename: "Media" | undefined;
  /**
   * A word or phrase to share the nature or contents of a media.
   */
  alt?: Maybe<ScalarsEnums["String"]>;
  /**
   * The media content type.
   */
  mediaContentType: ScalarsEnums["MediaContentType"];
  /**
   * The preview image for the media.
   */
  previewImage?: Maybe<Image>;
}

/**
 * An auto-generated type for paginating through multiple Media.
 */
export interface MediaConnection {
  __typename: "MediaConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<MediaEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 */
export interface MediaEdge {
  __typename: "MediaEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of MediaEdge.
   */
  node: Media;
}

/**
 * Represents a Shopify hosted image.
 */
export interface MediaImage
  extends Omit<Node, "__typename">,
    Omit<Media, "__typename"> {
  __typename: "MediaImage" | undefined;
  /**
   * A word or phrase to share the nature or contents of a media.
   */
  alt?: Maybe<ScalarsEnums["String"]>;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The image for the media.
   */
  image?: Maybe<Image>;
  /**
   * The media content type.
   */
  mediaContentType: ScalarsEnums["MediaContentType"];
  /**
   * The preview image for the media.
   */
  previewImage?: Maybe<Image>;
}

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 */
export interface Metafield extends Omit<Node, "__typename"> {
  __typename: "Metafield" | undefined;
  /**
   * The date and time when the storefront metafield was created.
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * The description of a metafield.
   */
  description?: Maybe<ScalarsEnums["String"]>;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The key name for a metafield.
   */
  key: ScalarsEnums["String"];
  /**
   * The namespace for a metafield.
   */
  namespace: ScalarsEnums["String"];
  /**
   * The parent object that the metafield belongs to.
   */
  parentResource: MetafieldParentResource;
  /**
   * The date and time when the storefront metafield was updated.
   */
  updatedAt: ScalarsEnums["DateTime"];
  /**
   * The value of a metafield.
   */
  value: ScalarsEnums["String"];
  /**
   * Represents the metafield value type.
   */
  valueType: ScalarsEnums["MetafieldValueType"];
}

/**
 * An auto-generated type for paginating through multiple Metafields.
 */
export interface MetafieldConnection {
  __typename: "MetafieldConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<MetafieldEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Metafield and a cursor during pagination.
 */
export interface MetafieldEdge {
  __typename: "MetafieldEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of MetafieldEdge.
   */
  node: Metafield;
}

/**
 * Represents a Shopify hosted 3D model.
 */
export interface Model3d
  extends Omit<Node, "__typename">,
    Omit<Media, "__typename"> {
  __typename: "Model3d" | undefined;
  /**
   * A word or phrase to share the nature or contents of a media.
   */
  alt?: Maybe<ScalarsEnums["String"]>;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The media content type.
   */
  mediaContentType: ScalarsEnums["MediaContentType"];
  /**
   * The preview image for the media.
   */
  previewImage?: Maybe<Image>;
  /**
   * The sources for a 3d model.
   */
  sources: Array<Model3dSource>;
}

/**
 * Represents a source for a Shopify hosted 3d model.
 */
export interface Model3dSource {
  __typename: "Model3dSource" | undefined;
  /**
   * The filesize of the 3d model.
   */
  filesize: ScalarsEnums["Int"];
  /**
   * The format of the 3d model.
   */
  format: ScalarsEnums["String"];
  /**
   * The MIME type of the 3d model.
   */
  mimeType: ScalarsEnums["String"];
  /**
   * The URL of the 3d model.
   */
  url: ScalarsEnums["String"];
}

/**
 * A monetary value with currency.
 *
 * To format currencies, combine this type's amount and currencyCode fields with your client's locale.
 *
 * For example, in JavaScript you could use Intl.NumberFormat:
 *
 * ```js
 * new Intl.NumberFormat(locale, {
 *   style: 'currency',
 *   currency: currencyCode
 * }).format(amount);
 * ```
 *
 * Other formatting libraries include:
 *
 * * iOS - [NumberFormatter](https://developer.apple.com/documentation/foundation/numberformatter)
 * * Android - [NumberFormat](https://developer.android.com/reference/java/text/NumberFormat.html)
 * * PHP - [NumberFormatter](http://php.net/manual/en/class.numberformatter.php)
 *
 * For a more general solution, the [Unicode CLDR number formatting database] is available with many implementations
 * (such as [TwitterCldr](https://github.com/twitter/twitter-cldr-rb)).
 */
export interface MoneyV2 {
  __typename: "MoneyV2" | undefined;
  /**
   * Decimal money amount.
   */
  amount: ScalarsEnums["Decimal"];
  /**
   * Currency of the money.
   */
  currencyCode: ScalarsEnums["CurrencyCode"];
}

/**
 * An auto-generated type for paginating through multiple MoneyV2s.
 */
export interface MoneyV2Connection {
  __typename: "MoneyV2Connection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<MoneyV2Edge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one MoneyV2 and a cursor during pagination.
 */
export interface MoneyV2Edge {
  __typename: "MoneyV2Edge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of MoneyV2Edge.
   */
  node: MoneyV2;
}

/**
 * An object with an ID to support global identification.
 */
export interface Node {
  __typename: "Node" | undefined;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
}

/**
 * An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.
 */
export interface Order extends Omit<Node, "__typename"> {
  __typename: "Order" | undefined;
  /**
   * The reason for the order's cancellation. Returns `null` if the order wasn't canceled.
   */
  cancelReason?: Maybe<ScalarsEnums["OrderCancelReason"]>;
  /**
   * The date and time when the order was canceled. Returns null if the order wasn't canceled.
   */
  canceledAt?: Maybe<ScalarsEnums["DateTime"]>;
  /**
   * The code of the currency used for the payment.
   */
  currencyCode: ScalarsEnums["CurrencyCode"];
  /**
   * The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order.
   */
  currentSubtotalPrice: MoneyV2;
  /**
   * The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed.
   */
  currentTotalPrice: MoneyV2;
  /**
   * The total of all taxes applied to the order, excluding taxes for returned line items.
   */
  currentTotalTax: MoneyV2;
  /**
   * The locale code in which this specific order happened.
   */
  customerLocale?: Maybe<ScalarsEnums["String"]>;
  /**
   * The unique URL that the customer can use to access the order.
   */
  customerUrl?: Maybe<ScalarsEnums["URL"]>;
  /**
   * Discounts that have been applied on the order.
   */
  discountApplications: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => DiscountApplicationConnection;
  /**
   * Whether the order has had any edits applied or not.
   */
  edited: ScalarsEnums["Boolean"];
  /**
   * The customer's email address.
   */
  email?: Maybe<ScalarsEnums["String"]>;
  /**
   * The financial status of the order.
   */
  financialStatus?: Maybe<ScalarsEnums["OrderFinancialStatus"]>;
  /**
   * The fulfillment status for the order.
   */
  fulfillmentStatus: ScalarsEnums["OrderFulfillmentStatus"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * List of the order’s line items.
   */
  lineItems: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => OrderLineItemConnection;
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   */
  name: ScalarsEnums["String"];
  /**
   * A unique numeric identifier for the order for use by shop owner and customer.
   */
  orderNumber: ScalarsEnums["Int"];
  /**
   * The total price of the order before any applied edits.
   */
  originalTotalPrice: MoneyV2;
  /**
   * The customer's phone number for receiving SMS notifications.
   */
  phone?: Maybe<ScalarsEnums["String"]>;
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   */
  processedAt: ScalarsEnums["DateTime"];
  /**
   * The address to where the order will be shipped.
   */
  shippingAddress?: Maybe<MailingAddress>;
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   */
  shippingDiscountAllocations: Array<DiscountAllocation>;
  /**
   * The unique URL for the order's status page.
   */
  statusUrl: ScalarsEnums["URL"];
  /**
   * Price of the order before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice?: Maybe<ScalarsEnums["Money"]>;
  /**
   * Price of the order before duties, shipping and taxes.
   */
  subtotalPriceV2?: Maybe<MoneyV2>;
  /**
   * List of the order’s successful fulfillments.
   */
  successfulFulfillments: (args?: {
    /**
     * Truncate the array result to this size.
     */
    first?: Maybe<Scalars["Int"]>;
  }) => Maybe<Array<Fulfillment>>;
  /**
   * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: ScalarsEnums["Money"];
  /**
   * The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).
   */
  totalPriceV2: MoneyV2;
  /**
   * The total amount that has been refunded.
   * @deprecated Use `totalRefundedV2` instead
   */
  totalRefunded: ScalarsEnums["Money"];
  /**
   * The total amount that has been refunded.
   */
  totalRefundedV2: MoneyV2;
  /**
   * The total cost of shipping.
   * @deprecated Use `totalShippingPriceV2` instead
   */
  totalShippingPrice: ScalarsEnums["Money"];
  /**
   * The total cost of shipping.
   */
  totalShippingPriceV2: MoneyV2;
  /**
   * The total cost of taxes.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax?: Maybe<ScalarsEnums["Money"]>;
  /**
   * The total cost of taxes.
   */
  totalTaxV2?: Maybe<MoneyV2>;
}

/**
 * An auto-generated type for paginating through multiple Orders.
 */
export interface OrderConnection {
  __typename: "OrderConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<OrderEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 */
export interface OrderEdge {
  __typename: "OrderEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of OrderEdge.
   */
  node: Order;
}

/**
 * Represents a single line in an order. There is one line item for each distinct product variant.
 */
export interface OrderLineItem {
  __typename: "OrderLineItem" | undefined;
  /**
   * The number of entries associated to the line item minus the items that have been removed.
   */
  currentQuantity: ScalarsEnums["Int"];
  /**
   * List of custom attributes associated to the line item.
   */
  customAttributes: Array<Attribute>;
  /**
   * The discounts that have been allocated onto the order line item by discount applications.
   */
  discountAllocations: Array<DiscountAllocation>;
  /**
   * The total price of the line item, including discounts, and displayed in the presentment currency.
   */
  discountedTotalPrice: MoneyV2;
  /**
   * The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency.
   */
  originalTotalPrice: MoneyV2;
  /**
   * The number of products variants associated to the line item.
   */
  quantity: ScalarsEnums["Int"];
  /**
   * The title of the product combined with title of the variant.
   */
  title: ScalarsEnums["String"];
  /**
   * The product variant object associated to the line item.
   */
  variant?: Maybe<ProductVariant>;
}

/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 */
export interface OrderLineItemConnection {
  __typename: "OrderLineItemConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<OrderLineItemEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 */
export interface OrderLineItemEdge {
  __typename: "OrderLineItemEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of OrderLineItemEdge.
   */
  node: OrderLineItem;
}

/**
 * Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store.
 */
export interface Page extends Omit<Node, "__typename"> {
  __typename: "Page" | undefined;
  /**
   * The description of the page, complete with HTML formatting.
   */
  body: ScalarsEnums["HTML"];
  /**
   * Summary of the page body.
   */
  bodySummary: ScalarsEnums["String"];
  /**
   * The timestamp of the page creation.
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * A human-friendly unique string for the page automatically generated from its title.
   */
  handle: ScalarsEnums["String"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The title of the page.
   */
  title: ScalarsEnums["String"];
  /**
   * The timestamp of the latest page update.
   */
  updatedAt: ScalarsEnums["DateTime"];
  /**
   * The url pointing to the page accessible from the web.
   */
  url: ScalarsEnums["URL"];
}

/**
 * An auto-generated type for paginating through multiple Pages.
 */
export interface PageConnection {
  __typename: "PageConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<PageEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 */
export interface PageEdge {
  __typename: "PageEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of PageEdge.
   */
  node: Page;
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo {
  __typename: "PageInfo" | undefined;
  /**
   * Indicates if there are more pages to fetch.
   */
  hasNextPage: ScalarsEnums["Boolean"];
  /**
   * Indicates if there are any pages prior to the current page.
   */
  hasPreviousPage: ScalarsEnums["Boolean"];
}

/**
 * A payment applied to a checkout.
 */
export interface Payment extends Omit<Node, "__typename"> {
  __typename: "Payment" | undefined;
  /**
   * The amount of the payment.
   * @deprecated Use `amountV2` instead
   */
  amount: ScalarsEnums["Money"];
  /**
   * The amount of the payment.
   */
  amountV2: MoneyV2;
  /**
   * The billing address for the payment.
   */
  billingAddress?: Maybe<MailingAddress>;
  /**
   * The checkout to which the payment belongs.
   */
  checkout: Checkout;
  /**
   * The credit card used for the payment in the case of direct payments.
   */
  creditCard?: Maybe<CreditCard>;
  /**
   * A message describing a processing error during asynchronous processing.
   */
  errorMessage?: Maybe<ScalarsEnums["String"]>;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * A client-side generated token to identify a payment and perform idempotent operations.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests).
   */
  idempotencyKey?: Maybe<ScalarsEnums["String"]>;
  /**
   * The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow.
   */
  nextActionUrl?: Maybe<ScalarsEnums["URL"]>;
  /**
   * Whether or not the payment is still processing asynchronously.
   */
  ready: ScalarsEnums["Boolean"];
  /**
   * A flag to indicate if the payment is to be done in test mode for gateways that support it.
   */
  test: ScalarsEnums["Boolean"];
  /**
   * The actual transaction recorded by Shopify after having processed the payment with the gateway.
   */
  transaction?: Maybe<Transaction>;
}

/**
 * Settings related to payments.
 */
export interface PaymentSettings {
  __typename: "PaymentSettings" | undefined;
  /**
   * List of the card brands which the shop accepts.
   */
  acceptedCardBrands: Array<ScalarsEnums["CardBrand"]>;
  /**
   * The url pointing to the endpoint to vault credit cards.
   */
  cardVaultUrl: ScalarsEnums["URL"];
  /**
   * The country where the shop is located.
   */
  countryCode: ScalarsEnums["CountryCode"];
  /**
   * The three-letter code for the shop's primary currency.
   */
  currencyCode: ScalarsEnums["CurrencyCode"];
  /**
   * A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
   */
  enabledPresentmentCurrencies: Array<ScalarsEnums["CurrencyCode"]>;
  /**
   * The shop’s Shopify Payments account id.
   */
  shopifyPaymentsAccountId?: Maybe<ScalarsEnums["String"]>;
  /**
   * List of the digital wallets which the shop supports.
   */
  supportedDigitalWallets: Array<ScalarsEnums["DigitalWallet"]>;
}

/**
 * The value of the percentage pricing object.
 */
export interface PricingPercentageValue {
  __typename: "PricingPercentageValue" | undefined;
  /**
   * The percentage value of the object.
   */
  percentage: ScalarsEnums["Float"];
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface Product
  extends Omit<Node, "__typename">,
    Omit<HasMetafields, "__typename"> {
  __typename: "Product" | undefined;
  /**
   * Indicates if at least one product variant is available for sale.
   */
  availableForSale: ScalarsEnums["Boolean"];
  /**
   * List of collections a product belongs to.
   */
  collections: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => CollectionConnection;
  /**
   * The compare at price of the product across all variants.
   */
  compareAtPriceRange: ProductPriceRange;
  /**
   * The date and time when the product was created.
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: (args?: {
    /**
     * Truncates string after the given length.
     */
    truncateAt?: Maybe<Scalars["Int"]>;
  }) => ScalarsEnums["String"];
  /**
   * The description of the product, complete with HTML formatting.
   */
  descriptionHtml: ScalarsEnums["HTML"];
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: ScalarsEnums["String"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * List of images associated with the product.
   */
  images: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>
    /**
     * Sort the underlying list by the given key.
     * @defaultValue `"POSITION"`
     */;
    sortKey?: Maybe<ProductImageSortKeys>
    /**
     * Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.
     */;
    maxWidth?: Maybe<Scalars["Int"]>
    /**
     * Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.
     */;
    maxHeight?: Maybe<Scalars["Int"]>
    /**
     * Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.
     */;
    crop?: Maybe<CropRegion>
    /**
     * Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.
     * @defaultValue `1`
     */;
    scale?: Maybe<Scalars["Int"]>;
  }) => ImageConnection;
  /**
   * The media associated with the product.
   */
  media: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => MediaConnection;
  /**
   * The metafield associated with the resource.
   */
  metafield: (args: {
    /**
     * Container for a set of metafields (maximum of 20 characters).
     */
    namespace: Scalars["String"]
    /**
     * Identifier for the metafield (maximum of 30 characters).
     */;
    key: Scalars["String"];
  }) => Maybe<Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   */
  metafields: (args?: {
    /**
     * Container for a set of metafields (maximum of 20 characters).
     */
    namespace?: Maybe<Scalars["String"]>
    /**
     * Returns up to the first `n` elements from the list.
     */;
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => MetafieldConnection;
  /**
   * The online store URL for the product.
   * A value of `null` indicates that the product is not published to the Online Store sales channel.
   */
  onlineStoreUrl?: Maybe<ScalarsEnums["URL"]>;
  /**
   * List of product options.
   */
  options: (args?: {
    /**
     * Truncate the array result to this size.
     */
    first?: Maybe<Scalars["Int"]>;
  }) => Array<ProductOption>;
  /**
   * List of price ranges in the presentment currencies for this shop.
   */
  presentmentPriceRanges: (args?: {
    /**
     * Specifies the presentment currencies to return a price range in.
     */
    presentmentCurrencies?: Maybe<Array<CurrencyCode>>
    /**
     * Returns up to the first `n` elements from the list.
     */;
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => ProductPriceRangeConnection;
  /**
   * The price range.
   */
  priceRange: ProductPriceRange;
  /**
   * A categorization that a product can be tagged with, commonly used for filtering and searching.
   */
  productType: ScalarsEnums["String"];
  /**
   * The date and time when the product was published to the channel.
   */
  publishedAt: ScalarsEnums["DateTime"];
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   */
  tags: Array<ScalarsEnums["String"]>;
  /**
   * The product’s title.
   */
  title: ScalarsEnums["String"];
  /**
   * The total quantity of inventory in stock for this Product.
   */
  totalInventory?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   */
  updatedAt: ScalarsEnums["DateTime"];
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   */
  variantBySelectedOptions: (args: {
    /**
     * The input fields used for a selected option.
     */
    selectedOptions: Array<SelectedOptionInput>;
  }) => Maybe<ProductVariant>;
  /**
   * List of the product’s variants.
   */
  variants: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>
    /**
     * Sort the underlying list by the given key.
     * @defaultValue `"POSITION"`
     */;
    sortKey?: Maybe<ProductVariantSortKeys>;
  }) => ProductVariantConnection;
  /**
   * The product’s vendor name.
   */
  vendor: ScalarsEnums["String"];
}

/**
 * An auto-generated type for paginating through multiple Products.
 */
export interface ProductConnection {
  __typename: "ProductConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<ProductEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 */
export interface ProductEdge {
  __typename: "ProductEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of ProductEdge.
   */
  node: Product;
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 */
export interface ProductOption extends Omit<Node, "__typename"> {
  __typename: "ProductOption" | undefined;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The product option’s name.
   */
  name: ScalarsEnums["String"];
  /**
   * The corresponding value to the product option name.
   */
  values: Array<ScalarsEnums["String"]>;
}

/**
 * The price range of the product.
 */
export interface ProductPriceRange {
  __typename: "ProductPriceRange" | undefined;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: MoneyV2;
  /**
   * The lowest variant's price.
   */
  minVariantPrice: MoneyV2;
}

/**
 * An auto-generated type for paginating through multiple ProductPriceRanges.
 */
export interface ProductPriceRangeConnection {
  __typename: "ProductPriceRangeConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<ProductPriceRangeEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one ProductPriceRange and a cursor during pagination.
 */
export interface ProductPriceRangeEdge {
  __typename: "ProductPriceRangeEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of ProductPriceRangeEdge.
   */
  node: ProductPriceRange;
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 */
export interface ProductVariant
  extends Omit<Node, "__typename">,
    Omit<HasMetafields, "__typename"> {
  __typename: "ProductVariant" | undefined;
  /**
   * Indicates if the product variant is in stock.
   * @deprecated Use `availableForSale` instead
   */
  available?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * Indicates if the product variant is available for sale.
   */
  availableForSale: ScalarsEnums["Boolean"];
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
   * @deprecated Use `compareAtPriceV2` instead
   */
  compareAtPrice?: Maybe<ScalarsEnums["Money"]>;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
   */
  compareAtPriceV2?: Maybe<MoneyV2>;
  /**
   * Whether a product is out of stock but still available for purchase (used for backorders).
   */
  currentlyNotInStock: ScalarsEnums["Boolean"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   */
  image: (args?: {
    /**
     * Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.
     */
    maxWidth?: Maybe<Scalars["Int"]>
    /**
     * Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.
     */;
    maxHeight?: Maybe<Scalars["Int"]>
    /**
     * Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.
     */;
    crop?: Maybe<CropRegion>
    /**
     * Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.
     * @defaultValue `1`
     */;
    scale?: Maybe<Scalars["Int"]>;
  }) => Maybe<Image>;
  /**
   * The metafield associated with the resource.
   */
  metafield: (args: {
    /**
     * Container for a set of metafields (maximum of 20 characters).
     */
    namespace: Scalars["String"]
    /**
     * Identifier for the metafield (maximum of 30 characters).
     */;
    key: Scalars["String"];
  }) => Maybe<Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   */
  metafields: (args?: {
    /**
     * Container for a set of metafields (maximum of 20 characters).
     */
    namespace?: Maybe<Scalars["String"]>
    /**
     * Returns up to the first `n` elements from the list.
     */;
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => MetafieldConnection;
  /**
   * List of prices and compare-at prices in the presentment currencies for this shop.
   */
  presentmentPrices: (args?: {
    /**
     * The presentment currencies prices should return in.
     */
    presentmentCurrencies?: Maybe<Array<CurrencyCode>>
    /**
     * Returns up to the first `n` elements from the list.
     */;
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => ProductVariantPricePairConnection;
  /**
   * List of unit prices in the presentment currencies for this shop.
   */
  presentmentUnitPrices: (args?: {
    /**
     * Specify the currencies in which to return presentment unit prices.
     */
    presentmentCurrencies?: Maybe<Array<CurrencyCode>>
    /**
     * Returns up to the first `n` elements from the list.
     */;
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>;
  }) => MoneyV2Connection;
  /**
   * The product variant’s price.
   * @deprecated Use `priceV2` instead
   */
  price: ScalarsEnums["Money"];
  /**
   * The product variant’s price.
   */
  priceV2: MoneyV2;
  /**
   * The product object that the product variant belongs to.
   */
  product: Product;
  /**
   * The total sellable quantity of the variant for online sales channels.
   */
  quantityAvailable?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Whether a customer needs to provide a shipping address when placing an order for the product variant.
   */
  requiresShipping: ScalarsEnums["Boolean"];
  /**
   * List of product options applied to the variant.
   */
  selectedOptions: Array<SelectedOption>;
  /**
   * The SKU (stock keeping unit) associated with the variant.
   */
  sku?: Maybe<ScalarsEnums["String"]>;
  /**
   * The product variant’s title.
   */
  title: ScalarsEnums["String"];
  /**
   * The unit price value for the variant based on the variant's measurement.
   */
  unitPrice?: Maybe<MoneyV2>;
  /**
   * The unit price measurement for the variant.
   */
  unitPriceMeasurement?: Maybe<UnitPriceMeasurement>;
  /**
   * The weight of the product variant in the unit system specified with `weight_unit`.
   */
  weight?: Maybe<ScalarsEnums["Float"]>;
  /**
   * Unit of measurement for weight.
   */
  weightUnit: ScalarsEnums["WeightUnit"];
}

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 */
export interface ProductVariantConnection {
  __typename: "ProductVariantConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<ProductVariantEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 */
export interface ProductVariantEdge {
  __typename: "ProductVariantEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of ProductVariantEdge.
   */
  node: ProductVariant;
}

/**
 * The compare-at price and price of a variant sharing a currency.
 */
export interface ProductVariantPricePair {
  __typename: "ProductVariantPricePair" | undefined;
  /**
   * The compare-at price of the variant with associated currency.
   */
  compareAtPrice?: Maybe<MoneyV2>;
  /**
   * The price of the variant with associated currency.
   */
  price: MoneyV2;
}

/**
 * An auto-generated type for paginating through multiple ProductVariantPricePairs.
 */
export interface ProductVariantPricePairConnection {
  __typename: "ProductVariantPricePairConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<ProductVariantPricePairEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination.
 */
export interface ProductVariantPricePairEdge {
  __typename: "ProductVariantPricePairEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of ProductVariantPricePairEdge.
   */
  node: ProductVariantPricePair;
}

/**
 * SEO information.
 */
export interface SEO {
  __typename: "SEO" | undefined;
  /**
   * The meta description.
   */
  description?: Maybe<ScalarsEnums["String"]>;
  /**
   * The SEO title.
   */
  title?: Maybe<ScalarsEnums["String"]>;
}

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 */
export interface ScriptDiscountApplication
  extends Omit<DiscountApplication, "__typename"> {
  __typename: "ScriptDiscountApplication" | undefined;
  /**
   * The method by which the discount's value is allocated to its entitled items.
   */
  allocationMethod: ScalarsEnums["DiscountApplicationAllocationMethod"];
  /**
   * The description of the application as defined by the Script.
   * @deprecated Use `title` instead
   */
  description: ScalarsEnums["String"];
  /**
   * Which lines of targetType that the discount is allocated over.
   */
  targetSelection: ScalarsEnums["DiscountApplicationTargetSelection"];
  /**
   * The type of line that the discount is applicable towards.
   */
  targetType: ScalarsEnums["DiscountApplicationTargetType"];
  /**
   * The title of the application as defined by the Script.
   */
  title: ScalarsEnums["String"];
  /**
   * The value of the discount application.
   */
  value: PricingValue;
}

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 */
export interface SelectedOption {
  __typename: "SelectedOption" | undefined;
  /**
   * The product option’s name.
   */
  name: ScalarsEnums["String"];
  /**
   * The product option’s value.
   */
  value: ScalarsEnums["String"];
}

/**
 * A shipping rate to be applied to a checkout.
 */
export interface ShippingRate {
  __typename: "ShippingRate" | undefined;
  /**
   * Human-readable unique identifier for this shipping rate.
   */
  handle: ScalarsEnums["String"];
  /**
   * Price of this shipping rate.
   * @deprecated Use `priceV2` instead
   */
  price: ScalarsEnums["Money"];
  /**
   * Price of this shipping rate.
   */
  priceV2: MoneyV2;
  /**
   * Title of this shipping rate.
   */
  title: ScalarsEnums["String"];
}

/**
 * Shop represents a collection of the general settings and information about the shop.
 */
export interface Shop {
  __typename: "Shop" | undefined;
  /**
   * List of the shop' articles.
   * @deprecated Use `QueryRoot.articles` instead.
   */
  articles: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>
    /**
     * Sort the underlying list by the given key.
     * @defaultValue `"ID"`
     */;
    sortKey?: Maybe<ArticleSortKeys>
    /**
     * Supported filter parameters:
     *  - `author`
     *  - `blog_title`
     *  - `created_at`
     *  - `tag`
     *  - `updated_at`
     *
     * See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax)
     * for more information about using filters.
     */;
    query?: Maybe<Scalars["String"]>;
  }) => ArticleConnection;
  /**
   * List of the shop' blogs.
   * @deprecated Use `QueryRoot.blogs` instead.
   */
  blogs: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>
    /**
     * Sort the underlying list by the given key.
     * @defaultValue `"ID"`
     */;
    sortKey?: Maybe<BlogSortKeys>
    /**
     * Supported filter parameters:
     *  - `created_at`
     *  - `handle`
     *  - `title`
     *  - `updated_at`
     *
     * See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax)
     * for more information about using filters.
     */;
    query?: Maybe<Scalars["String"]>;
  }) => BlogConnection;
  /**
   * Find a collection by its handle.
   * @deprecated Use `QueryRoot.collectionByHandle` instead.
   */
  collectionByHandle: (args: {
    /**
     * The handle of the collection.
     */
    handle: Scalars["String"];
  }) => Maybe<Collection>;
  /**
   * List of the shop’s collections.
   * @deprecated Use `QueryRoot.collections` instead.
   */
  collections: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>
    /**
     * Sort the underlying list by the given key.
     * @defaultValue `"ID"`
     */;
    sortKey?: Maybe<CollectionSortKeys>
    /**
     * Supported filter parameters:
     *  - `collection_type`
     *  - `title`
     *  - `updated_at`
     *
     * See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax)
     * for more information about using filters.
     */;
    query?: Maybe<Scalars["String"]>;
  }) => CollectionConnection;
  /**
   * The three-letter code for the currency that the shop accepts.
   * @deprecated Use `paymentSettings` instead
   */
  currencyCode: ScalarsEnums["CurrencyCode"];
  /**
   * A description of the shop.
   */
  description?: Maybe<ScalarsEnums["String"]>;
  /**
   * A string representing the way currency is formatted when the currency isn’t specified.
   */
  moneyFormat: ScalarsEnums["String"];
  /**
   * The shop’s name.
   */
  name: ScalarsEnums["String"];
  /**
   * Settings related to payments.
   */
  paymentSettings: PaymentSettings;
  /**
   * The shop’s primary domain.
   */
  primaryDomain: Domain;
  /**
   * The shop’s privacy policy.
   */
  privacyPolicy?: Maybe<ShopPolicy>;
  /**
   * Find a product by its handle.
   * @deprecated Use `QueryRoot.productByHandle` instead.
   */
  productByHandle: (args: {
    /**
     * The handle of the product.
     */
    handle: Scalars["String"];
  }) => Maybe<Product>;
  /**
   * A list of tags that have been added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   * @deprecated Use `QueryRoot.productTags` instead.
   */
  productTags: (args: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first: Scalars["Int"];
  }) => StringConnection;
  /**
   * List of the shop’s product types.
   * @deprecated Use `QueryRoot.productTypes` instead.
   */
  productTypes: (args: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first: Scalars["Int"];
  }) => StringConnection;
  /**
   * List of the shop’s products.
   * @deprecated Use `QueryRoot.products` instead.
   */
  products: (args?: {
    /**
     * Returns up to the first `n` elements from the list.
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come after the specified cursor.
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Returns up to the last `n` elements from the list.
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Returns the elements that come before the specified cursor.
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Reverse the order of the underlying list.
     * @defaultValue `false`
     */;
    reverse?: Maybe<Scalars["Boolean"]>
    /**
     * Sort the underlying list by the given key.
     * @defaultValue `"ID"`
     */;
    sortKey?: Maybe<ProductSortKeys>
    /**
     * Supported filter parameters:
     *  - `available_for_sale`
     *  - `created_at`
     *  - `product_type`
     *  - `tag`
     *  - `title`
     *  - `updated_at`
     *  - `variants.price`
     *  - `vendor`
     *
     * See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax)
     * for more information about using filters.
     */;
    query?: Maybe<Scalars["String"]>;
  }) => ProductConnection;
  /**
   * The shop’s refund policy.
   */
  refundPolicy?: Maybe<ShopPolicy>;
  /**
   * Countries that the shop ships to.
   */
  shipsToCountries: Array<ScalarsEnums["CountryCode"]>;
  /**
   * The shop’s Shopify Payments account id.
   * @deprecated Use `paymentSettings` instead
   */
  shopifyPaymentsAccountId?: Maybe<ScalarsEnums["String"]>;
  /**
   * The shop’s terms of service.
   */
  termsOfService?: Maybe<ShopPolicy>;
}

/**
 * Policy that a merchant has configured for their store, such as their refund or privacy policy.
 */
export interface ShopPolicy extends Omit<Node, "__typename"> {
  __typename: "ShopPolicy" | undefined;
  /**
   * Policy text, maximum size of 64kb.
   */
  body: ScalarsEnums["String"];
  /**
   * Policy’s handle.
   */
  handle: ScalarsEnums["String"];
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * Policy’s title.
   */
  title: ScalarsEnums["String"];
  /**
   * Public URL to the policy.
   */
  url: ScalarsEnums["URL"];
}

/**
 * An auto-generated type for paginating through multiple Strings.
 */
export interface StringConnection {
  __typename: "StringConnection" | undefined;
  /**
   * A list of edges.
   */
  edges: Array<StringEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An auto-generated type which holds one String and a cursor during pagination.
 */
export interface StringEdge {
  __typename: "StringEdge" | undefined;
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of StringEdge.
   */
  node: ScalarsEnums["String"];
}

/**
 * An object representing exchange of money for a product or service.
 */
export interface Transaction {
  __typename: "Transaction" | undefined;
  /**
   * The amount of money that the transaction was for.
   * @deprecated Use `amountV2` instead
   */
  amount: ScalarsEnums["Money"];
  /**
   * The amount of money that the transaction was for.
   */
  amountV2: MoneyV2;
  /**
   * The kind of the transaction.
   */
  kind: ScalarsEnums["TransactionKind"];
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead
   */
  status: ScalarsEnums["TransactionStatus"];
  /**
   * The status of the transaction.
   */
  statusV2?: Maybe<ScalarsEnums["TransactionStatus"]>;
  /**
   * Whether the transaction was done in test mode or not.
   */
  test: ScalarsEnums["Boolean"];
}

/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 */
export interface UnitPriceMeasurement {
  __typename: "UnitPriceMeasurement" | undefined;
  /**
   * The type of unit of measurement for the unit price measurement.
   */
  measuredType?: Maybe<ScalarsEnums["UnitPriceMeasurementMeasuredType"]>;
  /**
   * The quantity unit for the unit price measurement.
   */
  quantityUnit?: Maybe<ScalarsEnums["UnitPriceMeasurementMeasuredUnit"]>;
  /**
   * The quantity value for the unit price measurement.
   */
  quantityValue: ScalarsEnums["Float"];
  /**
   * The reference unit for the unit price measurement.
   */
  referenceUnit?: Maybe<ScalarsEnums["UnitPriceMeasurementMeasuredUnit"]>;
  /**
   * The reference value for the unit price measurement.
   */
  referenceValue: ScalarsEnums["Int"];
}

/**
 * Represents an error in the input of a mutation.
 */
export interface UserError extends Omit<DisplayableError, "__typename"> {
  __typename: "UserError" | undefined;
  /**
   * Path to the input field which caused the error.
   */
  field?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * The error message.
   */
  message: ScalarsEnums["String"];
}

/**
 * Represents a Shopify hosted video.
 */
export interface Video
  extends Omit<Node, "__typename">,
    Omit<Media, "__typename"> {
  __typename: "Video" | undefined;
  /**
   * A word or phrase to share the nature or contents of a media.
   */
  alt?: Maybe<ScalarsEnums["String"]>;
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
  /**
   * The media content type.
   */
  mediaContentType: ScalarsEnums["MediaContentType"];
  /**
   * The preview image for the media.
   */
  previewImage?: Maybe<Image>;
  /**
   * The sources for a video.
   */
  sources: Array<VideoSource>;
}

/**
 * Represents a source for a Shopify hosted video.
 */
export interface VideoSource {
  __typename: "VideoSource" | undefined;
  /**
   * The format of the video source.
   */
  format: ScalarsEnums["String"];
  /**
   * The height of the video.
   */
  height: ScalarsEnums["Int"];
  /**
   * The video MIME type.
   */
  mimeType: ScalarsEnums["String"];
  /**
   * The URL of the video.
   */
  url: ScalarsEnums["String"];
  /**
   * The width of the video.
   */
  width: ScalarsEnums["Int"];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  ApiVersion: ApiVersion;
  AppliedGiftCard: AppliedGiftCard;
  Article: Article;
  ArticleAuthor: ArticleAuthor;
  ArticleConnection: ArticleConnection;
  ArticleEdge: ArticleEdge;
  Attribute: Attribute;
  AutomaticDiscountApplication: AutomaticDiscountApplication;
  AvailableShippingRates: AvailableShippingRates;
  Blog: Blog;
  BlogConnection: BlogConnection;
  BlogEdge: BlogEdge;
  Checkout: Checkout;
  CheckoutAttributesUpdatePayload: CheckoutAttributesUpdatePayload;
  CheckoutAttributesUpdateV2Payload: CheckoutAttributesUpdateV2Payload;
  CheckoutCompleteFreePayload: CheckoutCompleteFreePayload;
  CheckoutCompleteWithCreditCardPayload: CheckoutCompleteWithCreditCardPayload;
  CheckoutCompleteWithCreditCardV2Payload: CheckoutCompleteWithCreditCardV2Payload;
  CheckoutCompleteWithTokenizedPaymentPayload: CheckoutCompleteWithTokenizedPaymentPayload;
  CheckoutCompleteWithTokenizedPaymentV2Payload: CheckoutCompleteWithTokenizedPaymentV2Payload;
  CheckoutCompleteWithTokenizedPaymentV3Payload: CheckoutCompleteWithTokenizedPaymentV3Payload;
  CheckoutCreatePayload: CheckoutCreatePayload;
  CheckoutCustomerAssociatePayload: CheckoutCustomerAssociatePayload;
  CheckoutCustomerAssociateV2Payload: CheckoutCustomerAssociateV2Payload;
  CheckoutCustomerDisassociatePayload: CheckoutCustomerDisassociatePayload;
  CheckoutCustomerDisassociateV2Payload: CheckoutCustomerDisassociateV2Payload;
  CheckoutDiscountCodeApplyPayload: CheckoutDiscountCodeApplyPayload;
  CheckoutDiscountCodeApplyV2Payload: CheckoutDiscountCodeApplyV2Payload;
  CheckoutDiscountCodeRemovePayload: CheckoutDiscountCodeRemovePayload;
  CheckoutEmailUpdatePayload: CheckoutEmailUpdatePayload;
  CheckoutEmailUpdateV2Payload: CheckoutEmailUpdateV2Payload;
  CheckoutGiftCardApplyPayload: CheckoutGiftCardApplyPayload;
  CheckoutGiftCardRemovePayload: CheckoutGiftCardRemovePayload;
  CheckoutGiftCardRemoveV2Payload: CheckoutGiftCardRemoveV2Payload;
  CheckoutGiftCardsAppendPayload: CheckoutGiftCardsAppendPayload;
  CheckoutLineItem: CheckoutLineItem;
  CheckoutLineItemConnection: CheckoutLineItemConnection;
  CheckoutLineItemEdge: CheckoutLineItemEdge;
  CheckoutLineItemsAddPayload: CheckoutLineItemsAddPayload;
  CheckoutLineItemsRemovePayload: CheckoutLineItemsRemovePayload;
  CheckoutLineItemsReplacePayload: CheckoutLineItemsReplacePayload;
  CheckoutLineItemsUpdatePayload: CheckoutLineItemsUpdatePayload;
  CheckoutShippingAddressUpdatePayload: CheckoutShippingAddressUpdatePayload;
  CheckoutShippingAddressUpdateV2Payload: CheckoutShippingAddressUpdateV2Payload;
  CheckoutShippingLineUpdatePayload: CheckoutShippingLineUpdatePayload;
  CheckoutUserError: CheckoutUserError;
  Collection: Collection;
  CollectionConnection: CollectionConnection;
  CollectionEdge: CollectionEdge;
  Comment: Comment;
  CommentAuthor: CommentAuthor;
  CommentConnection: CommentConnection;
  CommentEdge: CommentEdge;
  CreditCard: CreditCard;
  Customer: Customer;
  CustomerAccessToken: CustomerAccessToken;
  CustomerAccessTokenCreatePayload: CustomerAccessTokenCreatePayload;
  CustomerAccessTokenCreateWithMultipassPayload: CustomerAccessTokenCreateWithMultipassPayload;
  CustomerAccessTokenDeletePayload: CustomerAccessTokenDeletePayload;
  CustomerAccessTokenRenewPayload: CustomerAccessTokenRenewPayload;
  CustomerActivateByUrlPayload: CustomerActivateByUrlPayload;
  CustomerActivatePayload: CustomerActivatePayload;
  CustomerAddressCreatePayload: CustomerAddressCreatePayload;
  CustomerAddressDeletePayload: CustomerAddressDeletePayload;
  CustomerAddressUpdatePayload: CustomerAddressUpdatePayload;
  CustomerCreatePayload: CustomerCreatePayload;
  CustomerDefaultAddressUpdatePayload: CustomerDefaultAddressUpdatePayload;
  CustomerRecoverPayload: CustomerRecoverPayload;
  CustomerResetByUrlPayload: CustomerResetByUrlPayload;
  CustomerResetPayload: CustomerResetPayload;
  CustomerUpdatePayload: CustomerUpdatePayload;
  CustomerUserError: CustomerUserError;
  DiscountAllocation: DiscountAllocation;
  DiscountApplication: DiscountApplication;
  DiscountApplicationConnection: DiscountApplicationConnection;
  DiscountApplicationEdge: DiscountApplicationEdge;
  DiscountCodeApplication: DiscountCodeApplication;
  DisplayableError: DisplayableError;
  Domain: Domain;
  ExternalVideo: ExternalVideo;
  Fulfillment: Fulfillment;
  FulfillmentLineItem: FulfillmentLineItem;
  FulfillmentLineItemConnection: FulfillmentLineItemConnection;
  FulfillmentLineItemEdge: FulfillmentLineItemEdge;
  FulfillmentTrackingInfo: FulfillmentTrackingInfo;
  HasMetafields: HasMetafields;
  Image: Image;
  ImageConnection: ImageConnection;
  ImageEdge: ImageEdge;
  MailingAddress: MailingAddress;
  MailingAddressConnection: MailingAddressConnection;
  MailingAddressEdge: MailingAddressEdge;
  ManualDiscountApplication: ManualDiscountApplication;
  Media: Media;
  MediaConnection: MediaConnection;
  MediaEdge: MediaEdge;
  MediaImage: MediaImage;
  Metafield: Metafield;
  MetafieldConnection: MetafieldConnection;
  MetafieldEdge: MetafieldEdge;
  Model3d: Model3d;
  Model3dSource: Model3dSource;
  MoneyV2: MoneyV2;
  MoneyV2Connection: MoneyV2Connection;
  MoneyV2Edge: MoneyV2Edge;
  Node: Node;
  Order: Order;
  OrderConnection: OrderConnection;
  OrderEdge: OrderEdge;
  OrderLineItem: OrderLineItem;
  OrderLineItemConnection: OrderLineItemConnection;
  OrderLineItemEdge: OrderLineItemEdge;
  Page: Page;
  PageConnection: PageConnection;
  PageEdge: PageEdge;
  PageInfo: PageInfo;
  Payment: Payment;
  PaymentSettings: PaymentSettings;
  PricingPercentageValue: PricingPercentageValue;
  Product: Product;
  ProductConnection: ProductConnection;
  ProductEdge: ProductEdge;
  ProductOption: ProductOption;
  ProductPriceRange: ProductPriceRange;
  ProductPriceRangeConnection: ProductPriceRangeConnection;
  ProductPriceRangeEdge: ProductPriceRangeEdge;
  ProductVariant: ProductVariant;
  ProductVariantConnection: ProductVariantConnection;
  ProductVariantEdge: ProductVariantEdge;
  ProductVariantPricePair: ProductVariantPricePair;
  ProductVariantPricePairConnection: ProductVariantPricePairConnection;
  ProductVariantPricePairEdge: ProductVariantPricePairEdge;
  SEO: SEO;
  ScriptDiscountApplication: ScriptDiscountApplication;
  SelectedOption: SelectedOption;
  ShippingRate: ShippingRate;
  Shop: Shop;
  ShopPolicy: ShopPolicy;
  StringConnection: StringConnection;
  StringEdge: StringEdge;
  Transaction: Transaction;
  UnitPriceMeasurement: UnitPriceMeasurement;
  UserError: UserError;
  Video: Video;
  VideoSource: VideoSource;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "ApiVersion"
  | "AppliedGiftCard"
  | "Article"
  | "ArticleAuthor"
  | "ArticleConnection"
  | "ArticleEdge"
  | "Attribute"
  | "AutomaticDiscountApplication"
  | "AvailableShippingRates"
  | "Blog"
  | "BlogConnection"
  | "BlogEdge"
  | "Checkout"
  | "CheckoutAttributesUpdatePayload"
  | "CheckoutAttributesUpdateV2Payload"
  | "CheckoutCompleteFreePayload"
  | "CheckoutCompleteWithCreditCardPayload"
  | "CheckoutCompleteWithCreditCardV2Payload"
  | "CheckoutCompleteWithTokenizedPaymentPayload"
  | "CheckoutCompleteWithTokenizedPaymentV2Payload"
  | "CheckoutCompleteWithTokenizedPaymentV3Payload"
  | "CheckoutCreatePayload"
  | "CheckoutCustomerAssociatePayload"
  | "CheckoutCustomerAssociateV2Payload"
  | "CheckoutCustomerDisassociatePayload"
  | "CheckoutCustomerDisassociateV2Payload"
  | "CheckoutDiscountCodeApplyPayload"
  | "CheckoutDiscountCodeApplyV2Payload"
  | "CheckoutDiscountCodeRemovePayload"
  | "CheckoutEmailUpdatePayload"
  | "CheckoutEmailUpdateV2Payload"
  | "CheckoutGiftCardApplyPayload"
  | "CheckoutGiftCardRemovePayload"
  | "CheckoutGiftCardRemoveV2Payload"
  | "CheckoutGiftCardsAppendPayload"
  | "CheckoutLineItem"
  | "CheckoutLineItemConnection"
  | "CheckoutLineItemEdge"
  | "CheckoutLineItemsAddPayload"
  | "CheckoutLineItemsRemovePayload"
  | "CheckoutLineItemsReplacePayload"
  | "CheckoutLineItemsUpdatePayload"
  | "CheckoutShippingAddressUpdatePayload"
  | "CheckoutShippingAddressUpdateV2Payload"
  | "CheckoutShippingLineUpdatePayload"
  | "CheckoutUserError"
  | "Collection"
  | "CollectionConnection"
  | "CollectionEdge"
  | "Comment"
  | "CommentAuthor"
  | "CommentConnection"
  | "CommentEdge"
  | "CreditCard"
  | "Customer"
  | "CustomerAccessToken"
  | "CustomerAccessTokenCreatePayload"
  | "CustomerAccessTokenCreateWithMultipassPayload"
  | "CustomerAccessTokenDeletePayload"
  | "CustomerAccessTokenRenewPayload"
  | "CustomerActivateByUrlPayload"
  | "CustomerActivatePayload"
  | "CustomerAddressCreatePayload"
  | "CustomerAddressDeletePayload"
  | "CustomerAddressUpdatePayload"
  | "CustomerCreatePayload"
  | "CustomerDefaultAddressUpdatePayload"
  | "CustomerRecoverPayload"
  | "CustomerResetByUrlPayload"
  | "CustomerResetPayload"
  | "CustomerUpdatePayload"
  | "CustomerUserError"
  | "DiscountAllocation"
  | "DiscountApplication"
  | "DiscountApplicationConnection"
  | "DiscountApplicationEdge"
  | "DiscountCodeApplication"
  | "DisplayableError"
  | "Domain"
  | "ExternalVideo"
  | "Fulfillment"
  | "FulfillmentLineItem"
  | "FulfillmentLineItemConnection"
  | "FulfillmentLineItemEdge"
  | "FulfillmentTrackingInfo"
  | "HasMetafields"
  | "Image"
  | "ImageConnection"
  | "ImageEdge"
  | "MailingAddress"
  | "MailingAddressConnection"
  | "MailingAddressEdge"
  | "ManualDiscountApplication"
  | "Media"
  | "MediaConnection"
  | "MediaEdge"
  | "MediaImage"
  | "Metafield"
  | "MetafieldConnection"
  | "MetafieldEdge"
  | "Model3d"
  | "Model3dSource"
  | "MoneyV2"
  | "MoneyV2Connection"
  | "MoneyV2Edge"
  | "Node"
  | "Order"
  | "OrderConnection"
  | "OrderEdge"
  | "OrderLineItem"
  | "OrderLineItemConnection"
  | "OrderLineItemEdge"
  | "Page"
  | "PageConnection"
  | "PageEdge"
  | "PageInfo"
  | "Payment"
  | "PaymentSettings"
  | "PricingPercentageValue"
  | "Product"
  | "ProductConnection"
  | "ProductEdge"
  | "ProductOption"
  | "ProductPriceRange"
  | "ProductPriceRangeConnection"
  | "ProductPriceRangeEdge"
  | "ProductVariant"
  | "ProductVariantConnection"
  | "ProductVariantEdge"
  | "ProductVariantPricePair"
  | "ProductVariantPricePairConnection"
  | "ProductVariantPricePairEdge"
  | "SEO"
  | "ScriptDiscountApplication"
  | "SelectedOption"
  | "ShippingRate"
  | "Shop"
  | "ShopPolicy"
  | "StringConnection"
  | "StringEdge"
  | "Transaction"
  | "UnitPriceMeasurement"
  | "UserError"
  | "Video"
  | "VideoSource";

/**
 * A resource that the metafield belongs to.
 */
export type MetafieldParentResource =
  | {
      __typename: "Product" | undefined;
      available?: undefined;
      /**
       * Indicates if at least one product variant is available for sale.
       */
      availableForSale: ScalarsEnums["Boolean"];
      /**
       * List of collections a product belongs to.
       */
      collections: (args?: {
        /**
         * Returns up to the first `n` elements from the list.
         */
        first?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come after the specified cursor.
         */;
        after?: Maybe<Scalars["String"]>
        /**
         * Returns up to the last `n` elements from the list.
         */;
        last?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come before the specified cursor.
         */;
        before?: Maybe<Scalars["String"]>
        /**
         * Reverse the order of the underlying list.
         * @defaultValue `false`
         */;
        reverse?: Maybe<Scalars["Boolean"]>;
      }) => CollectionConnection;
      compareAtPrice?: undefined;
      /**
       * The compare at price of the product across all variants.
       */
      compareAtPriceRange: ProductPriceRange;
      compareAtPriceV2?: undefined;
      /**
       * The date and time when the product was created.
       */
      createdAt: ScalarsEnums["DateTime"];
      currentlyNotInStock?: undefined;
      /**
       * Stripped description of the product, single line with HTML tags removed.
       */
      description: (args?: {
        /**
         * Truncates string after the given length.
         */
        truncateAt?: Maybe<Scalars["Int"]>;
      }) => ScalarsEnums["String"];
      /**
       * The description of the product, complete with HTML formatting.
       */
      descriptionHtml: ScalarsEnums["HTML"];
      /**
       * A human-friendly unique string for the Product automatically generated from its title.
       * They are used by the Liquid templating language to refer to objects.
       */
      handle: ScalarsEnums["String"];
      /**
       * Globally unique identifier.
       */
      id: ScalarsEnums["ID"];
      image?: undefined;
      /**
       * List of images associated with the product.
       */
      images: (args?: {
        /**
         * Returns up to the first `n` elements from the list.
         */
        first?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come after the specified cursor.
         */;
        after?: Maybe<Scalars["String"]>
        /**
         * Returns up to the last `n` elements from the list.
         */;
        last?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come before the specified cursor.
         */;
        before?: Maybe<Scalars["String"]>
        /**
         * Reverse the order of the underlying list.
         * @defaultValue `false`
         */;
        reverse?: Maybe<Scalars["Boolean"]>
        /**
         * Sort the underlying list by the given key.
         * @defaultValue `"POSITION"`
         */;
        sortKey?: Maybe<ProductImageSortKeys>
        /**
         * Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.
         */;
        maxWidth?: Maybe<Scalars["Int"]>
        /**
         * Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.
         */;
        maxHeight?: Maybe<Scalars["Int"]>
        /**
         * Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.
         */;
        crop?: Maybe<CropRegion>
        /**
         * Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.
         * @defaultValue `1`
         */;
        scale?: Maybe<Scalars["Int"]>;
      }) => ImageConnection;
      /**
       * The media associated with the product.
       */
      media: (args?: {
        /**
         * Returns up to the first `n` elements from the list.
         */
        first?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come after the specified cursor.
         */;
        after?: Maybe<Scalars["String"]>
        /**
         * Returns up to the last `n` elements from the list.
         */;
        last?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come before the specified cursor.
         */;
        before?: Maybe<Scalars["String"]>
        /**
         * Reverse the order of the underlying list.
         * @defaultValue `false`
         */;
        reverse?: Maybe<Scalars["Boolean"]>;
      }) => MediaConnection;
      /**
       * The metafield associated with the resource.
       */
      metafield: (args: {
        /**
         * Container for a set of metafields (maximum of 20 characters).
         */
        namespace: Scalars["String"]
        /**
         * Identifier for the metafield (maximum of 30 characters).
         */;
        key: Scalars["String"];
      }) => Maybe<Metafield>;
      /**
       * A paginated list of metafields associated with the resource.
       */
      metafields: (args?: {
        /**
         * Container for a set of metafields (maximum of 20 characters).
         */
        namespace?: Maybe<Scalars["String"]>
        /**
         * Returns up to the first `n` elements from the list.
         */;
        first?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come after the specified cursor.
         */;
        after?: Maybe<Scalars["String"]>
        /**
         * Returns up to the last `n` elements from the list.
         */;
        last?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come before the specified cursor.
         */;
        before?: Maybe<Scalars["String"]>
        /**
         * Reverse the order of the underlying list.
         * @defaultValue `false`
         */;
        reverse?: Maybe<Scalars["Boolean"]>;
      }) => MetafieldConnection;
      /**
       * The online store URL for the product.
       * A value of `null` indicates that the product is not published to the Online Store sales channel.
       */
      onlineStoreUrl?: Maybe<ScalarsEnums["URL"]>;
      /**
       * List of product options.
       */
      options: (args?: {
        /**
         * Truncate the array result to this size.
         */
        first?: Maybe<Scalars["Int"]>;
      }) => Array<ProductOption>;
      /**
       * List of price ranges in the presentment currencies for this shop.
       */
      presentmentPriceRanges: (args?: {
        /**
         * Specifies the presentment currencies to return a price range in.
         */
        presentmentCurrencies?: Maybe<Array<CurrencyCode>>
        /**
         * Returns up to the first `n` elements from the list.
         */;
        first?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come after the specified cursor.
         */;
        after?: Maybe<Scalars["String"]>
        /**
         * Returns up to the last `n` elements from the list.
         */;
        last?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come before the specified cursor.
         */;
        before?: Maybe<Scalars["String"]>
        /**
         * Reverse the order of the underlying list.
         * @defaultValue `false`
         */;
        reverse?: Maybe<Scalars["Boolean"]>;
      }) => ProductPriceRangeConnection;
      presentmentPrices?: undefined;
      presentmentUnitPrices?: undefined;
      price?: undefined;
      /**
       * The price range.
       */
      priceRange: ProductPriceRange;
      priceV2?: undefined;
      product?: undefined;
      /**
       * A categorization that a product can be tagged with, commonly used for filtering and searching.
       */
      productType: ScalarsEnums["String"];
      /**
       * The date and time when the product was published to the channel.
       */
      publishedAt: ScalarsEnums["DateTime"];
      quantityAvailable?: undefined;
      requiresShipping?: undefined;
      selectedOptions?: undefined;
      sku?: undefined;
      /**
       * A comma separated list of tags that have been added to the product.
       * Additional access scope required for private apps: unauthenticated_read_product_tags.
       */
      tags: Array<ScalarsEnums["String"]>;
      /**
       * The product’s title.
       */
      title: ScalarsEnums["String"];
      /**
       * The total quantity of inventory in stock for this Product.
       */
      totalInventory?: Maybe<ScalarsEnums["Int"]>;
      unitPrice?: undefined;
      unitPriceMeasurement?: undefined;
      /**
       * The date and time when the product was last modified.
       * A product's `updatedAt` value can change for different reasons. For example, if an order
       * is placed for a product that has inventory tracking set up, then the inventory adjustment
       * is counted as an update.
       */
      updatedAt: ScalarsEnums["DateTime"];
      /**
       * Find a product’s variant based on its selected options.
       * This is useful for converting a user’s selection of product options into a single matching variant.
       * If there is not a variant for the selected options, `null` will be returned.
       */
      variantBySelectedOptions: (args: {
        /**
         * The input fields used for a selected option.
         */
        selectedOptions: Array<SelectedOptionInput>;
      }) => Maybe<ProductVariant>;
      /**
       * List of the product’s variants.
       */
      variants: (args?: {
        /**
         * Returns up to the first `n` elements from the list.
         */
        first?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come after the specified cursor.
         */;
        after?: Maybe<Scalars["String"]>
        /**
         * Returns up to the last `n` elements from the list.
         */;
        last?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come before the specified cursor.
         */;
        before?: Maybe<Scalars["String"]>
        /**
         * Reverse the order of the underlying list.
         * @defaultValue `false`
         */;
        reverse?: Maybe<Scalars["Boolean"]>
        /**
         * Sort the underlying list by the given key.
         * @defaultValue `"POSITION"`
         */;
        sortKey?: Maybe<ProductVariantSortKeys>;
      }) => ProductVariantConnection;
      /**
       * The product’s vendor name.
       */
      vendor: ScalarsEnums["String"];
      weight?: undefined;
      weightUnit?: undefined;
    }
  | {
      __typename: "ProductVariant" | undefined;
      /**
       * Indicates if the product variant is in stock.
       * @deprecated Use `availableForSale` instead
       */
      available?: Maybe<ScalarsEnums["Boolean"]>;
      /**
       * Indicates if the product variant is available for sale.
       */
      availableForSale: ScalarsEnums["Boolean"];
      collections?: undefined;
      /**
       * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
       * @deprecated Use `compareAtPriceV2` instead
       */
      compareAtPrice?: Maybe<ScalarsEnums["Money"]>;
      compareAtPriceRange?: undefined;
      /**
       * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
       */
      compareAtPriceV2?: Maybe<MoneyV2>;
      createdAt?: undefined;
      /**
       * Whether a product is out of stock but still available for purchase (used for backorders).
       */
      currentlyNotInStock: ScalarsEnums["Boolean"];
      description?: undefined;
      descriptionHtml?: undefined;
      handle?: undefined;
      /**
       * Globally unique identifier.
       */
      id: ScalarsEnums["ID"];
      /**
       * Image associated with the product variant. This field falls back to the product image if no image is available.
       */
      image: (args?: {
        /**
         * Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.
         */
        maxWidth?: Maybe<Scalars["Int"]>
        /**
         * Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.
         */;
        maxHeight?: Maybe<Scalars["Int"]>
        /**
         * Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.
         */;
        crop?: Maybe<CropRegion>
        /**
         * Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.
         * @defaultValue `1`
         */;
        scale?: Maybe<Scalars["Int"]>;
      }) => Maybe<Image>;
      images?: undefined;
      media?: undefined;
      /**
       * The metafield associated with the resource.
       */
      metafield: (args: {
        /**
         * Container for a set of metafields (maximum of 20 characters).
         */
        namespace: Scalars["String"]
        /**
         * Identifier for the metafield (maximum of 30 characters).
         */;
        key: Scalars["String"];
      }) => Maybe<Metafield>;
      /**
       * A paginated list of metafields associated with the resource.
       */
      metafields: (args?: {
        /**
         * Container for a set of metafields (maximum of 20 characters).
         */
        namespace?: Maybe<Scalars["String"]>
        /**
         * Returns up to the first `n` elements from the list.
         */;
        first?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come after the specified cursor.
         */;
        after?: Maybe<Scalars["String"]>
        /**
         * Returns up to the last `n` elements from the list.
         */;
        last?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come before the specified cursor.
         */;
        before?: Maybe<Scalars["String"]>
        /**
         * Reverse the order of the underlying list.
         * @defaultValue `false`
         */;
        reverse?: Maybe<Scalars["Boolean"]>;
      }) => MetafieldConnection;
      onlineStoreUrl?: undefined;
      options?: undefined;
      presentmentPriceRanges?: undefined;
      /**
       * List of prices and compare-at prices in the presentment currencies for this shop.
       */
      presentmentPrices: (args?: {
        /**
         * The presentment currencies prices should return in.
         */
        presentmentCurrencies?: Maybe<Array<CurrencyCode>>
        /**
         * Returns up to the first `n` elements from the list.
         */;
        first?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come after the specified cursor.
         */;
        after?: Maybe<Scalars["String"]>
        /**
         * Returns up to the last `n` elements from the list.
         */;
        last?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come before the specified cursor.
         */;
        before?: Maybe<Scalars["String"]>
        /**
         * Reverse the order of the underlying list.
         * @defaultValue `false`
         */;
        reverse?: Maybe<Scalars["Boolean"]>;
      }) => ProductVariantPricePairConnection;
      /**
       * List of unit prices in the presentment currencies for this shop.
       */
      presentmentUnitPrices: (args?: {
        /**
         * Specify the currencies in which to return presentment unit prices.
         */
        presentmentCurrencies?: Maybe<Array<CurrencyCode>>
        /**
         * Returns up to the first `n` elements from the list.
         */;
        first?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come after the specified cursor.
         */;
        after?: Maybe<Scalars["String"]>
        /**
         * Returns up to the last `n` elements from the list.
         */;
        last?: Maybe<Scalars["Int"]>
        /**
         * Returns the elements that come before the specified cursor.
         */;
        before?: Maybe<Scalars["String"]>
        /**
         * Reverse the order of the underlying list.
         * @defaultValue `false`
         */;
        reverse?: Maybe<Scalars["Boolean"]>;
      }) => MoneyV2Connection;
      /**
       * The product variant’s price.
       * @deprecated Use `priceV2` instead
       */
      price: ScalarsEnums["Money"];
      priceRange?: undefined;
      /**
       * The product variant’s price.
       */
      priceV2: MoneyV2;
      /**
       * The product object that the product variant belongs to.
       */
      product: Product;
      productType?: undefined;
      publishedAt?: undefined;
      /**
       * The total sellable quantity of the variant for online sales channels.
       */
      quantityAvailable?: Maybe<ScalarsEnums["Int"]>;
      /**
       * Whether a customer needs to provide a shipping address when placing an order for the product variant.
       */
      requiresShipping: ScalarsEnums["Boolean"];
      /**
       * List of product options applied to the variant.
       */
      selectedOptions: Array<SelectedOption>;
      /**
       * The SKU (stock keeping unit) associated with the variant.
       */
      sku?: Maybe<ScalarsEnums["String"]>;
      tags?: undefined;
      /**
       * The product variant’s title.
       */
      title: ScalarsEnums["String"];
      totalInventory?: undefined;
      /**
       * The unit price value for the variant based on the variant's measurement.
       */
      unitPrice?: Maybe<MoneyV2>;
      /**
       * The unit price measurement for the variant.
       */
      unitPriceMeasurement?: Maybe<UnitPriceMeasurement>;
      updatedAt?: undefined;
      variantBySelectedOptions?: undefined;
      variants?: undefined;
      vendor?: undefined;
      /**
       * The weight of the product variant in the unit system specified with `weight_unit`.
       */
      weight?: Maybe<ScalarsEnums["Float"]>;
      /**
       * Unit of measurement for weight.
       */
      weightUnit: ScalarsEnums["WeightUnit"];
    };
/**
 * The price value (fixed or percentage) for a discount application.
 */
export type PricingValue =
  | {
      __typename: "MoneyV2" | undefined;
      /**
       * Decimal money amount.
       */
      amount: ScalarsEnums["Decimal"];
      /**
       * Currency of the money.
       */
      currencyCode: ScalarsEnums["CurrencyCode"];
      percentage?: undefined;
    }
  | {
      __typename: "PricingPercentageValue" | undefined;
      amount?: undefined;
      currencyCode?: undefined;
      /**
       * The percentage value of the object.
       */
      percentage: ScalarsEnums["Float"];
    };

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 */
export interface DiscountApplication {
  /**
   * The method by which the discount's value is allocated to its entitled items.
   */
  allocationMethod: ScalarsEnums["DiscountApplicationAllocationMethod"];
  /**
   * Which lines of targetType that the discount is allocated over.
   */
  targetSelection: ScalarsEnums["DiscountApplicationTargetSelection"];
  /**
   * The type of line that the discount is applicable towards.
   */
  targetType: ScalarsEnums["DiscountApplicationTargetType"];
  /**
   * The value of the discount application.
   */
  value: PricingValue;
}
/**
 * Represents an error in the input of a mutation.
 */
export interface DisplayableError {
  /**
   * Path to the input field which caused the error.
   */
  field?: Maybe<Array<ScalarsEnums["String"]>>;
  /**
   * The error message.
   */
  message: ScalarsEnums["String"];
}
/**
 * Represents information about the metafields associated to the specified resource.
 */
export interface HasMetafields {}
/**
 * Represents a media interface.
 */
export interface Media {
  /**
   * A word or phrase to share the nature or contents of a media.
   */
  alt?: Maybe<ScalarsEnums["String"]>;
  /**
   * The media content type.
   */
  mediaContentType: ScalarsEnums["MediaContentType"];
  /**
   * The preview image for the media.
   */
  previewImage?: Maybe<Image>;
}
/**
 * An object with an ID to support global identification.
 */
export interface Node {
  /**
   * Globally unique identifier.
   */
  id: ScalarsEnums["ID"];
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  ArticleSortKeys: ArticleSortKeys | undefined;
  BlogSortKeys: BlogSortKeys | undefined;
  CardBrand: CardBrand | undefined;
  CheckoutErrorCode: CheckoutErrorCode | undefined;
  CollectionSortKeys: CollectionSortKeys | undefined;
  CountryCode: CountryCode | undefined;
  CropRegion: CropRegion | undefined;
  CurrencyCode: CurrencyCode | undefined;
  CustomerErrorCode: CustomerErrorCode | undefined;
  DigitalWallet: DigitalWallet | undefined;
  DiscountApplicationAllocationMethod:
    | DiscountApplicationAllocationMethod
    | undefined;
  DiscountApplicationTargetSelection:
    | DiscountApplicationTargetSelection
    | undefined;
  DiscountApplicationTargetType: DiscountApplicationTargetType | undefined;
  ImageContentType: ImageContentType | undefined;
  MediaContentType: MediaContentType | undefined;
  MetafieldValueType: MetafieldValueType | undefined;
  OrderCancelReason: OrderCancelReason | undefined;
  OrderFinancialStatus: OrderFinancialStatus | undefined;
  OrderFulfillmentStatus: OrderFulfillmentStatus | undefined;
  OrderSortKeys: OrderSortKeys | undefined;
  PageSortKeys: PageSortKeys | undefined;
  PaymentTokenType: PaymentTokenType | undefined;
  ProductCollectionSortKeys: ProductCollectionSortKeys | undefined;
  ProductImageSortKeys: ProductImageSortKeys | undefined;
  ProductSortKeys: ProductSortKeys | undefined;
  ProductVariantSortKeys: ProductVariantSortKeys | undefined;
  TransactionKind: TransactionKind | undefined;
  TransactionStatus: TransactionStatus | undefined;
  UnitPriceMeasurementMeasuredType:
    | UnitPriceMeasurementMeasuredType
    | undefined;
  UnitPriceMeasurementMeasuredUnit:
    | UnitPriceMeasurementMeasuredUnit
    | undefined;
  WeightUnit: WeightUnit | undefined;
}
