function add_to_cart(id, price) {
  let selectedItem = $(id).children([1]).children([0]).html();
  let selectedItemPrice = $(price).html();
  $("#modal_body").append(
    `<p>${selectedItem} cost <strong>${selectedItemPrice}</strong></p>`
  );
}
