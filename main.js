const isDark = document.documentElement.getAttribute("data-theme") === "dark";

const info = new google.maps.InfoWindow({
  content: `
    <div style="color: ${isDark ? '#f6ead7' : '#3b0d10'}; font-weight: bold;">
      ${bodega.name}<br>
      <a href="${bodega.url}" target="_blank" style="color: ${isDark ? '#d4af37' : '#8d1f1f'};">Ver más</a>
    </div>
  `
});

