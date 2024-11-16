<template>
  <button
     :class="[
      'px-6 py-2 rounded-sm shadow font-bold w-fit self-center hover:opacity-90',
      label === 'Back' ? 'bg-transparent text-sky-600 border border-sky-600' : 'bg-sky-600 text-white'
    ]"
    type="submit"
    v-on:click="onclick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: ["label", "class", "onclick"],
};
</script>

