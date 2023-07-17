/*
Name: Luis Morales
Date: Jul 17, 2023

This source code cover tasks for module 5, it includes the following endpoints:

- Fetch users (/users)
- Create a new user (/create)
- Update a user (/update)
- Delete a user (/delete)
- Find a user (/find)
- Fetch hobbies from a user (/hobbies)
- Update hobbies for a given user (/updateHobby)
- Delete a hobbie for a given user (/deleteHobby)

The JSON format for a POSTMAN call follows the next structure (depending on the endpoint):

{
    "id": 1,
    "name": "Ann",
    "email": "ann@google.com",
    "hobbies": [
        "books",
        "sports",
        "dancing"
    ]
}

*/

const http = require("http");
const { updateUser, deleteUser, findUser, findHobbies, updateUserHobbies, deleteUserHobby } = require("./utils");

const host = "localhost";
const port = 3000;

let users = [];
let body = "";

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");

    switch (req.url) {
        case "/users":
            res.writeHead(200);
            res.end(JSON.stringify(users));
            break;
            
        case "/create":
            body = "";
            res.writeHead(200);
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                users.push(JSON.parse(body));
                res.end("User Created");
            });
            break;

        case "/update":
            body = "";
            res.writeHead(200);
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                updateUser(users, JSON.parse(body));
                res.end("User Updated");
            });
            break;

        case "/delete":
            body = "";
            res.writeHead(200);
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                deleteUser(users, JSON.parse(body));
                res.end("User Deleted");
            });
            break;

        case "/find":
            body = "";
            res.writeHead(200);
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                res.end(JSON.stringify(findUser(users, JSON.parse(body))));
            });
            break;

        case "/hobbies":
            body = "";
            res.writeHead(200);
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                res.end(JSON.stringify(findHobbies(users, JSON.parse(body))));
            });
            break;

        case "/updateHobby":
            body = "";
            res.writeHead(200);
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                updateUserHobbies(users, JSON.parse(body));
                res.end("Hobbies Updated");
            });
            break;

        case "/deleteHobby":
            body = "";
            res.writeHead(200);
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                deleteUserHobby(users, JSON.parse(body));
                res.end("Hobby Deleted");
            });
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
