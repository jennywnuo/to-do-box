var button = $(`.button`)
var cardContainer = $('.card-container');

$(`.card-container`).on("click", ".delete-btn", deleteContact)
button.on("click", getInfo);

function getInfo() {
  var name = $('.name').val();
  var email = $('.email').val();
  var address = $('.address').val();

  var cardInfo = { name: name, email: email, address: address };

  appendCard (cardInfo)
}

 function appendCard (cardInfo) {
  cardContainer.append(`
    <div class="contact-card">
      <p><strong>Name:</strong> ${cardInfo.name}</p>
      <p><strong>Email:</strong> ${cardInfo.email}</p>
      <p><strong>Address:</strong> ${cardInfo.address}</p>
      <input type="button" value="Delete Contact" class="delete-btn">
    </div>
  `);
}

function deleteContact(event){
  event.target.parentNode.remove(".contact-card");
}
