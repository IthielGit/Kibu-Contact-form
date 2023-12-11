
  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Get the textarea element
    var textArea = document.getElementsByName("MultiLine")[0];

    // Add an event listener for 'input' event on the textarea
    textArea.addEventListener('input', updateCharacterCount);

    // The updateCharacterCount function
    function updateCharacterCount() {
      var charCount = textArea.value.length;
      var maxChar = textArea.getAttribute("maxlength");
      // Update the paragraph content
      document.getElementById("characterCount").textContent = charCount + " tot " + maxChar + " maximale tekens";
    }

    // Initialize character count on load
    updateCharacterCount();
  });

