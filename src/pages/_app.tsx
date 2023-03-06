import "@/styles/globals.css";
import { Container } from "@mui/material";
import type { AppProps } from "next/app";
import Header from "@/modules/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
