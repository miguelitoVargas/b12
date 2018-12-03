import Customer from './models/customer';

export default function () {
  Customer.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    const customer1 = new Customer({
      name: 'Andres',
      lastname: 'Saldarriaga Gaviria',
      address: 'Cl 20 #53 45',
      city: 'Medellin',
      state: 'Antioquia',
      zipcode: '050024',
      dateofbirth: '1987-03-16 00:00:00.000',
      age: '31',
      gender: 'male',
      email: 'jandreus87@gmail.com',
      emergencycontactname: 'Clementina',
      emergencycontactphone: '5891811',
      consent: true,
    });
    const customer2 = new Customer({
      name: 'Cindy',
      lastname: 'Sierra Balcarcel',
      address: 'Cl 20 #53 45',
      city: 'Medellin',
      state: 'Antioquia',
      zipcode: '050024',
      dateofbirth: '1989-02-01 00:00:00.000',
      age: '31',
      gender: 'female',
      email: 'cindanys@gmail.com',
      emergencycontactname: 'Andres Saldarriaga',
      emergencycontactphone: '3015999375',
      consent: true,
    });
    const customer3 = new Customer({
      name: 'David',
      lastname: 'Cervantes',
      address: '2998 South Federal Highway',
      city: 'Delray Beach',
      state: 'Florida',
      zipcode: '33498',
      dateofbirth: '1982-01-01 00:00:00.000',
      age: '36',
      gender: 'male',
      email: 'davidux@gmail.com',
      emergencycontactname: 'Andres Saldarriaga',
      emergencycontactphone: '3015999375',
      consent: true,
    });

    Customer.create([customer1, customer2, customer3], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
