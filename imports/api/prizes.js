import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Redemptions } from './redemptions'

export const Prizes = new Mongo.Collection('prizes');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('prizes', function () {
        return Prizes.find({
            // $or: [
            //     { quantity: { $gt: 0 } }
            // ],
        });
    });

    Meteor.publish('prize', function (id) {
        const _id = new Mongo.ObjectID(id)
        return Prizes.find({ _id: _id })
    });

    Meteor.publish('redeemedPrizes', function () {
        const redemptionList = Redemptions.find({
            $or: [
                { owner: this.userId }
            ],
        });

        const objectIds = redemptionList.map(item => {
            return new Mongo.ObjectID(item.prizeId)
        })

        return Prizes.find({
            _id: {
                $in: objectIds
            }
        })
    })
}

Meteor.methods({
    'prize.redeemed'(prizeId) {
        check(prizeId, String)

        const _id = new Mongo.ObjectID(prizeId)

        const prize = Prizes.findOne(_id)

        if (prize.quantity > 0) {
            Prizes.update({_id: prize._id, quantity: { $gt: 0, $eq: prize.quantity }}, {$inc: {quantity: -1}});

            Redemptions.insert({
                prizeId: prizeId,
                redeemedAt: new Date(),
                owner: this.userId,
            });
        } else {
            throw new Meteor.Error('Error', 'Prize is out of stock, cannot be redeemed');
        }

    }
})
