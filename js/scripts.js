window.addEventListener('DOMContentLoaded', () => {
  /* cards */
  /*   class Cards {
    constructor(img, title, descr, price = '1234') {
      this.img = img;
      this.title = title;
      this.descr = descr;
      this.price = price;
    }

    render() {
      const container = document.querySelector('.menu__field .container');
      const blockCard = document.createElement('div');
      blockCard.classList.add('menu__item');
      blockCard.innerHTML = `
        <img src="${this.img}" alt="vegy" />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
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
  } */

  const getResourse = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status} `);
    }
    return await res.json();
  };

  /*   getResourse('http://localhost:3000/menu').then((data) => {
    data.forEach(({ img, title, descr, price }) => {
      new Cards(img, title, descr, price).render();
    });
  }); */

  getResourse('http://localhost:3000/menu').then((data) => {
    createCard(data);
  });

  const createCard = (data) => {
    data.forEach(({ img, title, descr, price }) => {
      const container = document.querySelector('.menu__field .container');
      const blockCard = document.createElement('div');
      blockCard.classList.add('menu__item');
      blockCard.innerHTML = `
      <img src="${img}" alt="vegy" />
      <h3 class="menu__item-subtitle">${title}</h3>
      <div class="menu__item-descr">${descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total">
          <span>${price}</span> руб/день
        </div>
      </div>
    `;
      container.insertAdjacentElement('afterBegin', blockCard);
    });
  };

  /* Modal */
  const modal = document.querySelector('.modal');
  const btnOpen = document.querySelectorAll('button[data-modal]');

  const modalClose = () => {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  };

  const modalOpen = () => {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearTimeout(modalTimerId);
  };

  btnOpen.forEach((btn) => {
    btn.addEventListener('click', modalOpen);
  });

  modal.addEventListener('click', (e) => {
    if (e.target.getAttribute('data-close') == '') {
      modalClose();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      modalClose();
    }
  });

  const modalTimerId = setTimeout(modalOpen, 20000);

  /*   window.addEventListener('scroll', () => {
      if (
        window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
      ) {
        modalOpen();
      }
    }); */
  /* MODAL */

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'Загрузка',
    success: 'Спасибо!',
    failers: 'Что-то пошло не так...',
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: data,
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMassage = document.createElement('div');
      statusMassage.classList.add('status');
      statusMassage.textContent = message.loading;
      form.insertAdjacentElement('afterBegin', statusMassage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMassage.remove();
        })
        .catch(() => {
          showThanksModal(message.failers);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    modalOpen();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__content">
        <div class="modal__close" data-close>x</div>
        <div class="modal__title">${message}</div>
      </div>
    </div>
    `;
    document
      .querySelector('.modal')
      .insertAdjacentElement('afterBegin', thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      modalClose();
    }, 4000);
  }
});
