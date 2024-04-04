import axios from 'axios'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'



const validationSchema = Yup.object({
    name: Yup.string()
        .required()
        .min(3),
    image: Yup.string()
        .required(),
    treasure: Yup.number()
        .required()
        .min(0),
    phrase: Yup.string()
        .required(),
    position: Yup.string()
        .required(),
    accessory: Yup.array()
})

const Agregar = () => {
    const navegate = useNavigate()
    const initialValues = {
        name: "",
        image: "",
        treasure: "",
        phrase: "",
        position: "Captain",
        accessory: [true, true, true],
    }
    const handleSubmit = (values) => {

        console.log(values)
        axios.post('http://localhost:8000/api/pirates/new', values)
            .then((res) => {
                navegate("/")
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: `El producto fue agregado`,
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
            <Form className='mx-3'>
                <h1 className='text-center '>Add new Pirate</h1>
                <div className="row ">
                    <div className="contaner col-md-6">
                        <div className="my-3">
                            <label>Name: </label>
                            <div>
                                <Field type="text" name="name" className='form-control' />
                                <ErrorMessage name="name" component="div" className="text-danger" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>Image URL: </label>
                            <div>
                                <Field type="text" name="image" className="form-control"/>
                                <ErrorMessage name="image" component="div" className="text-danger" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label># of Treasure Chests:</label>
                            <div>
                                <Field type="number" min='0' name="treasure" className="form-control"/>
                                <ErrorMessage name="treasure" component="div" className="text-danger" />
                            </div>

                        </div>
                        <div className="mb-3">
                            <label>Pirate catch Phrase: </label>
                            <div>
                                <Field type="text" name="phrase" className="form-control"/>
                                <ErrorMessage name="phrase" component="div" className="text-danger" />
                            </div>

                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="my-3">
                            <label >Crew position: </label>
                            <div>
                                <Field as="select" name="position" className="form-control" placeholder="select option">
                                    <option value="Captain">Captain</option>
                                    <option value="First Mate">First Mate</option>
                                    <option value="Quarter Master">Quarter Master</option>
                                    <option value="Boatswain">Boatswain</option>
                                    <option value="Powder Monkey">Powder Monkey</option>
                                </Field>
                                <ErrorMessage name="position" component="div" className="text-danger" />
                            </div>


                        </div>
                        <div className="mb-3">
                            <label>   Check the mark </label>
                            <div>
                                <Field type='checkbox' name='accessory[0]'  className="form-check-input me-2" />
                                <label>Peg Leg</label>
                            </div>
                            <div>
                                <Field type='checkbox' name='accessory[1]'  className="form-check-input me-2" />
                                <label>Eye Patch</label>
                            </div>
                            <div>
                                <Field type='checkbox' name='accessory[2]'  className="form-check-input me-2" />
                                <label>Hook hand</label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Add pirate</button>
                </div>
            </Form>
        )}
    </Formik>
}

export default Agregar
