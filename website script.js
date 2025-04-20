function toggleInfo(button) {
    const info = button.previousElementSibling;
    if (info.style.display === "none" || info.style.display === "") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  }
  