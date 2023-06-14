export default {
  title: `Block Content`,
  name: `blockContent`,
  type: `array`,
  of: [
    {
      title: `Block`,
      type: `block`,
      styles: [
        { title: `D1`, value: `d1` },
        { title: `H1`, value: `h1` },
        { title: `H2`, value: `h2` },
        { title: `H3`, value: `h3` },
        { title: `B1`, value: `b1` },
        { title: `B2`, value: `b2` },
        { title: `Caption`, value: `caption` },
        { title: `Button`, value: `button-text` },
        { title: `Underline`, value: `underline` }
      ],
      lists: [
        { title: `Bullet`, value: `bullet` },
        { title: `Numbered`, value: `number` }
      ],
      marks: {
        decorators: [
          // { title: `Strong`, value: `strong` },
          // { title: `Emphasis`, value: `em` }
        ],
        annotations: [
          {
            title: `URL`,
            name: `link`,
            type: `object`,
            fields: [
              {
                title: `URL`,
                name: `href`,
                type: `url`,
                validation: (Rule: any) =>
                  Rule.uri({
                    scheme: [`http`, `https`, `mailto`, `tel`]
                  })
              }
            ]
          }
        ]
      }
    }
  ]
};
