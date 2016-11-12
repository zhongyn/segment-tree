import { Node, Pair } from './node';

class SegmentTreeNode extends Node {
  constructor(range=null, value=null) {
    super();
    this.range = range;
    this.value = value;
  }
}

class SegmentTree {
  constructor(data) {
    this.data = data;
    this.build = this.build.bind(this);
    this.root = this.build(0, this.data.length - 1);
  }

  build(start, end) {
    const range = new Pair(start, end);
    const node = new SegmentTreeNode(range);
    if (start === end) {
      node.value = this.data[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      const left = this.build(start, mid);
      const right = this.build(mid+1, end);
      node.value = left.value + right.value;
      node.left = left;
      node.right = right;
    }
    return node;
  }
}

export default SegmentTree;
