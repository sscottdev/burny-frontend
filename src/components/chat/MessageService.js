import mockdata from './MockDataV2.json';

const data = mockdata;

const messageService = {
    getRoot: () => {
        return data.find(elem => elem.id === 'root');
    },
    goTo: (messageID) => {
        return data.find(elem => elem.id === messageID);
    }
}

export default messageService;