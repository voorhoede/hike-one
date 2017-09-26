# Hike one 
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
 [**staging**](https://staging.hike.one)

### Production 
 If Travis encounters a new **tag**, a production deployment will happen to [**production**](https://hike.one)

 1. Tags need to be explicitly pushed to the git remote.

 ```sh
 # Create a tag
 $ git tag v1.2.3

 # push to remote
 $ git push --tags
 ```

 2.  Tags must match the following pattern:
 **v0.1.2** (Three groups of digits, separated by periods, prefixed with a lowercase letter "v")
 
## NPM Scripts
Most important npm scripst

`npm run ...` | Description
---|---
`start`| Serves website with production env set (run `npm run build` first)
`build`| builds website to `/build` folder
`build:dato` | Get latest data from datoCMS (included in `npm run build`)
`dev`| Serves website in development mode
`proxy` | runs a proxy with the help of nrok

 
## Technology Stack
[reactJS](https://facebook.github.io/react/) javascript library for building the UI
[Nextjs](https://github.com/zeit/next.js/) framework for server rendering reactJS  
[GSAP](https://greensock.com/) for animations  
[Less](http://lesscss.org/) as css preprocessor  
[DatoCMS](https://www.datocms.com/) is used as CMS  
[Imgix](https://www.imgix.com/) for serving images via datoCMS  
[Vimeo](https://vimeo.com/home) for serving videos  
[Travis](https://travis-ci.org) handles deployments 

## Git Commit Messages

Follows the [Angular git commit guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) 

