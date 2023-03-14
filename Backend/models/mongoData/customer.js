const { default: mongoose } = require("mongoose");

const customerSchema = new mongoose.Schema({
  customer_uid: String,
  customer_name: String,
  is_deleted: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = {
  Customer: mongoose.model("Customer", customerSchema),
};
