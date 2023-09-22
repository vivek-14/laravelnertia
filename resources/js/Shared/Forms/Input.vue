<template>
  <div>
    <div class="flex items-center justify-between">
      <label
        v-if="label"
        :for="fieldName"
        class="block text-sm font-medium leading-6 text-gray-900"
        >{{ label }}</label
      >
      <span class="mt-2 text-xs text-rose-700">{{ errorMessage }} </span>
    </div>

    <div class="mt-2">
      <input
        :id="fieldName"
        :name="fieldName"
        :type="fieldType"
        :autocomplete="fieldName"
        :required="isRequired"
        :value="modelValue"
        @input="$emit('update:model-value', $event.target.value)"
        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        :class="{ 'ring-rose-600 ring-2': errorMessage }"
      />
    </div>
  </div>
</template>

<script setup>


defineProps({
  label: {
    type: String,
    required: false,
  },
  fieldName: {
    type: String,
    required: true,
  },
  fieldType: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    required: false,
    default: false,
  },
  errorMessage: String,
  modelValue: String
})

defineEmits(['update:model-value'])


</script>
