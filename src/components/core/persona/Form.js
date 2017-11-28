import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
//import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import { save, getById, update } from '../../../actions/persona-action'
import { getList as getCategoriaList } from '../../../actions/persona-action'
















class Form extends Component {
    /*
        constructor(props) {
            super(props);
            this.state = {
                d: {
                    nombre: '',
                    apellidopaterno: '',
                },
                saving: false
            }
        }*/
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nombre: props.data ? props.data.nombre : '',
            apellidopaterno: props.data ? props.data.apellidopaterno : '',
            apellidomaterno: props.data ? props.data.apellidomaterno : '',
            fechanacimiento: props.data ? props.data.fechanacimiento : '',
            genero: props.data ? props.data.genero : '',
            email: props.data ? props.data.email : '',
        }
    }
    /*
        componentWillReceiveProps = (nextProps) => { // Load Asynchronously
            const { data } = nextProps;
            console.log('componentWillReceiveProps data:' + JSON.stringify(data))
            this.setState({
                id: data.id,
                nombre: data.nombre,
                apellidopaterno: data.apellidopaterno
            })
        }
    */
    componentWillMount = () => {
        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
            //this.props.getItemAsync(id)

            this.props.getById(id).then(data => {
                console.log('componentWillReceiveProps data:' + JSON.stringify(data))
                this.setState({
                    id: data.id,
                    nombre: data.nombre,
                    apellidopaterno: data.apellidopaterno
                })
            }).catch(e => {

            });
        }
        */
    }


    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    nombre: data.nombre,
                    apellidopaterno: data.apellidopaterno,
                    estado: data.estado
                });
            });
        }
    }

    handleChange = (event) => {
        //this.setState({ value: event.target.value });
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const { id } = this.props.match.params
        if (id) {
            //console.log('handleSubmit state:' + JSON.stringify(this.state))
            this.props.update(this.state, this.props.history)
        } else {
            this.props.save(this.state, this.props.history)
        }
        //this.props.history.push('/categorias/list');
        event.preventDefault();
    }

    render() {
        //const { data } = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="Personas"
                    subheader="Personas"
                />
                <CardContent>

                    <form >
                        <InputLabel >Nombre:</InputLabel>
                        <Input

                            type="text"
                            name="nombre"

                            value={this.state.nombre}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start">  </InputAdornment>}
                        />

                    </form>

                    <form >
                        <InputLabel >Apellido Paterno:</InputLabel>
                        <Input

                            type="text"
                            name="nombre"

                            value={this.state.apellidopaterno}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start">  </InputAdornment>}
                        />

                    </form>
                    <form >
                        <InputLabel >Apellido Materno:</InputLabel>
                        <Input

                            type="text"
                            name="nombre"

                            value={this.state.apellidomaterno}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start">  </InputAdornment>}
                        />

                    </form>
                    <form >
                        <InputLabel >Apellido Materno:</InputLabel>
                        <Input

                            type="text"
                            name="nombre"

                            value={this.state.apellidomaterno}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start">  </InputAdornment>}
                        />

                    </form>
                    <form >
                        <InputLabel >Fecha Nacimiento:</InputLabel>
                        <Input

                            type="text"
                            name="nombre"

                            value={this.state.fechanacimiento}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start">  </InputAdornment>}
                        />

                    </form>
                    <form >
                        <InputLabel >Genero:</InputLabel>
                        <Input

                            type="text"
                            name="nombre"

                            value={this.state.genero}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start">  </InputAdornment>}
                        />

                    </form>
                    <form >
                        <InputLabel >Email:</InputLabel>
                        <Input

                            type="text"
                            name="nombre"

                            value={this.state.email}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start">  </InputAdornment>}
                        />

                    </form>



    

                </CardContent>
                    <CardContent>
                        <form onSubmit={this.handleSubmit}>
                            <Button
                                raised
                                color="primary"
                                type="submit"
                                margin="normal"
                            >
                                Guardar
                        </Button>
                            {'  '}
                            <Button
                                raised
                                color="accent"
                                type="reset"

                                margin="normal"
                                onClick={(e) => this.props.history.push('/core/persona/list')}>

                                cancelar
                        </Button>

                        </form>


                    </CardContent>
            </Card>
                )
    }
}

Form.propTypes = {
                    data: PropTypes.object,
    categoria_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
                    data: state.oficina.list.find(item => item.id + '' === props.match.params.id + ''),
            categoria_list: state.categoria.list,
        }
    }
    return {
                    data: null,
        categoria_list: state.categoria.list,
    }

}
/*
const mapDispatchToProps = (dispatch) => {
    return {
                    save: (d, h) => {dispatch(save(d, h))},
        getList: (q) => {dispatch(getList(q))},
        getById: (id) => {dispatch(getById(id))},
        update: (d, h) => {dispatch(update(d, h))},
    }
}
*/
export default connect(mapStateToProps, {
                    save,
                getById,
    update,
    getCategoriaList,

})(Form)