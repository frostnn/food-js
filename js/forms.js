window.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'Загрузка',
    success: 'Спасибо!',
    failers: 'Что-то пошло не так...',
  };

  forms.forEach((item) => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMassage = document.createElement('div');
      statusMassage.classList.add('status');
      statusMassage.textContent = message.loading;
      form.insertAdjacentElement('afterBegin', statusMassage);

      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'multipart/form-data');
      const formData = new FormData(form);

      request.send(formData);
      request.addEventListener('load', () => {
        request.status === 200
          ? (statusMassage.textContent = message.success)
          : (statusMassage.textContent = message.failers);
      });
    });
  }
});
