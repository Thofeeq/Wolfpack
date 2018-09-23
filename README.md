# Wolfpack

#### Wolfpack is web app for creating polls and sharing them with your friends.
After a user enters their email address, they can make a poll with as many options as they'd like (minimum 2) and select when they would like the poll to end. After creating the poll, they are given a URL to share with their friends, and will receive an email with that shareable URL and an administrative link where they can see the up to date results of the poll. When someone votes on the poll, the user is notified via email that a vote has been cast, which includes the voters name, and the admin link again so they can view the current results.

!["Screen Shot of Main Page"](https://github.com/Thofeeq/Wolfpack/blob/master/public/images/Vote%20-%20Wolfpack_files/Main%20Login.png?raw=true)
!["Screen Shot of Poll Builder"](https://github.com/Thofeeq/Wolfpack/blob/master/public/images/Vote%20-%20Wolfpack_files/Poll%20Builder.png?raw=true)
!["Screen Shot of Poll Builder with Options and Optional Description"](https://github.com/Thofeeq/Wolfpack/blob/master/public/images/Vote%20-%20Wolfpack_files/Option%20Filled%20in%20Poll%20Builder.png?raw=true)
!["Screen Shot of Choose Expiry Date"](https://github.com/Thofeeq/Wolfpack/blob/master/public/images/Vote%20-%20Wolfpack_files/Choose%20Expiry%20Date.png?raw=true)
!["Screen Shot of Publish Poll Button Hover Effect"](https://github.com/Thofeeq/Wolfpack/blob/master/public/images/Vote%20-%20Wolfpack_files/Publish%20Poll.png?raw=true)
!["Screen Shot After Poll has been published"](https://github.com/Thofeeq/Wolfpack/blob/master/public/images/Vote%20-%20Wolfpack_files/After%20Poll%20Has%20been%20Published.png?raw=true)
!["Screen Shot of Vote Page Initial Load"](https://github.com/Thofeeq/Wolfpack/blob/master/public/images/Vote%20-%20Wolfpack_files/Vote%20Page%20Name%20input.png?raw=true)
!["Screen Shot of Vote Page Options"](https://github.com/Thofeeq/Wolfpack/blob/master/public/images/Vote%20-%20Wolfpack_files/Vote%20Page.png?raw=true)
!["Screen Shot of Resutls/Admin Page"](https://github.com/Thofeeq/Wolfpack/blob/master/public/images/Vote%20-%20Wolfpack_files/Results:admin%20Page.png?raw=true)



## Setup
- Clone the repo and run `npm install` to download all the dependencies
- Configure your .env file with the following information:
```
DB_HOST=localhost
DB_USER=<USERNAME>
DB_PASS=<PASSWORD>
DB_NAME=<DBNAME>
DB_SSL=true if heroku
DB_PORT=5432

apiKey=<YOUR MAILGUN API KEY>
mailDomain=<YOUR MAILGUN DOMAIN>
```
- Run `npm start` to start the server and navigate to localhost:8080


## Dependencies

- Express
- EJS
- pg
- knex
- morgan
- body-parser
- mailgunjs
- moment
- dotenv
- flatpickr
- gfycat-style-urls
