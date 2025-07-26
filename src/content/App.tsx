import { useEffect, useState } from "react";
import { Menu } from "./core/menu/Menu";
import { ThemeController } from "./themes/ThemeController";

function App() {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  function handleKeyDown(event: KeyboardEvent) {
    const key = event.code.replace('Key', '').toLowerCase();
    if(key === 'insert') {
      setMenuOpened((prev) => !prev);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [])

  return (
    <>
      <ThemeController />
      {menuOpened && <Menu />}
    </>
  )
}

export default App
