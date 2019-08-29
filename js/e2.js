	/*
	* Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana
	* 
	* (+ 'a') return NaN as a result. Because of automatic type conversion for future operations, it's the same as a string "NaN": 'b' + 'a' + 'NaN' + 'a'. 
	* .toLowerCase() function is being used just to hide the answer
	*/

	/*
	* load file from server
	*/
	function loadFile(filePath) {
	  let result = null;
	  let xmlhttp = new XMLHttpRequest();
	  xmlhttp.open("GET", filePath, false);
	  xmlhttp.send();
	  if (xmlhttp.status==200) {
	    result = xmlhttp.responseText;
	  }
	  return result;
	}

	let data = JSON.parse(loadFile('data.json'));
	let template = document.querySelector('.template').outerHTML.replace('template','');
	let menu = '';
	data.forEach(element => {
		menu += template.replace('{{title}}', element.title).replace('{{content}}', element.content);
	});
	document.querySelector('.menu').innerHTML = menu;

	/*
	* display contet after click
	*/
	document.getElementById('menu').addEventListener('click', e => {
		if (e.target.classList.contains('menu_i-header')) {
			document.getElementById('menu').querySelectorAll(".picked").forEach(element => {
				element.classList.remove('picked');
			});
			e.target.classList.add('picked');
			e.target.parentElement.querySelector('.menu_i-content').classList.add('picked');
		}
	});