const info = (str: string) => {
    console.log('logger [INFO]: ' + str);
};
const error = (str: string) => {
    console.error('logger [ERROR]: ' + str);
};

const defaultExport = {
    info,
    error,
};

export default defaultExport;
