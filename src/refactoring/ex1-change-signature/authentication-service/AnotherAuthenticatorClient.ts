import { AuthenticationService } from "./AuthenticationService"

export function AnotherAuthenticatorClient() {

    return {
        unusedClientCode: function (): void {
            try {
                new AuthenticationService().isAuthenticated(3545)
            } catch (e: any) {
                // ignored
            }
        }
    }
}
