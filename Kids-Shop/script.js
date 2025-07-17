// Добавление товара в корзину
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Товар добавлен в корзину!");
}

// Обработка кнопки
document.querySelectorAll(".add-to-cart")?.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");
    const name = card.querySelector("h3").textContent;
    const price = card.querySelector(".price").textContent;
    const img = card.querySelector("img").getAttribute("src");

    addToCart({ name, price, img });
  });
});