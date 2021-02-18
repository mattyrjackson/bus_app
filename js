function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 52.446263, lng: -1.931446 },
  });
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}
