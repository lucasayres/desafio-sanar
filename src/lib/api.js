import axios from 'axios';

const baseURL = "https://5b7570f8deca780014ec9f86.mockapi.io";

export const initial = {
    courses: [],
    teachers: [],
    modules: [],
    Logged: false
};

export default function reducer (state = initial, action) {
    switch (action.type) {
        case 'COURSES':
            return {
                ...state,
                courses: action.items,
            };
        case 'TEACHERS':
            return {
                ...state,
                teachers: action.items,
            };
        case 'MODULES':
            return {
                ...state,
                modules: action.items,
            };
        default:
            return state;
    }
};

export function getCourses() {
    return dispatch => axios.get(baseURL + '/v1/cursos')
        .then(({ data }) => data)
        .then(items => dispatch({ type: 'COURSES', items }));
};

export function getTeachers() {
    return dispatch => axios.get(baseURL + '/v1/professores')
        .then(({ data }) => data)
        .then(items => dispatch({ type: 'TEACHERS', items }));
};

export function getModules() {
    return dispatch => axios.get(baseURL + '/v1/modulos')
        .then(({ data }) => data)
        .then(items => dispatch({ type: 'MODULES', items }));
};