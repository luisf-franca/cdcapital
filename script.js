document.addEventListener('DOMContentLoaded', function () {
  const detailsElements = document.querySelectorAll('details');

  detailsElements.forEach((details) => {
    details.addEventListener('toggle', function () {
      if (this.open) {
        detailsElements.forEach((otherDetails) => {
          if (otherDetails !== details && otherDetails.open) {
            otherDetails.open = false;
          }
        });
      }
    });
  });
});
