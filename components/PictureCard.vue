<template>
  <div>
    <!-- One image -->
    <div
      v-if="favorite.attributes.real_estate_ids.length === 1"
      class="w-72 h-48 rounded-xl bg-indigo-200 shadow-md"
    >
      <img
        class="h-full rounded-xl cursor-pointer object-cover"
        :src="favorite.properties[0].attributes.gallery_urls[0]"
        :alt="favorite.properties[0].attributes.name"
      />
    </div>
    <!-- end one image -->

    <!-- Two images -->
    <div
      v-if="favorite.attributes.real_estate_ids.length === 2"
      class="w-72 h-48 rounded-xl bg-indigo-200 shadow-md relative"
    >
      <div v-for="(property, index) in favorite.properties" :key="property.id">
        <img
          class="
            h-full
            rounded-xl
            cursor-pointer
            absolute
            inset-y-0
            shadow-md
            object-cover
          "
          :class="
            index
              ? 'w-3/5 right-0 z-0'
              : 'w-1/2 left-0 z-10 border-r border-white'
          "
          :src="property.attributes.gallery_urls[0]"
          :alt="property.attributes.name"
        />
      </div>
    </div>
    <!-- End two image -->

    <!-- More than two images -->
    <div
      v-if="favorite.attributes.real_estate_ids.length > 2"
      class="w-72 h-48 rounded-xl bg-indigo-200 shadow-md relative"
    >
      <div
        v-for="(property, index) in favorite.properties.slice(0, 3)"
        :key="property.id"
      >
        <img
          class="
            h-full
            rounded-xl
            cursor-pointer
            absolute
            inset-y-0
            shadow-md
            object-cover object-center
          "
          :class="getClassName(index)"
          :src="property.attributes.gallery_urls[0]"
          :alt="property.attributes.name"
        />
        <div
          class="
            absolute
            inset-y-0
            right-0
            w-1/3
            rounded-xl
            bg-gray-900 bg-opacity-50
          "
        ></div>
        <span
          class="absolute top-1/2 right-0 mr-5 font-semibold text-white text-lg"
        >
          +{{ favorite.attributes.real_estate_ids.length - 2 }}
        </span>
      </div>
    </div>
    <!-- End more than two image -->
  </div>
</template>
<script>
export default {
  name: 'PictureCard',
  props: ['favorite'],
  methods: {
    getClassName(index) {
      const classes = [
        'w-1/2 left-0 z-20 border-r border-white',
        'right-1/4 z-10 w-1/3 border-r border-white',
        'right-0 z-0 w-1/3',
      ]
      return classes[index]
    },
  },
}
</script>
