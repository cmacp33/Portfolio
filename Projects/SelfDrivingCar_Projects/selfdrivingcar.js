function toggleCollapsible(button) {
  button.classList.toggle("active");
  const content = button.nextElementSibling;
  content.classList.toggle("show");
}
