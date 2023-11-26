import { fields, collection } from "@keystatic/core";

const footprintSchema = collection({
  label: "Footprints",
  slugField: "title",
  path: "src/content/footprints/*",
  schema: {
    title: fields.slug({
      name: {
        label: "Title",
        validation: {
          length: {
            min: 1,
            max: 160,
          },
        },
      },
    }),
    draft: fields.checkbox({
      label: "Hide on Blog",
      description: "Set this footprints to be hidden on blog",
    }),
    description: fields.text({
      label: "Description",
      description: "The description of the footprints",
      multiline: true,
      validation: {
        length: {
          min: 1,
          max: 160,
        },
      },
    }),
    thumbnail: fields.image({
      label: "Thumbnail",
      description: "The thumbnail of the footprints",
      // This will output the images in the "public" directory
      directory: "public/images/thumbnails/footprints",
      publicPath: "/images/thumbnails/footprints/",
      validation: {
        isRequired: true,
      },
    }),
    createdAt: fields.datetime({
      label: "Created Date",
      description: "The date and time of footprint uploaded",
      validation: {
        isRequired: true,
      },
    }),
  },
});

export default footprintSchema;
