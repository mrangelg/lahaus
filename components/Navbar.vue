<template>
  <nav class="h-16 border-b border-gray-200 bg-white fixed w-full top-0 z-30">
    <div class="flex items-center h-full relative md:hidden">
      <img src="icons/bars.svg" alt="La Haus" class="pl-4" />
      <NotificationBubble class="absolute top-3 left-10" />
      <NuxtLink to="/" class="pl-3 5">
        <img src="/branding/logo.svg" alt="La Haus" />
      </NuxtLink>
    </div>
    <div class="hidden md:flex justify-between items-center h-full">
      <NuxtLink to="/" class="pl-16">
        <img src="/branding/lahaus-header.svg" alt="La Haus" />
      </NuxtLink>
      <ul
        class="
          flex flex-wrap
          justify-around
          md:w-2/3
          lg:w-1/2
          text-green-jungle
          font-silka
        "
      >
        <li>
          <NuxtLink to="/" class="flex-1"> Cundinamarca </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="flex-1"> Antioquia </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="flex-1"> Recursor </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="flex-1 relative">
            Mi Perfil
            <img
              src="/icons/arrow-down.svg"
              alt="La Haus"
              class="inline-block"
            />
            <NotificationBubble class="absolute top-0.5 -right-1.5" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
