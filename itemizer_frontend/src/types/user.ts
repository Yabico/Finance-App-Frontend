export interface User {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string; // ISO String from Instant.now().toString()
}

// Data sent to the RegistrationHandler
export interface RegistrationRequest {
    email: string;
    rawPassword: string; // Matches your Java parameter name
    firstName: string;
    lastName: string;
}

// Data sent to the LoginHandler
export interface LoginRequest {
    email: string;
    rawPassword: string;
}