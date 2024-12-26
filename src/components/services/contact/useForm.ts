import { useState, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  website: string;
  phone: string;
  email: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  jobTitle: '',
  website: '',
  phone: '',
  email: ''
};

export function useForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData(initialFormData);
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
}