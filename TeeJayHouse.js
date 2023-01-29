// Get the input element
let searchInput = document.getElementById("search-input");

// Add an event listener to the input element
searchInput.addEventListener("keyup", function() {
  // Get the value of the input
  let searchValue = searchInput.value.toLowerCase();
  
  // Get all the accommodation listings
  let accommodationListings = document.getElementsByClassName("accommodation-listing");
  
  // Loop through the listings
  for (let i = 0; i < accommodationListings.length; i++) {
    // Get the name of the listing
    let listingName = accommodationListings[i].getElementsByClassName("name")[0].innerHTML.toLowerCase();
    
    // Check if the listing name contains the search value
    if (listingName.indexOf(searchValue) > -1) {
      // Show the listing
      accommodationListings[i].style.display = "block";
    } else {
      // Hide the listing
      accommodationListings[i].style.display = "none";
    }
  }
});