# hello-world

Simple npm package and git repository for testing purposes

### Getting started

Clone the repo with:
`git clone`
Then install dependencies:
`npm install`
and just type:
`npm start`

### Build with
- Express
- Jade

### Commands

Here is a list of commands used to set up this project:
```
mkdir hello-world && cd hello-world
git init
npm init
echo "npm-debug.log*" > .gitignore
echo "node_modules/" >> .gitignore
echo "# hello-world" > README.md
git add *
git commit -m "Initial commit"
git tag 1.0.0 \commit-id\
git remote add origin \git-repo\
git push origin master
git commit -a -m "Update README.md"
git push origin master
git checkout -b node
npm install express --save
touch index.js
git add index.js
git commit -a -m "Add index.js"
git push origin node
git checkout master
git merge node
git branch -d node
git push origin master
# npm install jade & "Add jade view engine"
git checkout -b jade
npm install jade --save
mkdir views && cd views
touch layout.jade index.jade error.jade
cd ..
git add views/*
git commit -a -m "Add jade view engine"
git tag 1.0.1 \commit-id\
git push origin jade
git checkout master
git merge jade
git branch -d jade
git push origin master
```

### License
MIT