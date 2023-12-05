<template>
  <div>
    <!-- <h1 class="text-orange-600 bg-red-100 p-2">Sara map vue web</h1> -->

    <div
      class="flex flex-col items-center h-screen max-h-screen text-yellow-400 bg-slate-400"
    >
      <!-- search / result  -->
      <div
        class="flex justify-center relative px-4 pt-8 pb-32 text-pink-400 bg-slate-900"
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
          <i
            class="fas fa-chevron-right cursor-pointer flex items-center bg-blue-950 text-yellow-100 px-4 rounded-tr-md rounded-br-md"
          ></i>
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
