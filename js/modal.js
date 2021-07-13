$(document).ready(function () {
  $("#product-image").click(function () {
    $('#exampleModal').modal('show');
  });
});






$('#exampleModal').on('show.bs.modal', function (event) {
  let img = $(event.relatedTarget) // Image that triggered the modal
  let title = img.data('title')
  let description = img.data('description')
  let productImg = img.data('img')
  let image = document.getElementById('productImage')
  let productUrl = img.data('url')
  let spanName = document.getElementById('product-modal-name')
  let productButton = document.getElementById('product-button')

  // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  let modal = $(this)
  modal.find('.modal-title').text(title)
  productButton.href = productUrl
  spanName.innerText = title
  image.src = productImg
  modal.find('.modal-body #description').text(description)
})

// $('#modal-container').click(function () {
//   $('body').removeClass('modal-active');
// });