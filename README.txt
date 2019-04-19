*** This is a generic template created for developing Web Application using the best practises ***
*** Author: Dipen Patel ***

Modules used in this template.
- PM2  (Used for hot reloading, monitoring web app.)
- Helmet (Used to increase security)

To run the app
1. pm2 start app.js -i max --watch -f This will run the app using PM2 in a cluster i.e using all the CPU's. This run the app as hot loaded so you won't have to restart the server just refreash the page to see changes. 
2. navigate to localhost:8888
