import { Nunito, Poppins, Roboto } from "next/font/google";

export const nunito = Nunito({ subsets: ['latin'] })

export const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })

export const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })