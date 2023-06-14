export interface IVideoAtf {
  url: string;
}

export default {
  name: `videoAtf`,
  title: `Video ATF`,
  type: `object`,
  icon: () => `📺`,
  fields: [
    {
      title: `Video URL`,
      name: `url`,
      description: `Vimeo playback URL, e.g. "https://player.vimeo.com/progressive_redirect/playback/8211..."			`,
      type: `url`,
      validation: (Rule: any) => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Video ATF`
      };
    }
  }
};
