<template>
  <div>
    <!-- Default image -->
    <div
      v-if="favorite.attributes.real_estate_ids.length === 0"
      class="w-card h-card rounded-xl shadow-md"
    >
      <img src="/images/default-card.PNG" alt="Default image" />
    </div>
    <!-- End default image -->

    <!-- One image -->
    <div
      v-else-if="favorite.attributes.real_estate_ids.length === 1"
      class="w-card h-card rounded-xl shadow-md"
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
      v-else-if="favorite.attributes.real_estate_ids.length === 2"
      class="w-card h-card rounded-xl shadow-md relative"
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
              : 'w-minicard left-0 z-10 border-r border-white'
          "
          :src="property.attributes.gallery_urls[0]"
          :alt="property.attributes.name"
        />
      </div>
    </div>
    <!-- End two images -->

    <!-- More than two images -->
    <div
      v-else-if="favorite.attributes.real_estate_ids.length > 2"
      class="w-card h-card rounded-xl shadow-md relative"
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
            bg-green-jungle bg-opacity-70
            cursor-pointer
          "
        ></div>
        <span
          class="
            absolute
            top-1/2
            right-0
            mr-5
            font-semibold
            text-white text-lg
            font-silka
          "
        >
          +{{ favorite.attributes.real_estate_ids.length - 2 }}
        </span>
      </div>
    </div>
    <!-- End more than two images -->
  </div>
</template>
<script>
export default {
  name: 'PictureCard',
  props: { favorite: Object },
  methods: {
    getClassName(index) {
      const classes = [
        'w-minicard left-0 z-20 border-r border-white',
        'right-1/5 z-10 w-1/3 border-r border-white',
        'right-0 z-0 w-1/3',
      ]
      return classes[index]
    },
  },
}
</script>
