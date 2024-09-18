export interface User {
    "id": number,
    "email": string,
    "password": string,
    "name": string,
    "role": string,
    "avatar": string

}

export interface ApiResponse<T> {
    message?: string;
    data: T;
}

export interface UserForm {
    "email": "string",
    "name": "string",
    "password": "string",
    "role": "string",
    "avatar": "string"
}