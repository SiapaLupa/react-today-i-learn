
const key: string = import.meta.env.VITE_STORAGE_KEY;

export { addItem, getItem };

async function addItem(context: {
  request: Record<string, any>;
  params: Record<string, any>;
}) {
  const { request } = context;
  const formData = await request.formData();
  const { title, description } = Object.fromEntries(formData);
  const day: string = new Intl.DateTimeFormat(undefined, {dateStyle: "full"}).format()
  const storage = localStorage.getItem(key);
  const items: Record<string, string>[] = !storage ? [] : JSON.parse(storage);
  items.push({ title, description, day });
  localStorage.setItem(key, JSON.stringify(items));
  return null;
}
function getItem() {
  const storage = localStorage.getItem(key);
  const items: Array<JSON> = !storage ? [] : JSON.parse(storage);
  return { items };
}
