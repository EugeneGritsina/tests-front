import $ from 'jquery';

import { HTTP_METHODS } from './HttpMethods';
import { DB_CONNECTION_STRINGS } from './Constants';

export const API_PROXY_PREFIXES = {
    TESTS: '/tests',
};


export class AjaxProxy {
    constructor(path) {
        this.apiAddress = path ? DB_CONNECTION_STRINGS.LOCALHOST_DB_CONNECTION_STRING + path
                                : DB_CONNECTION_STRINGS.LOCALHOST_DB_CONNECTION_STRING;
    }

    sendPatch(data, path) {
        return this.fetchRequest(path, HTTP_METHODS.PATCH, data);
    }

    sendPost(data, path) {
        return this.fetchRequest(path, HTTP_METHODS.POST, data);
    }

    sendPostNonAsync(data, path) {
        return this.fetchRequest(path, HTTP_METHODS.POST, data, false);
    }

    sendPut(data, path) {
        return this.fetchRequest(path, HTTP_METHODS.PUT, data);
    }

    sendGet(path, parameters) {
        return this.fetchRequest(path, HTTP_METHODS.GET, parameters);
    }

    sendOptions(path) {
        return this.fetchRequest(path, HTTP_METHODS.OPTIONS);
    }

    sendDelete(path, data) {
        return this.fetchRequest(path, HTTP_METHODS.DELETE, data);
    }

    // sendFilePostRequest = (data, path, isAsync = false) => $.ajax({
    //     type: HTTP_METHODS.POST,
    //     async: isAsync,
    //     url: this.apiAddress + (_.isNil(path) ? '' : `/${path}`),
    //     contentType: false,
    //     processData: false,
    //     data
    // })

    fetchRequest = (path, type, data, isAsync = true) => {
        //EventBus.trigger(FieldEvents.AjaxAccomplishes, true);
        return $.ajax({
            type,
            async: isAsync,
            url: this.apiAddress + (!path ? '' : `/${path}`),
            data: data ? JSON.stringify(data) : {},
            datatype: 'json',
            contentType: 'application/json',
            crossDomain: true,    
            beforeSend(xhr) {
                xhr.setRequestHeader('Cache-Control', 'no-cache, no-store');
            },
        });
    }
}

export class ProxyFactory {
    static CreateTestsProxy(subPath) {
        return new AjaxProxy(API_PROXY_PREFIXES.TESTS + subPath);
    }
}

class TestsProxy {
    constructor() {
        this.proxy = ProxyFactory.CreateTestsProxy("");
        this.getTests = () => this.proxy.sendGet();
    }
}

export const testsProxy = new TestsProxy();