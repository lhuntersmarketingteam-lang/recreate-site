import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-subtle': 'var(--color-text-subtle)',
        accent: 'var(--color-accent)',
        'accent-warm': 'var(--color-accent-warm)',
        'accent-light': 'var(--color-accent-light)',
        line: 'var(--color-line)',
        'line-dark': 'var(--color-line-dark)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      letterSpacing: {
        tight: 'var(--tracking-tight)',
        wide: 'var(--tracking-wide)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      transitionTimingFunction: {
        'out-expo': 'var(--ease-out)',
        'in-out-expo': 'var(--ease-in-out)',
      },
    },
  },
  plugins: [],
};

export default config;
