# SGS Core (@stormgamesstudios/sgs-core)

Núcleo de funcionalidades centrales para los proyectos de **StormGamesStudios**. Este paquete está diseñado para ser consumido como un módulo ESM (ECMAScript Modules).

## 🚀 Instalación

Puedes instalarlo directamente desde el registro oficial de npm:

```bash
npm install @stormgamesstudios/sgs-core
```

## 💻 Uso

Puedes importar el núcleo de la librería directamente en tu proyecto:

```javascript
import { sgsCore } from '@stormgamesstudios/sgs-core';

console.log(sgsCore.saludar());
// Salida: "SGS Core inicializado correctamente."

console.log(`Versión actual: ${sgsCore.version}`);
```

## 🛠 Requisitos

- **Node.js**: `>= 22.22.3`
  - *Nota:* Este paquete utiliza **Import Attributes** (`with { type: "json" }`) para leer la versión desde el `package.json`, lo cual requiere versiones modernas de Node.js.

## 📦 Actualización

Para actualizar a la última versión publicada en npm:

```bash
npm update @stormgamesstudios/sgs-core
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.