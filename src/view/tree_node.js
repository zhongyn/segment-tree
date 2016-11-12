import React, { PropTypes } from 'react';

const TreeNode = props => (
  <g>
    <circle
      cx={props.x}
      cy={props.y}
      r={props.r}
      className={props.circleStyle}
    />
    <text
      x={props.x}
      y={props.y + props.r/5}
      fontSize={props.r/2}
      textAnchor='middle'
      className={props.textStyle}
    >
      {props.value}
    </text>
  </g>
);

TreeNode.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  r: PropTypes.number,
  value: PropTypes.number,
  circleStyle: PropTypes.string,
  textStyle: PropTypes.string,
};

TreeNode.defaultProps ={
  x: 0,
  y: 0,
  r: 50,
  value: 1982,
  circleStyle: 'node',
  textStyle: 'text',
};

export default TreeNode;
