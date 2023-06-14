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
    hex: "#F0F0F0",
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
    id: "black-40",
    title: "Black 40",
    category: "mono",
    hex: "#919191",
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
    hex: "#323232",
    display: "dark"
  },
  {
    id: "black-90",
    title: "Black 90",
    category: "mono",
    hex: "#1E1E1E",
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
    hex: "#f75757",
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
  {
    id: "red",
    title: "Red",
    category: "brand",
    hex: "#ff1100",
    display: "dark"
  },
  {
    id: "green",
    title: "Green",
    category: "brand",
    hex: "#009105",
    display: "dark"
  },
  {
    id: "blue",
    title: "Blue",
    category: "brand",
    hex: "#022cc2",
    display: "dark"
  }
];

export default colors;
