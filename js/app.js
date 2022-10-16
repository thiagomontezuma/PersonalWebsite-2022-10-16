document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const darkButton = document.getElementById('dark');
  const lightButton = document.getElementById('light');
  const matrix = document.getElementById('matrix');
  const eightBit = document.getElementById('eightBit');
  const body = document.body;
  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSystemLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  // Store User Theme Preferences
  const theme = localStorage.getItem('theme');

  if (theme) {
    body.classList.replace(document.body.classList.value, theme);
  }

  if (isSystemDark && localStorage.getItem('theme') === null) {
    body.classList.replace(document.body.classList.value, 'dark');
    localStorage.setItem('theme', 'dark');
  }

  if (isSystemLight && localStorage.getItem('theme') === null) {
    body.classList.replace(document.body.classList.value, 'light');
    localStorage.setItem('theme', 'light');
  }

  // Button Event Handlers
  darkButton.onclick = () => {
    body.classList.replace(document.body.classList.value, 'dark');
    lightButton.style.borderBottom = 'none';
    darkButton.style.borderBottom = '1px solid var(--textColor)';
    matrix.style.borderBottom = 'none';
    eightBit.style.borderBottom = 'none';
    localStorage.setItem('theme', 'dark');
  };

  lightButton.onclick = () => {
    body.classList.replace(document.body.classList.value, 'light');
    lightButton.style.borderBottom = '1px solid var(--textColor)';
    darkButton.style.borderBottom = 'none';
    matrix.style.borderBottom = 'none';
    eightBit.style.borderBottom = 'none';
    localStorage.setItem('theme', 'light');
  };

  matrix.onclick = () => {
    body.classList.replace(document.body.classList.value, 'matrix');
    lightButton.style.borderBottom = 'none';
    darkButton.style.borderBottom = 'none';
    matrix.style.borderBottom = '1px solid var(--textColor)';
    eightBit.style.borderBottom = 'none';
    localStorage.setItem('theme', 'matrix');
  };

  eightBit.onclick = () => {
    if (document.body.classList.value === 'light') {
      body.classList.replace(document.body.classList.value, 'eightBitLight');
      localStorage.setItem('theme', 'eightBitLight');
    } else if (document.body.classList.value === 'dark' || document.body.classList.value === 'matrix') {
      body.classList.replace(document.body.classList.value, 'eightBitDark');
      localStorage.setItem('theme', 'eightBitDark');
    }
    lightButton.style.borderBottom = 'none';
    darkButton.style.borderBottom = 'none';
    matrix.style.borderBottom = 'none';
    eightBit.style.borderBottom = '1px solid var(--textColor)';
  };
});

let isScreenWide = window.matchMedia('(max-width: 450px)');
function gridChange(isScreenWide) {
  let mainElements = document.getElementsByClassName('main-element');
  if (isScreenWide.matches) {
    for (let i = 0; i < mainElements.length; i++) {
      document.getElementsByClassName('main-element')[i].className =
        'col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 main-element';
    }
  } else {
    for (let i = 0; i < mainElements.length; i++) {
      document.getElementsByClassName('main-element')[i].className =
        'col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 main-element';
    }
  }
}
gridChange(isScreenWide);
isScreenWide.addListener(gridChange);

function terminalInit() {
  let terminal = document.getElementById('terminal');
  let terminalDiv = document.getElementById('terminalDiv');
  let mainDiv = document.getElementById('mainDiv');
  let mainDivBlock = document.getElementById('mainDivBlock');
  if (terminal.value === 'off') {
    terminalDiv.style.display = 'block';
    terminal.style.borderBottom = '1px solid var(--textColor)';
    if (mainDiv !== null) {
      mainDiv.style.display = 'none';
    } else {
      mainDivBlock.style.display = 'none';
    }
    terminal.value = 'on';
  } else if (terminal.value === 'on') {
    terminalDiv.style.display = 'none';
    terminal.style.borderBottom = 'none';
    if (mainDiv !== null) {
      mainDiv.style.display = 'flex';
    } else {
      mainDivBlock.style.display = 'block';
    }
    terminal.value = 'off';
  }
}

