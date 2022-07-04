declare module 'next-themes' {
  interface ValueObject {
    [themeName: string]: string;
  }

  interface UseThemeProps {
    themes: string[];
    forcedTheme?: string;
    setTheme: (theme: string) => void;
    theme?: string;
    resolvedTheme?: string;
    systemTheme?: 'dark' | 'light';
  }

  interface ThemeProviderProps {
    themes?: string[];
    forcedTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    enableColorScheme?: boolean;
    storageKey?: string;
    defaultTheme?: string;
    attribute?: string | 'class';
    value?: ValueObject;
    nonce?: string;
    children?: ReactNode | ReactNode[];
  }

  export const useTheme: () => UseThemeProps;
  export const ThemeProvider: React.FC<ThemeProviderProps>;
}
