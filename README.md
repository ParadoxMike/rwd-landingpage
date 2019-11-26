# Responsive Webdesign Landingpage
## Setup Stuff
1. Clone this repository into the www directory of your local server, [MAMP](https://www.mamp.info/de/) for example, so that the URL to this site will be `http://localhost/rwd-landingpage`.
2. Install [NPM](https://nodejs.org/en/) and the [Gulp CLI](https://gulpjs.com/) globaly.
3. Navigate to the `_config` folder of this repository with your favorite console or terminal and type `npm install`, this will install all dependencies.
4. Now type `gulp` to start the gulp watch process to compile SCSS and JS as well as reloading your browser when something changes. With `Ctrl + C` you can stop the watch task.

## Dev Stuff
* The branch `master` contains the live version of the site.
* The branch `dev` contains the current development state of the site.
* Everyone working on this site does this on their own branch `person/<name>` or on a dedicated feature branch.
* Wehen a feature or module is finished its either merged back into `dev` or a pull/merge request to merge it into `dev` is created and assigned to someone who can handle possible conflics.