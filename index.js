function element() {
  document.getElementById("searchBtn").addEventListener("click", function () {
  var land = document.getElementById("countryInput").value;
  fetch(`https://api.restcountries.com/countries/v5?q=${land}`, {
    headers: {
      Authorization: "Bearer rc_live_52be9d7293924ce6b6b33283c5d4fec7",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var land = document.getElementById("countryInput").value;
      console.log(land);
      document.getElementById("countryFlag").src =
        data.data.objects[0].flag.url_png;
      document.getElementById("countryName").innerHTML =
        data.data.objects[0].names.common;
      document.getElementById("countryOfficialName").innerHTML =
        data.data.objects[0].names.official;
      document.getElementById("capital").innerHTML =
        data.data.objects[0].capitals[0].name;
      document.getElementById("continent").innerHTML =
        data.data.objects[0].continents[0];
      document.getElementById("population").innerHTML =
        data.data.objects[0].population;
      document.getElementById("currency").innerHTML =
        data.data.objects[0].currencies[0].code;
      document.getElementById("language").innerHTML =
        data.data.objects[0].languages[0].name;
      document.getElementById("area").innerHTML =
        data.data.objects[0].area.kilometers;
      document.getElementById("timezone").innerHTML =
        data.data.objects[0].timezones[0];

      console.log(data);
      console.log(data.data);
      console.log(data.data.objects);
      console.log(data.data.objects[0]);
    });
});
}
element()

document.getElementById("countryInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});
