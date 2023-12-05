<template>
  <div class="HomeView">
    <h1 class="text-orange-600 bg-red-600 p-2">Sara map vue web</h1>

    <div class="flex flex-col h-screen max-h-screen text-pink-500 bg-slate-400">
      <!-- search / result  -->
      <div
        class="flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32 text-pink-900 bg-slate-900"
      ></div>
      <!-- search input  -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            class="flex-1 py-3 px-3 rounded-tl-md rounded-bl-md focus:outline-none"
            type="text"
            placeholder="search for any IP address or leave it empty "
          />
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<!-- //////// -->
