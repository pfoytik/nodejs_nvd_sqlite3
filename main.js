// main.js

const Promise = require('bluebird')
const AppDAO = require('./dao')
const ProjectRepository = require('./project_repository')

function main() {
  const dao = new AppDAO('./nvd.sqlite3')
  const blogProjectData = { name: 'Write Node.js - SQLite Tutorial' }
  const projectRepo = new ProjectRepository(dao)  
  let projectId

    
  projectRepo.get5().then(
    (data) => {
        console.log('######### Printing 5 records')
        console.log('Data: ')
        console.log(JSON.stringify(data))
    }
  ).catch((err) => {        
        console.log('Error: ')
        console.log(JSON.stringify(err))
    })

    projectRepo.getById('CVE-2023-0809').then(
        (data) => {
            console.log('######### Printing CVE-2023-0809 cvss_veector')
            console.log('Data: ')
            console.log(JSON.stringify(data['cvss_vector']))
        }
    ).catch((err) => {        
            console.log('Error: ')
            console.log(JSON.stringify(err))
        }
    )
    projectRepo.getById('CVE-2023-0809').then(
        (data) => {
            console.log('######### Printing CVE-2023-0809 record')
            console.log('Data: ')
            console.log(JSON.stringify(data))
        }
    ).catch((err) => {        
            console.log('Error: ')
            console.log(JSON.stringify(err))
        }
    )

}

main()