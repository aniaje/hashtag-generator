const input = document.querySelector("#text-input");
const hashtag = document.getElementById("hashtag");
const button = document.getElementById("b");
const copyContentBtn = document.getElementById("copyContentBtn");
button.addEventListener("click", generateHashtag);
copyContentBtn.addEventListener("click", copyToClipboard);

function generateHashtag() {
  const str = input.value;
  const result = str.split("").reduce((hash, letter, index, array) => {
    letter =
      index == 0 || array[index - 1] == " " ? letter.toUpperCase() : letter;
    return letter != " " ? hash + letter : hash;
  }, "#");
  console.log(result);
  hashtag.innerHTML = result;
  result.length == 1 || result.length > 140 ? false : result;
}

function copyToClipboard() {
  let copyText = hashtag.innerHTML;
  navigator.clipboard.writeText(copyText).then(() => {
    copyContentBtn.innerHTML = "&#10003";
  });
}
