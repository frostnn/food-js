window.addEventListener('DOMContentLoaded', () => {
  class Cards {
    constructor(img, title, text, price = '1234') {
      this.img = img;
      this.title = title;
      this.text = text;
      this.price = price;
    }

    render() {
      const container = document.querySelector('.menu__field .container');
      const blockCard = document.createElement('div');
      blockCard.classList.add('menu__item');
      blockCard.innerHTML = `
        <img src="${this.img}" alt="vegy" />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.text}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total">
            <span>${this.price}</span> руб/день
          </div>
        </div>
      `;
      container.insertAdjacentElement('afterBegin', blockCard);
    }
  }

  const fitness = new Cards(
    'img/tabs/vegy.jpg',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продук активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    '1229'
  );

  fitness.render();

  const premium = new Cards(
    'img/tabs/elite.jpg',
    'Меню "Премиум"',
    ' В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественно исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!!',
    '1550'
  );

  premium.render();

  const lean = new Cards(
    'img/tabs/post.jpg',
    'Меню "Постное"',
    'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    '1430'
  );

  lean.render();
});
