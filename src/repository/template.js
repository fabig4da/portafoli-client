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
        return await htttpClient.post(baseUrl, data);
    },
    update: async (tid, data) => {
        return await htttpClient.put(`${baseUrl}/${tid}`, data);
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