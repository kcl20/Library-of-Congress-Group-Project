// Fetch API and then parse the response as JSON
var searchTerm= document.getElementById('searchTerm').value;
var selectDropdown = document.getElementById('fetch-button');

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://www.loc.gov/' + selectDropdown + '/?q=' + searchTerm + '/?fo=json';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
      }
    };

    // var searchResults = response.json;
    // console.log(searchResults);
    // renderResults (searchResults);

// searchResults
// {
    title: ,
    date: ,
    tags: ,
    description: ,
    url: , 
}



fetchButton.addEventListener('click', getApi);

function renderResults () {
    // change URL of document page to search results page
}