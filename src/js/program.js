document.querySelectorAll('.program-list-item').forEach(item => {
  const openText = item.querySelector('.open-text');
  const openArrow = item.querySelector('.open-arrow');

  item.addEventListener('click', () => {
    item.classList.toggle('open');
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      openArrow.classList.add('turn-down');
      openText.textContent = 'Закрити програму';
    } else {
      openArrow.classList.remove('turn-down');
      openText.textContent = 'відкрити програму';
    }
  });
});
