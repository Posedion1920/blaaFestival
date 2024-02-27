const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    const plusIcon = title.querySelector('.fa-plus');
    const minusIcon = title.querySelector('.fa-minus');

    // Skift plus og minus ikoner afhængigt af accordionens tilstand
    if (content.classList.contains('show')) {
      content.classList.remove('show');
      plusIcon.classList.remove('hidden');
      minusIcon.classList.add('hidden');
    } else {
      content.classList.add('show');
      plusIcon.classList.add('hidden');
      minusIcon.classList.remove('hidden');
    }
  });
});
