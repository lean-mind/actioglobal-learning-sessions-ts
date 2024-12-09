import { describe, test } from 'vitest'
import { ExternalCartClient } from './ExternalCartClient'

describe('External Cart', () => {
    test('format total price message', () => {
        const client = new ExternalCartClient()
        expect(client.formattedTotalPrice(30)).toBe('Total price is 30 euro')
    })
})
