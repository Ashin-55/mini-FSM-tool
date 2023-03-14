const { default: mongoose } = require("mongoose");

const jobSchema = new mongoose.Schema({
  job_uid: { type: String, required: true },
  job_name: { type: String, required: true },
  job_description: { type: String },
  company_id: { type: String, required: true },
  customer: { type: String },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
});

module.exports = {
  Job: mongoose.model("Jobs", jobSchema),
};
