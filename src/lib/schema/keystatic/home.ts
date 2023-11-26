import { singleton, fields } from "@keystatic/core";

const homeSchema = singleton({
  label: "Home Page",
  path: "/src/content/home/index",
  schema: {
    description: fields.text({
      label: "Site Description",
      multiline: true,
      validation: {
        length: {
          min: 1,
        },
      },
    }),
  },
});

export default homeSchema;
