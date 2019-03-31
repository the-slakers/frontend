<template>
  <div class="main">

    <div id="map" class="CampusMap">
      <!-- Raphaël JS Map Here -->
    </div>

    <div class="card-panel">
      <div class="card-panel-text">Building</div>
      <h1>{{ currentBuilding }}</h1>
    </div>

    <div class="card-panel">
      <div class="card-panel-text">Temperature</div>
      <h1>{{ temerature }}</h1>
    </div>
  </div>
</template>

<script>
  import Map from './mapSVG'
  import axios from 'axios'
  import Raphael from 'raphael';

  export default {
   name: 'CampusMap',
   mounted(){
    var _t = this;
    var fillColor = "#fff";
    var strokeWidth = 0;
    var rsr = Raphael('map', '1000.8', '439.3');
    var obj = Map.GenerateMap(rsr);
    console.log(obj)
    for (let key in obj){
      obj[key].node.style.fill = "#5b5b5b";
      obj[key].mouseover(function(e){
        // this.node.style.fill = "#ff0000";
        console.log(key)
        console.log(_t.currentBuilding)
        _t.currentBuilding = key.toString()
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
        .then(res => {
          let temp = res.data.Value.Value
          obj[key].node.style.fill = getColorFromTemp(Math.round(temp))
          _t.temerature = Math.round(temp * 100) / 100 + " c"

        })
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
},
data() {
  return {
    currentBuilding: 'BuildingID',
    temerature: ''
  }
}
}
</script>
<style rel="stylesheet/scss" lang="scss" >
.CampusMap {
  background-image: url('/static/Map.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
       background: #40c9c6;
     }
     .icon-message {
      background: #36a3f7;
    }
    .icon-money {
      background: #f4516c;
    }
    .icon-shopping {
      background: #34bfa3
    }
  }
  .icon-people {
    color: #40c9c6;
  }
  .icon-message {
    color: #36a3f7;
  }
  .icon-money {
    color: #f4516c;
  }
  .icon-shopping {
    color: #34bfa3
  }
  .card-panel-icon-wrapper {
    float: left;
    margin: 14px 0 0 14px;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }
  .card-panel-icon {
    float: left;
    font-size: 48px;
  }
  .card-panel-description {
    float: right;
    font-weight: bold;
    margin: 26px;
    margin-left: 0px;
    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }
    .card-panel-num {
      font-size: 20px;
    }
  }
}
}
</style>
