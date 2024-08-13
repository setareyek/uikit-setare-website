import React from 'react';

interface IThemeProviderProps {
  children: React.ReactNode;
  themeMode?: string;
}

export default function ThemeProvider(props: IThemeProviderProps) {

  const { children, themeMode } = props;

  return (
    <div className={themeMode}>
      {children}
    </div>
  );

}