<script setup>
function signUp() {
  alert('Matricule-se')
}
</script>
<template>
  <nav
    class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-black lg:py-4"
    data-te-navbar-ref
  >
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div>
        <a
          class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
          href="#"
        >
          <img
            class="mr-2 rounded-full"
            src="https://proxy.olhardigital.com.br/wp-content/uploads/2023/07/Deadpool-Fox-1024x580.jpg"
            style="height: 50px"
            alt="TE Logo"
            loading="lazy"
          />
        </a>
      </div>

      <button
        class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContent4"
        aria-controls="navbarSupportedContent4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>

      <!-- Collapsible navbar container -->
      <div
        class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent4"
        data-te-collapse-item
      >
        <!-- Left links -->
        <ul
          class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
          data-te-navbar-nav-ref
        >
          <!-- Home link -->
          <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            <a
              class="text-white hover:text-pink-600 focus:text-pink-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-pink-700 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
              >Nossa Universidade</a
            >
          </li>
          <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            <a
              class="text-white hover:text-pink-600 focus:text-pink-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-pink-700 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
              >Cursos</a
            >
          </li>
          <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            <a
              class="text-white hover:text-pink-600 focus:text-pink-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-pink-700 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
              >Depoimentos</a
            >
          </li>
          <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            <a
              class="text-white hover:text-pink-600 focus:text-pink-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-pink-700 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
              >Localização</a
            >
          </li>
          <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            <a
              class="text-white hover:text-pink-600 focus:text-pink-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-pink-700 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              aria-current="page"
              href="#"
              data-te-nav-link-ref
              >Contato</a
            >
          </li>
        </ul>

        <div class="flex items-center">
          <button @click="signUp" class="bg-pink-700 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
