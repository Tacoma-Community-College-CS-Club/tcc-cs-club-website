// This file is a server-side only JavaScript loading file.

// I commented this out, but we'll import the projects directory.
// import * as project_directory from '../../../projects/'

/*
    Projects should probably have some data attached to them:
     - Name
     - Author
     - Software license, if applicable (e.g. MIT, GPLv2/v3, Proprietary, etc)
     - Date created
     - Date published to TCC website
     - Target platforms (e.g. Linux, Windows, macOS, Android, etc)
     - Programming language, if applicable
     - Links to associated pages (github, itch.io, twitter)
     - Banner/promotional images
     - Screenshots of application in use
     - Application icon, if applicable
*/

/* 
    I need to:
    - [ ] Iterate through all markdown projects
*/

import path from "path";

export const load = async ({ params }) => {
    // const projects_directory = 
    
    

    if (params.slug === 'hello-world') {
		return {
			title: 'Example project',
            languages: ['ruby', 'c++'],
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}
}