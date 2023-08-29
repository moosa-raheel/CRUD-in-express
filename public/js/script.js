const menu = document.querySelector("div.menu");
const header = document.getElementsByTagName("header")[0];
header.addEventListener("click", () => {
  header.classList.toggle("active");
});
new Promise((resolve, reject) => {
  const forms = Array.from(document.querySelector(".lab-inp").children);
  forms.forEach((item, index) => {
    setInterval(() => {
      if (index % 2 == 1) {
        if (item.value.length > 0) {
          resolve(true);
        }
      }
    }, 1000);
  });
}).then(() => {
  const button = document.getElementsByClassName("cancel")[0];
  button.style.opacity = "1";
});
