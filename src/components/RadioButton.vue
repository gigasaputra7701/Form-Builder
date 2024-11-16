<template>
  <div class="flex gap-4 justify-center items-center">
    <label class="font-semibold" for="gender">{{ field.label }}</label>
    <div class="flex items-center space-x-6 mt-6">
      <label
        v-for="option in field.options"
        v-bind:key="option.value"
        class="flex flex-col items-center cursor-pointer "
      >
        <input
          type="radio"
          name="gender"
          :value="option.value"
          :required="field.required"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <span class="mt-2 text-slate-950"
        :class="{ 'font-semibold': option.value === modelValue }">
          {{ option.label }}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: ["field", "modelValue"],
  emits: ["update:modelValue"],
};
</script>
