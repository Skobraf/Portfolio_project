var value="lol";
var div;
var statement = document.getElementsByClassName("statement");
window.onload = function() {
  div = '<div class="statement">'+value+'</div>';
  console.log(div);
  var node = document.createElement("DIV");                 // Create a <li> node
  var textnode = document.createTextNode("Water");         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementsByClassName("terminal-window").appendChild(node);

}
