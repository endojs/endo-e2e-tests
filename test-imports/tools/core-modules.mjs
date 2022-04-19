export const getModules = async (moduleNames) => {
  const realModules = {};

  const coreModulesCompartment = new Compartment(
    {},
    {},
    {
      name: 'coreModules',
      resolveHook: (moduleSpecifier) => {
        return moduleSpecifier;
      },
      importHook: async (moduleSpecifier) => {
        const ns =
          realModules[moduleSpecifier].default || realModules[moduleSpecifier];

        const staticModuleRecord = Object.freeze({
          imports: [],
          exports: Object.keys(ns),
          execute: (moduleExports) => {
            Object.assign(moduleExports, ns);
            moduleExports.default = ns;
          },
        });
        return staticModuleRecord;
      },
    },
  );

  for (let name of moduleNames) {
    try {
      realModules[name] = await import(name);
    } catch (e) {
      console.warn(e);
    }
  }

  return Object.fromEntries(
    await Promise.all(
      Object.keys(realModules).map(async (name) => [
        name,
        (await coreModulesCompartment.import(name)).namespace,
      ]),
    ),
  );
};
