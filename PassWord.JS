const generate = document.getElementById("Generate");
const pass = document.querySelector(".Pass")
let length = 12;

const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ127349342634834<>?dl[dl=-0-39390/d.dd/d,da[asie8heiwuldnkjsiufhsiulndsa"

generate.addEventListener("click", function () {
  let passWord = ""
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * char.length) + 1
    passWord += char.substring(random, random + 1)
  }
  pass.textContent = passWord
})