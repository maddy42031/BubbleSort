function animation(e) {
  e.classList.add("downloadAni");
  e.innerText = "Downloading...";
  setTimeout(() => {
    e.classList.remove("downloadAni");
    e.innerText = "Download Source Code";
  }, 3000);
}
