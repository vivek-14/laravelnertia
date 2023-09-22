<template>
  <Head title="Settings" />
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Register Here
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="form.post('/users')" class="space-y-6">
          <Input
            v-model="form.firstname"
            label="First name"
            field-name="firstname"
            field-type="text"
            :error-message="form.errors.firstname"
          />

        <Input
          v-model="form.email"
          label="Email Address"
          field-name="email"
          field-type="text"
          :error-message="form.errors.email"
        />

        <Input
          v-model="form.password"
          label="Password"
          field-name="password"
          field-type="password"
          :error-message="form.errors.password"
        />

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already a member?
        <Link
          href="#"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Sign in Here</Link
        >
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { Link, useForm } from "@inertiajs/vue3";
import Input from "../Shared/Forms/Input.vue";

let form = useForm({
  firstname: '',
  email:'',
  password: ''

});

</script>
