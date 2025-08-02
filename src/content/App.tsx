import { cloneElement, useEffect, useState } from "react";
import { Menu } from "./core/menu/Menu";
import { ThemeController } from "./themes/ThemeController";
import { initMods } from "./mods/initMods";
import { useRootLoaderStore } from "./core/store/rootLoaderStore";

function App() {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const { itemsInRoot } = useRootLoaderStore();

  function handleKeyDown(event: KeyboardEvent) {
    const key = event.code.replace('Key', '').toLowerCase();
    if(key === 'insert') {
      setMenuOpened((prev) => !prev);
    }
  }

  useEffect(() => {
    initMods();

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [])

  return (
    <>
      <ThemeController />
      {menuOpened && <Menu />}
      {itemsInRoot.map((modItem, index) => cloneElement(modItem, { key: `mod-${index}` }))}
    </>
  )
}

export default App
