// src/index.js
import pkg from "../package.json" with { type: "json" };

export const sgsCore = {
  version: pkg.version,
  saludar: () => {
    return "SGS Core inicializado correctamente.";
  }
};

export default sgsCore;
