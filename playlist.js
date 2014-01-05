/*
 * The main object that will handle the playlist
 *
*/

YoutubeAmp = {

	playlist_: ["http://www.youtube.com/watch?v=CT_tPxlWViY"],

	get: function(index) {
		return this.playlist_[index];
	},

	add: function(song) {

	},

	getNext: function() {

	},

	test: function() {
		console.log("It is working");
	}
	
}

FakeYoutube = {

	_state : 0,

	addButtonAdd: function() {
		button = document.createElement ('button')
		button.innerText = "Add Song"
		button.onclick = function() {
			if (this._state==0) {
				YoutubeAmp.add("http://www.youtube.com/watch?v=zWbsnAHXyBU");
			} else {
				YoutubeAmp.add("http://www.youtube.com/watch?v=gYZA7pn6WM4");
			}
			_state ++;
		}
		document.body.appendChild(button);
	},

	addButtonChange: function() {
		button = document.createElement ('button')
		button.innerText = "Change Song"
		button.onclick = function() {
			// Change Video implementation test
		}
		document.body.appendChild(button);

	},

	addNewLine: function() {
		br = document.createElement('br');
		document.body.appendChild(br);

	}

}


console.log(YoutubeAmp.get(0));


function scrie() {
	x=YoutubeAmp.get(0);
	document.write(x);
}
scrie();


FakeYoutube.addNewLine();
FakeYoutube.addButtonAdd();
FakeYoutube.addNewLine();
FakeYoutube.addButtonChange();
FakeYoutube.addNewLine();



