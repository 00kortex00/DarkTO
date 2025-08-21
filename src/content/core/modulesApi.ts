import { usePagesStore } from "./menu/pages/pagesStore";
import { useRootLoaderStore } from "./store/rootLoaderStore";

export const createModuleMenu = usePagesStore.getState().addPage;
export const createModuleElementInRoot = useRootLoaderStore.getState().addItemToRoot;