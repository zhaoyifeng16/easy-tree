# easy-tree
常用的树工具

```shell
$ npm install @zhaoyifeng/easy-tree
```

```javascript
import * as easyTree from '@zhaoyifeng/easy-tree'
// or
import { flat, filterNode } from '@zhaoyifeng/easy-tree'
```

## API

### flat(tree)
扁平化

```javascript
const data = flat(treeData)
```

### findNode(tree, predicate)
查找

```javascript
const data = findNode(treeData, (node) => node.key === '0')
```

### filterNode(tree, predicate)
筛选

```javascript
const data = filterNode(treeData, (node) => node.key === '0')
```

### insertBefore(tree, predicate, object)
向节点前插入数据

```javascript
const data = insertBefore(treeData, (node) => node.key === '0', { title: '0000', key: '0000' })
```

### insertAfter(tree, predicate, object)
向节点后插入数据

```javascript
const data = insertAfter(treeData, (node) => node.key === '0', { title: '0000', key: '0000' })
```

### insertToChild(tree, predicate, isBefore = false)
插入到子节点

```javascript
const data = insertToChild(treeData, (node) => node.key === '1', { title: '0000', key: '0000' }, true)
```

### updateNode(tree, predicate)
修改节点

```javascript
const data = updateNode(treeData, (node) => node.key === '0', (node) => ({ ...node, title: '0000' }))
```

### deleteNode(tree, predicate)
删除节点

```javascript
const data = deleteNode(treeData, (node) => node.key === '1')
```

### replaceNode(tree, func)
替换树节点对象

```javascript
const data = replaceNode(treeData, node => ({
  id: node.id
}))
```

