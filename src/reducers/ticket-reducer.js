import { GET_TICKET } from '../constants';

export default function (state = {} /*ticket*/, action) {
    if (action.type === GET_TICKET) {
        return action.ticket;
    }
    return state;
}