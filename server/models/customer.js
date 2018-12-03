import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { type: 'String' },
  lastname: { type: 'String' },
  address: { type: 'String' },
  city: { type: 'String' },
  state: { type: 'String' },
  zipcode: { type: 'Number' },
  dateofbirth: { type: 'Date' },
  age: { type: 'Number' },
  gender: { type: 'String' },
  phone: { type: 'Number' },
  email: {
    type: String, required: false,
    trim: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  occupation: { type: 'String' },
  dailyInfo: [{ type: Array, default: [] }],
  emergencycontactname: { type: 'String' },
  emergencycontactphone: { type: 'Number' },
  consent: { type: 'Boolean' },
  notes: { type: 'String' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

// Create reference to User & export
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
