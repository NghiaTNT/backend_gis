# HOW TO USE THIS PROJECT

## WITH FRONTEND:

-   In the terminal, typing `npm run start` to start server and call API on API platform (Postman, ...), notes that PORT of server is `5000` => URL always begin with localhost:5000/.......

## WITH BACKEND:

-   In the terminal, typing `npm run dev` to start server + hot-reload when changing anything in code.
-   SQL Statement should write on ~/controller/common/SQLStatement and then export it.
-   In every file controller, must require db/connection and common/SQLStatement same as file ~/controller/user/user.js.
-   When finished API in controller, remember exporting function in the module.export, it will be use in routes/index.
-   Which file to use, require it in routes/index

### THANK YOU AND BEST WISHES FOR EVERYONE
