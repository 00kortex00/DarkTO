interface Mod {
    default: () => void;
}

export const initMods = () => {
    const mods = import.meta.glob('../mods/*/index.{ts,tsx}') as Record<string, () => Promise<Mod>>;

    for (const path in mods) {
        mods[path]().then((mod: Mod) => {
            mod.default();
        })
    }
}