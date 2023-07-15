export default function useGetCountDownTimer(dateTime: any) {
  const currentD = new Date();
  const formulatedDate = new Date(dateTime)

  // @ts-ignore
  const diffDateTime = formulatedDate - currentD;

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;

  var seconds = Math.floor((diffDateTime % (1000 * 60)) / 1000);
  var days = Math.floor(diffDateTime / _day);
  var hours = Math.floor((diffDateTime % _day) / _hour);
  var minutes = Math.floor((diffDateTime % _hour) / _minute);

  const countdownTimer = { d: days, h: hours, m: minutes, s: seconds };

  return { countdownTimer };
}
