// Need to update 'cateogry' options in 'colorGrid.ts' to match these
type TColorCategory = `mono` | `digital/ux` | `brand`;

export interface IColorData {
  id: string;
  title: string;
  category: TColorCategory;
  hex: string;
  display: `light` | `dark`;
}

const colors: IColorData[] = [
  // Mono
  {
    id: "white",
    title: "White",
    category: "mono",
    hex: "#FFFFFF",
    display: "light"
  },
  {
    id: "black-10",
    title: "Black 10",
    category: "mono",
    hex: "#F5F5F5",
    display: "light"
  },
  {
    id: "black-20",
    title: "Black 20",
    category: "mono",
    hex: "#dddee2",
    display: "light"
  },
  {
    id: "black-30",
    title: "Black 30",
    category: "mono",
    hex: "#c7c7c7",
    display: "light"
  },
  {
    id: "black-40",
    title: "Black 40",
    category: "mono",
    hex: "#919191",
    display: "light"
  },
  {
    id: "black-50",
    title: "Black 50",
    category: "mono",
    hex: "#787878",
    display: "light"
  },
  {
    id: "black-60",
    title: "Black 60",
    category: "mono",
    hex: "#4F4F4F",
    display: "dark"
  },
  {
    id: "black-70",
    title: "Black 70",
    category: "mono",
    hex: "#4a4a4a",
    display: "dark"
  },
  {
    id: "black-80",
    title: "Black 80",
    category: "mono",
    hex: "#383838",
    display: "dark"
  },
  {
    id: "black-90",
    title: "Black 90",
    category: "mono",
    hex: "#1A1A1A",
    display: "dark"
  },
  {
    id: "black",
    title: "Black",
    category: "mono",
    hex: "#000000",
    display: "dark"
  },
  // Digital/UX
  {
    id: "ux-error",
    title: "UX Error",
    category: "digital/ux",
    hex: "#FF3737",
    display: `dark`
  },
  {
    id: "ux-success",
    title: "UX Success",
    category: "digital/ux",
    hex: "#07cb9c",
    display: `dark`
  },
  // Brand
  // ...
  {
    id: "secondary-red",
    title: "Secondary/Red",
    category: "brand",
    hex: "#FF3737",
    display: `dark`
  },
  {
    id: "secondary-plum",
    title: "Secondary/Plum",
    category: "brand",
    hex: "#75114D",
    display: `dark`
  },
  {
    id: "secondary-brown",
    title: "Secondary/Brown",
    category: "brand",
    hex: "#664A31",
    display: `dark`
  },
  {
    id: "secondary-lime",
    title: "Secondary/Lime",
    category: "brand",
    hex: "#D6FF62",
    display: `dark`
  },
  {
    id: "secondary-fuschia",
    title: "Secondary/Fuschia",
    category: "brand",
    hex: "#FF4AED",
    display: `dark`
  },
  {
    id: "secondary-blue",
    title: "Secondary/Blue",
    category: "brand",
    hex: "#6E62F4",
    display: `dark`
  }
];

export default colors;
