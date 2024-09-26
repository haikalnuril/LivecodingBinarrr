class Tooltip{}

class ProjectItem{
    constructor (id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsFunction = updateProjectListsFunction;
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector('button:last-of-type');

        switchButton.addEventListener('click', this.updateProjectListsFunction.bind(this))
    }
}

class ProjectList {
    projects = [];

    constructor(type, switchHandlerFunction){
        this.type = type;
        this.switchHandlerFunction = switchHandlerFunction;

        const projectItems = document.querySelectorAll(`#${type}-projects li`);

        for (const projectItem of projectItems){
            console.log(type);
            console.log(projectItem);
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)));
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
    }

    switchProject(projectId) {
        this.project = this.projects.find(i => i.id === projectId)
        this.projects.filter((i) => i.id !== projectId)
        this.addProject();
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList("active");
        const finishedProjectList = new ProjectList("finished");

        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind());
    }
}

App.init()