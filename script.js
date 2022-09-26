// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   } - asa arata obictul nostru

/**
 * function that determines prime number
 * @param  {Number} num to test if it's prime
 * @return {Boolean}
 */
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error found");
      }
    })
    .then(function (data) {
      let titles = "";
      let bodyContent = "";
      for (let i = 0; i < data.length; i++) {
        let dataTitle = data[i].title;
        let dataBody = data[i].body;
        if (
          data[i].id % 3 == 0 &&
          isPrime(data[i].userId) &&
          dataTitle.length >= 15 &&
          dataTitle.length <= 30 &&
          dataBody.length >= 15 &&
          dataBody.length <= 150
        ) {
          console.log(`${dataTitle.length} - numarul de la lungimea titlului`);
          console.log(`${dataBody.length} - numarul de la lungimea body-ului`);
          console.log(
            `${data[i].userId} - user-ID-ul obiectului din pagina web`
          );
          if (data[i].id % 2) {
            titles += "<p class='oddColor'>" + dataTitle + "</p>";

            bodyContent += "<p class='oddColor'>" + dataBody + "</p>";
          } else {
            titles += "<p class='evenColor'>" + dataTitle + "</p>";
            bodyContent += "<p class='evenColor'>" + dataBody + "</p>";
          }
        } else {
          console.log("Conditions of if cannot be met simultaneously!");
        }
      }
      document.getElementById("content").innerHTML = bodyContent;
      document.getElementById("title").innerHTML = titles;

      let oddNumbers = document.getElementsByClassName("oddColor");
      let evenNumbers = document.getElementsByClassName("evenColor");

      console.log(oddNumbers.length);
      console.log(evenNumbers.length);

      for (var j = 0; j < oddNumbers.length; j++) {
        oddNumbers[j].style.background = "red";
      }
      for (var j = 0; j < evenNumbers.length; j++) {
        evenNumbers[j].style.background = "green";
      }
    })
    .catch(function (error) {
      alert(error);
    });
  document.getElementById("pictures").onclick = function () {
    //XHR is a JavaScript predefined object
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
    // We send the request
    xhr.send();
    // We add an event listener, waiting for the answer
    xhr.onload = function (data) {
      let jsonResponse = JSON.parse(data.target.response);
      let pics = "";
      for (var i = 0; i < 10; i++) {
        console.log(jsonResponse[i].url);
        pics += "<img src= '" + jsonResponse[i].url + "'>";
      }
      document.getElementById("pictures").innerHTML = pics;
    };
  };
};

// The getElementsByClassName() method returns a collection of elements with a specified class name(s) - poti selecta din ele
// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string - le coloreazza ca grup, nu pot fi luate individual
