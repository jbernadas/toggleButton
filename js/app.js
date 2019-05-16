const toggleButton = document.getElementById('toggleButton');
const toggleListShow = document.getElementById('disappearThis');

toggleButton.textContent = "Hide List";

toggleButton.addEventListener('click', () => {
  if (toggleListShow.style.display === "none") {
    toggleListShow.style.display = "block";
    toggleButton.textContent = "Hide List";
  } else {
    toggleListShow.style.display = "none";
    toggleButton.textContent = "Show List";
  }         
});  
