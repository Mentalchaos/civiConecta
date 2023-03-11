import SituationsLayout from 'src/Layouts/SituationsLayout';
import createEventTypes from '../index';
import config from 'src/config';

const { EventTypes } = config.constants;
const Situations = createEventTypes(EventTypes.SITUATION, SituationsLayout);

export default Situations;
