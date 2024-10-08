// Function to show popup for the given section
function showPopup(sectionId) {
  const sectionContent = document.getElementById(sectionId);
  const popupContainer = document.getElementById("popupContainer");

  // Clear previous content
  popupContainer.innerHTML = "";

  // Clone the section content and append it to the popup
  const clonedContent = sectionContent.cloneNode(true);
  popupContainer.appendChild(clonedContent);

  // Add close button to the popup
  const closeButton = document.createElement("span");
  closeButton.className = "close-button";
  closeButton.textContent = "X";
  closeButton.onclick = closePopup;
  popupContainer.appendChild(closeButton);

  // Show the popup
  popupContainer.style.opacity = "0";
  popupContainer.style.display = "block";
  setTimeout(() => {
    popupContainer.style.opacity = "1";
  }, 10);
}

// Function to close the popup
function closePopup() {
  const popupContainer = document.getElementById("popupContainer");
  popupContainer.style.opacity = "0";
  setTimeout(() => {
    popupContainer.style.display = "none";
  }, 300); // Adjust the duration to match your CSS transition duration
}

// Add click event listeners to all links in the news-slider section
const newsLinks = document.querySelectorAll(".news-slider .team-block-info a");
newsLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    const sectionId = this.getAttribute("href").substring(1); // Get section ID
    showPopup(sectionId);
  });
});

// Add click event listeners to all links in the events section
const eventLinks = document.querySelectorAll(".events .team-card a");
eventLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    const sectionId = this.getAttribute("href").substring(1); // Get section ID
    showPopup(sectionId);
  });
});

// Handle dynamically added sections
function handleDynamicSections() {
  // Reattach click event listeners to new news links
  const newNewsLinks = document.querySelectorAll(
    ".news-slider .team-block-info a:not([data-clicked])"
  );
  newNewsLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const sectionId = this.getAttribute("href").substring(1);
      showPopup(sectionId);
    });

    // Mark the news link as "clicked" to avoid reattachment
    link.setAttribute("data-clicked", "true");
  });

  // Reattach click event listeners to new event links
  const newEventLinks = document.querySelectorAll(
    ".events .team-card a:not([data-clicked])"
  );
  newEventLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const sectionId = this.getAttribute("href").substring(1);
      showPopup(sectionId);
    });

    // Mark the event link as "clicked" to avoid reattachment
    link.setAttribute("data-clicked", "true");
  });
}

// Call the function to handle initial links
handleDynamicSections();

// Use MutationObserver to detect changes in the DOM
const observer = new MutationObserver(handleDynamicSections);
observer.observe(document.querySelector(".news-slider"), {
  childList: true,
  subtree: true,
});
observer.observe(document.querySelector(".events"), {
  childList: true,
  subtree: true,
});

//Competiotin popup

document.addEventListener("DOMContentLoaded", function () {
  // Find the element with the id "competition" and "learning"
  var competitionCard = document.getElementById("competition");
  var learningonCard = document.getElementById("learning");
  var reserchCard = document.getElementById("reserch");

  // Add a click event listener to the element
  competitionCard.addEventListener("click", function () {
    // Display the modal
    openModal();
  });

  // Add a click event listener to the element
  learningonCard.addEventListener("click", function () {
    // Display the modal
    openModal2();
  });

  reserchCard.addEventListener("click", function () {
    // Display the modal
    openModal3();
  });

  // Function to open the modal
  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex"; // Display the modal
  }

  function openModal2() {
    var modal = document.getElementById("myModal2");
    modal.style.display = "flex"; // Display the modal
  }

  function openModal3() {
    var modal = document.getElementById("myModal3");
    modal.style.display = "flex"; // Display the modal
  }

  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
    var modal3 = document.getElementById("myModal3");
    modal.style.display = "none"; // Hide the modal
    modal2.style.display = "none"; // Hide the modal
    modal3.style.display = "none"; // Hide the modal
  }

  // Function to close the modal
  function closeModal2() {
    var modal = document.getElementById("myModal2");
    modal.style.display = "none"; // Hide the modal
  }

    // Function to close the modal
    function closeModal3() {
      var modal = document.getElementById("myModal3");
      modal.style.display = "none"; // Hide the modal
    }

  // Find the close button in the modal and add a click event listener
  var closeButton = document.querySelector(".close");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      // Close the modal when the close button is clicked
      closeModal();
    });
  }

  // Find the close button in the modal and add a click event listener
  var closeButton = document.querySelector(".close2");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      // Close the modal when the close button is clicked
      closeModal2();
    });
  }

  var closeButton = document.querySelector(".close3");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      // Close the modal when the close button is clicked
      closeModal3();
    });
  }
});
