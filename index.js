function stringFromCharCode(num) {
  return String.fromCharCode(num);
};

const keyboardKeysLineOne = {'+192':"`", '+49':stringFromCharCode(49), '+50':stringFromCharCode(50), '+51':stringFromCharCode(51), '+52':stringFromCharCode(52), '+53':stringFromCharCode(53), '+54':stringFromCharCode(54), '+55':stringFromCharCode(55), '+56':stringFromCharCode(56), '+57':stringFromCharCode(57), '+48':stringFromCharCode(48), '+189':"-", '+187':"=", '+8':"Backspace"};
const keyboardKeysLineTwo = {'+9':"Tab", '+81':stringFromCharCode(81), '+87':stringFromCharCode(87), '+69':stringFromCharCode(69), '+82':stringFromCharCode(82), '+84':stringFromCharCode(84), '+89':stringFromCharCode(89), '+85':stringFromCharCode(85), '+73':stringFromCharCode(73), '+79':stringFromCharCode(79), '+80':stringFromCharCode(80), '+219':"[", '+221':"]", '+220':"Backslash", '+46':"Delete"};
const keyboardKeysLinethree = {'+20':"CapsLock", '+65':stringFromCharCode(65), '+83':stringFromCharCode(83), '+68':stringFromCharCode(68), '+70':stringFromCharCode(70), '+71':stringFromCharCode(71), '+72':stringFromCharCode(72), '+74':stringFromCharCode(74), '+75':stringFromCharCode(75), '+76':stringFromCharCode(76), '+186':";", '+222':"'", '+13':"Enter"};
const keyboardKeysLinefour = {'+16':"Shift", '+90':stringFromCharCode(90), '+88':stringFromCharCode(88), '+67':stringFromCharCode(67), '+86':stringFromCharCode(86), '+66':stringFromCharCode(66), '+78':stringFromCharCode(78), '+77':stringFromCharCode(77), '+188':",", '+190':".", '+191':"/", '+1616':"ShiftRight"};
const keyboardKeysLinefive = {'+17':"Ctrl", '+91':"Meta", '+18':"Alt", '+32':"Space", '+1818':"AltRight", '+1717':"ControlRight", '+37':"ArrowLeft", '+38':"ArrowUp", '+40':"ArrowDown", '+39':"ArrowRight"};
/*let keyboardKeys = [];
let bodyArea = document.querySelector('body');
bodyArea.onkeydown = function(event) {
  // console.log(event);
  keyboardKeys.push(event.keyCode);
  console.log(event/*.keyCode,);
}*/
let headerTag = document.querySelector('header');
const h1Tag = document.createElement('h1');
  h1Tag.innerHTML = "Virtual keyboard v.1.0.0";
  headerTag.append(h1Tag);

let mainTag = document.querySelector('main');
const keyboardAreaSection = document.createElement("section");
/*console.log(keyboardAreaSection);*/
  keyboardAreaSection.className = "keyboard-area";
  
  mainTag.append(keyboardAreaSection);

