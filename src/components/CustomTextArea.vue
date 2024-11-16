<template>
  <div class="flex items-center gap-2 mt-12 justify-center">
    <label class="font-semibold" for="name">{{ field.label }} :</label>
    <textarea
      class="p-1 rounded-sm placeholder:text-slate-300 border border-slate-200 focus:none"
      type="text"
      id="name"
      :placeholder="field.placeholder"
      :required="field.required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ["field", "modelValue"],
  name: "CustomTextArea",
  emits: ["update:modelValue"],
};
</script>
