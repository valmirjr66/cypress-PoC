import axios from 'axios';
import _ from 'lodash';

const toastrsCollection = [];

// Barra a reptição de Toasters
const subscribeToaster = (message) => {
    const toaster = require('toastr');

    toaster.subscribe(toaster => {
        if (toaster && toaster.state === 'hidden' && toastrsCollection.find(x => x === message)) {
            _.remove(toastrsCollection, toasterMessage => toasterMessage === message);
        }
    });

    // Mensagem ainda não foi exibida
    if (!toastrsCollection.find(x => x === message)) {
        toaster.error(message);
        toastrsCollection.push(message);
    }
}

axios.interceptors.response.use(
    response => {
        if (response.data.result && response.data.result.status === 'Erro') {
            subscribeToaster('Algo deu errado');
            return Promise.reject(response.data.result.status);
        }
        else
            return response;
    },
    error => {
        subscribeToaster('Algo deu errado');
        return Promise.reject(error);
    }
);

export const request = () => {
    return {
        get: (route, params, callback, errorHandler) => {
            axios.get(`https://my.api.mockaroo.com/${route}?key=5f19a3f0`, { params })
                .then(callback)
                .catch(errorHandler);
        }
    };
}
