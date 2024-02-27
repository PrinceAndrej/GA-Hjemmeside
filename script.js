var video = document.getElementById("back-video");
var icon = document.querySelector(".fa-pause");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    video.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}

icon.addEventListener("click", togglePlayPause);

var btn = document.getElementById("submit");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var message = document.getElementById("message").value;
  var body = `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`;

  Email.send({
    SecureToken: "d8a28c73-6a50-4267-96be-16199c6f3e04",
    To: "kontakt@gjenbruksarkitektene.no",
    From: "kontakt@gjenbruksarkitektene.no",
    Subject: "Ny melding fra kontaktskjema",
    Body: body,
  }).then((message) => alert(message));
});
