const cardButtons = document.querySelectorAll('.button');

function handleCardButtonClick(event) {
    console.log('click!');
}

cardButtons.forEach(button =>
    button.addEventListener('click', handleCardButtonClick)
    );
