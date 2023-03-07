const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers =[];

/* -------------- Employe builder template ---------------
        {
                type:'imput',
            name:'name',
            message: 'Please add yor team member - ... (Required)',
            validate: nameImput => {
                if(nameImput) {
                    return true;
                 }else {
                    console.log('... name is required. Please enter one.')
                    return false;
                 }}
            
        },

         {
            type:'imput',
            name:'employeID',
            message: 'Please enter your Emplye ID (Required)',
            validate: nameImput => {
                if(nameImput) {
                    return true;
                 }else {
                    console.log('Emplye ID is required. Please enter one.')
                    return false;
                 }}

        },

        {
            type: 'imput',
            name: 'email',
            message: 'Please enter Team member email address(Reaquired)',
                validate: email =>{
                if (email){
                    return true;
                } else {
                    console.log('Email address is required. Please enter one');
                    return false;
                }}
        },


        -----------------------------------------------------
        ]).then(answers => {
    const ...position..  = new ...position... (answers.name, answers.employeID, answers.email, ...additional details... );
    teamMembers.push(...position...);
    promptMenu();
    })



};

*/





// --------------------------------- Manager Details -------------------------------------------------------
const promptManager = () => {
    return inquirer.prompt([
        {
            type:'imput',
            name:'name',
            message: 'Please chose your team Maneger (Required)',
            validate: nameImput => {
                if(nameImput) {
                    return true;
                 }else {
                    console.log('Manager name is required. Please enter one.')
                    return false;
                 }}
            
        },

        {
            type:'imput',
            name:'employeID',
            message: 'Please enter your Emplye ID (Required)',
            validate: nameImput => {
                if(nameImput) {
                    return true;
                 }else {
                    console.log('Emplye ID is required. Please enter one.')
                    return false;
                 }}

        },

        {
            type: 'imput',
            name: 'email',
            message: 'Please enter Team member email address(Reaquired)',
                validate: email =>{
                if (email){
                    return true;
                } else {
                    console.log('Email address is required. Please enter one');
                    return false;
                }}
        },

        {
            type: 'imput',
            name: 'officeNumber',
            message: 'Please enter Team Manager Office Number (Reaquired)',
                validate: officeNumber =>{
                if (officeNumber){
                    return true;
                } else {
                    console.log('Office Numbers is required. Please enter one');
                    return false;
                }}
        },    
    
    
// --------------- Manager Details  end ------------------------

]).then(answers => {
    const manager = new Manager(answers.name, answers.employeID, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptMenu();
    })



};

// ------------------------------- generate Manager Ends ------------------------------------------------------- 


// -------------- adding team members ---------------------------------------------------------------
        // ---------------- menu - user choices ----------------------------------------------
const promptMenu = () => {
    return inquirer.prompt([
        {
        type: 'list',
        name:'menu',
        message:'Please add your team members',
        choices: ['add Engineer', 'add Intern', 'Complete Task']   
        }
    ])
    .then(userChoice => {
        switch(userChoice.menu){

            case"add Engineer":
            promptEngineer();
            break;

            case"add Intern":
            promptIntern();
            break;

            default:
                buildTeam();

        }


    });

};

            // ----------------- add Eng -----------------------
const promptEngineer = () => {
console.log(' ------------ Please add Engineer details --------------- ');
return inquirer.prompt ([


    {
        type:'imput',
    name:'name',
    message: 'Please add yor team member name (Required)',
    validate: nameImput => {
        if(nameImput) {
            return true;
         }else {
            console.log('Team Member name is required. Please enter one.')
            return false;
         }}
    
},

 {
    type:'imput',
    name:'employeID',
    message: 'Please enter your Emplye ID (Required)',
    validate: nameImput => {
        if(nameImput) {
            return true;
         }else {
            console.log('Emplye ID is required. Please enter one.')
            return false;
         }}

},

{
    type: 'imput',
    name: 'email',
    message: 'Please enter Team member email address(Reaquired)',
        validate: email =>{
        if (email){
            return true;
        } else {
            console.log('Email address is required. Please enter one');
            return false;
        }}
},


{
    type: 'imput',
    name: 'gitHub',
    message: 'Please enter Team member GitHub username(Reaquired)',
        validate: gitHub =>{
        if (gitHub){
            return true;
        } else {
            console.log('GitHub username is required. Please enter one');
            return false;
        }}
},






]).then(answers => {
    const Engineer  = new Engineer (answers.name, answers.employeID, answers.email, answers.gitHub );
    teamMembers.push(Engineer);
    promptMenu();
    })

};

           // ----------------- add Intern -----------------------
           const promptIntern = () => {
            console.log(' ------------ Please add Intern details --------------- ');
            return inquirer.prompt ([


                {
                type:'imput',
                name:'name',
                message: 'Please add Intern name (Required)',
                validate: nameImput => {
                    if(nameImput) {
                        return true;
                     }else {
                        console.log('Intern name is required. Please enter one.')
                        return false;
                     }}
                
            },
    
             {
                type:'imput',
                name:'employeID',
                message: 'Please enter Intern Emplye ID (Required)',
                validate: nameImput => {
                    if(nameImput) {
                        return true;
                     }else {
                        console.log('Emplye ID is required. Please enter one.')
                        return false;
                     }}
    
            },
    
            {
                type: 'imput',
                name: 'email',
                message: 'Please enter Team member email address(Reaquired)',
                    validate: email =>{
                    if (email){
                        return true;
                    } else {
                        console.log('Email address is required. Please enter one');
                        return false;
                    }}
            },   


            {
                type: 'imput',
                name: 'School',
                message: 'Please enter Intern school name(Reaquired)',
                    validate: School =>{
                    if (School){
                        return true;
                    } else {
                        console.log('School name is required. Please enter one');
                        return false;
                    }}
            },   




            ]).then(answers => {
                const Intern  = new Intern (answers.name, answers.employeID, answers.email, answers.School  );
                teamMembers.push(Intern);
                promptMenu();
                })
            
            };

            // ------------------- team members end -------------------------- 

            const buildTeam = () => {
                console.log ('Great! Your Team is ready for chalenge.');

      
   // fs.writeFileSync(outputPath,render(teamMembers),"UFT" ) }          
            
   

// ----------------------------------------------------------------------------------------------
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers),"utf-8");
}

promptManager(); 