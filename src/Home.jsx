import React from "react";
import HeroCarousel from "./HeroCarousel";
import FeatureSections from "./FeatureCards";
import DiscoverySection from "./DiscoverySection";

export default function Home() {
  return (
    <div className="home-page">

      <HeroCarousel />
      <FeatureSections />
      <DiscoverySection />

    </div>
  );
}


