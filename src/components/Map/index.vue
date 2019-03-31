<template>
  <div id="map" class="CampusMap">
    <!-- Raphaël JS Map Here -->
  </div>
</template>

<script>
  import Map from './mapSVG'
  import axios from 'axios'
  import Raphael from 'raphael';

  export default {
   name: 'CampusMap',
   mounted(){
    var fillColor = "#fff";
    var strokeWidth = 0;
    var rsr = Raphael('map', '1000.8', '439.3');
    var obj = Map.GenerateMap(rsr);
    console.log(obj)
    for (let key in obj){
      obj[key].node.style.fill = "#5b5b5b";
      obj[key].mouseover(function(e){
        this.node.style.fill = "#ff0000";
        console.log(key)
      });
      obj[key].click(e=>{
        console.log(obj[key])
        // let time = 't'
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://207.154.253.167:8080/Api/Average?ID=${key.slice(-3)}`,{
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          crossDomain: true
        })
        .then(res => (obj[key].node.style.fill = getColorFromTemp(Math.round(res.data.Value.Value))))
      })
      obj[key].mouseout(function(e){
        // this.node.style.fill = "#FF00FF";
      });
    }

    let toHext = val => {
      let hex = Number(val).toString(16);
      if (hex.length < 2) {
       hex = "0" + hex;
     }
     return hex;
   }

   let getColorFromTemp = temp => {
    let r, b, g = 0;
    if(temp < 50) {
      b = 255;
      r = Math.round(5.1 * temp);
    } else {
      r = 255;
      b = Math.round(510 - 5.10 * temp);
    }
    return '#' + toHext(r) + toHext(g) + toHext(b)
  }

  (function theLoop (i) {
    setTimeout(function () {
      obj["B418"].node.style.fill = getColorFromTemp(i);
      if (--i) {                  // If i > 0, keep going
        theLoop(i);  // Call the loop again
      }
    }, 200);
  })(100);
}
}
</script>
<style rel="stylesheet/scss" lang="scss" >
.CampusMap {
  background-image: url('/static/Map.png');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
