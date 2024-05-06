import logo from './logo.svg';
import './App.css';
import './Login.css';
import React, { Component } from 'react';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            mensagem: ''
        };
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit = () => {
        const { email, senha } = this.state;
        if (email === 'jesus.renan@pucpr.edu.br' && senha === '123456') {
            this.setState({ mensagem: 'Acessado com sucesso!' });
        } else {
            this.setState({ mensagem: 'E-mail ou senha incorretos.' });
        }
    }
    
    render() {
        const { email, senha, mensagem } = this.state;
        return (
            <div className="login-container">
                <h2 className="login-title">LOGIN</h2>
                <div className="input-container">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={this.handleChange} 
                    />
                </div>
                <div className="input-container">
                    <label>Senha:</label>
                    <input 
                        type="password" 
                        name="senha" 
                        value={senha} 
                        onChange={this.handleChange} 
                    />
                </div>
                <button className="login-button" onClick={this.handleSubmit}>Acessar</button>
                <div className="login-message">{mensagem}</div>
            </div>
        );
    }
}

export default Login;