import axios from 'axios'
import Swal from 'sweetalert2';




const Editar = () => {

    const editar = (id, datos, i) => {
        const accessoryEdit = !datos.accessory[i];
       datos.accessory[i] = accessoryEdit

        axios.put(`http://localhost:8000/api/pirates/update/${id}`, datos)
            .then((res) => {
                window.location.reload()
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: `El pirata fue editado`,
                });
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    icon: "error",
                    title: `${err}`,
                });
            })
    }

    return editar
}

export default Editar
