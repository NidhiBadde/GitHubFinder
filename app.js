// Initialize GitHub class

const gitHub = new GitHub;

// Init UI class
const ui = new UI;

// Search input

const searchUser = document.getElementById('searchUser');

// Search input event listner

searchUser.addEventListener('keyup' , (e)=> {

    // Get value of text entered
    const userToSearch = e.target.value;


    if(userToSearch != ''){
        // Make http call
        gitHub.getUser(userToSearch)
        .then(data => {
            
            if(data.profile.message === "Not Found"){
                // show alert
                ui.showAlert('User Not Found' , 'alert alert-danger');

            }else{
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }

        });

    }else{
        // Clear profile
        ui.clearProfile();
    }

})