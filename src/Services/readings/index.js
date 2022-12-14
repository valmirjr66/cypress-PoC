import { request } from '../base';

export function getTextById(id, callback, errorHandler) {
    const requestObject = request();

    requestObject.get(`posts/${id}`, {},
        result => callback(result && result.data ? result.data : {}),
        errorHandler);
}

export function getTextsList(pageSize, pageNumber, callback, errorHandler) {
    const requestObject = request();

    requestObject
        .get('posts-metadata', { pageSize, pageNumber },
            result => callback(result && result.data ? result.data : {}),
            errorHandler);
}

export function getTextsListByCategory(category, pageSize, pageNumber, callback, errorHandler) {
    const requestObject = request();

    requestObject.get('posts-metadata', { pageSize, pageNumber },
        result => callback(result && result.data ? result.data : {}),
        errorHandler);
}
