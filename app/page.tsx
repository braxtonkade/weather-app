"use client";

import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import SearchResult from "./types/SearchResult";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<SearchResult | null>(null);

  return (
    <main className={styles.main}>
      <Header onCitySelect={(result) => setSelectedCity(result)} />
      <Main city={selectedCity} />
      <Footer />
    </main>
  );
}
