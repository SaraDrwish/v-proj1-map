<template>
  <div
    class="flex flex-col items-center h-screen max-h-screen text-yellow-400 bg-slate-400"
  >
    <!-- search / result  -->
    <div
      class="flex items-center justify-center relative bg-hero-pattern w-full px-4 pt-8 pb-32 mb-12 bg-slate-800"
    >
      <!-- search input  -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-8">IP Address Tracker</h1>
        <div class="flex">
          <input
            @click="getIpInfo"
            v-model="queryIP"
            class="flex-1 py-3 px-3 rounded-tl-md rounded-bl-md focus:outline-none"
            type="text"
            placeholder="search for any IP address or leave it empty "
          />
          <i
            class="fas fa-chevron-right cursor-pointer flex items-center bg-slate-950 text-yellow-500 px-4 rounded-tr-md rounded-br-md"
          ></i>
        </div>
      </div>
      <!-- IP info -->
      <IPInfo v-if="iPInfoo" v-bind:iPInfoo="iPInfoo" />
    </div>

    <!-- /////MAp//// -->
    <div
      id="map"
      class="h-full z-10 mb-8 w-[90%] border-2 border-yellow-500 rounded-md"
    ></div>
    <!-- //////// -->
  </div>
</template>

<script>
import IPInfo from "../components/IPInfo.vue";
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";

// import '../assets/img/pattern-bg.png'
export default {
  name: "HomeView",
  components: { IPInfo },
  setup() {
    let map;
    const queryIP = ref("");
    const iPInfoo = ref(null);

    const getIpInfo = async () => {
      try {
        const data = await axios.get(
          `https://geo.ipify.org/api/v2/country?apiKey=at_WcTNuPBEyKC5XcH53HHRHXNTUhTkH&ipAddress=${queryIP.value}`
        );
        const result = data.data;
        console.log(result);
        iPInfoo.value = {
          address: result.ip,
          state: result.location.region,
          timezone: result.location.timezone,
          isp: result.isp,
          lat: result.location.lat,
          lng: result.location.lng,
        };
        leaflet.marker([iPInfoo.value.lat, iPInfoo.value.lng]).addTo(map);
        map.setView([iPInfoo.value.lat, iPInfoo.value.lng], 13);
      } catch (err) {
        console.log(err.message, "errorrrr yooo");
      }
    };

    onMounted(() => {
      map = leaflet.map("map").setView([51.505, -0.09], 13);

      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FhcmFhYWRlbGwiLCJhIjoiY2xvbHVuOGl6Mm1kNTJzcndsdGg2ODZvNSJ9.Q_EIYu5r-osuXlNy_b-HEA",
          {
            maxZoom: 18,
            attribution:
              'Map data &copy <a href="https://www.openstreetmap.org/copyright">openstreetmap</a>conteributors , Imagery <a href="www.mapbox.com/" > </a>',
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1Ijoic2FhcmFhYWRlbGwiLCJhIjoiY2xvbHVuOGl6Mm1kNTJzcndsdGg2ODZvNSJ9.Q_EIYu5r-osuXlNy_b-HEA",
          }
        )
        .addTo(map);
    });

    return { queryIP, iPInfoo, getIpInfo };
  },
};
</script>

<!-- //////// -->
