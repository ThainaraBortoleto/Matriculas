<script setup>

import create from "@/services/UsersService";

defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

function setSignUp() {
  create();
}
</script>

<template>
  <teleport v-if="modelValue" to="body">
    <div
        ref="modal-backdrop"
        class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div
          class="flex items-start justify-center min-h-screen pt-24 text-center"
      >
        <transition
            enter-active-class="transition ease-out duration-300 transform "
            enter-from-class="opacity-0 translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
        >
          <div
              class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-4 w-1/2"
              role="dialog"
              ref="modal"
              aria-modal="true"
              v-show="modelValue"
              aria-labelledby="modal-headline"
          >
            <slot />

            <section class="flex justify-around">
              <button @click="$emit('update:modelValue', false)" class="rounded bg-gray-400 text-white px-4 py-1">Cancelar</button>
              <button class="rounded bg-blue-600 text-white px-4 py-1" @click="setSignUp">Confirmar</button>
            </section>
          </div>
        </transition>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>