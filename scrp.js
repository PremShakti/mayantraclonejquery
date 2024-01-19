$(document).ready(function () {
  var cate = "";
  var ord;
  var page = 1;

  $.ajax({
    url: `https://myapiforaries.onrender.com/furniture/getitem?categary=${cate}&order=${ord}&limit=8&page=${page}`,
    method: "GET",
    dataType: "json",
    success: function (data) {
      // Process the received data and display it on the page
      displayFurnitureItems(data);
    },
    error: function (error) {
      console.error("Error fetching data:", error);
    },
  });

  function usebtns(cate, ord, page) {
    $.ajax({
      url: `https://myapiforaries.onrender.com/furniture/getitem?categary=${cate}&order=${ord}&limit=8&page=${page}`,
      method: "GET",
      dataType: "json",
      success: function (data) {
        // Process the received data and display it on the page
        displayFurnitureItems(data);
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
  }

  // Function to display furniture items on the page
  function displayFurnitureItems(items) {
    var furnitureList = $("#main");

    // Clear existing content
    furnitureList.empty();

    // Loop through the items and create HTML elements to display them
    $.each(items, function (index, item) {
      var cardHtml = `
  <a class="col-6 col-lg-3 cardpart" href="sgp.html?id=${item._id}">
<div class="card cardimages">
<img
  src=${item.url}
  class="card-img-top"
  alt="img"
/>
<div class="card-body">
  

  <h5 class="card-title">${item.name}</h5>
  <div class="container overflow-hidden text-center border-top">
<div class="row gx-5">
<div class="col">
<div class="p-3">Price  ${item.price}</div>
</div>
<div class="col">
<div class="p-3">Rating ${item.rating}</div>
</div>
</div>
</div>
  <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
</div>
</div>
</a>
`;
      furnitureList.append(cardHtml);
    });
  }

  let to = false;
  $("#lefthamberguricon").on("click", function () {
    console.log("okkkkklll");

    to = !to;
    $(".sidebarleft").animate({ width: to ? "200px" : "0" }, 500);
  });

  $("#men").on("click", function () {
    window.location.href = "mens.html";
  });
  $("#home").on("click", function () {
    window.location.href = "index.html";
  });
  $("#sidebartogle").on("click", togl);

  let t = false;
  function togl() {
    t = !t;
    $(".sidebar").animate({ height: t ? "300px" : "0" }, 500);
  }

  // buttons

  $("#heightoLow").on("click", function () {
    ord = -1;

    usebtns(cate, ord);
  });

  $("#lowtoHeigh").on("click", function () {
    ord = 1;

    usebtns(cate, ord);
  });

  $("#jeans").on("click", function () {
    cate = "jeans";
    usebtns(cate);
  });

  $("#shirts").on("click", function () {
    cate = "shirt";
    usebtns(cate);
  });

  $("#preveios").on("click", function () {
    if (page > 1) {
      page--;
      usebtns(cate, ord, page);
    }
  });
  $("#next").on("click", function () {
    if (page < 4) {
      page++;
      usebtns(cate, ord, page);
    }
  });
});
