import { Node, Pair } from './node';

class PositionTreeNode extends Node {
  constructor(pos=null) {
    super();
    this.pos = pos;
  }
}

class PositionTree {
  constructor(tree, nodeDistance, rowHeight) {
    this.tree = tree;
    this.nodeDistance = nodeDistance;
    this.rowHeight = rowHeight;
    this.count = 0;
    this.root = null;
    this.buildTree();
    this.fullTree = null;
  }

  maxDepth(node) {
    if (node === null) {
      return 0;
    }
    const left = this.maxDepth(node.left);
    const right = this.maxDepth(node.right);
    return Math.max(left, right) + 1;
  }

  buildTree() {
    this.depth = this.maxDepth(this.tree.root);
    if (this.depth > 0) {
      this.count = 0;
      this.root = this.buildFullTree(1);
    }
    this.removeExtraNode(this.tree.root, this.root);
  }

  buildFullTree(d) {
    let pos = new Pair(0, (d - 1) * this.rowHeight);
    const node = new PositionTreeNode(pos);
    if (d == this.depth) {
      pos.x = this.count * this.nodeDistance;
      this.count++;
    } else {
      d++;
      const left = this.buildFullTree(d);
      const right = this.buildFullTree(d);
      node.left = left;
      node.right = right;
      node.pos.x = (left.pos.x + right.pos.x) / 2;
    }
    return node;
  }

  removeExtraNode(a, b) {
    if (a === null) {
      return 0;
    }
    if (this.removeExtraNode(a.left, b.left) === 0) {
      b.left = null;
    }
    if (this.removeExtraNode(a.right, b.right) === 0) {
      b.right = null;
    }
  }
}

export default PositionTree;
