import "@remirror/styles/all.css";
import "./style.css";

import {
  TableComponents,
  TableExtension,
} from "@remirror/extension-react-tables";
import {
  ReactComponentExtension,
  Remirror,
  ThemeProvider,
  useRemirror,
  EditorComponent,
} from "@remirror/react";
import { HeadingExtension } from 'remirror/extensions';

import React, { FC } from "react";
import Menu from "./Menu";

const EXTENSIONS = () => [new ReactComponentExtension(), new TableExtension(), new HeadingExtension()];

const SmallEditorContainer: FC = () => {
  const { manager } = useRemirror({ extensions: EXTENSIONS });

  return (
    <ThemeProvider>
      <Remirror manager={manager}>
        <EditorComponent />
        <TableComponents />
        <Menu />
      </Remirror>
    </ThemeProvider>
  );
};

export default SmallEditorContainer;
