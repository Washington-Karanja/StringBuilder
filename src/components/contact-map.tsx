"use client";

import { useEffect, useRef } from "react";
import type * as Leaflet from "leaflet";

import styles from "./contact-map.module.css";

const villageMarket = {
  latitude: -1.2297269,
  longitude: 36.8039791,
  name: "Village Market",
  address: "Limuru Road, Nairobi, Kenya",
};

export function ContactMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: Leaflet.Map | null = null;
    let cancelled = false;

    const initialiseMap = async () => {
      const container = containerRef.current;
      if (!container || container.dataset["mapInitialised"] === "true") return;

      const leaflet = await import("leaflet");
      if (cancelled || !container) return;

      container.dataset["mapInitialised"] = "true";
      map = leaflet.map(container, {
        center: [villageMarket.latitude, villageMarket.longitude],
        zoom: 15,
        scrollWheelZoom: false,
        keyboard: true,
      });

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
        })
        .addTo(map);

      const marker = leaflet
        .marker([villageMarket.latitude, villageMarket.longitude], {
          icon: leaflet.divIcon({
            className: styles.marker,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          }),
          title: villageMarket.name,
        })
        .addTo(map);

      const popup = document.createElement("div");
      const name = document.createElement("strong");
      name.textContent = villageMarket.name;
      const address = document.createElement("p");
      address.textContent = villageMarket.address;
      const directions = document.createElement("a");
      directions.className = styles.popupLink;
      directions.href = `https://www.google.com/maps/dir/?api=1&destination=${villageMarket.latitude},${villageMarket.longitude}`;
      directions.target = "_blank";
      directions.rel = "noreferrer";
      directions.textContent = "Get directions";
      popup.append(name, address, directions);
      marker.bindPopup(popup);
    };

    const container = containerRef.current;
    void initialiseMap();

    return () => {
      cancelled = true;
      map?.remove();
      if (container) delete container.dataset["mapInitialised"];
    };
  }, []);

  return <div ref={containerRef} className={styles.map} role="region" aria-label="Map showing Village Market on Limuru Road, Nairobi" />;
}
