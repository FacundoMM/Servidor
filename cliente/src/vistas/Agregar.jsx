import axios from 'axios'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'



const validationSchema = Yup.object({
    title: Yup.string()
        .required('Debe agregarle un nombre')
        .min(3, 'Debe tener al menos 3 caracteres'),
    price: Yup.string()
        .required('Debe agregarle un precio')
        .min(3, 'Debe tener al menos 3 caracteres'),
    desciption: Yup.string()
        .min(5, 'Campo debe tener 5 caracteres'),
})

const Agregar = () => {
    const navegate = useNavigate()
    const initialValues = {
        title: "",
        price: "",
        description: ""
    }
    const handleSubmit = (values) => {

        console.log(values)
        axios.post('http://localhost:8000/api/Producto/new', values)
            .then((res) => {
                navegate("/")
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text:  `El producto fue agregado`,
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

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {({ isSubmitting }) => (
            <Form className='text-center'>
                <h1 className='text-center'>Agregar Productos</h1>
                <div className="my-3">
                    <Field type="text" name="title" placeholder="Titulo" />
                    <ErrorMessage name="title" component="div" className="text-danger"/>

                </div>
                <div className="mb-3">
                    <Field type="number" name="price" placeholder="Precio:" />
                    <ErrorMessage name="price" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                    <Field type="text" name="description" placeholder="Descripcion:" />
                    <ErrorMessage name="description" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-primary">Agregar producto</button>
            </Form>
        )}
    </Formik>
}

export default Agregar
