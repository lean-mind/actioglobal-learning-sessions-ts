import { AuthenticationService } from "./AuthenticationService"
import { Id } from "./Id";

export class AuthenticatorClient {
    private authenticationService: AuthenticationService

    public static main(): void {
        new AuthenticatorClient(new AuthenticationService()).run()
    }

    constructor(authenticationService: AuthenticationService) {
        this.authenticationService = authenticationService
    }

    public run(): void {
        const authenticated = this.authenticationService.isAuthenticated(Id.from(33))
        console.log("33 is authenticated = " + authenticated)
    }
}
