import { usePagesStore } from "./menu/pages/pagesStore";
import { useRootLoaderStore } from "./store/rootLoaderStore";

export const createModMenu = usePagesStore.getState().addPage;
export const createModElementInRoot = useRootLoaderStore.getState().addItemToRoot;