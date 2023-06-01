# Alphabin_Technology
## Weather4cast

[Output Video Link**](https://drive.google.com/file/d/1vRsL7Yne073OYbMW-EGdekPz-bgpUPpO/view?usp=sharing)

### Deployelink 
 - https://alphabin.netlify.app/

### Backend Deployelink
 - https://alphabin-technology-backend.onrender.com

### Purpose
- Forcasts the weather 

### NPM packages used
- Mongooes
- jsonwebtocken
- bcrypt
- morgon
- nodemon
- cors
- dotenv
- express

## How to Run
- clone the repo
- Install dependencies
```
npm install
```
- run the nodemon
- npm run start
```
https://alphabin-technology-backend.onrender.com
```
- For Registration
- body required
 -- body {username,email,password}
```
https://alphabin-technology-backend.onrender.com/register
```
- For Login
- Access-Token
- body required
 -- body {email,password}
```
https://alphabin-technology-backend.onrender.com/login
```
- For Get user history
- Authorizied required
```
https://alphabin-technology-backend.onrender.com/gethistory
```
- Exchange Authorization Code for Access Token
- After creating .env file, in terminal use
```
node index.js
```

### Features
1. The app check for current weather 
2. The app Gives the forecast of upcoming 7 days
3. The app gives a secured login to the user
4. The app gives the acces to various location through the search bar 
5. The app makes sure that ther are no double patch requests at the same time 
6. The app is also included with the googlemap location

### Improvements to be done
1. The app can be updated and designed well
2. We have to create a dynamic location saving funality

