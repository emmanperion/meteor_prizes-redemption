import { Meteor } from 'meteor/meteor';
import { Seeder } from './seeders'
import '../imports/api/prizes.js';
import '../imports/api/redemptions.js';

Meteor.startup(() => {
  // code to run on server at startup
  Seeder.seed()
});



