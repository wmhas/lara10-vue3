<template>
  <div class="student-form">
    <h2>Student Profile Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="student.name"
          placeholder="Enter student's name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="student.email"
          placeholder="Enter student's email"
          required
        />
      </div>

      <div class="form-group">
        <label for="age">Age:</label>
        <input
          type="number"
          id="age"
          v-model="student.age"
          placeholder="Enter student's age"
          required
        />
      </div>

      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" v-model="student.gender" required>
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>

    <div class="student-info" v-if="submitted">
      <h3>Submitted Student Profile</h3>
      <p><strong>Name:</strong> {{ student.name }}</p>
      <p><strong>Email:</strong> {{ student.email }}</p>
      <p><strong>Age:</strong> {{ student.age }}</p>
      <p><strong>Gender:</strong> {{ student.gender }}</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      student: {
        name: '',
        email: '',
        age: null,
        gender: '',
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
        this.submitted = true;
        console.log(this.student);

        axios
        .post('/submit-student-form', this.student)
        .then(response => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch(error => {
          console.error('Error submitting the form:', error);
        });


      // You can add further logic for form submission (e.g., sending data to a server)
    },
  },
};
</script>

<style scoped>
.student-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369e75;
}

.student-info {
  margin-top: 20px;
  padding: 10px;
  background-color: #e8f5e9;
  border: 1px solid #42b883;
  border-radius: 4px;
}
</style>
