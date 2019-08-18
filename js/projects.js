
// object to hold various UI information
let controller = {};

// immediately invoked function - runs as soon as it's defined
(() => {
    // requesting projects from MongoDB 
    fetch("https://api.liammahoney.dev/projects").then((response) => {
        if (response.ok) return response.json();
        else console.log(`${response.status} - ${response.statusText}`);//TODO: display error.
    }).then((data) => {
        // filling UI controller object
        // fillController(data);

        // creating projects
        return generateProjects(data);

    }).catch((err) => {
        //TODO: display error
        console.log(err);
    });
})();

// /**
//  * Constructs the controller object. The controller holds the ID of the project
//  * in the collection, which also serves as the corresponding project's ID in the 
//  * DOM, as well as the related technologies of the project. This will be 
//  * used for searching for projects based on technology.
//  * @param {array} data list of project documents from MongoDB collection
//  */
// function fillController(data) {
//     for (let x of data) {
//         controller[x._id] = x.technologies;
//     }
// }

/**
 * Loops through array of MongoDB documents and creates UI elements
 * for each project present in the MongoDB collection.
 * @param {array} projects array of MongoDB documents (collection)
 */
function generateProjects(projects) {
    return new Promise((resolve, reject) => {
        let projectList = [];
        for (x of projects) {
            projectList.push(createProject(x));
        }

        Promise.all(projectList).then((results) => {
            // Appending projects to the dom
            let div = document.querySelector('.view');
            for (let x of results) {
                div.appendChild(x);
            }

            resolve();
        });
    });

}

/**
 * Creates UI components for a project.
 * @param {Object} project an object with necessary components to be a project
 */
function createProject(project) {
    return new Promise((resolve, reject) => {
        createProjectContainer().then((container) => {
            // all components of the project UI
            return Promise.all([container, createProjHeader(project), createProjDescription(project.description), createProjTech(project.technologies)]);
        }).then((components) => {
            // appending components to project container
            for (let i = 1; i < components.length; i++) {
                components[0].appendChild(components[i]);
            }

            // setting the ID of the DOM obj to be the id of the project from MongoDB
            components[0].setAttribute("id", project._id);

            // resolving project container
            resolve(components[0]);

        }).catch((err) => {
            console.log(err);
        });
    });
}

/**
 * Creates a div with the class Project. Used to hold all of the
 * UI components that make up an indivudal project.
 * @returns {Promise} resolves as a div with the class project
 */
function createProjectContainer() {
    return new Promise((resolve, reject) => {
        let div = document.createElement("div");
        div.classList.add("project");
        resolve(div);
    });
}

/**
 * Creates the header of the project. This includes the title which also
 * servers as a link to the project and a github icon which also serves as 
 * a link to the github repository.
 * @param {Object} project an object representation of a project
 * @returns {Promise} a div that contains the title(link) and github icon(link)
 */
function createProjHeader(project) {
    return new Promise((resolve, reject) => {
        Promise.all([createTitleContainer(), createTitle(project.title, project.link), createGitRepo(project.repo)]).then((results) => {
            results[0].appendChild(results[1]);
            results[0].appendChild(results[2]);
            // returning header container
            resolve(results[0]);
        });
    });
}

/**
 * Creates the div to be used as the project header container.
 * @returns {Promise} div with proj-header class
 */
function createTitleContainer() {
    return new Promise((resolve, reject) => {
        let div = document.createElement("div");
        div.classList.add("proj-header");
        resolve(div);
    });
}

/**
 * Creates the title which also serves as the link to the project.
 * @param {string} title title of the project
 * @param {string} url url to the project
 * @returns {Promise} a title which is wrapped in a link to the url the project is hosted at.
 */
function createTitle(title, url) {
    return new Promise((resolve, reject) => {
        // Doesn't follow the promise pattern
        let div = document.createElement("div");
        div.classList.add("header", "link");

        let link = document.createElement("a");
        link.classList.add("header", "link");
        link.setAttribute("href", url);
        link.innerHTML = title;

        div.appendChild(link);

        resolve(link);
    });
}

/**
 * Creates the github icon and appends that to a link to the 
 * appropriate github repository for the project.
 * @param {string} repo the github repository for the project
 * @returns {Promise} github icon with repository link around it
 */
function createGitRepo(repo) {
    return new Promise((resolve, reject) => {
        // container
        let div = document.createElement("div");
        div.classList.add("proj-git");

        // link to github repo
        let link = document.createElement("a");
        link.setAttribute("href", repo);
        link.classList.add("icon-link", "proj-git");

        // github icon
        let icon = document.createElement("i");
        icon.classList.add("fab", "fa-github", "header");

        link.appendChild(icon);
        div.appendChild(link);

        resolve(link);
    });
}

/**
 * Creates the description block of the project.
 * @param {string} description description of the project
 * @returns {Promise} the description of the project in a div
 */
function createProjDescription(description) {
    return new Promise((resolve, reject) => {
        let div = document.createElement("div");
        div.classList.add("text", "proj-desc");
        div.innerText = description;

        resolve(div);
    });
}

/**
 * Creates a div that holds all of the icons that show which technologies were used
 * when creating the project. 
 * @param {array} technologies list of strings containing all of the technologies used in the project
 * @returns {Promise} div containing <code> objects
 */
function createProjTech(technologies) {
    return new Promise((resolve, reject) => {
        let div = document.createElement("div");
        div.classList.add("proj-tech");

        technologies.sort();

        // each technology in the project
        for (let x of technologies) {
            let tag = document.createElement("code");
            tag.innerHTML = x.trim();
            div.appendChild(tag);
        }

        resolve(div);
    });
}