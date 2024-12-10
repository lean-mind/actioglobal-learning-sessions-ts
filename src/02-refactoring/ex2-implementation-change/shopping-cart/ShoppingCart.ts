export class ShoppingCart {
    constructor(
        private price: number = 0
    ) {}

    public add(price: number): void {
        this.price = price
    }

    public calculateTotalPrice(): number {
        return this.price
    }

    public hasDiscount(): boolean {
        return this.price >= 100
    }

    public numberOfProducts(): number {
        return 1
    }
}
