const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    followers: "",
    following: "",
    repositories: [],
    repository: {
        repostitoryForksCount: [],
        repostitoryStargazersCount: [],
        repostitoryWatchersCount: [],
        repositoryLanguage: [],
    },
    events: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
    },
    setRepository(repository, index) {
        this.repository.repostitoryForksCount[index] = repository.forks_count;
        this.repository.repostitoryStargazersCount[index] = repository.stargazers_count;
        this.repository.repostitoryWatchersCount[index] = repository.watchers_count;
        this.repository.repositoryLanguage[index] = repository.language;
    },
    setEvents(events) {
        this.events = events;
    }
}

export { user };