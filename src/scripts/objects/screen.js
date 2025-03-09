const screen = {
    userProfile: document.querySelector(".profile-data"),

    checkZero(value, text) {
        return (!value || value === 0 || value === "0") ? text : value;
    },

    renderUser(user) {
        this.userProfile.innerHTML =    `<div class="info">
                                            <img src="${user.avatarUrl}" alt=""Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? "Não possui nome cadastrado 👀"}🙋‍♂️</h1> <br>
                                                <span>${user.followers} Seguidores 👨‍👨‍👦‍👦</span> <br>
                                                <span>${user.following} Seguindo 🏃‍♂️</span> <br> <br>
                                                <p>💻${user.bio ?? "Não possui bio cadastrado 👀"}👨‍💻</p>
                                            </div>
                                        </div>`
                                        
        let repositoriesItems = "";
        user.repositories.forEach((repo, index) => {
            repositoriesItems +=    `<li><a href="${repo.html_url}" target="_blank">${repo.name}<br><br>
                                    <div class="repository-info-container">
                                    <div class="repository-info">🍴${user.repository.repostitoryForksCount[index] ?? "Sem forks"}</div>
                                    <div class="repository-info">⭐${user.repository.repostitoryStargazersCount[index] ?? "Sem estrelas"}</div>
                                    <div class="repository-info">👀${user.repository.repostitoryWatchersCount[index] ?? "Ninguém olhando!"}</div>
                                    <div class="repository-info">💻${user.repository.repositoryLanguage[index] ?? "Sem linguagem atribuída"}</div>
                                    </div>
                                    </a></li>`;
        });

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=   `<div class="repositories section">
            <h2>Repositórios 🧮</h2>
            <ul>${repositoriesItems}</ul>
            </div>`;
        }        

        let eventsItems = "";
        user.events.forEach(events => {
            if (events.type === "PushEvent") {
                eventsItems += `<li><span class="event-repositories">${events.repo.name}</span> - ${events.payload.commits[0].message}🎢</li>`;
            }
            else if (events.type === "CreateEvent") {
                eventsItems += `<li>Sem mensagem de commit 😴</li>`;
            }
        });
        
        if (user.events.length > 0) {
            this.userProfile.innerHTML +=   `<div class="events section">
                                                <h2>Eventos 🎈</h2>
                                                <ul>${eventsItems}</ul>
                                            </div>`;
        }
    },
    
    renderNotFound() {
        this.userProfile.innerHTML = "<h3> Usuário não encontrado 👀</h3>";
    }
}

export { screen };