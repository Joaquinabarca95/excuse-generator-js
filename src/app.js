/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWhoPosition = Math.floor(Math.random() * who.length);
  let randomActionPosition = Math.floor(Math.random() * action.length);
  let randomWhatPosition = Math.floor(Math.random() * what.length);
  let randomWhenPosition = Math.floor(Math.random() * when.length);

  let randomWho = who[randomWhoPosition];
  let randomAction = action[randomActionPosition];
  let randomWhat = what[randomWhatPosition];
  let randomWhen = when[randomWhenPosition];

  document.getElementById("excuse").innerHTML =
    randomWho.toString() +
    " " +
    randomAction +
    " " +
    randomWhat +
    " " +
    randomWhen;
};
