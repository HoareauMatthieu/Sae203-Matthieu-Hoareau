<template>
  <div
    class="
      my-3
      ml-auto
      mr-auto
      h-auto
      w-full
      rounded-lg
      border-2 border-white
      bg-transparent
      p-3
      text-center
      font-Anton
      text-2xl
      font-bold
      uppercase
      tracking-wide
      text-white
      hover:border-0 hover:bg-red-400
      sm:text-4xl
      lg:text-5xl
    "
  >
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
    boutonpurple: {
      type: String,
      required: true,
    },
    boutonred: {
      type: String,
      required: true,
    },
  },
};
</script>
