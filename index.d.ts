// 树节点的基本类型定义
export interface TreeNode {
  [key: string]: any;
  children?: TreeNode[];
}

// 条件函数类型
export type PredicateFunction<T = TreeNode> = (node: T) => boolean;

// 替换函数类型
export type ReplaceFunction<T = TreeNode> = (node: T) => T;

// 更新函数类型
export type UpdateFunction<T = TreeNode> = (node: T) => T;

/**
 * 树筛选
 * @param tree 树形数据
 * @param func 筛选条件函数
 * @returns 筛选后的树形数据
 */
export declare function filterNode<T extends TreeNode>(tree: T[], func: PredicateFunction<T>): T[];

/**
 * 树查找
 * @param tree 树形数据
 * @param func 查找条件函数
 * @returns 匹配的节点数组
 */
export declare function findNode<T extends TreeNode>(tree: T[], func: PredicateFunction<T>): T[];

/**
 * 扁平化
 * @param tree 树形数据
 * @returns 扁平化后的数组
 */
export declare function flat<T extends TreeNode>(tree: T[]): Omit<T, 'children'>[];

/**
 * 向树结构节点前插入数据
 * @param tree 树形数据
 * @param predicate 条件函数
 * @param newData 新数据
 * @returns 插入后的树形数据
 */
export declare function insertBefore<T extends TreeNode>(tree: T[], predicate: PredicateFunction<T>, newData: T | T[]): T[];

/**
 * 向节点后插入
 * @param tree 树形数据
 * @param predicate 条件函数
 * @param newData 新数据
 * @returns 插入后的树形数据
 */
export declare function insertAfter<T extends TreeNode>(tree: T[], predicate: PredicateFunction<T>, newData: T | T[]): T[];

/**
 * 向节点插入子节点
 * @param tree 树形数据
 * @param predicate 条件函数
 * @param newData 新数据
 * @param isBefore 是否插入到前面，默认最后
 * @returns 插入后的树形数据
 */
export declare function insertToChild<T extends TreeNode>(tree: T[], predicate: PredicateFunction<T>, newData: T | T[], isBefore?: boolean): T[];

/**
 * 修改节点
 * @param tree 树形数据
 * @param predicate 条件函数
 * @param newData 新数据函数
 * @returns 修改后的树形数据
 */
export declare function updateNode<T extends TreeNode>(tree: T[], predicate: PredicateFunction<T>, newData: UpdateFunction<T>): T[];

/**
 * 删除节点
 * @param tree 树形数据
 * @param predicate 条件函数
 * @returns 删除后的树形数据
 */
export declare function deleteNode<T extends TreeNode>(tree: T[], predicate: PredicateFunction<T>): T[];

/**
 * 替换树节点对象
 * @param tree 树形数据结构
 * @param func 替换函数，接收节点对象作为参数，返回新的节点对象
 * @returns 返回替换后的新树结构
 */
export declare function replaceNode<T extends TreeNode>(tree: T[], func: ReplaceFunction<T>): T[];