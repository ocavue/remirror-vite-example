// import { ProsemirrorDevTools } from '@remirror/dev';
import { ReactComponentExtension } from '@remirror/extension-react-component';
import {
  TableCellMenu,
  TableDeleteRowColumnButton,
  TableExtension
} from '@remirror/extension-react-tables';
import { Remirror, useRemirror, useRemirrorContext,ThemeProvider } from '@remirror/react';
import { AllStyledComponent } from '@remirror/styles/emotion';
import React, { FC } from 'react';
import Menu from './Menu';

const EXTENSIONS = () => [
  new ReactComponentExtension(),
  new TableExtension(),
];

/**
 * This component contains the editor and any toolbars/chrome it requires.
 */
const SmallEditor: FC = () => {
  const { getRootProps } = useRemirrorContext();

  return (
    <div id='example-editor'>
      <Menu />
      <div {...getRootProps()} />
    </div>
  );
};

const SmallEditorContainer: FC = () => {
  const { manager } = useRemirror({ extensions: EXTENSIONS });

  return (
    <AllStyledComponent>
    <ThemeProvider>
    <Remirror manager={manager}>
      <SmallEditor />
      {/* <ProsemirrorDevTools /> */}
      <TableCellMenu />
      <TableDeleteRowColumnButton/>
    </Remirror>
    </ThemeProvider>
  </AllStyledComponent>
  );
};

export default SmallEditorContainer;
