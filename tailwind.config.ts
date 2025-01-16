import type { Config } from "tailwindcss";


export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['var(--font-mulish)'],
      },
      screens: {
        mobile: '375px',
        tabs80: '560px',
        tablet: '768px',
        laptop: '1280px',
        desktop: '1440px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'bg-slate-900': 'var(--bg-slate-900)',
        primary_1: 'var(--primary_1)',
        primary_2: 'var(--primary_2)',
        light_primary: 'var(--light_primary)',
        background_card: 'var(--background_card)',
        hover: 'var(--hover)',
        focused: 'var(--focused)',
        red: 'var(--red)',
        light_red: 'var(--light_red)',
        red_input: 'var(--red_input)',
        for_payment_icons: 'var(--for_payment_icons)',
        black: 'var(--black)',
        background_black_mode: 'var(--background_black_mode)',
        dark_mode_main1: 'var(--dark_mode_main1)',
        blackmode: 'var(--blackmode)',
        additional_red: 'var(--additional-red)',
        black_2_for_text: 'var(--black_2_for_text)',
        gray_2_for_body: 'var(--gray_2_for_body)',
        gray_3: 'var(--gray_3)',
        gray_5: 'var(--gray_5)',
        gray_0: 'var(--gray_0)',
        gray_1: 'var(--gray_1)',
        grayy: 'var(--grayy)',
        gray_blue: 'var(--gray-blue)',
        card_bg_primery: 'var(--card_bg_primery)',
        white: 'var(--white)',
        bw: 'var(--bw)',
        icons: 'var(--icons)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        text_secondary_color: 'var(--text_secondary_color)',
        text_prymery_color: 'var(--text_prymery_color)',
        label_color: 'var(--label_color)',
        prymery_btn_color: 'var(--prymery_btn_color)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        gray_11: 'var(--gray_11)',
        search_color: 'var(--search_color)',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
