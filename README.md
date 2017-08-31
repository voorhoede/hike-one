# hike one 
[![Build Status](https://travis-ci.org/voorhoede/hike-one.svg?branch=master)](https://travis-ci.org/voorhoede/hike-one)

Website for Hike One

## Getting Started

Create a `.env` file in the project root. Ask a team member for the settings.

This project requires [NodeJS](http://nodejs.org/) and NPM (comes with NodeJS) to be installed. All other project dependencies can be installed via NPM.

Install node packages:  
`npm install`

Then build:  
`npm run build`

Serve the website  
`npm start`

The site will now be served on   
`http://localhost:3000`

## Development

First Build:  
`npm run build`
Then:  
`npm run dev`

This will build and then serve the website on:  
`http://localhost:3000`

Also watches for changes. 

## Deployment
[Travis](https://travis-ci.org) handles deployments. Travis will install [now](https://zeit.co/now)
and execute `deploy.sh`, which deploys hike one to the environment 
determined by the branch name found in `$TRAVIS_BRANCH`.

### Staging
Code pushed to the **master** branch at github will trigger a deployment to 
[**staging**](https://staging.hikeone.nl)

### Production
If Travis encounters a new **tag**, a production deployment will happen.

1. Tags need to be explicitly pushed to the git remote.

```sh
# Create a tag
$ git tag v1.2.3

# push to remote
$ git push --tags
```

2.  Tags must match the following pattern:
**v0.1.2** (Three groups of digits, separated by periods, prefixed with a lowercase letter "v")

## Git Commit Messages

Follows the [Angular git commit guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) 

