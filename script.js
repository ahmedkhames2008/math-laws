const buttons = document.querySelectorAll('.copy-btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const text = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(text).then(() => {
      button.textContent = 'Copied!';
      setTimeout(() => button.textContent = 'Copy', 1500);
    });
  });
});