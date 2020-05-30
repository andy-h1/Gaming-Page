const cardButtons = document.querySelector('.button');
const streamer = document.querySelector('#sname');
const link = document.querySelector('#link');
const streamers = document.querySelector('.streamers');

function handleCardButtonClick(event) {
    console.log(streamer.value);
    console.log(link.value);
    const newStreamDetails = `
    <div class="streamer">
    <p>${streamer.value}</p>
    <a href="https://twitch.tv/${link.value}" target="_blank">Twitch</a>
</div>
    `;

    streamers.insertAdjacentHTML("beforeend", newStreamDetails);
}

cardButtons.addEventListener('click', handleCardButtonClick);




// create a div with class of streamer
// create a p tag with the name (streamer.value) in the middle
// create an a tag with the href of link.value
// append them to the page
