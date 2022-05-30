<template>
  <div
    class="
      text
      ml-auto
      mr-auto
      h-auto
      w-full
      rounded-lg
      bg-red-400
      py-3
      text-center
      font-Anton
      text-3xl
      font-bold
      uppercase
      tracking-wide
      text-white
      sm:text-4xl
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
