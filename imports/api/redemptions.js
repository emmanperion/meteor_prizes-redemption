import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Redemptions = new Mongo.Collection('redemptions');

Meteor.methods({
    'redemptions.insert'(prizeId) {
        check(prizeId, String)

        Redemptions.insert({
            prizeId: prizeId,
            redeemedAt: new Date(),
            owner: this.userId,
        });
    }
})
