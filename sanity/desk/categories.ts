import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// prettier-ignore
const categories = (S: any, context: any) => orderableDocumentListDeskItem({
	type: `category`,
	title: `Categories`,
	icon: () => `🗂` as any,
	S,
	context
})

export default categories;
