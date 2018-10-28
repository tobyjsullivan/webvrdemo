import aframe from 'aframe';
import aframe_stereo_component from './lib/aframe-stereo-component';

AFRAME.registerComponent('log', {
  schema: {type: 'string'},

  init: function() {
    const stringToLog = this.data;
    console.log(stringToLog);
  }
});

const ROTATIONS_PER_SECOND = 0.2;
AFRAME.registerComponent('spins', {
  schema: {type: 'boolean'},
  tick: function(time, timeDelta) {
    const rotationAmount = (ROTATIONS_PER_SECOND * 2 * Math.PI) * (timeDelta / 1000.0);
    this.el.object3D.rotation.x += rotationAmount;
    this.el.object3D.rotation.y += rotationAmount;
    // this.el.object3D.rotation.z += rotationAmount;
  }
})

AFRAME.registerComponent('viewer', {
  schema: {type: 'boolean'},
  init: function() {

  }
});


