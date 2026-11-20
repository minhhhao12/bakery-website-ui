const accountForm = document.querySelector('.account-form');
const accountToast = document.getElementById('account-toast');
let toast;
accountForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearTimeout(toast);
  accountToast.hidden = false;
  toast=setTimeout(() => {
    accountToast.hidden = true;
  }, 3000);
});
