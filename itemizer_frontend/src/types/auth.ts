export interface UserRegistrationRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface AuthResponse {
    message: string;
    userId: string;
    token?: string; // If your Lambda returns a JWT
}