import React, {Component} from "react";
import { addVideo } from '../api';
import PropTypes from 'prop-types';

const parseYoutubeUrl = (url) => {
    const match = url.match(/[?&]([^=#]+)=([^&#]*)/);
    return match && match[2];
};

class Add extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false,
            showSending: false,
            title:'',
            url: '',
            text:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (field) {
        return (event) => {
            this.setState({
                [field]: event.target.value
            })    
        }
    }

    validation(app){
        if(app.title.length > 0 &&  app.url.length > 0 && app.description.length > 2){
            return true;
        } else {
            return false;
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const { onClose } = this.props;
        const token = parseYoutubeUrl(this.state.url || '');
        if(this.validation(this.state) && token){
            this.setState({showSending:true})
            addVideo({
                title: this.state.title,
                description: this.state.description,
                url: this.state.url,
                thumbnail: `https://img.youtube.com/vi/${token}/maxresdefault.jpg`,
                embed: `https://www.youtube.com/embed/${token}`
            }).then(onClose(true));
        }else{
            this.setState({
                hasError:true
            });
        }
    }

    render() {
        const { showSending, title, url, description, hasError} = this.state;
        const {onClose} = this.props;
        return (<div className="modal">
              <div className="modal-content">
                <span className="close" onClick={onClose(false)}>&times;</span>
                <h2> Crear nuevo Vídeo </h2>
                { showSending && (<span className="success"> Enviando .... </span> )}
                { hasError && (<div className="error"> Some fields are empty or contain an wrong values. </div>) }
                <form>
                    <label>Título</label>
                    <input type="text" value={title} onChange={this.handleChange("title")} minLength="3" maxLength="200"  required/>
                    <label>Url</label>
                    <input type="text" value={url} onChange={this.handleChange("url")} minLength="3" maxLength="200"  required/>
                    <label>Descripción</label>
                    <textarea value={description} onChange={this.handleChange("description")} required/>
                    <input type="submit" onClick={this.handleSubmit} value="Submit" disabled={showSending}/>
                </form>
              </div>
            </div>);
    }
}

export default Add;
