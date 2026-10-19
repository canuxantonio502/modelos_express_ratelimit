export let modelos = [
    {
        id: 1,
        nombre: "HONOR Magic8 Pro",
        gama: "Alta / Premium",
        especificaciones: {
            pantalla: "AMOLED de 6.7 pulgadas, 120Hz",
            procesador: "Qualcomm Snapdragon 8 Elite Gen 5",
            memoria_ram: "12 GB",
            almacenamiento: "512 GB",
            bateria: "7100 mAh",
            camara_principal: "Triple (50MP + 50MP + 200MP)",
        },
    },
    {
        id: 2,
        nombre: "HONOR 600",
        gama: "Media / Alta",
        especificaciones: {
            pantalla: "AMOLED de 6.57 pulgadas, 120Hz",
            procesador: "Qualcomm Snapdragon 7 Gen 4",
            memoria_ram: "8 GB",
            almacenamiento: "512 GB",
            bateria: "7000 mAh con tecnología Silicio-Carbono",
            camara_principal: "Sony de 200MP con OIS",
        },
    },
    {
        id: 3,
        nombre: "HONOR Magic8 Lite",
        gama: "Media",
        especificaciones: {
            pantalla: "OLED con protección anticaídas de 2.5 metros",
            procesador: "Gama Media Octa-Core",
            memoria_ram: "8 GB",
            almacenamiento: "256 GB",
            bateria: "8300 mAh",
            camara_principal: "108MP con Inteligencia Artificial",
            certificacion: "IP69K",
        },
    },
    {
        id: 4,
        nombre: "HONOR X9c 5G",
        gama: "Media",
        especificaciones: {
            pantalla: "AMOLED de 6.78 pulgadas, 120Hz",
            procesador: "Qualcomm Snapdragon 6 Gen 1",
            memoria_ram: "12 GB",
            almacenamiento: "256 GB",
            bateria: "6600 mAh",
            camara_principal: "108MP con OIS",
            certificacion: "IP65M",
        },
    },
    {
        id: 5,
        nombre: "HONOR 400 Smart",
        gama: "Entrada / Media Económica",
        especificaciones: {
            pantalla: "LCD de 6.77 pulgadas HD+, 120Hz",
            procesador: "Qualcomm Snapdragon 6s Gen 3",
            memoria_ram: "8 GB",
            almacenamiento: "256 GB",
            bateria: "6500 mAh",
            camara_principal: "50MP",
            certificacion: "IP65",
        },
    },
];


export function reiniciarModelos() {
    modelos.length = 0;
    modelos.push(
        {
            id: 1,
            nombre: "HONOR Magic8 Pro",
            gama: "Alta / Premium",
            especificaciones: {
                pantalla: "AMOLED de 6.7 pulgadas, 120Hz",
                procesador: "Qualcomm Snapdragon 8 Elite Gen 5",
                memoria_ram: "12 GB",
                almacenamiento: "512 GB",
                bateria: "7100 mAh",
                camara_principal: "Triple (50MP + 50MP + 200MP)",
            },
        },
        {
            id: 2,
            nombre: "HONOR 600",
            gama: "Media / Alta",
            especificaciones: {
                pantalla: "AMOLED de 6.57 pulgadas, 120Hz",
                procesador: "Qualcomm Snapdragon 7 Gen 4",
                memoria_ram: "8 GB",
                almacenamiento: "512 GB",
                bateria: "7000 mAh con tecnología Silicio-Carbono",
                camara_principal: "Sony de 200MP con OIS",
            },
        },
        {
            id: 3,
            nombre: "HONOR Magic8 Lite",
            gama: "Media",
            especificaciones: {
                pantalla: "OLED con protección anticaídas de 2.5 metros",
                procesador: "Gama Media Octa-Core",
                memoria_ram: "8 GB",
                almacenamiento: "256 GB",
                bateria: "8300 mAh",
                camara_principal: "108MP con Inteligencia Artificial",
                certificacion: "IP69K",
            },
        },
        {
            id: 4,
            nombre: "HONOR X9c 5G",
            gama: "Media",
            especificaciones: {
                pantalla: "AMOLED de 6.78 pulgadas, 120Hz",
                procesador: "Qualcomm Snapdragon 6 Gen 1",
                memoria_ram: "12 GB",
                almacenamiento: "256 GB",
                bateria: "6600 mAh",
                camara_principal: "108MP con OIS",
                certificacion: "IP65M",
            },
        },
        {
            id: 5,
            nombre: "HONOR 400 Smart",
            gama: "Entrada / Media Económica",
            especificaciones: {
                pantalla: "LCD de 6.77 pulgadas HD+, 120Hz",
                procesador: "Qualcomm Snapdragon 6s Gen 3",
                memoria_ram: "8 GB",
                almacenamiento: "256 GB",
                bateria: "6500 mAh",
                camara_principal: "50MP",
                certificacion: "IP65",
            },
        },
    );
    return modelos;
}
