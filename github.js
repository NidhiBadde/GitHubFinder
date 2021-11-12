class GitHub {

    constructor(){
        
        this.client_id = 'e78f3535c355af213ef5';
        this.client_secret = '5bf743bdc7ae3770e3d6ac7c176818d56327a11b';
        this.repos_Count = 5;
        this.repos_Sort = 'created : asc';
    }

    async getUser(user) {

        // This const will hold the profile information in response

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_Count}&sort = ${this.repos_Sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }

    
}