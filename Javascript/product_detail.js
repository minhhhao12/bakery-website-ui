const priceElement = document.querySelector("#product-price");
      const sizeLabel = document.querySelector("#selected-size-label");
      const quantityInput = document.querySelector("#quantity");
      const cartBadge = document.querySelector(".cart-badge");
      const toast = document.querySelector("#cart-toast");
      const loadMoreReviewsButton = document.querySelector("#load-more-reviews");
      const galleryMain = document.querySelector("#product-gallery-main");
      const galleryCaption = document.querySelector("#gallery-caption");
      const mainProductImage = document.querySelector("#main-product-image");

      document.querySelectorAll(".gallery-thumb").forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
          galleryMain.dataset.view = thumbnail.dataset.view;
          galleryCaption.textContent = `${thumbnail.dataset.caption} · Làm mới mỗi ngày tại bếp Sweet Bakery`;
          mainProductImage.alt = thumbnail.getAttribute("aria-label");
          document.querySelectorAll(".gallery-thumb").forEach((item) => {
            const isSelected = item === thumbnail;
            item.classList.toggle("is-selected", isSelected);
            item.setAttribute("aria-pressed", String(isSelected));
          });
        });
      });

      document.querySelectorAll('input[name="size"]').forEach((option) => {
        option.addEventListener("change", () => {
          priceElement.textContent = `${Number(option.value).toLocaleString("vi-VN")}₫`;
          sizeLabel.textContent = option.dataset.label;
        });
      });

      document.querySelector("#add-to-cart").addEventListener("click", () => {
        const quantity = Math.min(20, Math.max(1, Number(quantityInput.value) || 1));
        quantityInput.value = quantity;
        cartBadge.textContent = "1";
        toast.textContent = "Thêm vào giỏ hàng thành công";
        toast.classList.add("is-visible");
        window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
      });

      loadMoreReviewsButton.addEventListener("click", () => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        loadMoreReviewsButton.animate(
          [
            { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(232, 154, 174, 0)" },
            { transform: "scale(1.06)", boxShadow: "0 0 0 8px rgba(232, 154, 174, 0.28)", offset: 0.45 },
            { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(232, 154, 174, 0)" },
          ],
          { duration: 520, easing: "ease-out" },
        );
      });