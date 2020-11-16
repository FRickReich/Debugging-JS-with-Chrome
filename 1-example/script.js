const timeButton = document.querySelector('.time_button');
const timeOutput = document.querySelector('.time_output');

let currentTime = getTime();

timeButton.addEventListener("click", handleClick);


function getTime ()
{
    return new Date().toLocaleTimeString();
}

function handleClick()
{
    const newTime = currentTime;
    timeOutput.innerHTML = newTime;
}

function obsoleteFunction()
{
    return;
}
