const colorDiv = document.querySelector('#colorSwitch');

colorDiv.addEventListener('click', event => {
    // Det elementet som fick eventet att triggas
    // Alltså det som det klickades på vilket kan vara olika varje gång
    console.log('target', event.target);

    // Innebär i det här fallet colorDiv, eftersom det är det elementet vi har lagt till eventlistenern till
    // Alltid samma
    console.log('current target', event.currentTarget);

    if(event.target.tagName == 'BUTTON'){
        colorDiv.style.backgroundColor = event.target.innerText;
    }
})