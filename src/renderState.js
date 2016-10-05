var renderState = function(config) {
  var state = {
    zooming: false,
    constraintBounds: config.constraintBounds,
    inZoomConstraints: config.inZoomConstraints,
    scrollPosition: 0,
    overviewLeft: config.overviewLeft,
    overviewTop: config.overviewTop
  },
      dispatcher = config.dispatcher;

  function getState() {
    return state;
  }

  function zooming(zooming) {
    if (!arguments.length) {
      return state.zooming;
    } else  {
      state.zooming = zooming;
      return state.zooming;
    }
  }

  function constraintBounds(constraints, animate) {
    if (!arguments.length) {
      return state.constraintBounds;
    } else  {
      state.constraintBounds = constraints;
      dispatcher.emit('constraintBoundsUpdated', animate);
      return state.constraintBounds;
    }
  }

  function currentZoom(zoom) {
    if (!arguments.length) {
      return state.currentZoom;
    } else  {
      state.currentZoom = zoom;
      dispatcher.emit('currentZoomUpdated');
      return state.currentZoom;
    }
  }

  function inZoomConstraints(inBounds) {
    if (!arguments.length) {
      return state.inzoomconstraints;
    } else  {
      state.inZoomConstraints = inBounds;
      return state.inZoomConstraints;
    }
  }

  function scrollPosition(scrollPosition) {
    if (!arguments.length) {
      return state.scrollPosition;
    } else  {
      state.scrollPosition = scrollPosition;
      dispatcher.emit('overviewScrollPositionUpdated');
      return state.scrollPosition;
    }
  }

  return {
    zooming: zooming,
    constraintBounds: constraintBounds,
    inZoomConstraints: inZoomConstraints,
    scrollPosition: scrollPosition,
    overviewLeft: 0,
    overviewTop: 0,
    getState: getState,
    transitionTime: 1000,
    currentZoom: currentZoom
  };
};

module.exports = renderState;
