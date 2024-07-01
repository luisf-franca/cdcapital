document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('details').forEach(function (details) {
    details.querySelector('summary').addEventListener('click', function () {
      details.classList.toggle('open');
    });
  });
});
