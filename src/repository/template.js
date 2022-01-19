import { serialize } from 'object-to-formdata';

import htttpClient from '../settings/httpClient';
const baseUrl = 'template';
 

export const templateRepository = {
    findAll: async () => {
        return await htttpClient.get(baseUrl);
    },
    findOne: async (tid) => {
        return await htttpClient.get(`${baseUrl}/${tid}`);
    },
    create: async (data) => {
        const formData = serialize(data);
        console.log(data.img);

        formData.append('img', data.img[0]);
        // console.log(data);      
        return await htttpClient.post(baseUrl, formData, { headers: { "Content-Type": "multipart/form-data" } });
    },
    update: async (tid, data) => {
        const formData = serialize(data);

        if (data.img[0]) {
            formData.append('img', data.img[0])
        } else {
            formData.delete('img')
        }

        return await htttpClient.put(`${baseUrl}/${tid}`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } });
    },
    restore: async (tid) => {
        return await htttpClient.put(`${baseUrl}/restore/${tid}`);
    },
    delete: async (tid) => {
        return await htttpClient.delete(`${baseUrl}/${tid}`);
    }
    // dropFromDB: async (tid) => {
    //     return await htttpClient.delete(`${baseUrl}/drop/${tid}`);
    // },
}