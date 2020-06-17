const addLink = document.querySelector('.add-link');
console.log(addLink);
const streamerInput = document.querySelector('.link-name');
const streamers = document.querySelector('.streamers');
const endPoint = 'https://api.github.com/users/andy-h1';
const author = document.querySelector('.author');
const deleteButton = document.querySelectorAll('.deletebtn');

const authorPromise = fetch(endPoint);
authorPromise.then(response => {
    return response.json();
}).then(data => {
    console.log(data.html_url);
    author.innerHTML = `
    <p>Created by ${data.name}</p><br>
    <a href="${data.html_url}" target="_blank">Github</a>
    `;
}).catch(handleError)


function handleError(err) {
    console.log("ERROR!");
    console.log(err);
    userEl.textContent =`Something went wrong: ${err}`
  }

function handleCardButtonClick(event) {
    event.preventDefault();
    const validStreamerInput = streamerInput.value;

    if (validStreamerInput) {
        const newStreamDetails = `
        <div class="streamer">
        <p class="streamerName">${validStreamerInput}</p>
        <a href="https://twitch.tv/${validStreamerInput}" target="_blank">Twitch</a>
    </div>
        `;
        streamers.insertAdjacentHTML("beforeend", newStreamDetails);    
    }

}

function handleRemoveButtonClick (event) {
    const button = event.currentTarget;
    const streamer = button.closest('.streamer');
    streamer.remove();
}

addLink.addEventListener('click', handleCardButtonClick);
deleteButton.forEach(button =>
    button.addEventListener('click', handleRemoveButtonClick)
  );
