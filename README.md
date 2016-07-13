# New Static Site Boilerplate
##### Jeff Seymour

### Description
###### This is a simple basic boilerplate / starting point I've made for new static websites and projects.  


### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`


### File Structure
Add files to the appropriate `app` subdirectories. Gulp will process and compile them into `dist`.

* Content in subdirectories under the `js` folder will be concatenated and minified.
* Content in subdirectories under the `scss` folder will be concatenated, compiled to css, minified, and placed in `dist/css`.
* Files in the `img` directory will be copied as-is into the `dist/img` directory.

```
basic-site-boilerplate/
|—— app/
|   |—— css/
|   |   |—— main.css
|   |—— img/
|   |   |—— # image files
|   |—— js/
|   |   |—— lib/
|   |   |   |—— jquery-2.2.3.js
|   |   |   |—— # vendor js files
|   |   |—— # js files
|   |—— scss/
|   |   |—— base/
|   |   |   |—— _base.scss
|   |   |   |—— _module.scss
|   |   |—— components/
|   |   |   |—— _module.scss
|   |   |—— layout/
|   |   |   |—— _module.scss
|   |   |—— utils/
|   |   |   |—— _mixins.scss
|   |   |   |—— _module.scss
|   |   |   |—— _variables.scss
|   |   |—— main.scss
|   |—— index.html
|—— dist/
|   |—— css/
|   |   |—— main.min.css
|   |—— js/
|   |   |—— main.min.js
|   |—— img/
|   |   |—— # image files
|   |—— index.html
|—— node_modules/
|—— .gitignore
|—— gulpfile.js
|—— package.json
|—— README.md
```

### Quick Start
Clone repository  
Add appropriate values to the "name" and "description" (and anything else depending on project) fields in the package.json file.  
```npm install```  
```gulp build```  
```gulp default```  
View in browser at localhost:3000

### License
The code is available under the [MIT License](LICENSE.md).
