import { _filterNode, _flat, _insertHelper } from './helper';

/**
 * 树筛选
 */
export const filterNode = (tree, func) => {
  return _filterNode(tree, func);
}

/** 树查找 */
export const findNode = (tree, func) => {
  return _flat(tree)
    .filter(func);
}

/** 扁平化 */
export const flat = (tree) => {
  return _flat(tree);
}

/**
 * 向树结构节点前插入数据
 * @param tree
 * @param {function} predicate 条件
 * @param {T | T[]} newData 新数据
 * @return {[]}
 */
export const insertBefore = (tree, predicate, newData) => {
  return _insertHelper(tree, predicate, newData, 'before');
}

/**
 * 向节点后插入
 * @param tree
 * @param {function} predicate 条件
 * @param {T | T[]} newData 新数据
 * @return {[]}
 */
export const insertAfter = (tree, predicate, newData) => {
  return _insertHelper(tree, predicate, newData, 'after');
}

/**
 * 向节点插入子节点
 * @param tree
 * @param {function} predicate 条件
 * @param {T} newData 新数据
 * @return {[]}
 */
export const insertToChild = (tree, predicate, newData) => {
  const newDataArray = Array.isArray(newData) ? newData : [ newData ];
  const insertRecursive = node => {
    if (predicate(node)) {
      return {
        ...node,
        children: [ ...node.children || [], ...newDataArray ]
      };
    }

    if (node.children) {
      return {
        ...node,
        children: node.children.map(insertRecursive)
      };
    }

    return node;
  };

  return tree.map(insertRecursive);
}

/**
 * 修改节点
 * @param tree
 * @param {function} predicate 条件
 * @param {function} newData 新数据，函数 (node) => {}, 返回新数据
 * @return {[]}
 */
export const updateNode = (tree, predicate, newData) => {
  const insertRecursive = node => {
    if (predicate(node)) {
      return { ...newData(node) };
    }

    if (node.children) {
      return {
        ...node,
        children: node.children.map(insertRecursive)
      };
    }

    return node;
  };

  return tree.map(insertRecursive);
}

/** 删除节点 */
export const deleteNode = (tree, predicate) => {
  const newTreeData = [];

  tree.forEach(node => {
    if (predicate(node)) {
      return;
    }

    const newNode = { ...node };

    if (node.children) {
      newNode.children = deleteNode(node.children, predicate);
    }

    newTreeData.push(newNode);
  });

  return newTreeData;
}

/**
 * 替换树节点对象
 * @param tree
 * @param func
 * @return {*}
 */
export const replaceNode = (tree, func) => {
  return tree.map(node => {
    return {
      ...func(node),
      children: this.replaceNode(node.children || [], func)
    }
  })
}
