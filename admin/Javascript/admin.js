// 1. Toast dùng chung: hiện thông báo, tự ẩn sau 3 giây.
const adminToast = document.getElementById('admin-toast');
let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  adminToast.textContent = message;
  adminToast.hidden = false;
  toastTimer = setTimeout(() => {
    adminToast.hidden = true;
  }, 3000);
}

// 2. Định dạng giá: 350000 -> 350.000. Chỉ giữ các chữ số.
function formatPrice(input) {
  const digits = input.value.replace(/\D/g, '').replace(/^0+(?=\d)/, '');
  input.value = digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

document.querySelectorAll('[data-price]').forEach((input) => {
  formatPrice(input);
  input.addEventListener('input', () => formatPrice(input));
});

// 3. Nút thao tác: đọc nội dung thông báo từ thuộc tính data-toast trong HTML.
// Ví dụ: <button type="button" data-toast="Đã hoàn tất.">Thao tác</button>
// Liên kết chuyển trang và nút mở hộp thoại vẫn hoạt động như cũ.
document.querySelectorAll('button[data-toast], a[data-toast]').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Các hộp thoại hiện tại dùng CSS :target nên đổi hash để đóng.
    if (button.hasAttribute('data-close-modal')) {
      window.location.hash = '!';
    }

    showToast(button.dataset.toast);
  });
});

document.querySelectorAll('form[data-toast]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.closest('.admin-modal')) {
      window.location.hash = '!';
    }

    showToast(form.dataset.toast);
  });
});
