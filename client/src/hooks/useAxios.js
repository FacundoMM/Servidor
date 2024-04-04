import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url, accion) => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        axios.get(`${url}`)
            .then((res) => {
                if(accion == 'ver'){
                    setDatos(res.data.pirate)
                }else {
                    const sortedData = res.data.pirate.sort((a, b) => {
                        return a.name.localeCompare(b.name);
                    });
                    setDatos(sortedData);
                }
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    }, []);
    console.log(datos)
    return { datos };
};

export default useAxios;
