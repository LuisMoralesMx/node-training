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

To run the server just type: node server.js

*/

const http = require("http");
const {
    updateUser,
    deleteUser,
    findUser,
    findHobbies,
    updateUserHobbies,
    deleteUserHobby,
} = require("./utils");

const host = "localhost";
const port = 3000;

let users = [];
let body = "";

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");

    console.log(req.method);

    switch (req.url) {
        case "/users":

            if (req.method === 'GET') {
                res.writeHead(200);
                res.end(JSON.stringify(users));
                break;
            } else if (req.method === 'POST') {
                body = "";
                req.on("data", (chunk) => {
                    body += chunk;
                });

                req.on("end", () => {
                    try {
                        users.push(JSON.parse(body));
                        res.writeHead(200);
                        res.end("User Created");
                    } catch (ex) {
                        res.writeHead(400);
                        res.end(`An error has ocurred: ${ex}`);
                    }
                });
                break;
            }

        case "/update":
            body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                try {
                    updateUser(users, JSON.parse(body));
                    res.writeHead(200);
                    res.end("User Updated");
                } catch (ex) {
                    res.writeHead(400);
                    res.end(`An error has ocurred: ${ex}`);
                }
            });
            break;

        case "/delete":
            body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                try {
                    deleteUser(users, JSON.parse(body));
                    res.writeHead(200);
                    res.end("User Deleted");
                } catch (ex) {
                    res.writeHead(400);
                    res.end(`An error has ocurred: ${ex}`);
                }
            });
            break;

        case "/find":
            body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                try {
                    res.end(JSON.stringify(findUser(users, JSON.parse(body))));
                    res.writeHead(200);
                }
                catch (ex) {
                    res.writeHead(400)
                    res.end(`An error has ocurred: ${ex}`);
                }
            });
            break;

        case "/hobbies":
            body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                try {
                    res.end(JSON.stringify(findHobbies(users, JSON.parse(body))));
                    res.writeHead(200);
                } catch (ex) {
                    res.writeHead(400)
                    res.end(`An error has ocurred: ${ex}`);
                }

            });
            break;

        case "/updateHobby":
            body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                try {
                    updateUserHobbies(users, JSON.parse(body));
                    res.writeHead(200);
                    res.end("Hobbies Updated");
                } catch (ex) {
                    res.writeHead(400)
                    res.end(`An error has ocurred: ${ex}`);
                }

            });
            break;

        case "/deleteHobby":
            body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                try {
                    deleteUserHobby(users, JSON.parse(body));
                    res.writeHead(200);
                    res.end("Hobby Deleted");
                } catch (ex) {
                    res.writeHead(400)
                    res.end(`An error has ocurred: ${ex}`);
                }

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
