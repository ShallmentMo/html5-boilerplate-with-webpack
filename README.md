# html5-boilerplate-with-webpack

1. Download boilerplate folder from [HTML5 ★ BOILERPLATE](https://html5boilerplate.com/) or [Initializr](http://www.initializr.com/), e.g.

	```
	*
	|__css
	| |__normalize.min.css
	| |__main.css
	|
	|__js
	| |__vendor
	| | |__modernizr-2.8.3.min.js
	| | |__jquery-1.11.2.min.js
	| |
	| |__plugins.js
	| |__main.js
	|
	|__img/
	|__index.html
	```

2. move files in `js/` foler under `/src/js/` folder and move files in `css/` folder under `/src/css/` folder. move other files and folders to `/public` folder.

3. add these lines to `/public/index.html`, and remove all the `<link/>` tag and `<script/>` tag (I mean css and javascript tag).

	```
	<script src="http://localhost:8080/index.js" charset="utf-8"></script>
	<script src="http://localhost:8080/style.js" charset="utf-8"></script>
	```

4. Uncomment the line you want in `/src/js/index.js` and `/src/css/style.js` to include the code you want.

5. You can use these command to start the server

  ```
  npm run webpack-dev-server // use this to start webpack dev server, also can use this as static server, but it seems not right.
  npm run web-server // use this to start backend server
  ```

