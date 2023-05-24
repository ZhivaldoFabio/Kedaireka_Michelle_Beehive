<template>
    <div id="mapContainer"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


export default {
    name: "BaseMap",
    data() {
        return {
            accessToken: "pk.eyJ1Ijoic2ltZm9ueSIsImEiOiJjbGEwYjcydGUwNnY2M25vOHJyaDlxMm5hIn0.WI8ZTQ6_w9s98YoWElGfiw",
        };
    },
    components: {
        // Mapboxmarker
    },

    mounted() {
   
        mapboxgl.accessToken = this.accessToken;

        var map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/simfony/cla0bd7l8000916nyjmhazxhu",
            center: [110.69480464649932, -7.610613442012233],
            zoom: 5,
            // bearing: 360.0,
        });
        map.addControl(new mapboxgl.NavigationControl(), "top-right");
        map.addControl(new MapboxGeocoder({accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl}), "top-left");
        map.on('style.load', () => {
            map.setFog({});
        });
        
        
        map.on('style-load',()=> {
            map.setFog({});
        });
        map.on('load', () => {
            map.addSource('sample', {
                type: 'geojson',
                data: "https://6rz3hcvvs3mghlke4frpotnrcm0jciwr.lambda-url.us-east-1.on.aws/"
                
            });
            map.addLayer({
                'id': 'sample-layer',
                'type': 'circle',
                'source': 'sample',
                'paint': {
                    'circle-radius': 4,
                    'circle-stroke-width': 2,
                    'circle-color': '#134280',
                    'circle-stroke-color': 'white'
                }
            });
            map.on('click', 'sample-layer', (e) => {
                const geometry = e.features[0].geometry;
                const properties = e.features[0].properties;
                if (geometry.type === 'Point') {
                    const coordinates = geometry.coordinates.slice();
                    const kode = properties.kodeSample;
                    const name = properties.namaLoc;
                    const detail = properties.detailLoc;
                    const como = properties.jenisKomoditas;
                    const tanggal = properties.tanggalSampling
                    const tanaman = properties.karbonKomoditas;
                    const tanah = properties.karbonLahan;
                    // const hst1 = properties.hst1;
                    // const hst2 = properties.hst2;
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }
                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(
                            "<table>"+
                                "<tr>"+
                                "<td>Kode Sampel </td>"+
                                "<td> : " + kode +"</td>"+
                                "</tr>"+
                                "<tr>"+
                                "<td>Nama Lahan </td>"+
                                "<td> : " +  name +"</td>"+
                                "</tr>"+
                                "<tr>"+
                                "<td>Nama Gapoktan </td>"+
                                "<td> : " + detail +"</td>"+
                                "</tr>"+
                                "<tr>"+
                                "<td>Komoditas </td>"+
                                "<td> : " + como +"</td>"+
                                "</tr>"+
                                "<tr>"+
                                "<td>Koordinat </td>"+
                                "<td> : " + coordinates +"</td>"+
                                "</tr>"+
                                "<tr>"+
                                "<td>Tanggal Sampling </td>"+
                                "<td> : " + tanggal +"</td>"+
                                "</tr>"+
                            "</table>" +

                                "<table class = graph>" +
                                "<caption>"+"Visualisasi Nilai Karbon Terkini (Gram)"+"</caption>"+"</ul>"+
                                "<thead>"+
                                "<tr>"+
                                    "<th scope=col>"+"Periode"+"</th>"+
                                    "<th scope=col>"+"Nilai Karbon"+"</th>"+
                                "</tr>"+
                            "</thead>"+"<tbody>"+
                                "<tr class=tanaman style=height:58%>"+
                                    "<th scope=row>"+"Karbon<br>Tanaman"+"</th>"+
                                    "<td id=tanaman>"+"<span>"+tanaman+"</span>"+"</td>"+
                                "</tr>"+
                                "<tr class=tanah style=height:46%>"+
                                    "<th scope=row>"+"Karbon<br>Tanah"+"</th>"+
                                    "<td id=tanah>"+"<span>"+tanah+"</span>"+"</td>"+
                                "</tr>"+
                                
                            "</tbody>"+
                        "</table>"
                        )
                        .addTo(map);
                        document.getElementsByClassName("tanaman").style.height = tanaman + "%";
                        document.getElementsByClassName("tanah").style.height = tanah + "%";
                }
                map.on('mouseenter', 'sample-layer', () => {
                    map.getCanvas().style.cursor = 'pointer';
                });

                // Change it back to a pointer when it leaves.
                map.on('mouseleave', 'sample-layer', () => {
                    map.getCanvas().style.cursor = '';
                });
            });

        })

    },
};
</script>

<style lang="scss">
#mapContainer {
    width: 100%;
    height: 100%;
}

.mapboxgl-popup-content{
    width: 160%;
    height: 140%;
}
.mapboxgl-popup-content-wrapper {
    padding: 0px;
}
.graph {
	margin-bottom:1em;
    font:xx-small arial,helvetica,sans-serif;
}

.graph caption {
	font:bold small arial,helvetica,sans-serif;
    padding-top: 1em;
	padding-bottom:1em;
}

.graph tbody th {
	text-align:right;
}

@supports (display:grid) {

	@media (min-width:32em) {

		.graph {
			display:block;
            width:200px;
            height:200px;
		}

		.graph caption {
			display:block;
		}

		.graph thead {
			display:none;
		}

		.graph tbody {
			position:relative;
			display:grid;
			grid-template-columns:repeat(auto-fit, minmax(2em, 1fr));
			column-gap:7.5%;
			align-items:end;
			height:50%;
			margin:3em 0 1em 2.8em;
			padding:0 1em;
			border-bottom:2px solid rgba(0,0,0,0.5);
			background:repeating-linear-gradient(
				180deg,
				rgba(170,170,170,0.7) 0,
				rgba(170,170,170,0.7) 1px,
				transparent 1px,
				transparent 20%
			);
		}

		.graph tbody:before,
		.graph tbody:after {
			position:absolute;
			left:-3.2em;
			width:2.8em;
			text-align:right;
			font:bold 80%/120% arial,helvetica,sans-serif;
		}

		.graph tr {
			position:relative;
			display:block;
		}

		.graph tr:hover {
			z-index:999;
		}

		.graph th,
		.graph td {
			display:block;
			text-align:center;
		}

		.graph tbody th {
			position:absolute;
			top:-3em;
			left:0;
			width:100%;
			font-weight:normal;
			text-align:center;
            white-space:nowrap;
			text-indent:0;
            font-size: 130%;
		}

		.graph tbody th:after {
			content:"";
		}

		.graph td {
			width:100%;
			height:100%;
			border-radius:0.5em 0.5em 0 0;
			transition:background 0.5s;
		}

        #tanaman{
            background:#5072A7;
        }

        #tanah{
            background:#002D62;
        }

		.graph td span {
			overflow:hidden;
			position:absolute;
			left:50%;
			top:50%;
			width:0;
			padding:0.5em 0;
			margin:-1em 0 0;
			font:xx-large 85%/120% arial,helvetica,sans-serif;
/* 			background:white; */
/* 			box-shadow:0 0 0.25em rgba(0,0,0,0.6); */
			font-weight:bold;
			opacity:0;
			transition:opacity 0.5s;
            color:white;
		}

		.toggleGraph:checked + table td span,
		.graph tr td span {
			width:4em;
			margin-left:-2em; /* 1/2 the declared width */
			opacity:1;
		}



    


	} /* min-width:32em */

} /* grid only */
</style>