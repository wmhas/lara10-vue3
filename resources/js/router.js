import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import StudentForm  from './components/StudentForm.vue';

// Define routes
const routes = [
  { path: '/', component: Home },       // Default route points to Home component
  { path: '/about', component: About },  
  { path: '/studentForm', component: StudentForm },// Route for stduent form  component
  { path: '/contact', component: Contact } // Route for Contact component
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
