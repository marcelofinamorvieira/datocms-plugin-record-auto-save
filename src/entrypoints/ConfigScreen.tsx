import { RenderConfigScreenCtx } from "datocms-plugin-sdk";
import {
  Button,
  Canvas,
  FieldGroup,
  Form,
  SelectField,
  SwitchField,
  TextField,
} from "datocms-react-ui";
import { useState } from "react";

type PropTypes = {
  ctx: RenderConfigScreenCtx;
};

type ModelOptionType = {
  label: string;
  value: string;
};

function ConfigScreen({ ctx }: PropTypes) {
  const [selectedModels, setSelectedModels] = useState([]);

  const allModels: ModelOptionType[] = [];

  Object.keys(ctx.itemTypes).map((key) => {
    if (!ctx.itemTypes[key]?.attributes.modular_block) {
      allModels.push({
        label: ctx.itemTypes[key]?.attributes.name!,
        value: ctx.itemTypes[key]?.attributes.api_key!,
      });
    }
    return null;
  });

  const [modelOptions, setModelOptions] = useState(allModels);

  return (
    <Canvas ctx={ctx}>
      <Form onSubmit={() => console.log("onSubmit")}>
        <FieldGroup>
          <SelectField
            name="modelsWithAutosave"
            id="modelsWithAutosave"
            label="Models where auto-save is enabled"
            hint="Select one of the options"
            value={selectedModels}
            selectInputProps={{
              isMulti: true,
              options: allModels,
            }}
            onChange={(newValue) => console.log(newValue)}
          />
          <TextField
            required
            name="autoSaveInterval"
            id="autoSaveInterval"
            label="Auto-save interval (seconds)"
            value="5"
            textInputProps={{ monospaced: true }}
            onChange={(newValue) => console.log(newValue)}
          />
          <SwitchField
            name="displayNotification"
            id="displayNotification"
            label="Recieve a notification for each auto-save"
            value={false}
            onChange={(newValue) => console.log(newValue)}
          />
        </FieldGroup>
        <FieldGroup>
          <Button fullWidth buttonType="primary">
            Save
          </Button>
        </FieldGroup>
      </Form>
    </Canvas>
  );
}

export default ConfigScreen;
