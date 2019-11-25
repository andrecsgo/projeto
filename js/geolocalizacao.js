if("geolocation" in navigator){
    console.log("geolocalizacao funcionando!");
    let posicao = 
    navigator.geolocation.getCurrentPosition(function(posicao){
       console.log( posicao);
      let coordenadas = document.getElementById('coordenadas');
      coordenadas.innerHTML = `latitude: ${posicao.coords.latitude} <br/> longitude: ${posicao.coords.longitude} `;
    });

}else{
    console.log('Onavegador não suporta geolocalização')
}