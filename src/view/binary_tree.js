import React, { PropTypes } from 'react';
import TreeNode from './tree_node';
import SegmentTree from '../model/segment_tree';
import PositionTree from '../model/position_tree';

class BinaryTree extends React.Component {
  constructor(props) {
    super(props);
    this.positionTree = new PositionTree(this.props.tree, this.props.nodeDistance, this.props.rowHeight);
    this.tree = [];
    this.count = 0;
    this.build_tree(this.positionTree.root, this.props.tree.root);
  }

  build_tree(posNode, node) {
    if (posNode === null) {
      return;
    }
    this.tree.push(<TreeNode x={posNode.pos.x} y={posNode.pos.y} r={40} key={this.count++} value={node.value}/>);
    this.build_tree(posNode.left, node.left);
    this.build_tree(posNode.right, node.right);
  }


  render() {
    return (
      <svg width={1000} height={1000} viewBox='-100 -100 1000 1000'>
        {this.tree}
      </svg>
    );
  }
}


// BinaryTree.propTypes = {
//   x: PropTypes.number,
//   y: PropTypes.number,
//   r: PropTypes.number,
//   style: PropTypes.string,
// };
//
BinaryTree.defaultProps = {
  tree: new SegmentTree([1,2,3,4,5,6,7]),
  nodeDistance: 100,
  rowHeight: 120,
};

export default BinaryTree;