function terminalNewLine() {
  const terminalDiv = document.getElementById('terminalDiv');
  // New input line
  let inputLineText = document.createElement('p');
  let inputLineTextTxt = document.createTextNode('client@thiagodiogenes.com:~$');
  inputLineText.className = 'terminal-text';
  inputLineText.style.marginRight = '5px';
  inputLineText.appendChild(inputLineTextTxt);
  let inputLineInput = document.createElement('input');
  inputLineInput.setAttribute('class', 'terminal-input');
  inputLineInput.setAttribute('type', 'text');
  // inputLineInput.autofocus = true;
  inputLineInput.setAttribute('onkeydown', 'terminalEnter(this)');
  terminalDiv.appendChild(inputLineText);
  terminalDiv.appendChild(inputLineInput);
  document
    .getElementsByClassName('terminal-input')
    [document.getElementsByClassName('terminal-input').length - 1].focus();
}

function terminalAbout() {
  const terminalDiv = document.getElementById('terminalDiv');
  const helpTextArray = [
    "Hi! I'm Thiago Diogenes. Website programming, design, and development are my major skills being put to experience. I thrive on goals and challenges as it can be seen in my whole career. I can build and improve websites and web apps.",
    'I have done some front-end work on multiple projects such as a Trading System Analysis, Scheduling and Payment for Services, Mobile Metronome, E-commerce, and business websites. For more information, type projects.',
    "I am a high-achieving student being on the President's List & Honors College with a 4.0 GPA on Broward College, and a high school honor roll student with 3.8 / 4.0 GPA being the Best Student of the Class for 5 consecutive years & Best Student of the School on Senior Year.",
    'My technical skills are HTML, CSS, JavaScript, Python, React, Swift, SASS, Website Design, & Video and Image Editing.',
    'I excel at Hardworking, Teamwork, Attention to Detail, and Analytical Thinking. I speak fluently English and Portuguese, and I have a basic understanding of Spanish. My hobbies are Learning New Things, Video Games, Listening to Music, Fixing Electronics, and Playing the Guitar.'
  ];
  for (let texts of helpTextArray) {
    let helpText = document.createElement('p');
    let helpTextNode = document.createTextNode(texts);
    helpText.className = 'terminal-response-text-left';
    helpText.appendChild(helpTextNode);
    terminalDiv.appendChild(helpText);
  }
}

function terminalContact() {
  const terminalDiv = document.getElementById('terminalDiv');
  let contactHeader = document.createElement('p');
  let contactHeaderText = document.createTextNode('Want to hear more from me?');
  contactHeader.className = 'terminal-response-text';
  contactHeader.appendChild(contactHeaderText);
  terminalDiv.appendChild(contactHeader);
  let contactSubheader = document.createElement('p');
  let contactSubheaderText = document.createTextNode('Send a message to my email and I will get in touch with you!');
  contactSubheader.className = 'terminal-response-text';
  contactSubheader.appendChild(contactSubheaderText);
  terminalDiv.appendChild(contactSubheader);
  let contactEmail = document.createElement('p');
  let contactEmailLink = document.createElement('a');
  let contactEmailText = document.createTextNode('thiagomdiogenes@gmail.com');
  contactEmailLink.setAttribute('href', 'mailto:thiagomdiogenes@gmail.com');
  contactEmail.className = 'terminal-response-text';
  contactEmailLink.style.color = '#eaeaea';
  // contactEmailLink.style.marginBottom = '5px';
  contactEmailLink.appendChild(contactEmailText);
  contactEmail.appendChild(contactEmailLink);
  terminalDiv.appendChild(contactEmail);
}

