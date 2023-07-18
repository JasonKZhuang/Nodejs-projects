# setup Node.js with TypeScript
1. to give a package.js
```shell
npm init -y
```

2. create a index.ts file
see details in index.ts

3. install typescript
```shell
npm install typescript --save-dev
```
this command will add the following into package.js
```javascript
"devDependencies": {
    "typescript": "^5.1.6"
  }
```
we also add the typescript compiler to script in package.js file
```javascript
   "scripts": {
        "start": "node ./dist/index.js", // the entry of application
        "build": "tsc", // compile and build 
        "lint": "eslint", //linting finds inconsistencies and possible errors in code, for consistent and high qulity code
        "test": "jest" // using jest to do the test
    }
```
4. add src directory, and move index.ts into src
5. install type for node using the following npm command
```shell
npm i -D @types/node
```
```javascript
  "devDependencies": {
    "@types/node": "^20.4.2"    
  }
```
6. create tsconfig.json file to config typescript environment

7. using git command
   git config --list
   git config --global user.email "you@example.com"
   git config --global user.name "Your Name"
   git config --global user.password "your password"

