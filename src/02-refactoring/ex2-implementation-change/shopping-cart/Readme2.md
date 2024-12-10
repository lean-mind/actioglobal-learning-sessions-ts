# Enunciado: Refactorización del Carrito de la Compra (parte 2)

Después de la refactorización inicial, nuestro carrito de la compra ahora puede gestionar múltiples productos con sus
respectivos precios, lo que ha mejorado significativamente la funcionalidad y la experiencia del usuario. Sin embargo,
durante una revisión técnica más detallada, hemos detectado otro problema: el uso de tipos primitivos (en este caso,
`int`)
para representar los precios.

Este enfoque de usar enteros directamente es un mal olor de código que conocemos como "obsesión por los primitivos".
Utilizar tipos primitivos para representar conceptos complejos como el precio puede ser problemático a largo plazo.
Por ejemplo, a futuro necesitamos agregar lógica adicional al precio (como monedas, impuestos, o redondeo),
nos enfrentaremos a una gran cantidad de cambios en todo el sistema. Todo esto está en el roadmap del producto.

Para anticiparnos a estas futuras necesidades y mejorar la flexibilidad y legibilidad de nuestro código, hemos decidido
encapsular el concepto de "precio" en su propia clase, `Price`.

## API actual de la clase `ShoppingCart`

```javascript
export class ShoppingCart {
   public add(price: number): void;
   public calculateTotalPrice(): number;
   public hasDiscount(): boolean;
   public numberOfProducts(): number;
}
```

## API esperada tras la refactorización

```javascript
export class ShoppingCart {
   public add(price: Price): void;
   public calculateTotalPrice(): Price;
   public hasDiscount(): boolean;
   public numberOfProducts(): number;
}
```

## Tarea

Tu tarea en esta iteración es refactorizar el código del carrito de la compra para eliminar el uso de `number` en los
métodos públicos y reemplazarlo por una clase `Price` que encapsule mejor la lógica relacionada con el valor de
los precios.

## Objetivos

1. **Encapsular el concepto de precio**: Debes crear una clase `Price` que maneje el valor del precio.
2. **Modificar el carrito**: Los métodos que actualmente usan `number` para los precios deben refactorizarse para usar
   instancias de `Price`.

## Notas

Recuerda que estamos en un entorno en producción, por lo que es importante hacer los cambios de forma incremental
para __no romper la funcionalidad actual ni afectar la experiencia de los usuarios__.

1. __Revisar tests existentes__: Asegúrate de que hay suficientes tests que cubran todos los casos. Si no los hay,
   agrégalos antes de refactorizar.

2. __No modificar código en producción sin respaldo de tests__: No cambies el código ni los tests existentes a menos que
   sea necesario. __Puedes añadir nuevos tests__ si es necesario.

3. __Mantener el comportamiento actual__: El objetivo es mejorar el código sin cambiar su comportamiento externo. No
   añadas nuevas funcionalidades durante la refactorización.

4. __Verificar que los tests pasen__: Después de cada cambio, todos los tests deben pasar. Si implementas algo nuevo,
   sigue TDD: primero escribe el test fallando, luego el código y finalmente refactoriza (si es necesario).


