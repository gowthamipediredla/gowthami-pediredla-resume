import "./styles.css";
window.downloadPDF = function () {
  const button = document.querySelector("button");
  button.style.display = "none";
  window.print();
  setTimeout(() => {
    button.style.display = "block";
  }, 1000);
};
