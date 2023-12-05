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
      <IPInfo />
    </div>

    <!-- ///////// -->
  </div>
</template>

<script>
import IPInfo from "../components/IPInfo.vue";
import leaflet from "leaflet";
// import '../assets/img/pattern-bg.png'
export default {
  name: "HomeView",
  components: { IPInfo },
};
</script>

<!-- //////// -->
