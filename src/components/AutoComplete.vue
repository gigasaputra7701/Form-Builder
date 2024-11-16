<template>
  <div class="flex items-center gap-4 justify-center">
    <label class="font-semibold" for="name">{{ field.label }} :</label>
    <select
      class="p-2 border rounded-sm"
      :name="field.label"
      :id="field.label"
      :placeholder="field.placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="field.required"
    >
    <option value="">{{  field.placeholder }}</option>
      <option
        :value="option"
        v-for="option in field.options"
        v-bind:key="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["field", "modelValue"],
  name: "AutoComplete",
  emits: ["update:modelValue"],
};
</script>
