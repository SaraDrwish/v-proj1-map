<template>
  <div
    class="absolute z-[100] -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row gap-y-4 gap-x-12 px-8 pt-8 pb-12 rounded-md bg-slate-200"
  >
    <!-- flex item #1 -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase text-pink-500">IP Address</h3>
      <span class="text-2xl">{{ iPInfoo.address }}</span>
    </div>
    <!-- flex item #2 -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase text-pink-500">Location</h3>
      <span class="text-2xl">{{ iPInfoo.state }}</span>
    </div>
    <!-- flex item #3 -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase text-pink-500">Time Zoon</h3>
      <span class="text-2xl">UTC {{ iPInfoo.timezone }}</span>
    </div>
    <!-- flex item #4 -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase text-pink-500">Isp</h3>
      <span class="text-2xl">{{ iPInfoo.isp }}</span>
    </div>

    <!-- ////end flex item ///// -->
  </div>
</template>

<script>
export default {
  props: {
    iPInfoo: {
      type: Object,
      required: true,
    },
  },
};
</script>
