define(['pipAPI', 'https://cdn.jsdelivr.net/gh/PoPLab-McGill/smiaa-sc-iat@main/frextension.js'], function(APIConstructor, stiatExtension){
var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Les personnes autistes', //Will appear in the data.
		    title : {
		      media : {word : 'Les personnes autistes'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
            media: [
		   			{ word: 'Répétition de mouvements' },
                    { word: 'Aversion aux changements soudains' },
                    { word: 'Difficulté à se faire des amis' },
                    { word: 'Interprétation littérale du langage' }

            ],
            css: {color: '#31b404', 'font-size': '3em'}
		  },	

  		attribute1 : 
			{
            name: 'Mauvais',
            title: {media: {word: 'Mauvais'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
                    { word: 'Terrible' },
                    { word: 'Fâché' },
                    { word: 'Haine' },
                    { word: 'Mal' }
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
        attribute2: {
            name: 'Bon',
            title: {media: {word: 'Bien'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
                    { word: 'Amour' },
                    { word: 'Joie' }, 
                    { word: 'Plaisir' },
                    { word: 'Paix' }
            ],
            css: {color: '#31b404', 'font-size': '3em'}
        }
    });
});
