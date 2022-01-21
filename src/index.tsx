import {
  connect,
  InitPropertiesAndMethods,
  ModelBlock,
  RenderConfigScreenCtx,
  RenderItemFormOutletCtx,
} from "datocms-plugin-sdk";
import { render } from "./utils/render";
import "datocms-react-ui/styles.css";
import AutoSave from "./entrypoints/AutoSaveConfigurationSidebar";
import ConfigScreen from "./entrypoints/ConfigScreen";

connect({
  itemFormOutlets(itemType: ModelBlock, ctx: InitPropertiesAndMethods) {
    return [
      {
        id: "auto_save",
        initialHeight: 0,
      },
    ];
  },
  renderItemFormOutlet(outletId: string, ctx: RenderItemFormOutletCtx) {
    if (outletId === "auto_save") {
      render(<AutoSave ctx={ctx} />);
    }
  },
  renderConfigScreen(ctx: RenderConfigScreenCtx) {
    render(<ConfigScreen ctx={ctx} />);
  },
});
