import { createStore } from 'vuex'

export default createStore({
  state: {
    svgConfig: {
      grid: { dx: 1, dy: 1, show: true },
      edit: { isEditing: false, isPoint: true, index: 0 }
    },
    structure: {
      pointList: [],
      barList: [],
      pointModel: {
        x: 0,
        y: 0,
        rot: false,
        support: 0,
        draw_loads: [[1,0,0], [2,0,0]]
      },
      barModel: {
        point_1: 0, 
        point_2: 1, 
        draw_loads: [[0,0]],
        materials: [1,1,1],
        rot: [false, false]
      }
    }
  },
  getters: {

    barData: (state) => ({ barIndex }) => {
      let point_1 = state.structure.barList[barIndex].point_1,
          point_2 = state.structure.barList[barIndex].point_2,
          DeltaX = state.structure.pointList[point_2].x - state.structure.pointList[point_1].x,
          DeltaY = state.structure.pointList[point_2].y - state.structure.pointList[point_1].y;
      
      return {
        DeltaX: DeltaX,
        DeltaY: DeltaY,
        length: ( DeltaX**2 + DeltaY**2 )**0.5,
        theta: 180 * Math.atan2(DeltaY, DeltaX) / Math.PI
      }
    }

  },
  mutations: {

    addPoint(state) {
      let copiedPoint = { ...state.structure.pointModel };

      state.structure.pointList.push(copiedPoint);

      state.structure.pointModel = {
        x: 0,
        y: 0,
        rot: false,
        support: 0,
        draw_loads: [[1,0,0], [2,0,0]]
      }
    },

    removePoint(state, pointIndex) {
      //update structure pointList
      state.structure.pointList = state.structure.pointList.slice(0, pointIndex).concat(state.structure.pointList.slice(pointIndex + 1));
      //remove bars with the pointIndex
      state.structure.barList = state.structure.barList.filter( function(bar) {
        return bar.point_1 !== pointIndex && bar.point_2 !== pointIndex;
      });
    },

    addBar(state) {
      let copiedBar = {...state.structure.barModel};
      
      state.structure.barList.push(copiedBar);

      state.structure.barModel = {
        point_1: copiedBar.point_2, 
        point_2: copiedBar.point_2 + 1 < state.structure.pointList.length?
        0
        : copiedBar.point_2 + 1, 
        draw_loads: [[0,0]],
        materials: [1,1,1],
        rot: [false, false]
      }
    },

    removeBar(state, barIndex) {
      state.structure.barList.splice(barIndex, 1);
    }

  },
  actions: {
  },
  modules: {
  }
})
