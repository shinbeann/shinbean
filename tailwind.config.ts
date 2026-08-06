import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
      },
      spacing: {
        // 8px spacing scale for systematic consistency
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px
        '1.5': '0.375rem',  // 6px
        '2': '0.5rem',      // 8px  - Base unit
        '3': '0.75rem',     // 12px
        '4': '1rem',        // 16px - 2x base
        '5': '1.25rem',     // 20px
        '6': '1.5rem',      // 24px - 3x base
        '7': '1.75rem',     // 28px
        '8': '2rem',        // 32px - 4x base
        '10': '2.5rem',     // 40px - 5x base
        '12': '3rem',       // 48px - 6x base
        '14': '3.5rem',     // 56px
        '16': '4rem',       // 64px - 8x base
        '18': '4.5rem',     // 72px
        '20': '5rem',       // 80px - 10x base
        '24': '6rem',       // 96px - 12x base
        '28': '7rem',       // 112px
        '32': '8rem',       // 128px - 16x base
        '36': '9rem',       // 144px
        '40': '10rem',      // 160px - 20x base
        '48': '12rem',      // 192px - 24x base
        '56': '14rem',      // 224px
        '64': '16rem',      // 256px - 32x base
        '72': '18rem',      // 288px
        '80': '20rem',      // 320px
        '96': '24rem',      // 384px
        '112': '28rem',     // 448px
        '128': '32rem',     // 512px
      },
      fontSize: {
        // Type scale with consistent line heights
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],      // 12px/16px
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0' }],       // 14px/20px
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],          // 16px/24px
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }], // 18px/28px
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],  // 20px/28px
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],     // 24px/32px
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }], // 30px/36px
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],   // 36px/40px
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.025em' }],          // 48px/48px
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.025em' }],       // 60px/60px
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],        // 72px/72px
      },
      fontWeight: {
        // Enforce minimum 400 weight for body copy
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "surface-base": "hsl(var(--surface-base))",
        "intellipal-accent": "hsl(var(--intellipal-accent))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
