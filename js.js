const input = document.querySelector("#text-input");
const output = document.querySelector("p");
const button = document.getElementById("b");
const copyContentBtn = document.getElementById("copyContentBtn");
button.addEventListener("click", generateHashtag);
copyContentBtn.addEventListener("click", copyContent);

function generateHashtag() {
  const str = input.value;
  const result = str.split("").reduce((hash, letter, index, array) => {
    letter =
      index == 0 || array[index - 1] == " " ? letter.toUpperCase() : letter;
    return letter != " " ? hash + letter : hash;
  }, "#");
  console.log(result);
  output.innerHTML = result;
  return result.length == 1 || result.length > 140 ? false : result;
}

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(result);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
