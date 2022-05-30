<template>
  <div
    class="
      my-7
      ml-auto
      mr-auto
      h-auto
      w-2/3
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
