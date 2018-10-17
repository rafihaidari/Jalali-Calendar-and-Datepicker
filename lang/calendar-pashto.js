// ** Translated for Afghanistan Pasto Language

// Calendar Pashto language
// Author: Rafi Haidari, <rafi@haidari.co>
// Encoding: UTF-8
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
Calendar._DN = new Array
("شنبې",
 "دوشنبه",
 "سې شنبه",
 "چهارشنبه",
 "پنجشنبه",
 "جمعه",
 "شنبه",
 "یکشنبه");

// Please note that the following array of short day names (and the same goes
// for short month names, _SMN) isn't absolutely necessary.  We give it here
// for exemplification on how one can customize the short day names, but if
// they are simply the first N letters of the full name you can simply say:
//
//   Calendar._SDN_len = N; // short day name length
//   Calendar._SMN_len = N; // short month name length
//
// If N = 3 then this is not needed either since we assume a value of 3 if not
// present, to be compatible with translation files that were written before
// this feature.

// short day names
Calendar._SDN = new Array
("یو",
 "دوه",
 "درې",
 "څلور",
 "پنځه",
 "جمعه",
 "شنبه",
 "یو");

// First day of the week. "0" means display Sunday first, "1" means display
// Monday first, etc.
Calendar._FD = 6;

// full month names
Calendar._MN = new Array
("جنوری",
 "فبروری",
 "مارچ",
 "آپریل",
 "می",
 "جون",
 "جولای",
 "آگوست",
 "سپتامبر",
 "اکتبر",
 "نوامبر",
 "دسامبر");

// short month names
Calendar._SMN = new Array
("Jan",
 "Feb",
 "Mar",
 "Apr",
 "May",
 "Jun",
 "Jul",
 "Aug",
 "Sep",
 "Oct",
 "Nov",
 "Dec");

 // full month names
Calendar._JMN = new Array
("وری",
 "غوایی",
 "غبر گولی",
 "چنگاش",
 "زمری",
 "وژی",
 "تله",
 "لرم",
 "لیندی",
 "مرغومی",
 "سلواغه",
 "کب");

// short month names
Calendar._JSMN = new Array
("وری",
"غوایی",
"غبر گولی",
"چنگاش",
"زمری",
"وژی",
"تله",
"لرم",
"لیندی",
"مرغومی",
"سلواغه",
"کب");


// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "د کلیزې په اړه";

Calendar._TT["ABOUT"] =
"Jalali Bootstrap 4 Calender\n" +
"Copyright (c) 2018 Rafi Haidari (http://haidari.co/)\n" + // don't translate this this ;-)
"Distributed under GNU GPL. See http://gnu.org/licenses/gpl.html for details.\n\n" +

"Based on The DHTML Calendar developed by Dynarch.com.\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)

"\n\n" +
"Date selection:\n" +
"- Use the \xab, \xbb buttons to select year\n" +
"- Use the " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " buttons to select month\n" +
"- Hold mouse button on any of the above buttons for faster selection.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Time selection:\n" +
"- Click on any of the time parts to increase it\n" +
"- or Shift-click to decrease it\n" +
"- or click and drag for faster selection.";

Calendar._TT["PREV_YEAR"] = "تیر کال (hold for menu)";
Calendar._TT["PREV_MONTH"] = "تیره میاشت (hold for menu)";
Calendar._TT["GO_TODAY"] = "نن ته لاړ شه";
Calendar._TT["NEXT_MONTH"] = "بله میاشت (hold for menu)";
Calendar._TT["NEXT_YEAR"] = "بل کال (hold for menu)";
Calendar._TT["SEL_DATE"] = "نیټه وټاکئ";
Calendar._TT["DRAG_TO_MOVE"] = "Drag to move";
Calendar._TT["PART_TODAY"] = " (نن)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "لومړی، %s به وښودل شي";

Calendar._TT["SELECT_COLUMN"] = "ټول وټاکئ %s‌دا میاشت";
Calendar._TT["SELECT_ROW"] = "د دې اونۍ ورځ وټاکئ";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "5";

Calendar._TT["CLOSE"] = "بنده";
Calendar._TT["TODAY"] = "نن";
Calendar._TT["TIME_PART"] = "(Shift-)Click or drag to change value";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%A, %e %b";

Calendar._TT["WK"] = "اونۍ";
Calendar._TT["TIME"] = "وخت :";

Calendar._TT["LAM"] = "ق.ظ.";
Calendar._TT["AM"] = "ق.ظ.";
Calendar._TT["LPM"] = "ب.ظ.";
Calendar._TT["PM"] = "ب.ظ.";

Calendar._NUMBERS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

Calendar._DIR = 'rtl';