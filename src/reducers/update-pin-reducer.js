import { UPDATE_PIN } from '../constants';

export default function (state = '' /*pin*/, action) {
    if (action.type === UPDATE_PIN) {
        return action.updatedPin;
    }
    return state;
}