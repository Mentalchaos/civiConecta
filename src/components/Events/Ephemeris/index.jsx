import EphemerisLayout from 'src/Layouts/EphemerisLayout';
import createEventTypes from '../index';
import config from 'src/config';

const { EventTypes } = config.constants;
const Ephemeris = createEventTypes(EventTypes.EPHEMERIS, EphemerisLayout);

export default Ephemeris;
