const button = document.getElementById("copy-button");
const input = document.getElementById("copy-input");

button.addEventListener("click", () => {
  const range = document.createRange();
  const selection = window.getSelection();

  range.selectNodeContents(input);
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand("copy");
    button.classList.add("copied");
  } catch (ex) {
    console.warn("Copy to clipboard failed.", ex);
  }

  setTimeout(() => {
    button.classList.remove("copied");
  }, 1000);
});

input.addEventListener("focus", () => {
  input.select();
});

input.addEventListener("blur", () => {
  input.setSelectionRange(0, 0);
});
