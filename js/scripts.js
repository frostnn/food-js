window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');

  const hideTabContent = () => {
    tabsContent.forEach((item) => {
      item.style.display = 'none';
    });
    tabs.forEach((tab) => {
      tab.classList.remove('tabheader__item_active');
    });
  };

  const showeTabContent = (i = 0) => {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
    console.log('2', tabsContent[i].style);
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
});
