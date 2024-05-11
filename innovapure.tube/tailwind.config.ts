import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    fontSize: {
      tiny: [
        '0.8125rem', // 13px
        {
          lineHeight: '130%',
          fontWeight: '400',
          letterSpacing: 'normal'
        }
      ],
      small: [
        '0.875rem', // 14px
        {
          lineHeight: '140%',
          fontWeight: '400',
          letterSpacing: 'normal'
        }
      ],
      regular: [
        '1rem', // 16px
        {
          lineHeight: '120%',
          fontWeight: '400',
          letterSpacing: 'normal'
        }
      ],
      p: [
        '1.125rem', // 18px
        {
          lineHeight: '140%',
          fontWeight: '400',
          letterSpacing: 'normal'
        }
      ],
      h6: [
        '1.25rem', // 20px
        {
          lineHeight: '120%',
          fontWeight: '600',
          letterSpacing: 'normal'
        }
      ],
      h5: [
        '1.5rem', // 24px
        {
          lineHeight: '110%',
          fontWeight: '600',
          letterSpacing: 'normal'
        }
      ],
      h4: [
        '1.625rem', // 26px
        {
          lineHeight: '120%',
          fontWeight: '600',
          letterSpacing: 'normal'
        }
      ],
      h3: [
        '2rem', // 32px
        {
          lineHeight: '120%',
          fontWeight: '500',
          letterSpacing: 'normal'
        }
      ],
      h2: [
        '3rem', // 48px
        {
          lineHeight: '120%',
          fontWeight: '500',
          letterSpacing: 'normal'
        }
      ],
      h1: [
        '4rem', // 64px
        {
          lineHeight: '120%',
          fontWeight: '600',
          letterSpacing: 'normal'
        }
      ]
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '1280px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        inactive: 'hsl(var(--inactive))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        contrast: 'hsl(var(--contrast))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        'custom-background': 'hsl(var(--custom-background))',
        'custom-accent': 'hsl(var(--custom-accent))',
        'custom-accent-foreground': 'hsl(var(--custom-accent-foreground))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
} satisfies Config

export default config
