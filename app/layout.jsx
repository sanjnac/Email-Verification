"use client";
import { AppShell, createTheme, MantineProvider } from '@mantine/core';
import React from 'react';

import Page from './page';

export default function ({ children }) {
  return (

    <html>
      <body>
        <MantineProvider >
          <AppShell
            header={{
              height: 60
            }}
          >
            <AppShell.Main>
              {children}
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}