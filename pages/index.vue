<script setup lang="ts">
definePageMeta({
  layout: "main",
})

useHead
</script>

<template>
  <div id="home" class="flex h-[100dvh] flex-col">
    <!-- Header -->
    <header class="h-[100px] w-full">
      <div class="inner max-w-[1460px] w-full mx-auto flex justify-between items-center h-full p-9">
        <h1 class="font-black text-[24px]"><a class="link-mmd" href="">برنامه‌نویس مملکت!</a></h1>

        <nav class="flex max-w-[300px] w-full justify-between font-demiBold text-[20px] ml-6">
          <NuxtLink class="mx-1 link-shadow" to="/">ورود</NuxtLink>
          <NuxtLink class="mx-1 link-shadow" to="/">ثبت‌نام</NuxtLink>
          <NuxtLink class="mx-1 link-shadow" to="https://hossara.com">درباره من</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Center section -->
    <section class="flex max-w-[1460px] w-full h-[80%] items-center justify-between mx-auto p-8">
      <div class="flex flex-col justify-center h-full">
        <h2 class="text-white text-[40px] font-extraBlack">
          <span class="block">✨ لایو کدینگ</span>
          <span class="block">✨ لایو پرسش و پاسخ</span>
          <span class="block">✨ لایو های برنامه نویسی</span>
        </h2>

        <p class="mt-[40px] text-white text-[25px] font-demiBold">
          <span class="block">اینجا دنیای برنامه ما نویساست!</span>
          <span class="block">با هم کد می‌زنیم، گپ می‌زنیم و یاد می‌گیریم 😎</span>
        </p>

        <div class="mt-[60px] flex">
          <NuxtLink to="/" class="
            text-[16px] font-extraBold p-[16px] pb-[14px] w-[170px]
            text-center rounded-[360px] border border-[#00BFFF] hover:shadow-2xl
          ">ورود</NuxtLink>

          <NuxtLink to="/" class="
            text-[16px] font-extraBold p-[16px] pb-[14px] w-[170px]
            text-center rounded-[360px] bg-[#01ABE3] mr-[20px] hover:shadow-2xl
          ">ثبت‌نام</NuxtLink>
        </div>
      </div>

      <LazyNuxtImg src="/img/illustrations/person.svg" alt="Person" class="w-1/2"/>
    </section>
  </div>
</template>