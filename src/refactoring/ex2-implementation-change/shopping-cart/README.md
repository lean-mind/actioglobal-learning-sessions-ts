# Enunciado: Refactorización del Carrito de la Compra (parte 1)

Imagina que trabajas en una startup de un e-commerce que ha estado creciendo rápidamente. Hace unos meses lanzamos una
funcionalidad básica para que los usuarios puedan añadir productos a un carrito de la compra. Sin embargo, durante una
revisión de nuestro código, nos dimos cuenta de que __la implementación actual del carrito solo permite guardar el
precio
de un producto a la vez__, y eso está empezando a causar problemas cuando los usuarios añaden múltiples productos al
carrito.

Actualmente, el carrito guarda un único valor para el precio (`price: number`), lo que significa que cada vez que se añade
un nuevo producto, el precio de este se suma al anterior. No estamos reflejando correctamente la realidad de un carrito
de la compra, donde el cliente puede añadir varios productos con diferentes precios y eliminarlos en cualquier momento.

Para solucionar esto, __necesitamos modificar el carrito para que sea capaz de almacenar una lista de precios, uno por
cada producto añadido__. Nuestro objetivo es refactorizar el código para que podamos almacenar múltiples productos
__sin romper la funcionalidad actual__. Esto incluye garantizar que el cálculo del precio total, la verificación de
descuentos y el número de productos añadidos sigan funcionando correctamente.

## Tarea

Tu tarea es refactorizar de la clase `ShoppingCart`, que actualmente tiene la siguiente API:

```javascript
export class ShoppingCart {
   public add(price: number): void;
   public calculateTotalPrice(): number;
   public hasDiscount(): boolean;
   public numberOfProducts(): number;
}
```

## Objetivos

El objetivo es modificar esta clase para que, en lugar de un único precio, guarde una __lista de precios__
(`number[]`), asegurando que:

1. Se puedan almacenar múltiples precios al añadir varios productos.
2. El cálculo del precio total refleje correctamente la suma de los precios de todos los productos.
3. La funcionalidad de descuento siga aplicándose correctamente cuando el precio total supere los 100 euros.
4. El método que indica el número de productos (`numberOfProducts()`) devuelva el número correcto de productos añadidos
   al carrito.

La API final debería verse similar a esto:

```javascript
export class ShoppingCart {
   public add(price: number): void;
   public calculateTotalPrice(): number;
   public hasDiscount(): boolean;
   public numberOfProducts(): number;
}
```

Recuerda que estamos en un entorno en producción, por lo que es importante hacer los cambios de forma incremental
para __no romper la funcionalidad actual ni afectar la experiencia de los usuarios__.

## Notas

1. __Revisar tests existentes__: Asegúrate de que hay suficientes tests que cubran todos los casos. Si no los hay,
   agrégalos antes de refactorizar.

2. __No modificar código en producción sin respaldo de tests__: No cambies el código ni los tests existentes a menos que
   sea necesario. __Puedes añadir nuevos tests__ si es necesario.

3. __Mantener el comportamiento actual__: El objetivo es mejorar el código sin cambiar su comportamiento externo. No
   añadas nuevas funcionalidades durante la refactorización.

4. __Verificar que los tests pasen__: Después de cada cambio, todos los tests deben pasar. Si implementas algo nuevo,
   sigue TDD: primero escribe el test fallando, luego el código y finalmente refactoriza (si es necesario).
