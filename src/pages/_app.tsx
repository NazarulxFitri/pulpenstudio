import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/modules/Header";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import { useRouter } from "next/router";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { LiveSupport } from "@/components";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const liveUrl = router.pathname.includes("live");

  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>

      {!liveUrl && <Header />}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Component {...pageProps} />
        <LiveSupport />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
