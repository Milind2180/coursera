var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
    document.write("<br>");
	  document.write("<br>");
  if (firstLetter === 'j') {
	  document.write("<center>");
	  document.writeln("Good Bye"+ " "+(names[i]));
	  document.write("<br>");
	  document.write("</center>");


  } else {

	  document.write("<center>");
	  document.writeln(" Hello"+ " "+(names[i]));
	  document.write("<br>");
	  document.write("</center>");

  }
}

