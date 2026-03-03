let previousTab = 1;

function tabChange(tab_id) {
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
var quote = document.getElementById("quote");
var author = document.getElementById("author");
var currentTab = tab_id;
previousTab = document.getElementById(`tab${previousTab}`);

if (currentTab == 1) {
    tab1.classList.toggle("tab-on");
    previousTab.classList.toggle("tab-on");
    quote.textContent = '"Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless."';
    author.textContent = 'Taylor M., 28 years old';
}
else if (currentTab == 2) {
    tab2.classList.toggle("tab-on");
    previousTab.classList.toggle("tab-on");
    quote.textContent = '"From invoicing to tax prep, Noble Finance has been a game-changer for my freelance business."';
    author.textContent = 'Markus N., 31 years old';
}
else if (currentTab == 3) {
    tab3.classList.toggle("tab-on");
    previousTab.classList.toggle("tab-on");
    quote.textContent = '"I used to worry about missing deductions, but with Noble Finance, I know I am maximizing my savings."';
    author.textContent = 'Margaret L., 24 years old';
}
previousTab = tab_id;
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}