import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/modules/Header";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
