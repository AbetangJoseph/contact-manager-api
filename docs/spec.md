# CONTACT MANAGER API.

## This is a sample documentation for the contact manager api.

```
This path returns a list of all users from the contact-manager api

{
    "paths": {
        "/contacts": {
          "get": {
            "description": "Get list of all users in the contatct list",
            "responses": {
                  "200": {
                    "description": "Successfully got users",
                    "schema": {
                          "type": "array",
                          "users": [{}]
                    }
                  }
            }
          }
        }
    }
}
```

```
This path returns a single user from the contact-manager api

{
    "paths": {
        "/contact/{id}": {
              "get": {
                "description": "Get a single user from the contatct list",
                "parameters": [
                    {
                        "id": "contactId",
                        "in": "path",
                        "description": "The id of the user",
                        "required": true,
                        "type": "number"
                      }
                ],
                "responses": {
                     "200": {
                        "description": "Successfully got user",
                        "schema": {
                              "type": "object",
                              "user": {
                                "id": "string"
                                "name": "string",
                                "email": "string"
                                "mobile": "array",
                                "company": "string"
                                "isDeleted": "boolean",
                                "isBlocked": "boolean",
                              }
                        }
                     }
                }
            }
        }
    }
```
