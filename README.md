
# serverless-crud
Serverless framework example for launching a basic CRUD service.

## Quick Start

1. Go to ```shared/config.yml``` in the repo's root directory. Change whatever you need to change there. These settings are then used by each service below for full consistency. This information also becomes available to each SLS service in your repo directory, by simply ```var Shared = require('shared');``` and accessing the ```Config``` key, from right inside your SLS handler code.

2. For local development, run ```npm install``` in the repo's root directory. This will install any dev dependency (like ```serverless-offline```).

3. That's it! Now you can go to each service and code your heart out.

## Useful Commands
To make full application ```deploy``` and ```remove``` simple, I've boiled them down to these two ```npm scripts``` that you can easily run:

- Run ```npm run info``` to ```sls info``` every service contained, getting a rundown of your app as a whole
- Run ```npm run deploy``` to ```sls deploy``` every service contained
- Run ```npm run remove``` to ```sls remove``` every service contained
- Run ```npm run offline``` to ```sls offline``` every service contained
