import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
//import Typography from 'material-ui/Typography'
//import TextField from 'material-ui/TextField';

import { save, getById, update } from '../../../actions/oficina-action'
import { getList , detalleAlquilerList } from '../../../actions/detalleAlquiler-action'
import { connect } from 'react-redux'

class Form extends Component {
    /*
        constructor(props) {
            super(props);
            this.state = {
                d: {
                    Numero_documento: '',
                    nombre: '',
                },
                saving: false
            }
        }*/
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            Numero_documento: props.data ? props.data.Numero_documento : '',
            Total: props.data ? props.data.Total : '',
            alquiler: props.data ? props.data.alquiler : '',
            
            detalleAlquiler: props.data ? props.data.detalleAlquiler : ''     
        }
    }
    
     componentWillMount = () => {
        this.props.detalleAlquilerList("")
    }
    /*componentWillMount = () => {

        this.props.getdetalleAlquilerList("")

        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
            //this.props.getItemAsync(id)

            this.props.getById(id).then(data => {
                console.log('componentWillReceiveProps data:' + JSON.stringify(data))
                this.setState({
                    id: data.id,
                    Numero_documento: data.Numero_documento,
                    nombre: data.nombre
                })
            }).catch(e => {

            });
        }
        */
    


   /* componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    Numero_documento: data.Numero_documento,
                    Total: data.Total,
                    alquiler: data.alquiler,
                    precio: data.precio,
                    detalleAlquiler: data.detalleAlquiler,
                   
                });
            });
        }
    }*/

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
        //this.props.history.push('/detalleAlquilers/list');
        event.preventDefault();
    }

    render() {
        
        let {detalleAlquiler_list} = this.props

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
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Numero_documento:
                            <input type="text" name="Numero_documento" value={this.state.Numero_documento} onChange={this.handleChange} />
                        </label>
                        

                        <label>
                            Total:
                            <input type="text" name="Total" value={this.state.Total} onChange={this.handleChange} />
                        </label>
                        <label>
                            alquiler:
                            <input type="text" name="alquiler" value={this.state.alquiler} onChange={this.handleChange} />
                        </label>
                        
                       <label>
                            detalleAlquiler:
                            <input 
                            componentClass="select" placeholder="Seleccione un detalleAlquiler" value={this.state.detalleAlquiler} name="detalleAlquiler"  onChange={this.handleChange} />
                        
                         {detalleAlquiler_list.map((d, index) =>
                                                    <option key={index}
                                                            value={d.id}>{d.nombre}</option>
                                                )} 
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </CardContent>
            </Card>
        )
    }
}

Form.propTypes = {
    data: PropTypes.object,
    detalleAlquiler_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.oficina.list.find(item => item.id + '' === props.match.params.id + ''),
            detalleAlquiler_list: state.detalleAlquiler.list,
        }
    }
    return {
        data: null,
        detalleAlquiler_list: state.detalleAlquiler.list,
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
    detalleAlquilerList,

})(Form)