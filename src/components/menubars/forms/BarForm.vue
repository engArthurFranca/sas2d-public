<template>
    <div class="bg-gray-500 rounded-bl rounded-br pt-0 mt-0">
        <form>
            <label for="website-admin" class="block mt-0 pt-2 pb-2 text-sm font-medium">Points</label>
            <select></select>
            <select></select>


            <label class="block mb-2"> Rots
              <input type="checkbox" id="rot" name="rot" class="mr-2" v-model="bar.rot[0]">
              <input type="checkbox" id="rot" name="rot" class="mr-2" v-model="bar.rot[1]">
            </label>

            <label  class="block mb-2">
              Load
            </label>
            <select></select>

            <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded m-4"> Add </button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bar: {
        point1: 0,
        point2: 1,
        rot: [false, false],
        draw_loads: []
      }
    }
  },
}
</script>