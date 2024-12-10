# User Management API Documentation
This document provides details about the /users/register endpoint, including its functionality, required data, and possible responses.

# Endpoint: 
    /users/register
## Description
The /users/register endpoint allows new users to create an account by providing their details. It validates the input, hashes the password for security, and generates an authentication token upon successful registration.

# Method 
    POST

## Request Body
The endpoint requires a JSON object with the following structure:

### json
    {
    "email": "user@example.com",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "password": "securepassword123"
    }
### Field Descriptions
1. email (string, required):
    - Must be a valid email format.
2. fullname (object, required):
    - firstname (string, required):
        - Minimum 3 characters.
    - lastname (string, optional):
        - Minimum 3 characters.
3. password (string, required):
    - Minimum 6 characters.
# Response
#### Success
* Status Code: 201 Created
* Description: User registered successfully. Returns a JSON object with a token and user details.
### Example Response:

### json
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "63f6d9e5f79dce001f0f9e7c",
        "fullname": {
        "firstname": "John",
        "lastname": "Doe"
        },
        "email": "user@example.com"
    }
    }
## Validation Errors
* Status Code: 400 Bad Request
* Description: Validation errors for the provided input.
### Example Response:

### json
    {
    "errors": [
        {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
        },
        {
        "msg": "First name must be atleast 3 character long",
        "param": "fullname.firstname",
        "location": "body"
        },
        {
        "msg": "Password must be atleast 6 characters long",
        "param": "password",
        "location": "body"
        }
    ]
    }
### Internal Server Error
* Status Code: 500 Internal Server Error
* Description: Indicates an error occurred while processing the request. The server logs should provide further details.

# Documentation for /user/login Endpoint
This section explains the /user/login endpoint, including its purpose, required request body, and potential responses.

## Endpoint: /user/login
### Description
The /user/login endpoint authenticates a user by verifying their email and password. Upon successful authentication, it returns a JWT (JSON Web Token) and the user's details.

## Method
    POST

## Request Body
The endpoint requires a JSON object with the following structure:

### json
    {
    "email": "user@example.com",
    "password": "securepassword123"
    }
## Field Descriptions
1. email (string, required):
* Must be a valid email format.
2. password (string, required):
* Minimum 6 characters.
## Response
### Success
* Status Code: 200 OK
* Description: User authenticated successfully. Returns a JSON object containing a token and the user's details.
### Example Response:

### json
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "63f6d9e5f79dce001f0f9e7c",
        "fullname": {
        "firstname": "John",
        "lastname": "Doe"
        },
        "email": "user@example.com"
    }
    }
## Validation Errors
* Status Code: 400 Bad Request
* Description: Validation errors for the provided input.
### Example Response:

### json
    {
    "errors": [
        {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
        },
        {
        "msg": "Password must be atleast 6 characters long",
        "param": "password",
        "location": "body"
        }
    ]
    }
### Authentication Errors
* Status Code: 401 Unauthorized
* Description: Email or password is incorrect.
### Example Response:

### json
    {
    "message": "Invalid email or password"
    }
## Internal Server Error
* Status Code: 500 Internal Server Error
* Description: Indicates an unexpected error occurred while processing the request.
### Example Response:
### json
    {
    "message": "An unexpected error occurred"
    }
