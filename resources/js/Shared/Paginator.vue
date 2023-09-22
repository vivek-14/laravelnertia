<template>
  <ul class="flex">
    <li
      v-for="(link, index) in links"
      :key="index"
      class="border border-slate-900"
      :class="link.url ? '' : 'text-slate-500'"
    >
      <Link
        v-if="link.url"
        :href="link.url"
        v-html="link.label"
        class="px-2 py-0"
        preserve-scroll
      />
      <span v-else v-html="link.label" class="px-2 py-0"></span>
    </li>
  </ul>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
defineProps({
  links: Array,
});
</script>
