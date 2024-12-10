import { describe, test } from 'vitest'
import { ShoppingCart } from './ShoppingCart'

describe('ShoppingCart', () => {
    test('count number of products', () => {
        const shoppingCart = new ShoppingCart()
        shoppingCart.add(10)

        expect(shoppingCart.numberOfProducts()).toBe(1)
    })
    test('calculate total price', () => {
        const shoppingCart = new ShoppingCart()
        shoppingCart.add(10)

        expect(shoppingCart.calculateTotalPrice()).toBe(10)
    })
    test('know when is discount applicable', () => {
        const shoppingCart = new ShoppingCart()
        shoppingCart.add(100)

        expect(shoppingCart.hasDiscount()).toBeTruthy()
    })
    test('know when is not possible to apply discount', () => {
        const shoppingCart = new ShoppingCart()
        shoppingCart.add(99)

        expect(shoppingCart.hasDiscount()).toBeFalsy()
    })
})
