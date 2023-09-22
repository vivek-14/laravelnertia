<template>
  <nav>
    <ul class="flex space-x-6">
      <NavLink :url="'/'" :active="$page.component === 'Welcome'">
        Home
      </NavLink>
      <NavLink :url="'/users'" :active="$page.component === 'Users'">
        Users
      </NavLink>
      <NavLink :url="'/settings'" :active="$page.component === 'Settings'">
        Settings
      </NavLink>
      <NavLink :url="'/user/create'" :active="$page.component === 'Register'">
        Register
      </NavLink>
      <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span>🌙</span>
      <span>☀️</span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
    </ul>
  </nav>
</template>

<script setup>
import NavLink from "./NavLink.vue";
</script>
