import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { getEvents } from "./services/events.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
    const username = document.getElementById("input-search").value;
    
    if (validateEmptyInput(username)) return;
    getUserProfile(username);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
    const username = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;
    
    if (isEnterKeyPressed) { 
        if (validateEmptyInput(username)) return;
        getUserProfile(username) 
    }
});

function validateEmptyInput(username) {
    if (username.length === 0) {
        alert("Preencha o campo com o nome do usuário do GitHub");
        return true;
    }
}

async function getUserProfile(username) {
    const userResponse = await getUser(username);
    const repositoriesResponse = await getRepositories(username);
    const eventsResponse = await getEvents(username);
    
    if (userResponse.message === "Not Found") {
        screen.renderNotFound();
        return;
    }
    
    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);    
    user.repositories.forEach((repository, index) => {
        console.log(repository);
        user.setRepository(repository, index);
        console.log(user.repository);
    })
    
    user.setEvents(eventsResponse);
    
    screen.renderUser(user);
}