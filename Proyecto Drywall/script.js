function calcularMateriales() {
    // Obtener los valores de entrada
    const alto = parseFloat(document.getElementById("alto").value);
    const ancho = parseFloat(document.getElementById("ancho").value);

    // Validar entradas
    if (isNaN(alto) || isNaN(ancho)) {
        alert("Por favor, ingrese valores válidos para altura y ancho.");
        return;
    }

    // Calcular el área del muro
    const areaMuro = alto * ancho; // Área del muro

    // Calcular materiales necesarios
    const distanciaParante = alto > 3 ? 0.41 : 0.61; // Distancia entre parantes
    const cantidadParantes = Math.ceil(ancho / distanciaParante); // Número de parantes

    // Calcular rieles (parte superior + parte inferior)
    const cantidadRieles = Math.ceil(ancho / 3) * 2; // Cada riel mide 3 metros y se necesita uno arriba y uno abajo

    // Calcular paneles de drywall
    const areaPanelDrywall = 1.22 * 2.44; // Área de un panel de drywall
    const cantidadPaneles = Math.ceil(areaMuro / areaPanelDrywall * 2); // Paneles necesarios

    // Calcular aislantes
    const cantidadAislantes = Math.ceil(areaMuro / 10.05); // Aislantes necesarios

    // Calcular la cantidad de masilla
    const cantidadMasilla = Math.ceil(areaMuro * 2 * 1.1); // Kilos de masilla necesarios
    const cantidadCajasMasilla = Math.ceil(cantidadMasilla / 20); // Cajas de masilla necesarias
    const cantidadMasillaCompleta = `${cantidadMasilla} kg (aproximadamente ${cantidadCajasMasilla} cajas)`; // Unir kilos y cajas

    // Calcular tornillos
    const cantidadTornillosLamina = Math.ceil(areaMuro * 3); // Tornillos de lámina
    const cantidadTornillosEstructura = Math.ceil(areaMuro * 23); // Tornillos de estructura

    // Calcular pintura (según nueva fórmula: área * 2 * 1 / 50)
    const cantidadPintura = Math.ceil((areaMuro * 2 * 1) / 50); // Litros de pintura

    // Calcular cinta de papel (suponiendo que se usa a lo largo de todas las juntas)
    const perimetroMuro = areaMuro * 2 * 1; // Perímetro del muro
    const cantidadCinta = Math.ceil(perimetroMuro / 90); // Cada rollo de cinta tiene 90m

    // Mostrar resultados
    document.getElementById("resultados").innerHTML = `
        <h2>Resultados:</h2>
        <p>Cantidad de Parantes: ${cantidadParantes} </p>
        <p>Cantidad de Rieles: ${cantidadRieles}</p>
        <p>Cantidad de Paneles de Drywall: ${cantidadPaneles}</p>
        <p>Cantidad de Aislantes: ${cantidadAislantes}</p>
        <p>Cantidad de Masilla: ${cantidadMasillaCompleta}</p>
        <p>Cantidad de Tornillos de Lámina: ${cantidadTornillosLamina}</p>
        <p>Cantidad de Tornillos de Estructura: ${cantidadTornillosEstructura}</p>
        <p>Cantidad de Pintura (litros): ${cantidadPintura}</p>
        <p>Cantidad de Cinta de Papel (rollos): ${cantidadCinta}</p>
    `;
}
