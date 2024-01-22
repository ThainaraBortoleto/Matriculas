<script setup>

import {ref} from "vue";

const tabs = [
  {
    title: 'Dados Pessoais',
    id: 1
  },
  {
    title: 'Cursos',
    id: 2
  }
]

const activeTab = ref(1);
</script>
<template>
  <!-- component -->
    <div v-data="{ activeTab: 1 }" class="p-8">
      <div class="mx-auto">
        <div class="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
          <button @click="activeTab = 1" :class="{ 'bg-blue-600 text-white': activeTab === 1 }" class="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300">Section 1</button>
          <button @click="activeTab = 2" :class="{ 'bg-blue-600 text-white': activeTab === 2 }" class="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300">Section 2</button>
          <button @click="activeTab = 3" :class="{ 'bg-blue-600 text-white': activeTab === 3 }" class="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300">Section 3</button>
        </div>

        <div v-show="activeTab === 1" class="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 class="text-2xl font-semibold mb-2 text-blue-600">Section 1 Content</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam justo nec justo lacinia, vel ullamcorper nibh tincidunt.</p>
        </div>

        <div v-show="activeTab === 2" class="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 class="text-2xl font-semibold mb-2 text-blue-600">Section 2 Content</h2>
          <p class="text-gray-700">Proin non velit ac purus malesuada venenatis sit amet eget lacus. Morbi quis purus id ipsum ultrices aliquet Morbi quis.</p>
        </div>

        <div v-show="activeTab === 3" class="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 class="text-2xl font-semibold mb-2 text-blue-600">Section 3 Content</h2>
          <p class="text-gray-700">Fusce hendrerit urna vel tortor luctus, nec tristique odio tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        </div>
      </div>
    </div>


</template>