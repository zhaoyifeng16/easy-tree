/**
 * 扁平化
 * @param tree
 * @return {*|*[]}
 * @private
 */
const _flat = (tree) => {
  if (!tree && !Array.isArray(tree)) {
    return [];
  }
  return tree.reduce((result, item) => {
    const {
      children,
      ...rest
    } = item;
    return result.concat(
      rest,
      Array.isArray(children) ? this._flat(children) : []
    );
  }, []);
}

/**
 * 筛选
 * @param tree
 * @param func
 * @return {*}
 * @private
 */
const _filterNode = (tree, func) => {
  return tree.map(node => ({ ...node }))
    .filter(node => {
      if (node.children && node.children.length) {
        node.children = this.filterNode(node.children, func);
      }
      return func(node) || node.children && node.children.length;
    });
}

/**
 * 插入
 * @param tree
 * @param predicate
 * @param newData
 * @param position
 * @return {*|*[]}
 * @private
 */
const _insertHelper = (tree, predicate, newData, position) => {
  const newDataArray = Array.isArray(newData) ? newData : [ newData ];
  const insertRecursive = node => {
    if (node.children) {
      const index = node.children.findIndex(predicate);
      if (index !== -1) {
        const insertIndex = position === 'before' ? index : index + 1;
        return {
          ...node,
          children: [
            ...node.children.slice(0, insertIndex),
            ...newDataArray,
            ...node.children.slice(insertIndex)
          ]
        };
      }

      return {
        ...node,
        children: node.children.map(insertRecursive)
      };
    }

    return node;
  };

  // 在第一级进行插入操作
  const index = tree.findIndex(predicate);
  if (index !== -1) {
    const insertIndex = position === 'before' ? index : index + 1;
    return [
      ...tree.slice(0, insertIndex),
      ...newDataArray,
      ...tree.slice(insertIndex)
    ];
  }

  return tree.map(insertRecursive);
}

export {
  _flat,
  _filterNode,
  _insertHelper
}
