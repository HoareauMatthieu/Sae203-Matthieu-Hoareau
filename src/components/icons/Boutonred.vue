<template>
  <div
    class="
      ml-auto
      mr-auto
      h-auto
      w-full
      rounded-lg
      bg-red-400
      py-3
      text-center
      font-Anton
      text-2xl
      font-bold
      uppercase
      tracking-wide
      text-white
      hover:bg-red-600
      sm:text-4xl
      lg:text-5xl
    "
  >
    {{ bouton }}

    <slot />
  </div>
</template>


<script>
export default {
  props: {
    bouton: {
      type: String,
      required: true,
    },
  },
};
</script>
