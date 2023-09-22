<template>
  <Head title="Description" />
  <section class="flex justify-between p-6 bg-slate-900 text-slate-300">
    <header>
      <h1 class="font-bold text-lg">Inertia.Test</h1>
    </header>
    <Nav />
  </section>

  <section class="p-6">
    <div class="max-w-4xl mx-auto">
      <slot />
    </div>
  </section>
</template>

<script setup>
import Nav from "../Shared/Nav.vue";
</script>
