import React, { useState } from 'react';
//import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    weight: '',
    heightFeet: '',
    heightInches: '',
    healthGoal: '',
    fitnessGoal: '',
    currentActivityLevel: '',
    timePreference: '',
    foodsToAvoid: [],
    preferredCuisines: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = generatePrompt(formData);
    const mealPlan = await getMealPlan(prompt);
    console.log(mealPlan);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields go here */}
      <input type="number" name="age" onChange={handleChange} placeholder="Age" required />
      <input type="text" name="gender" onChange={handleChange} placeholder="Gender" required />
      <input type="number" name="weight" onChange={handleChange} placeholder="Weight" required />
      <input type="number" name="heightFeet" onChange={handleChange} placeholder="HeightFeet" required />
      <input type="number" name="heightInches" onChange={handleChange} placeholder="HeightInches" required />
      <input type="text" name="healthGoal" onChange={handleChange} placeholder="Health Goal" required />
      <input type="text" name="fitnessGoal" onChange={handleChange} placeholder="Fitness Goal" required />
      <input type="text" name="currentActivityLevel" onChange={handleChange} placeholder="Current Activity Level" required />
      <input type="text" name="timePreference" onChange={handleChange} placeholder="Time Preference" required />
      <input type="text" name="foodsToAvoid" onChange={handleChange} placeholder="Foods to Avoid" required />
      <input type="text" name="preferredCuisines" onChange={handleChange} placeholder="Preferred Cuisines" required />
      <button type="submit">Generate Meal Plan</button>
    </form>
  );
};

export default UserForm;
