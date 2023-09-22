<template>
  <li>
    <Link
      :href="url"
      class="text-blue-500 hover:underline"
      :class="{ 'font-bold underline': active }"
    >
      <slot />
    </Link>
  </li>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
  active: Boolean,
  url: String,
});
</script>
