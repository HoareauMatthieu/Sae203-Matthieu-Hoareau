<template>
  <div class="p-8 pt-36">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <h1 class="titreh1 p-0">Concert</h1>
        <h1 class="font-Anton text-3xl text-red-400 lg:text-4xl">23 Mars</h1>
      </div>
      <div class="flex flex-col">
        <h1 class="font-Anton text-2xl sm:text-3xl lg:text-4xl">Scène 2+3</h1>
        <h1 class="text-right font-Anton text-2xl lg:text-4xl">14h</h1>
      </div>
    </div>

    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
      <div class="rounded-lg border-2 border-white p-3" v-for="[date, listeDate] in artistesParDate" :key="date">
        <div class="grid grid-cols-3 gap-2">
          <img class="w-full rounded-lg" v-for="artiste in listeDate" :key="artiste.id" :src="artiste.photo" :alt="artiste.nom" />
        </div>
      </div>
    </div>

    <div class="my-11 grid grid-cols-4 gap-2 text-center">
      <img class="rounded-lg" src="/image/theweeknd.jpg" alt="The Weeknd" />
      <img class="rounded-lg" src="/image/laylow2.jpg" alt="laylow" />
      <img class="rounded-lg" src="/image/biscuit.jpg" alt="Petit Biscuit" />
      <img class="rounded-lg" src="/image/dj.jpg" alt="Chainsmok" />

      <img class="rounded-lg" src="/image/freeze.jpg" alt="Freeze Corleone" />
      <img class="rounded-lg" src="/image/leto.jpg" alt="leto" />
      <img class="rounded-lg" src="/image/luj.jpg" alt="lujipeka" />
      <img class="rounded-lg" src="/image/naps.jpg" alt="naps" />
      <img class="rounded-lg" src="/image/postmalone.jpg" alt="Post Malone" />
      <img class="rounded-lg" src="/image/shay.jpg" alt="Shay" />
      <img class="rounded-lg" src="/image/snake.jpg" alt="Dj Snake" />

      <img class="rounded-lg" src="/image/zola.jpg" alt="Zola" />
    </div>

    <h2 class="pb-5 text-center font-Anton text-2xl sm:text-3xl lg:text-6xl">À L’AFFICHE DU CONCERT</h2>
    <p class="px-12 text-center text-sm lg:px-64 lg:text-base">
      The Weeknd - DJ Snake - Leto - Naps - Jul - Lujipeka - La Fève - Freeze Corlorleone - Zola - Post Malone - Angèle - Shay + Quelques
      surprises...
    </p>
  </div>
</template>

