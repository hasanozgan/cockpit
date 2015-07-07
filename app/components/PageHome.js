var React = require('react');
var Document = require('./Document');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var ReactGridLayout = require('react-grid-layout');

var PageHome = React.createClass({

  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      isDraggable: true,
      isResizable: true
      };
  },



  onLayoutChange: function(layout) {
    //console.log(layout);
    //this.props.onLayoutChange(layout);
  },

  onResize: function(layout, oldLayoutItem, layoutItem, placeholder, e) {
    // `oldLayoutItem` contains the state of the item before the resize.
    // You can modify `layoutItem` to enforce constraints.

    console.log(layoutItem);

    if (layoutItem.h < 3 && layoutItem.w > 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }

    if (layoutItem.h >= 3 && layoutItem.w < 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }
  },



  render: function () {
    return (
      <div>
      <ul className="nav nav-tabs">
  <li role="presentation" className="active"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">Profile</a></li>
  <li role="presentation"><a href="#">Messages</a></li>
</ul>
      <ReactGridLayout onResize={this.onResize}>

        <div key={1} className="item v2" _grid={{x: 0, y: 0, w: 1, h: 2}}>
          1
          <span className="text">11111</span>

        </div>
        <div key={2}  className="item v4" _grid={{x: 1, y: 0, w: 1, h: 2}}>2</div>
        <div key={3}  className="item v3" _grid={{x: 2, y: 0, w: 4, h: 2}}>3</div>
        <div key={4} className="item" _grid={{x: 3, y: 0, w: 1, h: 5}}>4</div>
        <div key={5} className="item v5" _grid={{x: 4, y: 0, w: 1, h: 2}}>5</div>
      </ReactGridLayout>
      </div>
    )
  }
});

module.exports = PageHome;
