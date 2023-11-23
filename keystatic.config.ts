// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/content/posts/_images",
            publicPath: "/content/posts/_images/",
            schema: {
              title: fields.text({
                label: "Caption",
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
          tables: true,
        }),
        draft: fields.checkbox({
          label: "Hide on Blog",
          description: "Set this post to be hidden on blog",
        }),
        place: fields.text({
          label: "Place",
          description: "The place where the post was created",
        }),
        createdAt: fields.datetime({
          label: "Created Date",
          description: "The date and time of post creation",
        }),
        updatedAt: fields.datetime({
          label: "Updated Date",
          description: "The date and time of post been updated",
        }),
      },
    }),
  },
});
