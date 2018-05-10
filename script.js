// get tag to insert data
const root = document.getElementById('root');

// Create elements in page.  Title, subtitle, paragraph
const title = document.createElement('div');
title.setAttribute('class', 'title');

const logo = document.createElement('img');
logo.setAttribute('class', 'logo');

const subtitle = document.createElement('h2');
const paragraph = document.createElement('p');

const footer = document.createElement('div');
footer.setAttribute('class', 'footer');

logo.src = './images/TTG.png'
subtitle.textContent = 'Season 2 list of episodes';
paragraph.textContent =
	'This is a list of all of the episodes of Teen Titans Go as presented by IMDb. You may see more of this content at "https://www.imdb.com/title/tt2771780/episodes?season=2".';

const robin = document.createElement('img');
robin.setAttribute('class', 'robin');
robin.src = './images/robin3.png';

const raven = document.createElement('img');
raven.setAttribute('class', 'raven');
raven.src = './images/raven2.png';

const cyborg = document.createElement('img');
cyborg.setAttribute('class', 'cyborg');
cyborg.src = './images/cyborg2.png';

const starfire = document.createElement('img');
starfire.setAttribute('class', 'starfire');
starfire.src = './images/starfire.png';

const beastboy = document.createElement('img');
beastboy.setAttribute('class', 'beast-boy');
beastboy.src = './images/beast-boy.png';

title.appendChild(logo);
root.appendChild(title);
root.appendChild(subtitle);
root.appendChild(paragraph);

// Create a container div to hold the episodes
const container = document.createElement('div');
container.setAttribute('class', 'container');

root.appendChild(container);

// make the request to the api containing the data
fetch('https://ttgoapi.herokuapp.com')
	.then(response => response.json())
	.then(data =>
		data.episodes.forEach(episode => {
			let title = document.createElement('h2');
			title.textContent = episode.title;

			let airdate = document.createElement('h3');
			airdate.textContent = episode.airdate;

			let a = document.createElement('a');
			a.setAttribute('href', episode.episodeLink);

			let image = document.createElement('img');
			image.setAttribute('class', 'image');
			image.src = episode.image;

			let description = document.createElement('p');
			description.textContent = episode.description;

			// create a card to hold the episode information
			const card = document.createElement('div');
			card.setAttribute('class', 'card');

			container.appendChild(card);

			a.appendChild(image);

			card.appendChild(title);
			card.appendChild(airdate);
			card.appendChild(a);
			card.appendChild(description);
		})
	)
  .catch(error => console.log(error));
  
  root.appendChild(footer);

footer.appendChild(robin);
footer.appendChild(beastboy);
footer.appendChild(starfire);
footer.appendChild(cyborg);
footer.appendChild(raven);
