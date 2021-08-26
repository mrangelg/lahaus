<template>
  <div>
    <div
      class="font-semibold text-2xl text-center mt-8 mb-14 md:text-3xl md:my-14"
    >
      Listas de favoritos
    </div>
    <div
      class="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
        justify-center justify-items-center
        xl:mx-40
      "
    >
      <div v-for="favorite of favorites" :key="favorite.id">
        <PictureCard :favorite="favorite" />
        <div class="font-semibold text-lg mt-5 mb-3">
          {{ favorite.attributes.name }}
        </div>
        <div class="font-normal text-sm text-gray-400 mb-14">
          {{
            favorite.attributes.real_estate_ids.length === 1
              ? '1 propiedad guardada'
              : `${favorite.attributes.real_estate_ids.length} propiedades guardadas`
          }}
        </div>
      </div>
      <div class="w-72">
        <div
          class="
            h-48
            rounded-xl
            bg-indigo-200
            shadow-md
            cursor-pointer
            flex
            justify-center
            items-center
          "
        >
          <img src="icons/plus.svg" alt="icon plus" />
        </div>
        <div class="font-medium text-lg text-center mt-5 text-blue-600 mb-14">
          Crear una nueva lista
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: [],
    }
  },

  async created() {
    try {
      const res = await this.$axios.get(
        'https://lh-real-estates-challenge-api.herokuapp.com/real-estates'
      )
      const { data, included } = res.data
      this.favorites = data.map((favorite) => ({
        ...favorite,
        properties: this.mapProperties(
          favorite.attributes.real_estate_ids,
          included
        ),
      }))
    } catch (error) {
      console.error(error)
    }
  },

  methods: {
    mapProperties(ids, included) {
      return ids.map((id) =>
        included.find((include) => parseInt(include.id) === id)
      )
    },
  },
}
</script>
