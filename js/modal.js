window.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const btnOpen = document.querySelectorAll('button[data-modal]');
  const btnClose = document.querySelector('[data-close]');

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

  btnClose.addEventListener('click', modalClose);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
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
});
