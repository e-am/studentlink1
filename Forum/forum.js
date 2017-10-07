addEventListener('load', function () {
  window.mdc.autoInit();

  var drawer = new mdc.drawer.MDCTemporaryDrawer(document.getElementById('drawer-drop'));
  document.getElementById('menu-drop').addEventListener('click', function () { drawer.open = !drawer.open;
  });


  console.dir(document.getElementById('addanchor'));

  var addNew = document.getElementById('addanchor');
  var closeThread = document.getElementById('close-box');
  var createThread = document.getElementById('new-thread');

  addNew.onclick = function() {
    createThread.style.display='block';
  }

  closeThread.onclick = function() {
    createThread.style.display='none';
  }

var sendIt = document.getElementById('posta');

sendIt.onclick = function() {
  document.getElementById('new-thread').style.display = "none";

var newDiv = document.createElement("div");
newDiv.className = "divclass";
var newh3 = document.createElement("h3");
var newP = document.createElement("p");
newP.id="p-text";
var newButton = document.createElement("button");
newButton.className = "svara";
var t = document.createTextNode("Svara");
newButton.appendChild(t);

newh3.innerHTML =
document.getElementById('forum-rubrik').value;
newP.innerHTML = document.getElementById('content-post').value;
document.getElementById('inlagg').appendChild(newDiv);
newDiv.appendChild(newh3);
newDiv.appendChild(newP);
newDiv.appendChild(newButton);

  newButton.onclick = function() {
    var newDiv2 = document.createElement("div");
    newDiv2.className = "divclass2";
    var newText = document.createElement("textarea");
    newText.id = "svar-text";
    newText.cols = "80";
    newText.rows = "10";
    newText.placeholder = "Skriv här:";
    var newButton2 = document.createElement("button");
    newButton2.className = "send-ans";
    var t2 = document.createTextNode("Skicka in svar");
    newButton2.appendChild(t2);
    newDiv2.appendChild(newText);
    newDiv2.appendChild(newButton2);
    newDiv.appendChild(newDiv2);
    newButton.style.display = "none";

    newButton2.onclick = function() {
      var newDiv3 = document.createElement("div");
      newDiv3.className = "divclass3";
      var newP2 = document.createElement("p");
      newP2.innerHTML = newText.value;
      newDiv3.appendChild(newP2);
      newDiv2.appendChild(newDiv3);
      newText.style.display = "none";
      newButton2.style.display = "none";
     };
  };

 };

});
