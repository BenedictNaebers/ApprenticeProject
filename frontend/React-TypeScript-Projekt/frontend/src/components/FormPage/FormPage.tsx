import { ChangeEvent, FormEvent, useState } from 'react';
import "./FormPage.css"

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Momentan werden per Klick auf den Button lediglich die eingetragenen Werte in die Konsole geschrieben.
    // Du könntest z.B. überlegen wie man die Werte an das Backend schicken könnte.
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="form-content">
        <div className="form-page">
          <h2>Add a Person</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Age:
              <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </label>
            <label>
              Gender:
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select a gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <button type="submit">Create Person</button>
          </form>
        </div>
    </div>
  );
}
