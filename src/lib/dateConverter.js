function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var months = [
    'يناير',
    'فبراير',
    'مارس',
    'إبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];
  var days = [
    'اﻷحد',
    'اﻷثنين',
    'الثلاثاء',
    'اﻷربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var theday = a.getDate('dd');
  var day = days[a.getDay()];
  var hours = a.getHours();
  var minutes = a.getMinutes();
  var ampm = hours >= 12 ? 'مسائاً' : 'صباحاً';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  var time =
    day +
    '  ' +
    theday +
    '  ' +
    month +
    '  ' +
    year +
    ' الساعة ' +
    strTime +
    ' بتوقيت بغداد';
  return time;
}

module.exports = timeConverter;
