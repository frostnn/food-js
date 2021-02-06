window.addEventListener('DOMContentLoaded', () => {
  /* tabs */

  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');

  const hideTabContent = () => {
    tabsContent.forEach((item) => {
      item.classList.remove('show');
      item.classList.add('hide', 'fade');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('tabheader__item_active');
    });
  };

  const showeTabContent = (i = 0) => {
    tabsContent[i].classList.remove('hide');
    tabsContent[i].classList.add('show', 'fade');
    tabs[i].classList.add('tabheader__item_active');
  };

  hideTabContent();
  showeTabContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showeTabContent(i);
        }
      });
    }
  });

  /* timer */

  const deadline = '2021-05-15';

  const getTimeRemaining = (endTime) => {
    const t = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const getZero = (num) => {
    return num >= 0 && num < 10 ? `0${num}` : num;
  };

  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector),
      daysTime = timer.querySelector('#days'),
      hoursTime = timer.querySelector('#hours'),
      minutesTime = timer.querySelector('#minutes'),
      secondsTime = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const { total, days, hours, minutes, seconds } = getTimeRemaining(
        endTime
      );

      daysTime.textContent = getZero(days);
      hoursTime.textContent = getZero(hours);
      minutesTime.textContent = getZero(minutes);
      secondsTime.textContent = getZero(seconds);
      if (total <= 0) {
        clearInterval(timeInterval);
      }
    }
  };

  setClock('.timer', deadline);
});
