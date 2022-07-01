import { DataStore } from '@aws-amplify/datastore';
import { User } from '../models';
import moment from "moment";

const addUser = async (sub, email) => {
    await DataStore.save(
        new User({
            "sub": sub,
            email: email,
            name: '',
        })
    );
}

const updateLoginTimeForUser = async (sub) => {
    const originalUser = await DataStore.query(User, (u) => u.sub("eq", sub));
    await DataStore.save(
        User.copyOf(originalUser[0], updatedUser => {
            updatedUser.last_login_time = `${moment().format()}`;
        })
    );
}

const updateUser = async (sub, name, location) => {
    const originalUser = await DataStore.query(User, (u) => u.sub("eq", sub));
    await DataStore.save(
        User.copyOf(originalUser[0], updatedUser => {
            updatedUser.name = name;
            updatedUser.location = location; 
        })
    ); 
}

export {
    addUser,
    updateLoginTimeForUser,
    updateUser,
};
