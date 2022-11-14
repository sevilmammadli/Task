function gettime() {
  let now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}
class Message {
  constructor(name, text, time = gettime()) {
    this.name = name;
    this.time = time;
    this.text = text;
  }
  toString() {
    console.log(`${this.time} ${this.name}: ${this.text}`);
  }
  toHTML() {
    return `<p> ${this.time}  ${this.name}:  ${this.text} </p>`;
  }
}
class Messager {
  constructor() {
    this.history = [];
  }
  send(name, text) {
    this.history.push(new Message(name, text, gettime()));
  }
  show_history() {
    let h = document.querySelector(".dates");
    this.history.forEach((element) => (h.innerHTML += element.toHTML()));
  }
}
let btn1 = document.querySelector("button");
btn1.addEventListener("click", function () {
  let sender = document.querySelector(".sender");
  let message = document.querySelector(".message");
  let T = new Messager();
  T.send(sender.value, message.value);
  console.log(T.history);
  let h = document.querySelector(".dates");
  T.show_history();
  sender.value = "";
  message.value = "";
});
