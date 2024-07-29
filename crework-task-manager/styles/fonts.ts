// styles/fonts.ts

import { Barlow } from '@next/font/google';
import { Inter } from '@next/font/google';

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['600'], // Adjust weights as needed
});

export const inter = Inter({
    subsets: ['latin'],
  });
