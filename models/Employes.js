import mongoose from "mongoose";

// Define Schema
const employeSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  phone: { type: mongoose.Types.Decimal128, required: true },
  salary: {
    type: Number,
    required: true,
    validate: { validator: (v) => v >= 5500 },
  },
  join: { type: Date, default: Date.now },
});

//Compiling Schema into model
const EmployeModel = mongoose.model("employe", employeSchema);

//Export Model
export { EmployeModel };
