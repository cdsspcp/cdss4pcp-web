## CDSS4PCP Lab website
This repository contains the source code of CDSS4PCP Lab website.

### Dynamic content
Most of the pages uses the json file (available under `src/db/*.json`) as the backend.

### Local debugging
This steps will help you to set up the local testing environment.

#### Clone the copy using git:
```
git clone https://github.com/cdsspcp/cdss4pcp-web.git
```

#### Install the dependencies
First ensure you are in the correct ~/cdss4pcp-web directory
```
npm install --save --legacy-peer-deps
```

#### Run local server
```
npm run start
```

If everything went right, Local server will spin up the website in the default browser.


### Deploy to production
This steps will help you to push the code to production. Be careful with this step because this will update the production (live at [https://cdss4pcp.com](https://cdss4pcp.com)).

#### Deploy
```
npm run deploy
```
