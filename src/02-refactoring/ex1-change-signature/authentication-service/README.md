# Enunciado: Refactorización del Servicio de Autenticación

Actualmente, nuestro servicio de autenticación utiliza un identificador (`id`) de tipo `number` para verificar si un
usuario está autenticado. Aunque esta solución funciona, hemos identificado un **code smell** llamado **"obsesión por
los primitivos"**.

Utilizar enteros simples para representar conceptos importantes, como un identificador de usuario, presenta varios
problemas:

1. **Falta de claridad**: Un `number` no refleja explícitamente su propósito, lo que hace que el código sea menos
   comprensible.

2. **Dificultad para escalar**: Si en el futuro decidimos cambiar el tipo de identificador a algo más complejo, como un
   **UUID**, tendríamos que modificar muchas partes del código. Este cambio es algo que ya tenemos en mente, y usar
   `number` como identificador haría que el proceso fuera más difícil y propenso a errores.

3. **Riesgo de confusión**: Usar un tipo primitivo como `number` puede dar lugar a errores si accidentalmente reutilizamos
   el mismo tipo para identificar diferentes conceptos, como usuarios, productos o transacciones.

Para solucionar este problema, vamos a encapsular el identificador en una clase `Id`. Esto nos permitirá manejar de
manera más flexible y clara el concepto de identificador, y facilitará futuras modificaciones como el cambio a **UUID**.

## API actual

```javascript
class AuthenticationService {
    public isAuthenticated(id: number): boolean;
}
```

## API esperada

```javascript
class AuthenticationService {
    public isAuthenticated(id: Id): boolean;
}
```

## Tarea

Tu tarea es refactorizar el servicio de autenticación y todas las clases cliente que lo utilizan para que, en lugar de
usar enteros como identificadores, pasen a utilizar objetos de tipo `Id`. Asegúrate de que los tests existentes sigan
funcionando correctamente y añade nuevos tests si es necesario.

### Objetivos

1. **Encapsular el identificador**: Reemplaza el uso de `number` por una clase `Id` que represente el identificador de
   usuario.
2. **Actualizar la API del servicio**: El método `isAuthenticated` debe ahora recibir un `Id` en lugar de un `int`.

## Notas

Recuerda que estamos en un entorno en producción, por lo que es importante hacer los cambios de forma incremental para
**no romper la funcionalidad actual ni afectar la experiencia de los usuarios**.

1. **Revisar tests existentes**: Asegúrate de que hay suficientes tests que cubran todos los casos. Si no los hay,
   agrégalos antes de refactorizar.

2. **No modificar código en producción sin respaldo de tests**: No cambies el código ni los tests existentes a menos que
   sea necesario. **Puedes añadir nuevos tests** si es necesario.

3. **Mantener el comportamiento actual**: El objetivo es mejorar el código sin cambiar su comportamiento externo. No
   añadas nuevas funcionalidades durante la refactorización.

4. **Verificar que los tests pasen**: Después de cada cambio, todos los tests deben pasar. Si implementas algo nuevo,
   sigue TDD: primero escribe el test fallando, luego el código y finalmente refactoriza (si es necesario).

