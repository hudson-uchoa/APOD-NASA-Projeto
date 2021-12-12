$("#enviar").click(function () {
  let fadd = $("#data").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=jc9sUQZK5upx2PqEy4xX3jKCmGYnNN40qRMACt1U&date=${fadd}`,
    type: "GET",
    success: function (data) {
      console.log(data);
      $("body").css("height", "auto");
      $("#titulo").text(data.title);
      $("#imagem").css("display", "none");
      $("#imagem-apod").attr("src", data.url);
      $("#coment").text(data.explanation);
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
      $("#imagem-apod").attr("src", data.url);
      $("#coment").text(data.explanation);
    },
  });
});
