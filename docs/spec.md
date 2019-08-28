# CONTACT MANAGER API.

## This is a documentation for the contact manager api.

`To add a contact`

```
POST /contacts

Returns status code 200 & an object with the contact information if contact was successfully added.

Returns status code 400 & validation error message if there was an error with the user input.

```

`To get all contacts`

```
GET /contacts

Returns status code 200 with an array of objects with the contact information.

```

`To get a contact`

```
GET /contact/:id

Returns status code 200 & an object with the contact information if contact was found in the database.

Returns status code 404 & 'no such user' message if contact does not exist in database.

```

`To get blocked contacts`

```
GET /contacts/blocked

Returns status code 200 & an array of objects with the contact information.

```

`To block a contact`

```
PUT /contact/:id/block

Returns status code 200 & 'Contact has been blocked' message if successful.

Returns status code 400 with a message 'bad request' if not successful.

```

`To unblock a contact`

```
PUT /contact/:id/unblock

Returns status code 200 & 'Contact has been unblocked' message if successful.

Returns status code 400 with a message 'bad request' if not successful.

```

`To update a contact`

```
PUT /contact/:id/edit

Returns status code 200 & and a json { message: true } if successful.

Returns status code 400 with a message 'bad request' if not successful.

```

`To delete a contact`

```
DELETE /contact/:id

Returns status code 200 & and a json { message: 'User deleted successfully' } if successful.

Returns status code 400 and a json { message: 'no such user' } if not successful.

```
