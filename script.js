$("#enviar").click(function () {
  let fadd = $("#data").val();
  console.log(fadd);
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=jc9sUQZK5upx2PqEy4xX3jKCmGYnNN40qRMACt1U&date=${fadd}`,
    type: "GET",
    success: function (data) {
      console.log(data);
      $("#titulo").text(data.title);
      $("#imagem").css("display", "none");
      if (data.media_type == "video") {
        $("#imagem-apod").css("display", "none");
        $("#video").css("display", "flex");
        $("#video").attr("src", data.url);
      } else {
        $("#imagem-apod").css("display", "flex");
        $("#video").css("display", "none");
        $("#imagem-apod").attr("src", data.url);
      }

      $("#coment").text(data.explanation);
    },
    error: function (erro) {
      console.error(erro);
    },
  });
});

$("#ftHoje").click(function () {
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=jc9sUQZK5upx2PqEy4xX3jKCmGYnNN40qRMACt1U&`,
    type: "GET",
    success: function (data) {
      console.log(data);
      $("body").css("height", "auto");
      $("#titulo").text(data.title);
      $("#imagem").css("display", "none");
      if (data.media_type == "video") {
        $("#imagem-apod").css("display", "none");
        $("#video").css("display", "flex");
        $("#video").attr("src", data.url);
      } else {
        $("#imagem-apod").css("display", "flex");
        $("#video").css("display", "none");
        $("#imagem-apod").attr("src", data.url);
      }

      $("#coment").text(data.explanation);
    },
    error: function (erro) {
      console.error(erro);
    },
  });
});

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     {
//       pageLanguage: "en",
//       layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//     },
//     "translate"
//   );
// }
