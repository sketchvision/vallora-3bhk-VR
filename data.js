var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.02220833090708041,
        "pitch": -0.11435218965230476,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.18690072300202054,
          "pitch": 0.0706344600333857,
          "rotation": 10.995574287564278,
          "target": "1-living-n-dinning-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-n-dinning-",
      "name": "LIVING N DINNING ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6654988061565774,
          "pitch": 0.12329394941502869,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        },
        {
          "yaw": 2.3128352193311414,
          "pitch": 0.09176514213244857,
          "rotation": 4.71238898038469,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.9237681108286244,
          "pitch": 0.08448399610421475,
          "rotation": 0,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5341660716117076,
          "pitch": 0.011971744471210854,
          "rotation": 1.5707963267948966,
          "target": "1-living-n-dinning-"
        },
        {
          "yaw": 2.8183596187555846,
          "pitch": -0.08159000054708443,
          "rotation": 0,
          "target": "3-common-washroom"
        },
        {
          "yaw": 2.5737042764254614,
          "pitch": -0.02106539678387165,
          "rotation": 4.71238898038469,
          "target": "4-bedroom-01"
        },
        {
          "yaw": 2.4308975395140138,
          "pitch": -0.005945283451554317,
          "rotation": 4.71238898038469,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-common-washroom",
      "name": "COMMON WASHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0578507421831977,
          "pitch": -0.029591690819973593,
          "rotation": 4.71238898038469,
          "target": "2-kitchen"
        },
        {
          "yaw": -2.962635965473213,
          "pitch": 0.05509055306639077,
          "rotation": 7.853981633974483,
          "target": "5-passage"
        },
        {
          "yaw": -2.8510276108972814,
          "pitch": 0.08063400290209977,
          "rotation": 1.5707963267948966,
          "target": "4-bedroom-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-01",
      "name": "BEDROOM 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1206061602215343,
          "pitch": -0.024853361095626525,
          "rotation": 4.71238898038469,
          "target": "2-kitchen"
        },
        {
          "yaw": -2.110171735902945,
          "pitch": 0.2171952086121749,
          "rotation": 1.5707963267948966,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-passage",
      "name": "PASSAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0100771847174084,
          "pitch": 0.045023989647239304,
          "rotation": 3.141592653589793,
          "target": "1-living-n-dinning-"
        },
        {
          "yaw": -2.300147597355302,
          "pitch": 0.2127983090206591,
          "rotation": 1.5707963267948966,
          "target": "2-kitchen"
        },
        {
          "yaw": 1.8287775762967602,
          "pitch": 0.00018473041939159884,
          "rotation": 3.141592653589793,
          "target": "3-common-washroom"
        },
        {
          "yaw": 1.5589926578610571,
          "pitch": 0.12121549604050408,
          "rotation": 4.71238898038469,
          "target": "4-bedroom-01"
        },
        {
          "yaw": 0.15131790742010054,
          "pitch": 0.05019801894413334,
          "rotation": 1.5707963267948966,
          "target": "6-bedroom02"
        },
        {
          "yaw": -0.1199488513781457,
          "pitch": 0.04842802001467916,
          "rotation": 4.71238898038469,
          "target": "8-master-bedroom-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom02",
      "name": "BEDROOM02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0171409580869764,
          "pitch": -0.04847531726953669,
          "rotation": 4.71238898038469,
          "target": "7-bedroom02-washroom"
        },
        {
          "yaw": -1.7748947919099667,
          "pitch": 0.01318309216773983,
          "rotation": 1.5707963267948966,
          "target": "8-master-bedroom-"
        },
        {
          "yaw": -1.9795883180490073,
          "pitch": 0.07170463486754741,
          "rotation": 4.71238898038469,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom02-washroom",
      "name": "BEDROOM02 WASHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.208471315892302,
          "pitch": 0.060424876910188274,
          "rotation": 4.71238898038469,
          "target": "6-bedroom02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-master-bedroom-",
      "name": "MASTER BEDROOM ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6106864077056162,
          "pitch": -0.05271979424457207,
          "rotation": 1.5707963267948966,
          "target": "5-passage"
        },
        {
          "yaw": 0.8038726027403555,
          "pitch": 0.004624169076370421,
          "rotation": 1.5707963267948966,
          "target": "9-master-bedroom-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-bedroom-washroom",
      "name": "MASTER BEDROOM WASHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.042166069132415274,
          "pitch": 0.046557020339522026,
          "rotation": 4.71238898038469,
          "target": "8-master-bedroom-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "VALLORA 3BHK VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
