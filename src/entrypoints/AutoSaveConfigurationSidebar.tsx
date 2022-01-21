import { RenderItemFormOutletCtx } from "datocms-plugin-sdk";
import { useEffect } from "react";

type PropTypes = {
  ctx: RenderItemFormOutletCtx;
};

const AutoSave = ({ ctx }: PropTypes) => {
  useEffect(() => {
    if (ctx.isFormDirty && !ctx.isSubmitting) {
      const debounceTimer = setTimeout(() => {
        ctx.saveCurrentItem(false);
      }, 5 * 1000);
      return () => {
        clearTimeout(debounceTimer);
      };
    }
  }, [ctx.isFormDirty, ctx.formValues, ctx.isSubmitting]);

  return <></>;
};

export default AutoSave;
