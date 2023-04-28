function stringFromCharCode(num) {
  return String.fromCharCode(num);
};

const keyboardKeysLineOne = {192:"`", 49:stringFromCharCode(49), 50:stringFromCharCode(50), 51:stringFromCharCode(51), 52:stringFromCharCode(52), 53:stringFromCharCode(53), 54:stringFromCharCode(54), 55:stringFromCharCode(55), 56:stringFromCharCode(56), 57:stringFromCharCode(57), 48:stringFromCharCode(48), 189:"-", 187:"=", 8:"Backspace"};
const keyboardKeysLineTwo = {9:"Tab", 81:stringFromCharCode(81), 87:stringFromCharCode(87), 69:stringFromCharCode(69), 82:stringFromCharCode(82), 84:stringFromCharCode(84), 89:stringFromCharCode(89), 85:stringFromCharCode(85), 73:stringFromCharCode(73), 79:stringFromCharCode(79), 80:stringFromCharCode(80), 219:"[", 221:"]", 220:"/"};
const keyboardKeysLinethree = {20:"CapsLock", 65:stringFromCharCode(65), 83:stringFromCharCode(83), 68:stringFromCharCode(68), 70:stringFromCharCode(70), 71:stringFromCharCode(71), 72:stringFromCharCode(72), 74:stringFromCharCode(74), 75:stringFromCharCode(75), 76:stringFromCharCode(76), 186:";", 222:"'", 13:"Enter"};
const keyboardKeysLinefour = {16:"Shift", 90:stringFromCharCode(90), 88:stringFromCharCode(88), 67:stringFromCharCode(67), 86:stringFromCharCode(86), 66:stringFromCharCode(66), 78:stringFromCharCode(78), 77:stringFromCharCode(77), 188:",", 190:".", 191:"/", 16:"Shift"};
const keyboardKeysLinefive = {17:"Control", 91:"Meta", 18:"Alt", 32:"(blank space)", 18:"Alt", 17:"Control", 37:",", 38:".", 40:"/", 39:"Shift"};
/*let keyboardKeys = [];
let bodyArea = document.querySelector('body');
bodyArea.onkeydown = function(event) {
  // console.log(event);
  keyboardKeys.push(event.keyCode);
  console.log(event/*.keyCode,);
}*/
let headerTag = document.querySelector('header');
const h1Tag = document.createElement('h1');
  h1Tag.innerHTML = "Virtual keyboard";
  headerTag.append(h1Tag);

let mainTag = document.querySelector('main');
const keyboardAreaSection = document.createElement("section");
console.log(keyboardAreaSection);
  keyboardAreaSection.className = "keyboard-area";
  
  mainTag.append(keyboardAreaSection);

function initKeyLineOne(keyLine) {
  let out = '';
  for(let key in keyLine){
    out +='<div class="keyLine">'+keyLine[key].toString()+'</div>';
  }
  return out;
};

function addKeyboardKeys() {
  
  
  let keyboardArea = '';
  keyboardArea =keyboardArea + initKeyLineOne(keyboardKeysLineOne) /*+ initKeyLineOne(keyboardKeysLineTwo) + initKeyLineOne(keyboardKeysLinethree) + initKeyLineOne(keyboardKeysLinefour)*/;
  const firstLineDiv = document.createElement("div");
  firstLineDiv.className = "keyLineOne";
  firstLineDiv.innerHTML = keyboardArea;
  keyboardAreaSection.append(firstLineDiv);

  const secondLineDiv = document.createElement("div");
  secondLineDiv.className = "keyLineTwo";
  secondLineDiv.innerHTML = initKeyLineOne(keyboardKeysLineTwo);
  keyboardAreaSection.append(secondLineDiv);

  const thirdLineDiv = document.createElement("div");
  thirdLineDiv.className = "keyLineThree";
  thirdLineDiv.innerHTML = initKeyLineOne(keyboardKeysLinethree);
  keyboardAreaSection.append(thirdLineDiv);

  const fourthLineDiv = document.createElement("div");
  fourthLineDiv.className = "keyLineFour";
  fourthLineDiv.innerHTML = initKeyLineOne(keyboardKeysLinefour);
  keyboardAreaSection.append(fourthLineDiv);

  const fifthLineDiv = document.createElement("div");
  fifthLineDiv.className = "keyLineFive";
  fifthLineDiv.innerHTML = initKeyLineOne(keyboardKeysLinefive);
  keyboardAreaSection.append(fifthLineDiv);
}

addKeyboardKeys();

/*initKeyLineOne(keyboardKeysLinethree);
initKeyLineOne(keyboardKeysLinefour);
initKeyLineOne(keyboardKeysLinefive);*/