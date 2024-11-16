<template>
  <template v-for="formStep in formSteps" v-bind:key="formStep.step">
   
    <form
      v-on:submit="
        (e) => {
          if (step < formSteps.length) {
            step += 1;
          } else {
            e.preventDefault();
            submitForm();
          }
        }
      "
      v-if="formStep.step === step"
      class="w-1/3 h-[380px] py-12 rounded-xl bg-[#ffffff] shadow-md relative overflow-hidden"
    >
      <div class="w-[110%] bg-slate-300 rounded-full h-4 absolute top-[-5px] left-[-10px]">
        <div
            class="bg-sky-600 h-4 rounded-full transition-all duration-300"
            :style="{ width: stepWidth + '%' }"
          ></div>
      </div>
      <h2 class="text-center font-semibold text-2xl">{{ formStep.title }}</h2>
      <p class="text-center text-sm text-slate-400 tracking-wide">
        {{ formStep.description }}
      </p>

      <div class="flex flex-col gap-4 px-16">
        <div v-for="(field, idx) in formStep.fields" v-bind:key="idx">
          <TextInput
            v-if="field.type === 'textfield'"
            :field="field"
            v-model="formValues[field.label]"
          />
          <RadioButton
            v-if="field.type === 'radio'"
            :field="field"
            v-model="formValues[field.label]"
          />
          <CustomTextArea
            v-if="field.type === 'textarea'"
            :field="field"
            v-model="formValues[field.label]"
          />
          <AutoComplete
            v-if="field.type === 'autocomplete'"
            :field="field"
            v-model="formValues[field.label]"
          />
        </div>
        <div class="flex gap-2 items-center justify-center mt-4">
          <template v-if="step === 2">
            <CustomButton label="Back" @click.prevent="goBack"/>
            <CustomButton label="Submit"  />
          </template>
          <template v-else>
            <CustomButton label="Next"/>
          </template>
        </div>
      </div>
    </form>
  </template>
</template>

<script>
import RadioButton from "./RadioButton.vue";
import CustomButton from "./CustomButton.vue";
import formSteps from "../data/form.json";
import TextInput from "./TextInput.vue";
import CustomTextArea from "./CustomTextArea.vue";
import AutoComplete from "./AutoComplete.vue";
import { useToast } from 'vue-toastification'; 

export default {
  name: "MultiSteps",
  components: {
    RadioButton,
    CustomButton,
    TextInput,
    CustomTextArea,
    AutoComplete,
  },
  data() {
    const formValues = {};
    for (const formStep of formSteps) {
      for (const field of formStep.fields) {
        formValues[field.label] = null;
      }
    }

    return {
      formSteps, // JSON data loaded here
      step: 1,
      formValues,
      totalSteps: 2
    };
  },
  setup() {
      // Get toast interface
      const toast = useToast();
      // Make it available inside methods
      return { toast }
  },
  computed: {
    stepWidth() {
      // Hitung lebar berdasarkan langkah aktif
      return (this.step / this.totalSteps) * 100;
    },
  },

  methods: {
    submitForm() {
      console.log("Form submitted:", this.formValues);
      
      // Menampilkan toast setelah submit
      this.toast.info("Form successfully submitted!");
    },
    goBack() {
      if (this.step > 1) {
        this.step -= 1;
      }
    },
  },
};
</script>
