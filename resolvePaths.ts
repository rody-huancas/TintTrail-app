// Librarys
import path from "path";

// Types
import type { AliasOptions } from "vite";

/**
 * Resolver paths del archivo 'tsconfig.base.json'
 * @param defaultPath Recibe un path por defecto donde se crean las rutas absolutas
 * @param paths Paths que se definen en un archivo de configuración de Typescript
 * @return {AliasOptions} Objeto con cada path absoluto
 */
export default function resolvePaths(
  defaultPath = "src",
  paths: Record<string, string[]>
): AliasOptions {
  return Object.entries(paths).reduce(
    (acc: Record<string, string>, [key, value]) => {
      const field = key.replace("/*", "");
      const fieldValue = "/" + value[0].replace("/*", "");
      const absolutePath = path.resolve(__dirname, defaultPath + fieldValue);

      acc[field] = absolutePath;
      return acc;
    },
    {}
  );
}
