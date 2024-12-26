import React from 'react';
import { useForm } from './useForm';
import FormInput from './FormInput';
import Button from '../../ui/Button';

export default function FormFields() {
  const { formData, handleChange, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <FormInput
        label="Company Name"
        name="company"
        value={formData.company}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Company Website"
        name="website"
        type="url"
        value={formData.website}
        onChange={handleChange}
        required
      />

      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex justify-center pt-4">
        <Button type="submit" variant="primary" size="lg">
          Submit Inquiry 🚀
        </Button>
      </div>
    </form>
  );
}