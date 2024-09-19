type FieldMap = {
  id: string;
  parentId: string;
  children: string;
};

export const arr2tree = (
  arr: any[],
  fieldMap: FieldMap = {
    id: "id",
    parentId: "parentId",
    children: "children",
  }
) => {
  const map = new Map();
  const tree = [];
  for (const item of arr) {
    map.set(item[fieldMap.id], item);
  }
  for (const item of arr) {
    const parent = map.get(item[fieldMap.parentId]);
    if (parent) {
      (parent[fieldMap.children] || (parent[fieldMap.children] = [])).push(
        item
      );
    } else {
      tree.push(item);
    }
  }
  return tree;
};
