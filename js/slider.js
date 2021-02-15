window.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.offer__slider');

  const wrapper = document.querySelector('.offer__slider-wrapper');
  const slide = document.querySelectorAll('.offer__slide');
  const next = document.querySelector('.offer__slider-next');
  const prev = document.querySelector('.offer__slider-prev');
  const total = document.querySelector('#total');
  const current = document.querySelector('#current');
  const slidesField = document.querySelector('.offer__slider-inner');
  const width = window.getComputedStyle(wrapper).width;

  let count = 1;
  let offset = 0;
  if (slide.length < 10) {
    total.textContent = `0${slide.length}`;
    current.textContent = `0${count}`;
  } else {
    total.textContent = slide.length;
    current.textContent = count;
  }

  slidesField.style.width = 100 * slide.length + '%';
  slide.forEach((item) => {
    item.style.width = width;
  });
  //width=500px

  slider.style.position = 'relative';
  const dots = document.createElement('ol');
  const dotSlide = [];
  dots.classList.add('carousel-dots');
  slider.append(dots);
  for (let i = 0; i < slide.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i == 0) {
      dot.style.opacity = 1;
    }
    dots.append(dot);
    dotSlide.push(dot);
  }
  next.addEventListener('click', () => {
    if (offset == +width.replace(/\D/g, '') * (slide.length - 1)) {
      offset = 0;
    } else {
      offset += +width.replace(/\D/g, '');
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    slide.length < 10
      ? (current.textContent = `0${count}`)
      : (current.textContent = count);

    if (count == slide.length) {
      conut = 1;
    } else {
      count++;
    }

    dotSlide.forEach((dot) => (dot.style.opacity = '0.5'));
    dotSlide[count - 1].style.opacity = 1;
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.replace(/\D/g, '') * (slide.length - 1);
    } else {
      offset -= +width.replace(/\D/g, '');
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    slide.length < 10
      ? (current.textContent = `0${count}`)
      : (current.textContent = count);

    if (count == 1) {
      conut = slide.length;
    } else {
      count--;
    }

    dotSlide.forEach((dot) => (dot.style.opacity = '0.5'));
    dotSlide[count - 1].style.opacity = 1;
  });
  dotSlide.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');
      count = slideTo;
      offset = +width.replace(/\D/g, '') * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      slide.length < 10
        ? (current.textContent = `0${count}`)
        : (current.textContent = count);
      dotSlide.forEach((dot) => (dot.style.opacity = '0.5'));
      dotSlide[count - 1].style.opacity = 1;
    });
  });
  /*  total.innerHTML = slide.length;
  showSlides(count);
  function showSlides(n) {
    slide.length < 10
      ? (total.textContent = `0${slide.length}`)
      : (total.textContent = slide.length);

    if (n > slide.length) {
      count = 1;
    }

    if (n < 1) {
      count = slide.length;
    }

    slide.forEach((item) => {
      item.style.display = 'none';
    });

    slide[count - 1].style.display = 'block';

    slide.length < 10
      ? (current.textContent = `0${count}`)
      : (current.textContent = count);
  }

  const plusSlides = (n) => {
    showSlides((count += n));
  };

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  prev.addEventListener('click', () => {
    plusSlides(-1);
  }); */
});
