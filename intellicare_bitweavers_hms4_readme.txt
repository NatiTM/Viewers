OHIF settings

file: platform/viewer/.webpack/webpack.commonjs.js
	before: const PUBLIC_URL = process.env.PUBLIC_URL || '/';
	after:  const PUBLIC_URL = '/static/PACS/';

file: platform/viewer/.webpack/webpack.pwa.js
	before: const PUBLIC_URL = process.env.PUBLIC_URL || '/';
	after:  const PUBLIC_URL = '/static/PACS/';

	
file: platform/viewer/package.json
	after: PUBLIC_URL=/PACS/viewImage/
	before:  PUBLIC_URL=/pwa/
	

file: platform/viewer/public/config/default.js 
	before: routerBasename: '/',
	after:  routerBasename: '/PACS/viewImage/',
	
