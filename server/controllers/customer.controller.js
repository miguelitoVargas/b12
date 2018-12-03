import Customer from '../models/customer';

/**
 * Get all customers
 * @param req
 * @param res
 * @returns void
 */
export function getCustomers(req, res) {
  Customer.find()
  .sort('-dateAdded')
  .exec((err, customers) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ customers });
  });
}

export function getCustomer(req, res) {
  Customer.findOne({ _id: req.params.id })
  .exec((err, customer) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ customer });
  });
}