function initKeyLineOne(keyLine) {
  let out = '';
  for(let key in keyLine){
    if(keyLine[key] === "Backslash") {
      out +='<div class="keyLine" data="'+"Backslash"+'"'+'>'+'&#92;'+'</div>';
    }else if(keyLine[key] === "ShiftRight") {
      out +='<div class="keyLine" data="'+"ShiftRight"+'"'+'>'+'Shift'+'</div>';
    }else if(keyLine[key] === "ControlRight") {
      out +='<div class="keyLine" data="'+"ControlRight"+'"'+'>'+'Ctrl'+'</div>';
    }else if(keyLine[key] === "CapsLock") {
      out +='<div class="keyLine" data="'+"CapsLock"+'"'+'>'+'Caps Lock'+'</div>';
    }else if(keyLine[key] === "Meta") {
      out +='<div class="keyLine" data="'+"Meta"+'"'+'>'+'Win'+'</div>';
    }else if(keyLine[key] === "AltRight") {
      out +='<div class="keyLine" data="'+"AltRight"+'"'+'>'+'Alt'+'</div>';
    }else if(keyLine[key] === "ArrowLeft") {
      out +='<div class="keyLine" data="'+"ArrowLeft"+'"'+'>'+'&#x25C4;'+'</div>';
    }else if(keyLine[key] === "ArrowRight") {
      out +='<div class="keyLine" data="'+"ArrowRight"+'"'+'>'+'&#x25BA;'+'</div>';
    }else if(keyLine[key] === "ArrowUp") {
      out +='<div class="keyLine" data="'+"ArrowUp"+'"'+'>'+'&#x25B2;'+'</div>';
    }else if(keyLine[key] === "ArrowDown") {
      out +='<div class="keyLine" data="'+"ArrowDown"+'"'+'>'+'&#x25BC;'+'</div>';
    }else if(keyLine[key] === "Delete") {
      out +='<div class="keyLine" data="'+"Delete"+'"'+'>'+'Del'+'</div>';
    }else if(keyLine[key] === "Space") {
      out +='<div class="keyLine" data="'+"Space"+'"'+'>'+''+'</div>';
    }else {out +='<div class="keyLine" data="'+keyLine[key]+'"'+'>'+keyLine[key].toString()+'</div>';
  }
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

function eventTab() {
  document.querySelector('.keyboard-area .keyLine[data="' + "Tab" + '"]').classList.remove('active-btn');
};

let countCapsLock = 1;
let countTab = 1;
document.onkeydown = function (event) {
  console.log(event);
  if(event.key === "Backspace") {
    document.querySelector('.keyboard-area .keyLine[data="' + "Backspace" + '"]').classList.add('active-btn');
  }else if((event.key === "Shift") && (event.code === "ShiftLeft")) {
    document.querySelector('.keyboard-area .keyLine[data="' + "Shift" + '"]').classList.add('active-btn');
  }else if((event.key === "Shift") && (event.code === "ShiftRight")) {
    document.querySelector('.keyboard-area .keyLine[data="' + "ShiftRight" + '"]').classList.add('active-btn');
  }else if(event.key === "Tab") {
    document.querySelector('.keyboard-area .keyLine[data="' + "Tab" + '"]').classList.add('active-btn');
    setTimeout(eventTab, 100);
  }else if(event.key === "CapsLock") {
    document.querySelector('.keyboard-area .keyLine[data="' + "CapsLock" + '"]').classList.add('active-btn');
  }else if((event.key === "\\") || (event.code === "Backslash")) {
    document.querySelector('.keyboard-area .keyLine[data="' + "Backslash" + '"]').classList.add('active-btn');
  }else if(event.key === "Enter") {
    document.querySelector('.keyboard-area .keyLine[data="' + "Enter" + '"]').classList.add('active-btn');
  }else if((event.key === "Control") && (event.code === "ControlLeft")) {
    document.querySelector('.keyboard-area .keyLine[data="' + "Ctrl" + '"]').classList.add('active-btn');
  }else if((event.key === "Control") && (event.code === "ControlRight")) {
    document.querySelector('.keyboard-area .keyLine[data="' + "ControlRight" + '"]').classList.add('active-btn');
  }else if(event.key === "Meta") {
    document.querySelector('.keyboard-area .keyLine[data="' + "Meta" + '"]').classList.add('active-btn');
  }else if((event.key === "Alt") && (event.code === "AltLeft")) {
    document.querySelector('.keyboard-area .keyLine[data="' + "Alt" + '"]').classList.add('active-btn');
  }else if((event.key === "Alt") && (event.code === "AltRight")) {
    document.querySelector('.keyboard-area .keyLine[data="' + "AltRight" + '"]').classList.add('active-btn');
  }else if(event.key === "ArrowLeft") {
    document.querySelector('.keyboard-area .keyLine[data="' + "ArrowLeft" + '"]').classList.add('active-btn');
  }else if(event.key === "ArrowRight") {
    document.querySelector('.keyboard-area .keyLine[data="' + "ArrowRight" + '"]').classList.add('active-btn');
  }else if(event.key === "ArrowDown") {
    document.querySelector('.keyboard-area .keyLine[data="' + "ArrowDown" + '"]').classList.add('active-btn');
  }else if(event.key === "ArrowUp") {
    document.querySelector('.keyboard-area .keyLine[data="' + "ArrowUp" + '"]').classList.add('active-btn');
  }else if(event.key === "Delete") {
    document.querySelector('.keyboard-area .keyLine[data="' + "Delete" + '"]').classList.add('active-btn');
  }else if(event.key === " ") {
    document.querySelector('.keyboard-area .keyLine[data="' + "Space" + '"]').classList.add('active-btn');
  }else{
  document.querySelector('.keyboard-area .keyLine[data="' + event.key.toUpperCase() + '"]').classList.add('active-btn');
  }
}

document.onkeyup = function (event) {
  /*console.log(event);*/
  if((event.key === "CapsLock") && (countCapsLock%2===1)) {
    document.querySelector('.keyboard-area .keyLine[data="' + "CapsLock" + '"]').classList.add('active-btn');
    countCapsLock++;
  }else if((event.key === "CapsLock") && (countCapsLock%2===0)) {
    document.querySelector('.keyboard-area .keyLine[data="' + "CapsLock" + '"]').classList.remove('active-btn');
    countCapsLock++;
  }else{
    document.querySelectorAll('.keyboard-area .keyLine').forEach(function(element) {
    element.classList.remove('active-btn');
    
  
  });
}
}
/*initKeyLineOne(keyboardKeysLinethree);
initKeyLineOne(keyboardKeysLinefour);
initKeyLineOne(keyboardKeysLinefive);*/