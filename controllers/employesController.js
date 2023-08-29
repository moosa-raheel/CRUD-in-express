import { EmployeModel } from "../models/Employes.js";

class employesController {
  //Create Data
  static creatDoc = async (req, res) => {
    try {
      const { name, age, phone, salary } = req.body;
      const data = new EmployeModel({
        name: name,
        age: age,
        phone: phone,
        salary: salary,
      });
      await data.save();
      res.redirect("/");
    } catch (error) {
      res.render("error");
    }
  };

  //Read data

  static readDoc = async (req, res) => {
    try {
      const data = await EmployeModel.find();
      res.render("index", { data: data });
    } catch (error) {
      res.render("error");
    }
  };

  //Update Document

  static updatedata = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await EmployeModel.findById(id);
      res.render("update", { data: data });
    } catch (error) {
      res.render("error");
    }
  };
  static updateDoc = async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      await EmployeModel.findByIdAndUpdate(id, data);
      res.redirect("/");
    } catch (error) {
      res.render("error");
    }
  };
  //Delete data
  static deleteDoc = async (req, res) => {
    try {
      const id = req.params.id;
      await EmployeModel.findByIdAndDelete(id);
      res.redirect("/");
    } catch (error) {
      res.render("error");
    }
  };
  static notFound = (req, res) => {
    const location = req.url.replace("/", "");
    res.render("notFound", { url: location });
  };
}

//Export controller;
export { employesController };
