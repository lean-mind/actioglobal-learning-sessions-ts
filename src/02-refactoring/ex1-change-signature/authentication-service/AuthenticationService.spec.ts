import { describe, test } from 'vitest'

import { AuthenticationService } from "./AuthenticationService"

describe('AuthenticationService Should', () => {
    test('distinguish administrator role', () => {
        const service = new AuthenticationService()
        const adminId = 12345
        expect(service.isAuthenticated(adminId)).toBeTruthy()
    })
    test('distinguish non admin role', () => {
        const service = new AuthenticationService()
        const normalUserId = 11111
        expect(service.isAuthenticated(normalUserId)).toBeFalsy()
    })
})
