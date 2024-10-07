var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Malang_1 = new ol.format.GeoJSON();
var features_Malang_1 = format_Malang_1.readFeatures(json_Malang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malang_1.addFeatures(features_Malang_1);
var lyr_Malang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malang_1, 
                style: style_Malang_1,
                popuplayertitle: "Malang",
                interactive: false,
                title: '<img src="styles/legend/Malang_1.png" /> Malang'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: "Jalan",
                interactive: false,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Batas_Kecamatan_3 = new ol.format.GeoJSON();
var features_Batas_Kecamatan_3 = format_Batas_Kecamatan_3.readFeatures(json_Batas_Kecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan_3.addFeatures(features_Batas_Kecamatan_3);
var lyr_Batas_Kecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kecamatan_3, 
                style: style_Batas_Kecamatan_3,
                popuplayertitle: "Batas_Kecamatan",
                interactive: false,
                title: '<img src="styles/legend/Batas_Kecamatan_3.png" /> Batas_Kecamatan'
            });
var format_Data_Persebaran_Penginapan_Fixx_4 = new ol.format.GeoJSON();
var features_Data_Persebaran_Penginapan_Fixx_4 = format_Data_Persebaran_Penginapan_Fixx_4.readFeatures(json_Data_Persebaran_Penginapan_Fixx_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Persebaran_Penginapan_Fixx_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Persebaran_Penginapan_Fixx_4.addFeatures(features_Data_Persebaran_Penginapan_Fixx_4);
var lyr_Data_Persebaran_Penginapan_Fixx_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Persebaran_Penginapan_Fixx_4, 
                style: style_Data_Persebaran_Penginapan_Fixx_4,
                popuplayertitle: "Data_Persebaran_Penginapan_Fixx",
                interactive: true,
                title: '<img src="styles/legend/Data_Persebaran_Penginapan_Fixx_4.png" /> Data_Persebaran_Penginapan_Fixx'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Malang_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Batas_Kecamatan_3.setVisible(true);lyr_Data_Persebaran_Penginapan_Fixx_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Malang_1,lyr_Jalan_2,lyr_Batas_Kecamatan_3,lyr_Data_Persebaran_Penginapan_Fixx_4];
lyr_Malang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', });
lyr_Jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Batas_Kecamatan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', 'FID_1': 'FID_1', 'LUASAR': 'LUASAR', 'JMLHPEN': 'JMLHPEN', 'KPDTNPEN': 'KPDTNPEN', });
lyr_Data_Persebaran_Penginapan_Fixx_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Nama Hotel': 'Nama Hotel', 'Alamat': 'Alamat', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Kode Pos': 'Kode Pos', 'Harga ': 'Harga ', 'Keterangan': 'Keterangan', 'Foto': 'Foto', });
lyr_Malang_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Batas_Kecamatan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', 'FID_1': 'TextEdit', 'LUASAR': 'TextEdit', 'JMLHPEN': 'TextEdit', 'KPDTNPEN': 'TextEdit', });
lyr_Data_Persebaran_Penginapan_Fixx_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Nama Hotel': 'TextEdit', 'Alamat': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Kode Pos': 'TextEdit', 'Harga ': 'TextEdit', 'Keterangan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Malang_1.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'WADMKC': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'NAMRJL': 'inline label - always visible', 'KONRJL': 'inline label - always visible', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Batas_Kecamatan_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'WADMKC': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', 'FID_1': 'no label', 'LUASAR': 'no label', 'JMLHPEN': 'no label', 'KPDTNPEN': 'no label', });
lyr_Data_Persebaran_Penginapan_Fixx_4.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Nama Hotel': 'header label - always visible', 'Alamat': 'header label - always visible', 'Kelurahan': 'header label - always visible', 'Kecamatan': 'header label - always visible', 'Kota': 'header label - always visible', 'Provinsi': 'header label - always visible', 'Kode Pos': 'no label', 'Harga ': 'header label - always visible', 'Keterangan': 'header label - always visible', 'Foto': 'no label', });
lyr_Data_Persebaran_Penginapan_Fixx_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});