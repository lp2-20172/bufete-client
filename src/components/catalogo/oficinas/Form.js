import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { save, getById, update } from '../../../actions/oficina-action'
import { getList as getCategoriaList } from '../../../actions/categoria-action'

import { connect } from 'react-redux'

class Form extends Component {
    /*
        constructor(props) {
            super(props);
            this.state = {
                d: {
                    codigo: '',
                    nombre: '',
                },
                saving: false
            }
        }*/
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            codigo: props.data ? props.data.codigo : '',
            estado: props.data ? props.data.estado : '',
            descripcion: props.data ? props.data.descripcion : '',
            precio: props.data ? props.data.precio : '',
            categoria: props.data ? props.data.categoria : ''
        }
    }

    componentWillMount = () => {
        this.props.getCategoriaList("")
    
    /*componentWillMount = () => {

        this.props.getCategoriaList("")

        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
            //this.props.getItemAsync(id)

            this.props.getById(id).then(data => {
                console.log('componentWillReceiveProps data:' + JSON.stringify(data))
                this.setState({
                    id: data.id,
                    codigo: data.codigo,
                    nombre: data.nombre
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
                    codigo: data.codigo,
                    estado: data.estado,
                    descripcion: data.descripcion,
                    precio: data.precio,
                    categoria: data.categoria,

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

        let { categoria_list } = this.props

        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="User Form"
                    subheader="Oficina Form"
                />
                <CardContent>
                    <form >
                        <InputLabel >Codigo</InputLabel>
                        <Input

                            type="text"
                            name="codigo"

                            value={this.state.codigo}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>
                    
                    <form >
                        <InputLabel >Estado</InputLabel>
                        <Input

                            type="text"
                            name="estado"

                            value={this.state.estado}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />


                    </form>
                    
                    <form >
                        <InputLabel >Descripcion</InputLabel>
                        <Input

                            type="text"
                            name="descripcion"

                            value={this.state.descripcion}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />
                    </form>

                    <form >
                        <InputLabel >Precio</InputLabel>
                        <Input

                            type="text"
                            name="precio"

                            value={this.state.precio}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />
                    </form>


                    <form >
                        <InputLabel >Categoria :</InputLabel>
                        
                        <TextField

                            id="select-currency-native"
                            select

                            name="categoria"
                            value={this.state.categoria}
                            onChange={this.handleChange}

                            helperText="Seleccione una categoria"
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "categoria"
                                },
                            }}

                        >
                            {categoria_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.nombre}
                                </option>
                            )}
                        </TextField>





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
                            onClick={(e) => this.props.history.push('/catalogo/oficinas/list')}>
                        
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
        save: (d, h) => { dispatch(save(d, h)) },
        getList: (q) => { dispatch(getList(q)) },
        getById: (id) => { dispatch(getById(id)) },
        update: (d, h) => { dispatch(update(d, h)) },
    }
}
*/
export default connect(mapStateToProps, {
    save,
    getById,
    update,
    getCategoriaList,

})(Form)