function terminalProjects() {
  const terminalDiv = document.getElementById('terminalDiv');
  const projectsObject = {
    'Trading System Analysis': './project-trading.html',
    'Metronomo.co': './project-metronomo.html',
    'Cllean.us': './project-cllean.html',
    'Tecnocar Services': './project-tecnocar.html'
  };
  let projectsText = document.createElement('p');
  let projectsTextNode = document.createTextNode(
    'I have done front-end devolepment in such projects: (click them for more information)'
  );
  projectsText.className = 'terminal-response-text';
  projectsText.appendChild(projectsTextNode);
  terminalDiv.appendChild(projectsText);
  for (let key in projectsObject) {
    let projectsLink = document.createElement('a');
    let projectsLinkNode = document.createTextNode(key);
    projectsLink.className = 'terminal-response-link';
    projectsLink.setAttribute('href', projectsObject[key]);
    projectsLink.setAttribute('target', '_blank');
    projectsLink.appendChild(projectsLinkNode);
    terminalDiv.appendChild(projectsLink);
  }
}

function terminalHelp() {
  const terminalDiv = document.getElementById('terminalDiv');
  const helpTextArray = [
    '~ Type about - To know more about myself and my experience',
    '~ Type contact - To know how to get in touch with me',
    '~ Type projects - To know more about my projects',
    '~ Type clear -  To erase all log of commands and start again on a clean background',
    '~ Type help - To show this help guide again'
  ];
  for (let texts of helpTextArray) {
    let helpText = document.createElement('p');
    let helpTextNode = document.createTextNode(texts);
    helpText.className = 'terminal-response-text-left';
    helpText.appendChild(helpTextNode);
    terminalDiv.appendChild(helpText);
  }
}

function terminalClear() {
  let terminalIntroduction = document.createElement('p');
  terminalIntroduction.setAttribute('class', 'terminal-header');
  let terminalIntroductionText = document.createTextNode(
    'Hi! Type about, contact, or projects for more information. If you feel lost, type help.'
  );
  terminalIntroduction.appendChild(terminalIntroductionText);
  terminalDiv.innerHTML = '';
  terminalDiv.appendChild(terminalIntroduction);
}

function terminalElse(ele) {
  const terminalDiv = document.getElementById('terminalDiv');
  let response = document.createTextNode(`-bash: ${ele.value}: command not found. If you feel lost, type help.`);
  let responseP = document.createElement('p');
  responseP.className = 'terminal-header';
  // let brTag = document.createElement('br');
  responseP.appendChild(response);
  terminalDiv.appendChild(responseP);
  // terminalDiv.appendChild(brTag);
}

function terminalEnter(ele) {
  // const terminalDiv = document.getElementById('terminalDiv');
  if (event.key === 'Enter') {
    // alert(element.value);
    // console.log(ele.value);
    // ele.setAttribute('disabled', 'true');
    ele.disabled = true;
    // ele.autofocus = false;
    let lowerCaseInput = ele.value.toLowerCase();
    console.log(lowerCaseInput);
    if (lowerCaseInput === 'about') {
      terminalAbout();
      terminalNewLine();
    } else if (lowerCaseInput === 'contact') {
      terminalContact();
      terminalNewLine();
    } else if (lowerCaseInput === 'projects') {
      terminalProjects();
      terminalNewLine();
    } else if (lowerCaseInput === 'help') {
      console.log('help');
      terminalHelp();
      terminalNewLine();
    } else if (lowerCaseInput === 'clear') {
      terminalClear();
      terminalNewLine();
    } else {
      terminalElse(ele);
      terminalNewLine();
    }
  }
}

// Submit Answer
// document.getElementById('contactForm').addEventListener('submit', () => {
//   document.getElementById('contactCall').innerHTML = 'Thank you for getting in touch!';
//   document.getElementById('contactCallSubheader').innerHTML =
//     "I'm thrilled to hear from you and I will get in touch really soon!";
//   document.getElementById('contactCallSubheader').style.fontSize = '16px';
//   document.getElementById('contactCallSubheader').style.marginTop = '6px';
//   document.getElementById('contactCallSubheaderLast').innerHTML = 'Have an awesome day!';
//   document.getElementById('contactCallSubheaderLast').style.display = 'block';
//   document.getElementById('contactFormDiv').display = 'none';
//   // document.getElementById('contactCallSubheader').innerHTML = alert(
//   //   "Thank you for getting in touch!\r\nI'm thrilled to hear from you and I will get in touch really soon!\r\nHave an awesome day!"
//   // );
// });
